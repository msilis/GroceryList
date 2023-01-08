//Grocery List
const groceryItems = ['Milk', 'Eggs', 'Oranges', 'Butter'];
let groceryList = document.getElementById('itemList');

//Loop to display grocery list in HTML
const groceryListDisplay = () => {
for (let i = 0; i<groceryItems.length; i++){
    let groceryListItem = document.createElement('li');
    groceryList.append(groceryListItem);
    groceryListItem.className = 'list-item';
    groceryListItem.innerHTML = groceryItems[i];
    let grocerySpan = groceryListItem.appendChild(document.createElement('sup'))
    grocerySpan.innerHTML = '\u00D7';
    grocerySpan.className = 'close';
    grocerySpan.innerHTML = 'x';
    groceryListItem.appendChild(grocerySpan);
    
    }
}

//function to add to grocery list
let updateList = () => {
    let groceryItem = document.getElementById('input').value;
    groceryItems.push(groceryItem);
    //console.log(groceryItems);
    groceryListDisplay(groceryItem)
    console.log(groceryItems)

}

document.getElementById('addBtn').addEventListener('click', updateList)
addEventListener('load', groceryListDisplay())


