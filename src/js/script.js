window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.info_btn');
    const input = document.querySelector('.info_input');
    const list = document.querySelector('.answer_info');
   

    let arrNotes = [];


    /** Функция отображения заметок на странице и работой с ними */
    function render() {

        list.innerHTML = '';
        arrNotes.forEach(item => {
            list.innerHTML += `
            <li>${item}
            <div class='edit'>
            <button class='edit_info'>Редактировать</button>
            <button class='edit_delete'>Удалить</button>
            </div>
            </li>
            `;
        });

        /** Блок отвечает за удаление заметок */
        document.querySelectorAll('.edit_delete').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove();
                arrNotes.splice(i, 1);
                render();
            });
        });

        /** Блок, который отвечает за редактирование заметок на странице */
        document.querySelectorAll('.edit_info').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.innerHTML = `
                <input required placeholder="Введите изменения" name="name" type="text" id="editInput"></input>
                <button id='editBtn' class='edit_info'>Редактировать</button>
                <button id='cancelBtn' class='edit_info'>Отменить</button>
                `;
                
                const editBtn = document.querySelector('#editBtn');
                const editInput = document.querySelector('#editInput');
                const cancelBtn = document.querySelector('#cancelBtn');

                /** редактирует заметки */
                editBtn.addEventListener('click', (e) => {
                    if (editInput.value) {
                        arrNotes.splice(i, 1, editInput.value);
                        render();
                    }
                });

                /** Отменяет редактирование заметок */
                cancelBtn.addEventListener('click', () => {
                    render();
                });


            });
        });
    }

    /** Функция добаления новых заметок */
    function addInfo() {
        let inputValue = input.value;
        if (inputValue != '') {
            arrNotes.push(inputValue);
        render();
        input.value = '';
        }
    }

    /** События создания новых заметок черек клик мышки и нажатие на enter в input */
    btn.addEventListener('click', addInfo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addInfo();
        }
    });

});