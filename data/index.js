displayItemHomePage();

function displayItemHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item-container">
                        <img class="item-image" src="${item.image}" alt="">
                        <div class="item-details">
                            <h3>${item.itemHeading}
                            </h3>
                            <p>${item.itemDescription}</p>
                        </div>
                        <div class="recipes-details">
                            <h4>Ingredinets:${item.ingredinets}</h4>
                            <li class="li-1">${item.firstIng}</li>
                            <li class="li-2">${item.secondIng}</li>
                            <li class="li-3">${item.thirdIng}</li>
                        </div>
                        <div class="calories">
                            <span class="time"> <i class="fa-regular fa-clock"></i>${item.timing} minutes</span>
                            <span class="cal-calories"> <i class="fa-solid fa-fire-flame-curved"></i>${item.calories} calories</span>
                        </div>
                        <button id="add-want-form" class="want-to-cook" onclick="wantToCook(${item.id})">
                            Want to Cook
                        </button>
                    </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}

// let wantCount = document.getElementById("want-count");
// let wantList = document.getElementById("want-list");
// let cookingCount = document.getElementById("cooking-count");
// let cookingList = document.getElementById("cooking-list");
// let totalTimeElement = document.getElementById("total-time");
// let totalCaloriesElement = document.getElementById("total-calories");

// let totalTime = 0;
// let totalCalories = 0;

let totalWantToCook = [];
let totalWantToCookObject;

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

  totalWantToCookObject = totalWantToCook.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(totalWantToCookObject);
}

function displayWantCook() {
  let wantList = document.querySelector("#want-list");
  wantList.innerHTML = "";

  totalWantToCookObject.forEach((item) => {
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
  <td><button onclick="preparing(${item.id})">preparing</button></td>
  `;
  wantListC.appendChild(row);
}

// currentlyCooking start
let totalCurrentlyCooking = [];
let currentlyCookingObject = [];

function preparing(itemId) {
  let index = totalWantToCook.indexOf(itemId);
  if (index !== -1) {
    totalWantToCook.splice(index, 1);
  }

  // Add item to the "Currently Cooking" list
  if (!totalCurrentlyCooking.includes(itemId)) {
    totalCurrentlyCooking.push(itemId);
  }
  displayWantToCount();
  displayCurrentlyCooking();
  loadWantToCook(); // Refresh Want to Cook list
  loadCurrentlyCooking(); // Refresh Currently Cooking list
  displayWantCook(); // Update the Want to Cook UI
  displayCurrentlyCook(); // Update the Currently Cooking UI
  // updateTotals();
}

function displayCurrentlyCooking() {
  let cookingCount = document.getElementById("cooking-count");
  cookingCount.innerHTML = totalCurrentlyCooking.length;
}
function loadCurrentlyCooking() {
  console.log(totalCurrentlyCooking);
  currentlyCookingObject = totalCurrentlyCooking.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(currentlyCookingObject);
}

function displayCurrentlyCook() {
  let cookingList = document.getElementById("cooking-list");
  cookingList.innerHTML = "";

  currentlyCookingObject.forEach((item) => {
    generateItemCookHTML(item);
  });
  console.log(totalCurrentlyCooking);
}

function generateItemCookHTML(item) {
  let cookingListC = document.getElementById("cooking-list");
  let row = document.createElement("tr");
  row.innerHTML = `
      
      <td>${item.itemHeading}</td>
      <td>${item.timing}</td>
      <td>${item.calories}</td>
      <td><button onclick="startCooking(${item.id})">Start Cooking</button></td>
  `;
  cookingListC.appendChild(row);
}

// calculate totalTiming and totalCooking



function startCooking(itemId) {
  let index = totalCurrentlyCooking.indexOf(itemId);
  if (index !== -1) {
    totalCurrentlyCooking.splice(index, 1);
  }
  // totalCooking();
  displayCurrentlyCooking();
  // displayCount();
  loadCurrentlyCooking();
  loadTotalCount()
  displayCurrentlyCook();
  totalCooking()
}


function   loadTotalCount(){
  totalCountObject= totalCurrentlyCooking.map((itemId)=>{
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  })
  console.log(totalCountObject)
}


function totalCooking() {
  let TotalInfoElement = document.querySelector(".total-info");

 let totalTiming = 0;
  let totalCalories = 0;
totalCountObject.forEach((totalCurrentlyCooking)=>{
  totalTiming +=totalCurrentlyCooking.timing
  totalCalories +=totalCurrentlyCooking.calories
})

TotalInfoElement.innerHTML=`
<p>Total Time = <span id="total-time">${totalTiming} minutes</span></p>
 <p>Total Calories = <span id="total-calories">${totalCalories} calories</span></p>`
 

  // currentlyCookingObject.forEach((totalCurrentlyCooking) => {
  //   totalTiming += totalCurrentlyCooking.timing;
  //   totalCalories += totalCurrentlyCooking.calories;
  // });

  // let totalTimeElement = document.getElementById("total-time");
  // let totalCaloriesElement = document.getElementById("total-calories");

  // totalTimeElement.textContent = totalTiming;
  // totalCaloriesElement.textContent= totalCalories;
}










