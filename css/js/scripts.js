
$(document).ready(function() {
   $('#mycarousel').carousel({interval:2000});
   $('#carouselButton').click(function() {
       if($('#carouselButton').children('span').hasClass('fa-pause')) {
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
   }
   else if($('#carouselButton').children('span').hasClass('fa-play')) {
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
   }
});
});

$(document).ready(function() {
$('#login-click').click(function() {
    $('#loginModal').modal('toggle');

    //close button action
    $('#closeButton').click(function () {
        $('#loginModal').modal('hide');
    });

    //cancel button action
    $('#cancelButton').click(function () {
        $('#loginModal').modal('hide');
    });

});
});

$(document).ready(function() {
$('#reserve').click(function() {
    $('#testform').modal('toggle');
});
});

 //close button action
 $('#closeButton0').click(function () {
    $('#testform').modal('hide');
});

//cancel button action
$('#cancelButton0').click(function () {
    $('#testform').modal('hide');
});

