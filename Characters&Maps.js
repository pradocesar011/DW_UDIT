$(document).ready(function () {
    $(".right-content").hide(); // Hide all right side content initially

    $(".left-image").click(function () {
        let targetVersion = $(this).data("target");

        $(".right-content").delay(300).fadeOut(200, function () {
            $("#" + targetVersion).delay(300).fadeIn(200);
        });
    });
});

// $(document).ready(function() {
//     $(".item").delay(1000).fadeIn(1000); // 1-second delay, then 1-second fade-in
// });