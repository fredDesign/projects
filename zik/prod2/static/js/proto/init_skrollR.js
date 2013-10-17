

// SkrollR + nav
var s = skrollr.init({
    forceHeight: false  ,
    });

skrollr.menu.init(s);




// navliner
$(function() {
    var $el, leftPos, newWidth;
    $mainNav = $("#site-menu");

    $navliner = function(elem){
        $navLine = elem;
        $navLine.data("origLeft", $(".current_slide_item ").position().left)
            .data("origWidth", $(".current_slide_item").width());
        $navLine.stop().animate({
            left: $navLine.data("origLeft"),
            width: $navLine.data("origWidth")
        });

    }



    /* Add  Line markup via JScript */
    $mainNav.append("<li id='navline'></li>");
    /**/

    $navLine = $("#navline");

    $navLine.width($(".current_slide_item").width())
        .css("left", $(".current_slide_item").position().left)

    $navliner($navLine);



    $mainNav.find("li a").hover(function() {
        $el = $(this);
        $liContain = $(this).parent();
        leftPos = $liContain.position().left;
        newWidth = $el.parent().width();

        $navLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $navLine.stop().animate({
            left: $navLine.data("origLeft"),
            width: $navLine.data("origWidth")
        });
    });



    function navAdEvent(trackid) {
        $("#site-menu li").removeClass('current_slide_item');
        var el = ($("a[href='#"+trackid+"']")).parent();


        el.addClass('current_slide_item');

        $navliner($navLine);

    }


    $(document).scroll(function(e){

        var sPos=$(window).scrollTop();
        $('#status').html(sPos);

        if (sPos >= 0 && sPos <= 2400) {
            navAdEvent('colors-choices'); }
        else if (sPos >= 2401 && sPos <= 2800) {
            navAdEvent('lou-reed');}
        else if (sPos >= 3000 && sPos <= 4400) {
            navAdEvent('anc') }
        else if  (sPos >= 4600 && sPos <= 6599) {
            navAdEvent('touch-panel')}
        else if  (sPos >= 6600 && sPos <= 9000) {
            navAdEvent('buy')}

    });
    $("a[href='#colors-choices']").click(function(){$('#skrollr-body').scrollTo( 0, 0, { duration:800 } );return false}) ;
    $("a[href='#lou-reed']").click(function(){$('#skrollr-body').scrollTo( 2401,0, { duration:800 } );return false}) ;
    $("a[href='#anc']").click(function(){$('#skrollr-body').scrollTo( 3000, 0, { duration:800 } );return false}) ;
    $("a[href='#touch-panel']").click(function(){$('#skrollr-body').scrollTo( 4600, 0, { duration:800 } );return false}) ;
    $("a[href='#buy']").click(function(){$('#skrollr-body').scrollTo( 6600, 0, { duration:800 } );;return false}) ;


});
