const activity = document.getElementById("activity")
const name = document.getElementById("name-event")

function addBox() {
    activity.addEventListener("click", () => {
        console.log("activity clicked");

    })
}

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

function addActivity() {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve values from the input fields
    const inputSkillName = document.getElementById("inputSkillName").value;
    const inputTask1 = document.getElementById("inputTask1").value;
    const inputTask2 = document.getElementById("inputTask2").value;
    const inputTask3 = document.getElementById("inputTask3").value;

    // Create a new box element
    const newBox = document.createElement("div");
    newBox.classList.add("border", "flex", "w-full", "max-w-[337px]", "grow", "flex-col", "mx-auto", "pl-5", "pr-1", "pt-4", "pb-9", "rounded-lg", "border-solid");
    newBox.style.backgroundColor = "red"; // Replace with your desired color
    newBox.innerHTML = `
        <div class="self-stretch flex w-full items-start justify-between gap-5">
            <div class="text-white text-2xl font-bold my-auto">${inputSkillName}</div>
            <div><!-- Your image or drag handle --></div>
        </div>
        <div class="self-stretch flex items-start justify-between gap-1.5 mt-4">
            <ul class="text-white">
                <li>${inputTask1}</li>
                <li>${inputTask2}</li>
                <li>${inputTask3}</li>
            </ul>
        </div>
    `;

    // Append the new box to the container
    const container = document.querySelector('.gap-5.flex'); // Use the appropriate selector for where you want to insert the box
    container.appendChild(newBox);

    // Close the modal after adding the activity
    toggleModal();
}

// Bind the addActivity function to the Slap button
document.getElementById("addSkillForm").addEventListener("submit", addActivity);

function toggleModal() {
    const modal = document.getElementById('addSkillModal');
    // ... existing toggleModal code
}

// Modify the existing toggleModal function to handle form reset when modal is closed
function toggleModal() {
    const modal = document.getElementById('addSkillModal');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex';
        requestAnimationFrame(() => {
            modal.classList.remove('scale-95', 'opacity-0');
            modal.classList.add('scale-100', 'opacity-100');
        });
    } else {
        modal.classList.add('scale-95', 'opacity-0');
        modal.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
            modal.style.display = 'none';
            // Reset the form when the modal is closed
            document.getElementById("addSkillForm").reset();
        }, 300); // match this with the transition duration
    }
}

// Prevent the default form submission on page load
document.getElementById("addSkillForm").addEventListener("submit", function(event){
    event.preventDefault();
});


function updateSkillContent() {
    // Parse the URL to get the query parameters
    const params = new URLSearchParams(window.location.search);
    // Get the 'skill' parameter
    const skill = params.get('skill');
  
    // Update the content based on the 'skill' parameter
    if (skill) {
      // Find the elements that need updating
      const skillTitle = document.querySelector('.text-black');
      const skillProgressTitle = document.querySelector('.text-indigo-500');
  
      // Update the text content
      skillTitle.textContent = skill;
      skillProgressTitle.textContent = ` ${skill} Progress`;
    }
  }
  
  // Call the function on page load
  document.addEventListener('DOMContentLoaded', updateSkillContent);
