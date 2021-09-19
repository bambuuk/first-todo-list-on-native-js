window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.info_btn');
    const input = document.querySelector('.info_input');
    const list = document.querySelector('.answer_info');
   

    let arrNotes = [];


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

        document.querySelectorAll('.edit_delete').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove();
                arrNotes.splice(i, 1);
                console.log(arrNotes);
                render();
            });
        });

        document.querySelectorAll('.edit_info').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.innerHTML = `
                <input required placeholder="Введите изменения" name="name" type="text" id="editInput"></input>
                <button id='editBtn' class='edit_info'>Редактировать</button>
                `;
                const editBtn = document.querySelector('#editBtn');
                let editInput = document.querySelector('#editInput');
                editBtn.addEventListener('click', (e) => {
                    if (editInput.value) {
                        arrNotes.splice(i, 1, editInput.value);
                        render();
                        console.log(arrNotes);   
                    }
                     
                });
            });
        });
    }

    function addInfo(e) {
        let inputValue = input.value;
        if (inputValue != '') {
            arrNotes.push(inputValue);
        render();
        input.value = '';
        }
    }

    btn.addEventListener('click', addInfo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addInfo();
        }
    });

});