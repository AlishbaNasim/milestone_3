// Select form and resume elements
var form_list = document.getElementById('resume-form'); // Changed to HTMLFormElement
var name_list = document.getElementById('name'); // Adjusted to HTMLHeadingElement
var contact = document.getElementById('contact'); // Adjusted to HTMLParagraphElement
var skills = document.getElementById('skills-list');
var experience = document.getElementById('experience-list');
var education = document.getElementById('education-list'); // Corrected ID
function getData(listElement, items) {
    listElement.innerHTML = items.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join('');
}
form_list.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    var getInputValue = function (id) { return document.getElementById(id).value; };
    // Collect input from user
    var inputName = getInputValue('name-input'); // Updated ID
    var inputEmail = getInputValue('email-input'); // Updated ID
    var inputPhone = getInputValue('phone-input'); // Updated ID
    var inputEducation = getInputValue('edu-input'); // Updated ID
    var inputSkills = getInputValue('skill-input').split(','); // Updated ID
    var inputExperience = getInputValue('experience-input').split(','); // Updated ID
    name_list.textContent = inputName;
    contact.textContent = "".concat(inputEmail, " | ").concat(inputPhone);
    getData(education, [inputEducation]);
    getData(experience, inputExperience); // Handles multiple experiences
    getData(skills, inputSkills);
});
