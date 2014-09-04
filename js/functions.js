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

		$(function(){
			$(".notificaciones").hide();
			$("#btn2").click(function(){$(".notificaciones").slideToggle(300);})	
		});
		
});

$(document).ready(function() {
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




