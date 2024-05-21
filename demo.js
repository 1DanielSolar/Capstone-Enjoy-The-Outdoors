const locationsArray = [
    ["New York", "A state in the northeastern U.S."],
    ["California", "A state in the western U.S."]
];

const activitiesArray = [
    ["Hiking", "An outdoor activity of walking in nature."],
    ["Swimming", "The sport or activity of propelling oneself through water."]
];


function init() {
    setupEventListeners();
}

function populateDropdown(filterType) {
    const dropdown = document.getElementById("filterDropdown");
    dropdown.innerHTML = ""; // Clear previous options

    const data = filterType === "state" ? locationsArray : activitiesArray;

    data.forEach((item) => {
        const option = document.createElement("option");
        option.value = item[0]; // Use the first element in the sub-array as the value
        option.textContent = item[0]; // Use the first element in the sub-array as the text
        dropdown.appendChild(option);
    });
}

function setupEventListeners() {
    document.getElementById("filterState").addEventListener("change", () => populateDropdown("state"));
    document.getElementById("filterActivity").addEventListener("change", () => populateDropdown("activity"));

    document.getElementById("showDetailsBtn").addEventListener("click", showSelectedDetails);
}

function showSelectedDetails() {
    const dropdown = document.getElementById("filterDropdown");
    const selectedValue = dropdown.value;
    const detailsArea = document.getElementById("resultsContainer");

    const details = findDetails(selectedValue);

    if (details) {
        detailsArea.innerHTML = `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${details[0]}</h5>
                <p class="card-text">Details: ${details[1]}</p>
            </div>
        </div>`;
    } else {
        detailsArea.innerHTML = "No details found.";
    }
}

function findDetails(name) {
    const allData = [...locationsArray, ...activitiesArray];
    return allData.find(item => item[0] === name);
}

init();