const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('input');
const list = document.querySelector('.list');


function run() {
    const text = input.value;
    input.value = ''
    createItem(text);
    deleteBtn();
}

function createItem(text) {
    if (text) {
        // Create p with text
        const addedItem = document.createElement('p');
        const itemText = document.createTextNode(text);
        addedItem.appendChild(itemText);
        
        // Create delete btn
        const deleteBtn = document.createElement('button');
        const btnX = document.createTextNode('x');
        deleteBtn.appendChild(btnX);
        deleteBtn.classList.add('delete-btn')
        
        // Create container for item and delete btn
        const newItemContainer = document.createElement('div');
        newItemContainer.appendChild(addedItem);
        newItemContainer.appendChild(deleteBtn);
        newItemContainer.classList.add('item-container');
        
        // Add container to the list
        list.appendChild(newItemContainer);
        list.classList.add('active-list')
        
        // Add event listener to delete btn
        const allDeleteBtns = document.querySelectorAll('.delete-btn');
        allDeleteBtns.forEach((btn) => {
            // btn.addEventListener('click', () => {
            //     deleteContainer(btn);
            //     if (list.childElementCount == 0) {
            //         list.classList.remove('active-list')
            //     }
            // });
        });
    }
}


function deleteContainer (element) {
    const container = element.parentElement;
    container.remove();
}

addBtn.addEventListener('click', run);
window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter'){
        run();
    }
});

function deleteBtn() {
    const allDeleteBtns = document.querySelectorAll('.delete-btn');
    allDeleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            deleteContainer(btn);
            if (list.childElementCount == 0) {
                list.classList.remove('active-list')
            }
        });
    });
}