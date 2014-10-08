$(document).ready(function(){
	$("#info").hide();
	$("#info").fadeIn(3000);
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	$(window).on("scroll",function(){
  		if($(window).scrollTop()>200){ 
	 		$("#header").removeClass("large").addClass("small");
	 		$("#info").fadeOut(1000);
     	}
  		else{
  			$("#info").fadeIn(3000);
     		$("#header").removeClass("small").addClass("large");
       	}
 	});

 	$('.nav-btn').click(function(event) {
 		$('ul.nav').toggle();
  	});
  	$(window).resize(function(event) {
  	 	if ($(window).width() > 600){
  			$('ul.nav').removeAttr('style');
  	 	}
  	});

  	// progressbar
  	$('#bar-1').jqbar({ label: 'HTML5', value: 90, barColor: '#FF0000' });

    $('#bar-2').jqbar({ label: 'CSS3', value: 90, barColor: '#E80C7A' });

    $('#bar-3').jqbar({ label: 'Javascript', value: 40, barColor: '#15A12C' });

    $('#bar-4').jqbar({ label: 'jQuery', value: 50, barColor: '#000000' });

    $('#bar-5').jqbar({ label: 'PHP', value: 40, barColor: '#E807CD' });

    $('#bar-6').jqbar({ label: 'MYSQL', value: 80, barColor: '#B2FF0D' });
  
});

