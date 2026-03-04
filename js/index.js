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
// Handle Message Form Submit
const messageForm = document.querySelector("form[name='leave-message']");
messageForm.addEventListener("submit", function (event) {
  // Prevent the default refreshing behavior of the "submit" event
  event.preventDefault();

  // Get form values - 3
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  // Select messages section and list
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  // Create new list item
  const newMessage = document.createElement("li");

  // Create name link - innerText instead of innerHTML
  const nameLink = document.createElement("a");
  nameLink.href = "mailito:" + usersEmail;
  nameLink.textContent = usersName;

  // Create message span
  const messageSpan = document.createElement("span");
  messageSpan.textContent = " " + usersMessage;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";

  // Adds an event listener to the removeButton element that handles "click" event
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Appends everything (e.g. removeButton to newMessage)
  newMessage.appendChild(nameLink);
  newMessage.appendChild(messageSpan);
  newMessage.appendChild(removeButton);

  // Append list item to message list
  messageList.appendChild(newMessage);

  // Resets the form
  messageForm.reset();
});
// Fetch Repositories
fetch("https://api.github.com/users/ccalix09/repos")
  .then(response => response.text()) // Manually parse
  .then(text => {
    const repositories = JSON.parse(text); 
    console.log(repositories);

    // Display repositories in list
    const projectSection = document.getElementById("Projects"); // Gets Projects section from the HTML
    const projectList = projectSection.querySelector("ul"); // Selects the <ul> in Projects section

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li"); // Creates a new list item element for each repository
      project.innerText = repositories[i]["name"]; // Sets the text of the list item to the name of the repository
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error); // Logs any errors that occur during the fetch operation
  });
