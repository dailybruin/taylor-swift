$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:['landingPage', 'infoPage']
    });

    $(".picture-row").hover(function(){
        $(".main-info").fadeTo(150, 1);
      }, function() {
        $(".main-info").fadeTo(150, 0);
      }
    );

});
