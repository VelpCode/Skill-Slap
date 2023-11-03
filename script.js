

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