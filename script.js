let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");
const today = new Date();

currDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click", () => {
    const birthDate = new Date(dateOfBirth.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    displayAge.style.visibility = "visible";
    Age.innerText = `You are ${age} years old.`;

    const checkEligibilityBtn = document.getElementById("checkEligibility");
    checkEligibilityBtn.style.visibility = age >= 18 ? "visible" : "hidden";

    checkEligibilityBtn.addEventListener("click", () => {
        window.location.href = "eligibility.html";
    });
});
