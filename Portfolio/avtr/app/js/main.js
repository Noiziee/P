$(function () {
	$('.design-slider').slick({
		dots: false,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<img class="arrow arrow__left" src="./images/arrow-left.svg" alt="arrow-left"></img>',
		nextArrow: '<img class="arrow arrow__right" src="./images/arrow-right.svg" alt="arrow-right"></img>',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					variableWidth: false,
					slidesToShow: 1,
				}
			}
		]
	});
});