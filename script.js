document.addEventListener("DOMContentLoaded", () => {
    let shoppingList = [];
  
    // Function to add an item to the shopping list
    function addItem(item) {
      shoppingList.push(item);
  
      const newItem = document.createElement("li");
      newItem.textContent = item;
  
      // Create a button for each list item
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function() {
        removeItem(newItem);
      });
  
      newItem.appendChild(removeButton);
  
      const itemList = document.getElementById("itemList");
      itemList.appendChild(newItem);
    }
  
    // Function to remove an item from the shopping list
    function removeItem(item) {
      const index = shoppingList.indexOf(item.textContent);
      shoppingList.splice(index, 1);
      item.remove();
    }
  
    // Function to clear the shopping list
    function clearList() {
      shoppingList = [];
      const itemList = document.getElementById("itemList");
      itemList.innerHTML = "";
    }
  
    // Add event listener to the "Add" button
    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", function () {
      const itemInput = document.getElementById("itemInput");
      const itemValue = itemInput.value.trim();
  
      // Check if the item input is empty
      if (itemValue) {
        addItem(itemValue);
        itemInput.value = "";
      }
    });
  
    // Add event listener to the "Clear List" button
    const clearListButton = document.getElementById("clear-list-button");
    clearListButton.addEventListener("click", clearList);
  });
  
// document.addEventListener("DOMContentLoaded", () => {
//   let shoppingList = [];

//   // Function to add an item to the shopping list
//   function addItem(item) {
//     shoppingList.push(item);

//     const newItem = document.createElement("li");
//     newItem.textContent = item;

//     // Create a button for each list item
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.addEventListener("click", function() {
//       removeItem(newItem);
//     });

//     newItem.appendChild(removeButton);

//     const itemList = document.getElementById("itemList");
//     itemList.appendChild(newItem);
//   }

//   // Function to remove an item from the shopping list
//   function removeItem(item) {
//     const index = shoppingList.indexOf(item.textContent);
//     shoppingList.splice(index, 1);
//     item.remove();
//   }

//   // Function to clear the shopping list
//   function clearList() {
//     shoppingList = [];
//     const itemList = document.getElementById("itemList");
//     itemList.innerHTML = "";
//   }

//   // Add event listener to the "Add" button
//   const addButton = document.getElementById("add-button");
//   addButton.addEventListener("click", function () {
//     const itemInput = document.getElementById("itemInput");
//     const itemValue = itemInput.value.trim();

//     // Check if the item input is empty
//     if (itemValue) {
//       addItem(itemValue);
//       itemInput.value = "";
//     }
//   });

//   // Add event listener to the "Clear List" button
//   const clearListButton = document.getElementById("clear-list-button");
//   clearListButton.addEventListener("click", clearList);
// });