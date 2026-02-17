// Add a Footer Element
const body = document.querySelector("body"); // Selects body
const footerElement = document.createElement("footer"); // Creates footer element
body.append(footerElement); // Append footer to body
// Insert Copyright Text in Footer
const today = new Date(); // Creates date object
const thisYear = today.getFullYear(); // Gets the current year
const footer = document.querySelector("footer"); // Selects footer element from DOM
const copyright = document.createElement("p"); // Creates new paragraph element
copyright.textContent = `Cynthia Charco \u00A9 ${thisYear}`; // Displays name and current year
footer.appendChild(copyright); // Appends the copyright element to footer
// Create List of Skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Responsive Design"]; // Array of skills
const skillsSection = document.getElementById("Skills"); // Selects the skills section by ID
const skillsList = skillsSection.querySelector("ul"); // Selects the <ul> in skills section
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li"); // Creates a new list item element
    skill.innerText = skills[i]; // Sets text to current skill
    skillsList.appendChild(skill); // Appends skill element to the skillsList element
}