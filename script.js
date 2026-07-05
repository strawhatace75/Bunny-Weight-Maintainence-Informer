// Get the elements
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");

const weightInput = document.getElementById("weight");
const ageSelect = document.getElementById("age");
const breedSelect = document.getElementById("breed");

const submitBtn = document.getElementById("submitBtn");

// Welcome Screen
welcomeScreen.addEventListener("click", function () {

    welcomeScreen.style.display = "none";
    mainContent.classList.remove("hidden");

});

// Enable Submit Button
function checkForm() {

    const weight = weightInput.value.trim();
    const age = ageSelect.value;
    const breed = breedSelect.value;

    if (weight !== "" && age !== "" && breed !== "") {

        submitBtn.disabled = false;

    } else {

        submitBtn.disabled = true;

    }

}

weightInput.addEventListener("input", checkForm);
ageSelect.addEventListener("change", checkForm);
breedSelect.addEventListener("change", checkForm);

// Submit Button
submitBtn.addEventListener("click", function () {

    const weight = parseFloat(weightInput.value);
    const age = ageSelect.value;
    const breed = breedSelect.value;

    let status = "";

// ------------------------------
// Healthy Weight Ranges (Approx.)
// ------------------------------

    if (breed === "small") {

        if (age === "baby") {

            if (weight < 0.5) status = "under";
            else if (weight <= 1.5) status = "healthy";
            else status = "over";

        }

        else if (age === "young") {

            if (weight < 1.2) status = "under";
            else if (weight <= 2.5) status = "healthy";
            else status = "over";

        }

        else {

            if (weight < 1.8) status = "under";
            else if (weight <= 3.5) status = "healthy";
            else status = "over";

        }

    }

    else if (breed === "medium") {

        if (age === "baby") {

            if (weight < 0.8) status = "under";
            else if (weight <= 2.0) status = "healthy";
            else status = "over";

        }

        else if (age === "young") {

            if (weight < 2.0) status = "under";
            else if (weight <= 5.0) status = "healthy";
            else status = "over";

        }

        else {

            if (weight < 4.0) status = "under";
            else if (weight <= 7.5) status = "healthy";
            else status = "over";

        }

    }

    else if (breed === "large") {

        if (age === "baby") {

            if (weight < 1.0) status = "under";
            else if (weight <= 3.0) status = "healthy";
            else status = "over";

        }

        else if (age === "young") {

            if (weight < 3.5) status = "under";
            else if (weight <= 8.0) status = "healthy";
            else status = "over";

        }

        else {

            if (weight < 7.0) status = "under";
            else if (weight <= 11.0) status = "healthy";
            else status = "over";

        }

    }

    else if (breed === "giant") {

        if (age === "baby") {

            if (weight < 2.0) status = "under";
            else if (weight <= 5.0) status = "healthy";
            else status = "over";

        }

        else if (age === "young") {

            if (weight < 6.0) status = "under";
            else if (weight <= 12.0) status = "healthy";
            else status = "over";

        }

        else {

            if (weight < 11.0) status = "under";
            else if (weight <= 20.0) status = "healthy";
            else status = "over";

        }

    }

// ------------------------------
// Go to article
// ------------------------------

    if (status === "healthy") {

        window.location.href = "articles/healthy.html";

    }

    else if (status === "under") {

        window.location.href = "articles/underweight.html";

    }

    else {

        window.location.href = "articles/overweight.html";

    }

});