// Select form and resume elements
const form_list = document.getElementById('resume-form') as HTMLFormElement; // Changed to HTMLFormElement
const name_list = document.getElementById('name') as HTMLHeadingElement; // Adjusted to HTMLHeadingElement
const contact = document.getElementById('contact') as HTMLParagraphElement; // Adjusted to HTMLParagraphElement
const skills = document.getElementById('skills-list') as HTMLUListElement;
const experience = document.getElementById('experience-list') as HTMLUListElement;
const education = document.getElementById('education-list') as HTMLUListElement; // Corrected ID

function getData(listElement: HTMLUListElement, items: string[]) {
    listElement.innerHTML = items.map(item => `<li>${item.trim()}</li>`).join('');
}

form_list.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const getInputValue = (id: string) => (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement).value;

    // Collect input from user
    const inputName = getInputValue('name-input'); // Updated ID
    const inputEmail = getInputValue('email-input'); // Updated ID
    const inputPhone = getInputValue('phone-input'); // Updated ID
    const inputEducation = getInputValue('edu-input'); // Updated ID
    const inputSkills = getInputValue('skill-input').split(','); // Updated ID
    const inputExperience = getInputValue('experience-input').split(','); // Updated ID

    name_list.textContent = inputName;
    contact.textContent = `${inputEmail} | ${inputPhone}`;
    
    getData(education, [inputEducation]);
    getData(experience, inputExperience); // Handles multiple experiences
    getData(skills, inputSkills);
});
