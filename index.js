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

    // Update the center-box and description-box based on selected images
    function updateCenterBox() {
        let gemName = "";  // Variable to hold the name of the gem for the description-box

        switch (true) {
            case (selectedImages.includes('ruby') && selectedImages.includes('sapphire') && selectedImages.includes('emerald')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Diamond.webp" alt="diamond">').show();
                gemName = "Diamond";
                break;
            case (selectedImages.includes('amethyst') && selectedImages.includes('citrine') && selectedImages.includes('tourmaline')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Onyx.webp" alt="onyx">').show();
                gemName = "Onyx";
                break;
            case (selectedImages.includes('diamond') && selectedImages.includes('onyx') && selectedImages.includes('spinel')):
                $('.center-box').html('<img src="Media/Algunas Gemas/PrincessStone.webp" alt="princessStone">').show();
                gemName = "Princess Stone";
                break;
            case (selectedImages.includes('ruby') && selectedImages.includes('sapphire') && selectedImages.includes('sapphire')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Amethyst.webp" alt="amethyst">').show();
                gemName = "Amethyst";
                break;    
            case (selectedImages.includes('ruby') && selectedImages.includes('emerald') && selectedImages.includes('emerald')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Citrine.webp" alt="citrine">').show();
                gemName = "Citrine";
                break;    
            case (selectedImages.includes('sapphire') && selectedImages.includes('emerald') && selectedImages.includes('emerald')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Tourmaline.webp" alt="tourmaline">').show();
                gemName = "Tourmaline";
                break;    
            case (selectedImages.includes('diamond') && selectedImages.includes('onyx') && selectedImages.includes('onyx')):
                $('.center-box').html('<img src="Media/Algunas Gemas/Spinel.webp" alt="spinel">').show();
                gemName = "Spinel";
                break;
            default:
                $('.center-box').hide().empty();
                break;
        }

        // Show center box only if 3 gems are selected
        if (selectedImages.length === 3) {
            $('.center-box').show();
            $('.description-box').html(gemName);  // Update description-box with the gem name
        } else {
            $('.center-box').hide().empty();
            $('.description-box').empty();  // Clear the description-box if no valid gem combination is selected
        }
    }
});
