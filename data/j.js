let totalWantToCook = [];
let totalWantToCookObject = [];

function wantToCook(itemId) {
  if (!totalWantToCook.includes(itemId)) {
    totalWantToCook.push(itemId);
    displayWantToCount();
    loadWantToCook();
    displayWantCook();
  }
}

function displayWantToCount() {
  let wantCountElement = document.getElementById("want-count");
  wantCountElement.innerText = totalWantToCook.length;
}

function loadWantToCook() {
  console.log(totalWantToCook);
  totalWantToCookObject = totalWantToCook.map(itemId => {
    return items.find(item => item.id === itemId);
  }).filter(item => item !== undefined);
  
  console.log(totalWantToCookObject);
}

function displayWantCook() {
  let wantList = document.querySelector("#want-list");
  wantList.innerHTML = "";
  
  totalWantToCookObject.forEach(item => {
    generateItemHTML(item);
  });
}

function generateItemHTML(item) {
  let wantListC = document.getElementById("want-list");
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.itemHeading}</td>
    <td>${item.timing}</td>
    <td>${item.calories}</td>
    <td><button onclick="preparing(${item.id})">Start Cooking</button></td>
  `;
  wantListC.appendChild(row);
}

// Currently Cooking section
let totalCurrentlyCooking = [];
let currentlyCookingObject = [];

function preparing(itemId) {
  const index = totalWantToCook.indexOf(itemId);
  if (index !== -1) {
    totalWantToCook.splice(index, 1);
  }
  if (!totalCurrentlyCooking.includes(itemId)) {
    totalCurrentlyCooking.push(itemId);
  }
  displayWantToCount();
  displayCurrentlyCooking();
  loadWantToCook();               // Refresh Want to Cook list
  loadCurrentlyCooking();         // Refresh Currently Cooking list
  displayWantCook();             // Update the Want to Cook UI
  displayCurrentlyCook();         // Update the Currently Cooking UI
}

function displayCurrentlyCooking() {
  let cookingCount = document.getElementById("cooking-count");
  cookingCount.innerHTML = totalCurrentlyCooking.length;
}

function loadCurrentlyCooking() {
  console.log(totalCurrentlyCooking);
  currentlyCookingObject = totalCurrentlyCooking.map(itemId => {
    return items.find(item => item.id === itemId);
  }).filter(item => item !== undefined);
  
  console.log(currentlyCookingObject);
}

function displayCurrentlyCook() {
  let cookingList = document.getElementById("cooking-list");
  cookingList.innerHTML = "";
  
  currentlyCookingObject.forEach(item => {
    generateItemCookHTML(item);
  });
}

function generateItemCookHTML(item) {
  let cookingListC = document.getElementById("cooking-list");
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.itemHeading}</td>
    <td>${item.timing}</td>
    <td>${item.calories}</td>
    <td><button onclick="finishCooking(${item.id})">Finish Cooking</button></td>
  `;
  cookingListC.appendChild(row);
}

// Optional function to finish cooking (not in your original code)
function finishCooking(itemId) {
  const index = totalCurrentlyCooking.indexOf(itemId);
  if (index !== -1) {
    totalCurrentlyCooking.splice(index, 1);
  }
  displayCurrentlyCooking();
  loadCurrentlyCooking();
  displayCurrentlyCook();
}




// function totalCooking(){

//   let totalTimeElement = document.getElementById('total-time');
//   let totalCaloriesElement = document.getElementById('total-calories');   // Set it to 0 or leave unchanged

//   totalTime= 0;
//   totalCalories= 0;

//   totalCurrentlyCooking.forEach(itemId => {

//     for (let i = 0; i < items.length; i++) {
//       if (itemId == items[i].id) {
//         return items[i];
//       }
//     }
//     // let item = items.find(item => item.id === itemId);

//     if (item) {  // If item is found, add its timing and calories
//       totalTime += item.timing;
//       totalCalories += item.calories;
//     }
//   });
//   totalTimeElement.textContent = totalTime;
//   totalCaloriesElement.textContent = totalCalories;
//    console.log(`Total Time: ${totalTime}, Total Calories: ${totalCalories}`);

// }

// function generateCurrentlyCookItemHTML(item){
//   let cookingListC = document.getElementById("cooking-list");
//   let row = document.createElement("tr");
//   row.innerHTML = `

//       <td>${item.itemHeading}</td>
//       <td>$</td>
//       <td>$</td>

//   `;
//   cookingListC.appendChild(row);

// }

