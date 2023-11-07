

function toggleModal() {
    const modal = document.getElementById('addSkillModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex';
        // Wait for the next frame to begin the animation
        requestAnimationFrame(() => {
            modal.classList.remove('scale-100', 'opacity-0');
            modal.classList.add('scale-100', 'opacity-100');
        });
    } else {
        modal.classList.add('scale-95', 'opacity-0');
        modal.classList.remove('scale-100', 'opacity-100');
        // Wait for the animation to finish before hiding the modal
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // match this with the duration of your transition
    }
}


function outsideClickClose(event) {
    const modalContent = document.querySelector('#addSkillModal > div');
    if(!modalContent.contains(event.target)) {
        toggleModal();
    }
}

function addSkill() {
    // Get the values from the input fields
    const skillName = document.getElementById('inputSkillName').value;
    const skillDescription = document.getElementById('inputSkillDescription').value;

    // Check if the input fields are not empty
    if (skillName && skillDescription) {
        // Create a new skill card
        const newSkill = document.createElement('div');
        newSkill.className = 'flex-none bg-white p-4 rounded-md shadow mx-4 my- h-50 w-50 ';
        newSkill.innerHTML = `
            <h2 class="font-semibold text-xl mb-2">${skillName}</h2>
            <div
            class="text-neutral-400 text-2xl self-stretch whitespace-nowrap mt-7 max-md:max-w-full"
          >${skillDescription}</div>
            <button class="track-button mt-5 px-4 py-3 bg-[#222222] text-white text-base font-bold self-stretch whitespace-nowrap rounded-md transform transition duration-300 hover:scale-110" onclick = "window.location.href ='./track.html';">Track Skill</button>
        `;

        // Append the new skill card to the flex container
        const skillContainer = document.querySelector('.flex.flex-wrap');
        skillContainer.appendChild(newSkill);

        // Reset the input fields
        document.getElementById('inputSkillName').value = '';
        document.getElementById('inputSkillDescription').value = '';

        // Close the modal
        toggleModal();
    } else {
        alert("Please fill out both fields before saving.");
    }
}

function removeSkill() {
    const skillsContainer = document.querySelector(".skills-container");

    if (skillsContainer.children.length > 0) {
        const lastSkill = skillsContainer.lastElementChild;
        lastSkill.classList.add('fade-out');

        // Remove the element after the fade-out animation completes
        lastSkill.addEventListener('animationend', function() {
            skillsContainer.removeChild(lastSkill);
        });
    }
}
