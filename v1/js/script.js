$(document).ready(function(){
     $(".navBar ul li a").on("click", function(){ 
        $(".navBar ul li a").removeClass("active");
        $(this).addClass("active");                 
        var href = $(this).attr('href').slice(1),   
            scrollPoint = $('section[id="' + href + '"]').offset().top - 85;               
            windowHeight = $(window).height();                             
            $('section[id="' + href + '"]').css('min-height',windowHeight + 85);
                   
            $('html, body').animate({
                scrollTop : scrollPoint   
            },500);
    });

     var navOffset = $(".navbar-fixed-top").offset().top;
    $(window).scroll(function(){        
        var scrollTp = $(window).scrollTop();                
        if(scrollTp > navOffset){            
            //$(".navbar-fixed-top").addClass("fixed");
            $('.wrapper > section').each(function(i) {
                if($(this).offset().top < scrollTp + 86){                    
                    $(".navBar ul li a.active").removeClass('active');
                    $(".navBar ul li a").eq(i).addClass('active');
                }else{
                   
                }
            });
        }else{
            $//(".navbar-fixed-top").removeClass("fixed");
            $(".navBar ul li a.active").removeClass('active');
            $(".navBar ul li a:first").addClass('active');
        }


    });


});