$(document).ready(function() {
    let selectedImages = [];

    // Handle clicks on small-box
    $('.small-box img').on('click', function() {
        const gem = $(this).closest('.small-box').data('gem');
        const imgSrc = $(this).attr('src');
        
        if (selectedImages.length < 3 && !selectedImages.includes(gem)) {
            selectedImages.push(gem);

            // Fill the triangle boxes
            $('.triangle-box').each(function(index) {
                if (!$(this).find('img').length) {
                    $(this).html(`<img src="${imgSrc}" alt="${gem}">`);
                    return false; // Exit the loop once the box is filled
                }
            });
        }
        updateCenterBox();
    });

    // Handle clicks on triangle-box to remove image
    $('.triangle-box').on('click', function() {
        const gem = $(this).find('img').attr('alt');
        if (gem) {
            selectedImages = selectedImages.filter(image => image !== gem);
            $(this).empty();
        }
        updateCenterBox();
    });

    // Update the center-box based on selected images
    function updateCenterBox() {
        switch (true) {
            case (selectedImages.includes('ruby') && selectedImages.includes('sapphire') && selectedImages.includes('emerald')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Diamond.webp" alt="diamond">').show();
                break;
            case (selectedImages.includes('amethyst') && selectedImages.includes('citrine') && selectedImages.includes('tourmaline')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Onyx.webp" alt="onyx">').show();
                break;
            case (selectedImages.includes('diamond') && selectedImages.includes('onyx') && selectedImages.includes('spinel')):
                $('.center-box').html('<img src="Media/Algunas Gemas/PrincessStone.webp" alt="princessStone">').show();
                break;
            default:
                $('.center-box').hide().empty();
                break;
        }

        // Show center box only if 3 gems are selected
        if (selectedImages.length === 3) {
            $('.center-box').show();
        } else {
            $('.center-box').hide().empty();
        }
    }
});
