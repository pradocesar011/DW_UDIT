$(document).ready(function() {
    const leftBoxes = $('.triangle-box');
    const rightBoxes = $('.small-box img');
    const centerBox = $('.center-box');
    let selectedImages = [];

    // Initially hide the center box
    centerBox.hide();

    // Mapping combinations to a specific image for the center box
    const combinationImages = {
        'Media/Algunas Gemas/Ruby.webp+Media/Algunas Gemas/Sapphire.webp+Media/Algunas Gemas/Emerald.webp': 'Media/Algunas Gemas/Diamond.webp',
        // Add more combinations here if necessary
    };

    // Function to extract the filename from the image path without the extension
    const getFileName = (path) => {
        const fileNameWithExt = path.split('/').pop(); // Extract the file with extension
        const fileName = fileNameWithExt.split('.')[0].toLowerCase(); // Remove the extension and convert to lowercase
        return fileName;
    };

    // Function to update the left boxes with images
    const updateLeftBoxes = () => {
        leftBoxes.each(function(index) {
            if (selectedImages[index]) {
                $(this).html(`<img src="${selectedImages[index]}" alt="gem">`); // Fill left boxes with images
            } else {
                $(this).empty(); // Clear the box if no image
            }
        });
    };

    // Function to update the center box with the combination of selected images
    const updateCenterBox = () => {
        if (selectedImages.length === 3) {
            const combinationKey = selectedImages
                .map(img => getFileName(img))
                .sort()
                .join('+'); // Create the combination key
            console.log("Combination Key: ", combinationKey); // Debugging log
            const centerImage = combinationImages[combinationKey];

            if (centerImage) {
                centerBox.html(`<img src="${centerImage}" alt="center-image">`);
                console.log("Displaying image: ", centerImage); // Debugging log
            } else {
                centerBox.text('No match');
                console.log("No match found for the combination."); // Debugging log
            }
            centerBox.show(); // Show the center box when all 3 triangle boxes are filled
        } else {
            centerBox.hide(); // Hide the center box if less than 3 triangle boxes are filled
        }
    };

    // Function to handle clicks on right boxes (images)
    const handleRightBoxClick = (imageSrc) => {
        if (selectedImages.length < 3) {
            selectedImages.push(imageSrc); // Add image src to the array
            console.log("Selected Images: ", selectedImages); // Debugging log
            updateLeftBoxes(); // Update left boxes with the selected images
            updateCenterBox(); // Check if all three are filled, then update center box
        }
    };

    // Event listener for right boxes (click on image)
    rightBoxes.click(function() {
        const imageSrc = $(this).attr('src');
        handleRightBoxClick(imageSrc);
    });

    // Event listener for left boxes to clear them individually when clicked
    leftBoxes.click(function() {
        const index = leftBoxes.index(this);
        if (selectedImages[index]) {
            selectedImages.splice(index, 1); // Remove the image from the array
            updateLeftBoxes(); // Update left boxes
            updateCenterBox(); // Hide the center box if less than 3 boxes are filled
        }
    });
});
