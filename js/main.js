//Grocery Item - Initial List
let groceryItemList = ['Milk', 'Cheese', 'Butter', 'Carrots', 'Broccoli'];

//Element Variables
let groceryInput = document.getElementById('input');
let addButton = document.getElementById('addBtn');
let chooseDeleteItem = document.getElementById('itemList');
let itemToCheckOff = document.getElementById('itemList');


//Make grocery list
const addGroceryItem = () => {
    let listContents = groceryItemList.map(groceryItem => `<li>${groceryItem}<span class="close">\u00D7</span></li>`).join('\n');
    document.getElementById('itemList').innerHTML = listContents;
    console.log(groceryItemList)
    
}

//Call addGroceryItem function so it displays in DOM
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

//Event listener for the delete button
chooseDeleteItem.addEventListener('click', handleDelete);

//Delete item function
function handleDelete(event) {

    if (event.target.tagName.toLowerCase()=== 'span'){
        event.target.parentElement.style.display = 'none';
        let selectedItem = event.target.previousSibling.textContent;
        let selectedIndex = groceryItemList.indexOf(selectedItem)
        groceryItemList.splice(selectedIndex, 1);
        console.log(groceryItemList);
    }
}

//Check item off grocery list

//Check event listener
itemToCheckOff.addEventListener('click', handleCheckOff);

//Check item function
function handleCheckOff(event){
    if (event.target.tagName.toLowerCase() === 'li'){
        if(event.target.className === 'checked'){
            event.target.className = 'not-checked'
        }else {
            event.target.className = 'checked'
        }
    }
}