//   cookingList.innerHTML = '';  // Clear list
//   currentlyCooking.forEach(item => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//           <td>${item.itemHeading}</td>
//           <td>${item.timing}</td>
//           <td>${item.calories}</td>
//       `;
//       cookingList.appendChild(row);
//   });
//   document.getElementById('cooking-count').textContent = currentlyCooking.length;
// }

// function displayWantCook() {
//   const wantList = document.getElementById('want-list');
//   wantList.innerHTML = '';  // Clear list
//   wantToCook.forEach((item, index) => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//           <td>jead</td>
//           <td>time</td>
//           <td>$</td>
//           <td><button onclick="startCooking(${index})">Start Cooking</button></td>
//       `;
//       wantList.appendChild(row);
//   });
//   document.getElementById('want-count').textContent = wantToCook.length;
// }
// let currentlyCooking = [];

// function startCooking(index) {
//   currentlyCooking.push(totalWantToCook[index]);
// totalWantToCook.splice(index, 1);  // Remove from Want to Cook list
//   loadWantToCook();
//   loadCurrentlyCooking();
//   updateTotals();
// }

// function loadCurrentlyCooking() {
//   const cookingList = document.getElementById('cooking-list');
//   cookingList.innerHTML = '';  // Clear list
//   currentlyCooking.forEach(item => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//           <td>${item.itemHeading}</td>
//           <td>${item.timing}</td>
//           <td>${item.calories}</td>
//       `;
//       cookingList.appendChild(row);
//   });
//   document.getElementById('cooking-count').textContent = currentlyCooking.length;
// }

// function updateTotals() {
//   let totalTime = 0;
//   let totalCalories = 0;
//   currentlyCooking.forEach(item => {
//       totalTime += item.timing;
//       totalCalories += item.calories;
//   });
//   document.getElementById('total-time').textContent = totalTime;
//   document.getElementById('total-calories').textContent = totalCalories;
// }

// function loadWantToCook(){
//  console.log(totalWantToCook);
//  totalWantToCookObject = totalWantToCook.map(itemId =>{
//  for (let i = 0; i < items.length; i++) {
//   if (itemId == items[i].id) {
//     return items[i];
//   }
// }
// // return items.find(item => item.id === itemId);

// })
// console.log(totalWantToCookObject);
// };

// function loadCook(){
//   let wantCookList = document.getElementById("want-list")
//   let row = document.createElement('tr');
//   row.innerHTML = `
//       <td>${itemid}</td>
//       <td>2</td>
//       <td> Minutes</td>
//       <td> Calories</td>
//   `;
//   wantCookList.appendChild(row)
// }

// console.log(loadCook())

// function displayWantCook(){
//   let wantCookList = document.getElementById("want-list")
// let innerHTML = '';

//   let row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${displayWantToCount}</td>
//     <td>${item.itemHeading}</td>
//     <td>${item.timing} Minutes</td>
//     <td>${item.calories} Calories</td>
//   `;
//   wantCookList.appendChild(row);

//   // totalWantToCookObject.forEach(item =>{

//   // });

//   wantCookList.innerHTML =innerHTML
// }

// function generateItemHTML(item){
//   let wantCookList = document.getElementById("want-list")
//   let row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${displayWantToCount()}</td>
//     <td>${item.itemHeading}</td>
//     <td>${item.timing} Minutes</td>
//     <td>${item.calories} Calories</td>
//   `;
//   wantCookList.appendChild(row);

// //   return `
// //   <tr>
// //     <td>${totalWantToCook}</td>
// //     <td>${item.itemHeading}</td>
// //     <td>${item.timing} Minutes</td>
// //     <td>${item.calories} Calories</td>
// //   </tr>
// // `;
// }

// let wantToCookList = [];

// function displayWantToCookList(){
// const wantCookList = document.getElementById("want-list");
// wantCookList.innerHTML = '';
// wantCookList.forEach(item => {
//   const row = document.createElement('tr');
//   row.innerHTML = `
//       <td>${item.name}</td>
//       <td>${item.time}</td>
//       <td>${item.calories}</td>
//   `;
//   cookingList.appendChild(row);
// });
// // wantCountElement.textContent = wantToCook.length;

// }

// function displayWantToCookList() {
//   const wantCookList = document.getElementById("want-list");
//   wantCookList.innerHTML = '';  // Clear the previous list

//   wantToCookList.forEach(item => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${item.name}</td>
//       <td>${item.time}</td>
//       <td>${item.calories}</td>
//     `;
//     wantCookList.appendChild(row);  // Append the row to the table
//   });

// }
