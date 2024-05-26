$(document).ready(function () {
	$("#contactForm").validate();

	$(".filter-button").click(function () {
		var value = $(this).attr("data-filter");
		$(this).addClass("active");
		if (value == "all") {
			//$('.filter').removeClass('hidden');
			$(".filter").show("1000");
		} else {
			//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
			//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
			$(".filter")
				.not("." + value)
				.hide("3000");
			$(".filter")
				.filter("." + value)
				.show("3000");
		}
	});

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
});
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 30,
	responsiveClass: true,
	dots: true,
	nav: false,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		1000: {
			items: 3,
			loop: false,
		},
	},
});
