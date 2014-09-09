function setMenuActive(quel){
	   
   $(".menu-entry").removeClass("active");
   $("#menu"+quel).addClass("active");
   
}

/***************************************************
	  SELECT MENU ON SMALL DEVICES
***************************************************/
$(function() {
			var pull 		= $('#pull');
				menu 		= $('#primary-menu ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 479 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
				if(w > 719 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});

$(document).ready(function() {
        $("#btn").toggle(
			function () { 
			$(".profile").animate({right:'0px'},600);
			},
			function () { 
			$(".profile").animate({right:'-350px'},600); 
			}
		);

        $("#cerrar").on('click', function () { 
            $(".profile").animate({right:'-350px'},300); 
        });

		$(function(){
			$(".notificaciones").hide();
			$("#btn2").click(function(){$(".notificaciones").slideToggle(300);})	
		});

		var  block_in = false;
        $("#btn3").toggle(
			function () { 
			$(".question").animate({left:'0px'},600);
			block_in = true;
			},
			function () { 
			$(".question").animate({left:'-300px'},600); 
			block_in = false;
			}
		);	
		
});

$(document).click(function (e)
{
    var container = $(".question");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0
        && container.is(":visible"))
    {
        container.animate({left:'-300px'},600);
    }

     var container2 = $(".profile");

    if (!container2.is(e.target) 
        && container2.has(e.target).length === 0
        && container2.is(":visible"))
    {
        container2.animate({right:'-350px'},600); 
    }
});


$(document).ready(function(){
  $("#act_btn_1").click(function(){
        var numero = 33;
        $("#video").css("display","none");
        $("#video").animate({left:'-600px'});
        $("#evaluacion").css("display","block");
        $("#evaluacion").animate({left:'8px'});
        $("#progressBar").html(numero);
        $("#status").html("Phase 2 of 3");
  });
  $("#act_btn_2").click(function(){
        var numero = 33;
        $("#evaluacion").css("display","none");
        $("#evaluacion").animate({left:'-600px'});
        $("#video").css("display","block");
        $("#video").animate({left:'8px'});
        $("#progressBar").html(numero);
        $("#status").html("Phase 3 of 3");
  });
  $("#act_btn_3").click(function(){
        var numero = 33;
        $("#video").css("display","none");
        $("#evaluacion").css("display","none");
        $(".activities").css("height","0px");
        $("#video").animate({left:'-600px'});
        $(".discusion").css("display","block");
        $(".discusion").animate({left:'8px'});
        $("#progressBar").html(numero);
        $("#status").html("Phase 3 of 3");
  });

});


$(document).ready(function(){
                $("#uno").click(function(){
                $("#slide1").css("display","none");
                $(".one").css("background-color","#5fcf80");
                $(".two").css("background-color","#5fcf80");
                $(".three").css("background-color","#575756");
                $(".four").css("background-color","#575756");
                $("#slide2").animate({right:'0px'});
                $("#slide_title").html("Modulos de curso");
                $("#slide_txt").html("Visualiza e interactua con los modulo del curso que seleccionaste");
                $("#uno").hide();
                $("#dos").show();
                });

                $("#dos").click(function(){
                $("#slide2").css("display","none");
                $(".three").css("background-color","#5fcf80");
                $("#slide3").animate({right:'0px'});
                $("#slide_title").html("Actividades de Modulo");
                $("#slide_txt").html("Accede a las actividades y controla tu progreso del módulo.");
                $("#dos").hide();
                $("#tres").show();
                });

                $("#tres").click(function(){
                $("#slide3").css("display","none");
                $(".four").css("background-color","#5fcf80");
                $("#slide4").animate({right:'0px'});
                $("#slide_title").html("Listo para empezar a aprender");
                $("#slide_txt").html("Puedes preguntar al facilitador levantando la mano");
                $("#tres").hide();
                $("#cuatro").show();
                });

         });

    $(function() {
    var width = 245;
    var animationSpeed = 1000;
    var pause = 4000;
    var currentSlide = 1;
    var $slider = $('.atr_slider_wrap');
    var $slideContainer = $('.atr_mobile_blocks', $slider);
    var $slides = $('.atr_mobile_block', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});



