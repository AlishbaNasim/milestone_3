// Select form and resume elements
var form_list = document.getElementById('resume-form');
var name_list = document.getElementById('name');
var contact = document.getElementById('contact');
var skills = document.getElementById('skills-list');
var experience = document.getElementById('experience-list');
var education = document.getElementById('education-list');
//make  function to get data
function getData(listElement, items) {
    listElement.innerHTML = items.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join('');
}
//add event listener in form list
form_list.addEventListener('click', function (event) {
    event.preventDefault(); // use for pervent the default behaivour
    var getInputValue = function (id) { return document.getElementById(id).value; };
    // Collect input from user
    var inputName = getInputValue('name-input'); // get name
    var inputEmail = getInputValue('email-input'); // get email
    var inputPhone = getInputValue('phone-input'); // get phone number
    var inputEducation = getInputValue('edu-input').split(','); // get education
    var inputSkills = getInputValue('skill-input').split(','); // get skills
    var inputExperience = getInputValue('experience-input').split(','); // get experience
    //textContent pura input text mai show kre ga
    name_list.textContent = inputName;
    //ye bhi text mai show ho ga
    contact.textContent = "".concat(inputEmail, " | ").concat(inputPhone);
    //jo list element hai us mai function apply kre ho.
    getData(education, inputEducation); // Handles multiple educations
    getData(experience, inputExperience); // Handles multiple experiences
    getData(skills, inputSkills); // Handles multiple skills
});
