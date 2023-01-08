//Grocery Item List
let groceryItemList = ['Milk', 'Cheese', 'Butter', 'Carrots', 'Broccoli'];

//Commonly used variables
let groceryInput = document.getElementById('input');
let addButton = document.getElementById('addBtn');




//Make grocery list
const addGroceryItem = () => {
    let listContents = groceryItemList.map(groceryItem => `<li>${groceryItem}<span class="close" onclick="deleteItem()">\u00D7</span></li>`).join('\n');
    document.getElementById('itemList').innerHTML = listContents;
    console.log(groceryItemList)
    
}


addGroceryItem()

//Add item to grocery list

const updateList = () => {
    if(groceryInput.value.length == 0){
        alert('Please add an item')
    }else{
    groceryItemList.push(groceryInput.value);
    groceryInput.value = '';
    addGroceryItem();
    }
}

addButton.addEventListener('click', updateList)
//Enter key event listener - not using keyCode because deprecated
groceryInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter'){
        updateList()
    }
})


//Delete item from grocery list

/* const deleteItem = () => {
    let itemToDeleteSelect = document.querySelectorAll('.close');
    
    itemToDeleteSelect.forEach(e => {
        let selectedItem = e.previousSibling.textContent;
        e.addEventListener('click', ()=> {
            console.log('clicked')
            e.parentElement.style.display = 'none';
            console.log(selectedItem)
            let selectedIndex = groceryItemList.indexOf(selectedItem);
            groceryItemList.splice(selectedIndex,1);
            console.log(groceryItemList)
        })
    })
} */
const deleteItem = () => {
    let deletedItem = document.getElementById('itemList');

    deletedItem.addEventListener('click', (event)=>{
        if (event.target.tagName.toLowerCase() === 'span'){
            event.target.parentElement.style.display = 'none';
            let selectedItem = event.target.previousSibling.textContent
            console.log(selectedItem)
            let selectedItemIndex = groceryItemList.indexOf(selectedItem);
            groceryItemList.splice(selectedItemIndex, 1)
            console.log(groceryItemList)
        }
})
}

//Check item off grocery list

document.getElementById('itemList').addEventListener('click', (event)=> {
    if (event.target.tagName.toLowerCase() === 'li'){
        if(event.target.className === 'checked'){
            event.target.className = 'not-checked'
        }else {
            event.target.className = 'checked'
        }
    }
});



