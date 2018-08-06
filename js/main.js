jQuery(document).ready(function($) {
	
	$('.js-show-mobile').click(function(){
		$(this).toggleClass('is-active');
		$('.b-mobile-nav').addClass('is-active');
	});

	$(document).click( function(event){
		if( $(event.target).closest(".b-mobile-nav__inner, .js-show-mobile").length)
			return;
		$('.b-mobile-nav').removeClass('is-active');
		$('.b-hamburger').removeClass('is-active');
		event.stopPropagation();
	});

	// $(".b-mobile-nav").swipe( {
	// 	swipeLeft:function() {
	// 		$('.js-show-mobile').removeClass('is-active');
	// 		$(".b-mobile-nav").removeClass('is-active');
	// 	},
	// 	threshold:50
	// });

    $(".menu, .scroll, #menu-holovne-meniu-1").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top -94;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
	});

	$('.acordion__title').on('click', function(event) {
	  var parentItem = $(this).parent();
	  parentItem.find('.acordion__content').stop().slideToggle();
	  parentItem.find('.acordion__arrow').toggleClass('acordion__arrow-rotate');
	 });
}) 


