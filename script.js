// Select all source buttons and target buttons
const sourceButtons = document.querySelectorAll('.sourceButton');
const targetButtons = document.querySelectorAll('.targetButton');

// Track the current target button index
let targetIndex = 0;

// Add event listeners to each source button
sourceButtons.forEach(sourceButton => {
    sourceButton.addEventListener('click', () => {
        // Get the letter from the clicked source button
        const letter = sourceButton.textContent;

        // If the current target button has a 0, set the letter
        if (targetButtons[targetIndex].textContent === '0') {
            targetButtons[targetIndex].textContent = letter;
            // Move to the next target button in the sequence
            targetIndex = (targetIndex + 1) % targetButtons.length;
        }
    });
});

// Add event listeners to each target button to reset them when clicked
targetButtons.forEach(targetButton => {
    targetButton.addEventListener('click', () => {
        // If the target button contains a letter, reset it to 0
        if (targetButton.textContent !== '0') {
            targetButton.textContent = '0';
        }
    });
});
