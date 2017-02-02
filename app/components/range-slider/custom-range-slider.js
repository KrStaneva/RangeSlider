function rangeSlider() {

	let numEl = $('.slider-element').length;
	let widthEl = $('.slider-parent').width()/numEl;
	let halfEl = widthEl/2;
	let sliderParentPos = 0;

	$('.slider').width(widthEl); //give draggable bar the width of one element
	$('.slider-element:first-child').addClass("active"); // first element active on start

	$(".slider-element").click(function() { //on click change the active element
		$(".slider-element").removeClass("active");
		$(this).addClass("active");

		$(".slider").position({
			of: $(".slider").parent(),
			my: 'left+' + $(this).index()*widthEl + ' top',
			at: 'left top'
		});
	});

	$(".slider").draggable({ // describe draging options
		axis: "x",
		containment: $('.slider-parent'),

		drag: function() {
			sliderMovement();
		},

		stop: function() {
			$(".slider").position({
				of: $(".slider").parent(),
				my: 'left+' + sliderMovement(stop) + ' top',
				at: 'left top'
			});
		}
	});

	function sliderMovement(stop) {
		sliderParentPos = $('.slider').position().left - $('.slider-parent').position().left;

		for(let i = 0; i < numEl; i++) {

			if(stop) {
				// if - slider drop position is bigger than element's start and lower than next element half.

				// else if - slider drop position is bigger than element half and lower than next element start.

				if((i*widthEl <= sliderParentPos) && (sliderParentPos < ((i+1)*widthEl - halfEl))) {

					return i*widthEl;

				} else if( ((i*widthEl - halfEl) <= sliderParentPos) && ( sliderParentPos < (i+1)*widthEl)) {

					return (i+1)*widthEl;

				};
			} else {
				// if - slider current position is bigger than element half and lower than next element start activate current element

				if (((i*widthEl - halfEl) <= sliderParentPos) && ( sliderParentPos < (i+1)*widthEl))  {
					$(".slider-element").eq(i).trigger("click");
				};
			};
		};
	};
	
};