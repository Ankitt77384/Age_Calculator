document.addEventListener("DOMContentLoaded", () => {
    const milestonesList = document.getElementById("milestones");
    const milestones = [
        { age: 13, description: "You become a teenager!" },
        { age: 16, description: "Eligible for a driving learner's permit." },
        { age: 18, description: "Officially an adult and can vote." },
        { age: 21, description: "Eligible to drink alcohol in most countries." },
        { age: 25, description: "Rent a car without additional fees." },
        { age: 30, description: "Enter a new decade of opportunities." },
        { age: 40, description: "In the prime of your career." },
        { age: 50, description: "Celebrate half a century!" },
        { age: 60, description: "Eligible for senior citizen benefits." },
        { age: 65, description: "Reach the age of retirement in many countries." }
    ];

    milestones.forEach(milestone => {
        const li = document.createElement("li");
        li.textContent = `Age ${milestone.age}: ${milestone.description}`;
        milestonesList.appendChild(li);
    });

    document.getElementById("backToEligibility").addEventListener("click", () => {
        window.location.href = "eligibility.html";
    });
});
