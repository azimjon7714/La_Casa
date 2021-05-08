
$(document).ready(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		// $('header').css({
		// 	background: rgba(28, 54, 85, 1);
		// });
		var target = $(this).attr('href'),
			margin_top = $(target).offset().top - 100;

		$('body, html').animate({scrollTop: margin_top}, 1500);
		return false;
	});
});

$(document).ready(function(){
	$('#icon').on('click', function(){
		$('.advanced-search').toggleClass('active')
	})
	$('#login').on('click', function(){
		$('.popup-container').addClass('popup-active');
		$('.popup-container').fadeIn('slow');
		$('#wrapper').css('filter', 'blur(5px)');
	});

	$('#close, #submit').on('click', function(){
		$('.popup-container').removeClass('popup-active');
		$('#wrapper').css('filter', 'none')
	});
});


// function paralax(event){
// 	this.querySelectorAll('.section-header').forEach(section =>{
// 		let speed = section-header.getAttribute('data-speed');
// 		section-header.style.transform = 'translateX(' + event.clientX*speed/1000 + 'px) translateY(' + (event.clientY*speed/1000) + 'px)';
// 	})
// }

// document.eventListener('mousemove', parallax);
