// Select form and resume elements
const form_list = document.getElementById("resume-form") as HTMLFormElement;
const name_list = document.getElementById("name") as HTMLHeadingElement;
const contact = document.getElementById("contact") as HTMLParagraphElement;
const skills = document.getElementById("skills-list") as HTMLUListElement;
const experience = document.getElementById(
  "experience-list"
) as HTMLUListElement;
const education = document.getElementById("education-list") as HTMLUListElement;
//make  function to get data
function getData(listElement: HTMLUListElement, items: string[]) {
  listElement.innerHTML = items
    .map((item) => `<li>${item.trim()}</li>`)
    .join("");
}

//add event listener in form list
form_list.addEventListener("click", function (event) {
  event.preventDefault(); // use for pervent the default behaivour
  //make variable to get data
  const getInputValue = (id: string) =>
    (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement)
      .value;
  //add validation in input
  function isValidation(
    value: string,
    regex: RegExp,
    errorMessage: string
  ): boolean {
    if (!regex.test(value)) {
      alert(errorMessage); //if regex is not match it show alert error
      return false;
    }
    return true;
  }

  // Collect input from user
  const inputName = getInputValue("name-input"); // get name
  const inputEmail = getInputValue("email-input"); // get email
  const inputPhone = getInputValue("phone-input"); // get phone number
  const inputEducation = getInputValue("edu-input").split(","); // get education
  const inputSkills = getInputValue("skill-input").split(","); // get skills
  const inputExperience = getInputValue("experience-input").split(","); // get experience
  //Regex pattern
  const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email pattern
  const phoneRegex = /^\d{11}$/; // Only 11 digits

  //use validate input..
  if (
    !isValidation(
      inputName,
      nameRegex,
      "Invalid name: Enter only letter and spaces."
    )
  )
    return;
  if (
    !isValidation(inputEmail, emailRegex, "Invalid email:Enter a valid email")
  )
    return;
  if (
    !isValidation(
      inputPhone,
      phoneRegex,
      "Invalid phone number; Enter only 11 digit  number"
    )
  )
    return;

  //textContent pura input text mai show kre ga
  name_list.textContent = inputName;
  //ye bhi text mai show ho ga
  contact.textContent = `${inputEmail} | ${inputPhone}`;
  //jo list element hai us mai function apply kre ho.
  getData(education, inputEducation); // Handles multiple educations
  getData(experience, inputExperience); // Handles multiple experiences
  getData(skills, inputSkills); // Handles multiple skills
});
