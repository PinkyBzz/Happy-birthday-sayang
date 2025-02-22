// Function to create a sparkle effect around the video container
function createSparkleEffect() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨'; // Sparkle emoji
    sparkle.style.position = 'absolute';
    sparkle.style.left = '50%';
    sparkle.style.top = '50%';
    sparkle.style.fontSize = '50px';
    sparkle.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(sparkle);

    // Animate the sparkle
    sparkle.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(1.5)', opacity: 0 },
    ], {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    // Remove the sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Function to animate the text below the video
function animateText() {
    const text = document.querySelector('p'); // Assuming the text is in a <p> tag
    text.style.opacity = 0; // Start hidden
    text.style.transform = 'translateY(20px)'; // Start slightly below

    text.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
}

// Call the functions on page load
window.onload = () => {
    createSparkleEffect();
    animateText();
};
