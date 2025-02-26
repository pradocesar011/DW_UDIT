$(document).ready(function() {
    // Function to fill the left boxes when right boxes are clicked
    $('.right').click(function() {
      var letter = $(this).data('letter');
  
      // Find the first empty left box
      var emptyBox = $('.left').filter(function() {
        return $(this).text() === '';
      }).first();
  
      // If there's an empty left box, fill it with the clicked letter
      if (emptyBox.length) {
        emptyBox.text(letter);
      }
  
      // Check if all three left boxes are filled
      checkLeftBoxes();
    });
  
    // Function to clear a left box when it's clicked
    $('.left').click(function() {
      $(this).text('');
      // Clear the center box if a left box is clicked
      $('.center').text('');
      $('.center-box').hide();
    });
  
    // Function to clear the center box when it's clicked
    $('.center').click(function() {
      $(this).text('');
      $('.center-box').hide();
    });
  
    // Function to check if all three left boxes are filled
    function checkLeftBoxes() {
      var filledLetters = $('.left').map(function() {
        return $(this).text();
      }).get().join('');
  
      // If all three left boxes are filled, show the center box
      if (filledLetters.length === 3) {
        $('.center').text(filledLetters);
        $('.center-box').show();
      }
    }
  });
  