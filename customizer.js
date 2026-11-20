
// ==================================
// CASE CRUSH CUSTOMIZER
// ==================================


// 1. FIND THE HTML ELEMENTS

const caseColor = document.getElementById("caseColor");

const phonePreview = document.getElementById("phonePreview");

const customerName = document.getElementById("customerName");

const previewName = document.getElementById("previewName");

const previewDecorations = document.getElementById("previewDecorations");

const phoneModel = document.getElementById("phoneModel");

const description = document.getElementById("description");

const orderSummary = document.getElementById("orderSummary");

const createButton = document.getElementById("createButton");

const confirmationMessage = document.getElementById("confirmationMessage");

const inspirationImage = document.getElementById("inspirationImage");

const previewImage = document.getElementById("previewImage");


// 2. CHANGE THE CASE COLOUR

caseColor.addEventListener("input", function() {

    phonePreview.style.backgroundColor = caseColor.value;

});


// 3. DISPLAY THE CUSTOMER'S NAME

customerName.addEventListener("input", function() {

    if (customerName.value.trim() === "") {

        previewName.textContent = "YOUR NAME";

    } else {

        previewName.textContent = customerName.value;

    }

});


// 4. DISPLAY SELECTED DECORATIONS

function updateDecorations() {

    const selectedDecorations = document.querySelectorAll(
        'input[name="decoration"]:checked'
    );

    let symbols = "";

    selectedDecorations.forEach(function(item) {

        if (item.value === "Rhinestones") {
            symbols += " ✦ ";
        }

        if (item.value === "Pearls") {
            symbols += " ○ ";
        }

        if (item.value === "Bows") {
            symbols += " 🎀 ";
        }

        if (item.value === "Charms") {
            symbols += " ♡ ";
        }

        if (item.value === "Cream decorations") {
            symbols += " ❀ ";
        }

        if (item.value === "Stickers") {
            symbols += " ★ ";
        }

    });

    previewDecorations.textContent = symbols || "✦ ♡ ✧";

}


// Listen for decoration changes

document.querySelectorAll('input[name="decoration"]').forEach(function(item) {

    item.addEventListener("change", updateDecorations);

});


// 5. PREVIEW THE UPLOADED IMAGE

inspirationImage.addEventListener("change", function() {

    const file = inspirationImage.files[0];

    if (file) {

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            inspirationImage.value = "";
            return;
        }

        const imageURL = URL.createObjectURL(file);

        previewImage.src = imageURL;

        previewImage.style.display = "block";

    } else {

        previewImage.style.display = "none";

    }

});


// 6. GENERATE THE ORDER SUMMARY

createButton.addEventListener("click", function() {

    const selectedDecorations = document.querySelectorAll(
        'input[name="decoration"]:checked'
    );

    const decorationNames = [];

    selectedDecorations.forEach(function(item) {

        decorationNames.push(item.value);

    });


    const selectedFinish = document.querySelector(
        'input[name="finish"]:checked'
    ).value;


    const name = customerName.value.trim() || "None";

    const designDescription = description.value.trim() || "No description provided";

    const model = phoneModel.value;

    const colour = caseColor.value;


    orderSummary.innerHTML = `

        <p><strong>Phone model:</strong> ${model}</p>

        <p><strong>Case colour:</strong> ${colour}</p>

        <p><strong>Decorations:</strong>
        ${decorationNames.join(", ") || "None selected"}</p>

        <p><strong>Finish:</strong> ${selectedFinish}</p>

        <p><strong>Personalization:</strong> ${name}</p>

        <p><strong>Description:</strong> ${designDescription}</p>

    `;


    confirmationMessage.textContent =
        "Your design summary has been created! This is a website demonstration, not a submitted order.";

});
