$(document).ready(function() {
    // Gem values based on the provided mapping
    const gemValues = {
        ruby: 5,
        sapphire: 5,
        emerald: 5,
        amethyst: 3,
        citrine: 3,
        tourmaline: 3,
        diamond: 1,
        onyx: 1,
        spinel: 1,
        princessStone: 0
    };
    
    // Add a corner box with the respective gem value to each .small-box
    $('.small-box').each(function () {
        const gem = $(this).data('gem');
        if (gem) {
            const value = gemValues[gem] || 0;  // Default to 0 if the gem is not listed
            $(this).append(`<div class="corner-box">${value}</div>`);
        }
    });

    let selectedImages = [];

    // // Add a corner box with '0' to each .small-box
    // $('.small-box').each(function() {
    //     $(this).append('<div class="corner-box">0</div>');
    // });

    // Handle small-box clicks
    $('.small-box img').on('click', function() {
        const gem = $(this).closest('.small-box').data('gem');
        const value = gemValues[gem]; 
        const imgSrc = $(this).attr('src');

        // Don't display gems with value 0 in the triangle boxes
        if (value === 0) return;

        if (selectedImages.length < 3 && !selectedImages.includes(gem)) {
            selectedImages.push(gem);
            
            // Fill the triangle boxes
            $('.triangle-box').each(function(index) {
                if (!$(this).find('img').length) {
                    $(this).html(`<img src="${imgSrc}" alt="${gem}">`);
                    return false; // Exit loop once filled
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

    // Handle center-box click for crafting behavior
    $('.center-box').on('click', function() {
        if ($(this).find('img').length) {
            const centerGem = $(this).find('img').attr('alt');

            // Update gem values for triangle boxes
            $('.triangle-box img').each(function() {
                const gem = $(this).attr('alt');
                if (gem && gemValues[gem] > 0) {
                    gemValues[gem]--; // Decrease gem value by 1
                }
            });

            // Increase value for center gem
            if (centerGem && gemValues[centerGem] > 0) {
                gemValues[centerGem]++;
            }

            // Clear triangle and center boxes after crafting
            $('.triangle-box').empty();
            $('.center-box').empty().hide();
            selectedImages = [];
            $('.description-box').empty();
        }
    });

    // Update the center-box and description-box based on selected images
    function updateCenterBox() {
        let gemName = "";  // Variable to hold the name of the gem for the description-box

        switch (true) {
            // case (selectedImages.includes('ruby') && selectedImages.includes('sapphire') && selectedImages.includes('emerald')):
            //     $('.center-box').html('<img src="Media/Algunas Gemas/Diamond.webp" alt="diamond">').show();
            //     gemName = "Diamond";
            //     break;
            // case (selectedImages.includes('amethyst') && selectedImages.includes('citrine') && selectedImages.includes('tourmaline')):
            //     $('.center-box').html('<img src="Media/Algunas Gemas/Onyx.webp" alt="onyx">').show();
            //     gemName = "Onyx";
            //     break;
            // case (selectedImages.includes('diamond') && selectedImages.includes('onyx') && selectedImages.includes('spinel')):
            //     $('.center-box').html('<img src="Media/Algunas Gemas/PrincessStone.webp" alt="princessStone">').show();
            //     gemName = "Princess Stone";
            //     break;


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

        // Update the description box with gem name if available
        if (gemName) {
            $('.description-box').html(`<p>${gemName}</p>`);
        } else {
            $('.description-box').html("");
        }

        if (selectedImages.length === 3) {
            $('.center-box').show();
            $('.description-box').html(gemName);  // Update description-box with the gem name
        } else {
            $('.center-box').hide().empty();
            $('.description-box').empty();  // Clear the description-box if no valid gem combination is selected
        }
    }
        
});
