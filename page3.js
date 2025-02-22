// Function to animate timeline items
function animateTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1; // Fade in
            item.style.transform = 'translateY(0)'; // Move to original position
            item.animate([
                { transform: 'translateY(20px)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ], {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards'
            });
        }, index * 300); // Stagger the animations
    });
}

// Function to create a dancing character
function createDancingCharacter() {
    const character = document.createElement('div');
    character.innerHTML = '💃'; // Dancing emoji
    character.style.position = 'absolute';
    character.style.left = '10%';
    character.style.bottom = '10%';
    character.style.fontSize = '100px';
    document.body.appendChild(character);

    // Animate the character
    character.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-20px)' },
        { transform: 'translateY(0)' }
    ], {
        duration: 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

// Call the functions on page load
window.onload = () => {
    animateTimelineItems();
    createDancingCharacter();
};
