$(function () {
	$(document).on("touchstart", function () {
		true;
	});

	$(window).on("click", function () {
		$(".block-catalog__heading-filter-container, .block-catalog__box-filter-container, [data-toggle='filter-series']").removeClass("active");
	});

	$(".block-catalog__heading-filter-box, .block-catalog__box-filter-container, .block-catalog__box-filter, [data-toggle='mob-filter'], [data-toggle='filter-series']").on("click", function (e) {
		e.stopPropagation();
	});

	$(".block-catalog__heading-filter-container .block-catalog__heading-filter-list ul li").on("click", "button", function () {
		$($(this).closest(".block-catalog__heading-filter-container .block-catalog__heading-filter-list ul")[0]).find("button").removeClass("active");
		$($(this).closest(".block-catalog__heading-filter-box")[0]).find(".block-catalog__heading-filter-list ul li button").removeClass("active");

		$(".block-catalog__heading-filter-container").removeClass("active");

		$(this).addClass("active");
	});

	$(".block-catalog__heading-filter-box > .block-catalog__heading-filter-list > ul > li").on("click", "button", function () {
		$($(this).closest(".block-catalog__heading-filter-box > .block-catalog__heading-filter-list > ul")[0]).find("button").removeClass("active");

		$(this).addClass("active");
	});

	$("[data-action='close-mob-filter']").on("click", function () {
		$(this).closest(".block-catalog__box-filter-container").removeClass("active");
	});

	$("[data-toggle='filter-series']").on("click", function () {
		$(this).closest(".block-catalog__heading-filter-box").find(".block-catalog__heading-filter-container").toggleClass("active");
		$(this).toggleClass("active");
	});

	$(".block-catalog__heading-filter-btn[data-action='close']").on("click", function () {
		$(this).closest(".block-catalog__heading-filter-container").removeClass("active");
		$("[data-toggle='filter-series']").removeClass("active");
	});

	$(".block-catalog__aside-list-filters > ul > li:not(.list-item--state) > button").on("click", function () {
		$(this).siblings("div").slideToggle(500);
		$(this).toggleClass("active");
	});

	$(".block-catalog__aside-list-filters > ul > li > div > ul > li").on("click", "button", function () {
		$(this).siblings("ul").slideToggle(500);
		$(this).toggleClass("active");
	});

	$(".block-catalog__aside-list-filters ul li").find("button.active").siblings("div, ul").slideDown(500);

	$(".box-price-range__slider").slider({
		range: true,
		min: $(".box-price-range").data("min"),
		max: $(".box-price-range").data("max"),
		values: [$(".box-price-range__field-min-price").val(), $(".box-price-range__field-max-price").val()],
		slide: function (event, ui) {
			$(".box-price-range__field-min-price").val(ui.values[0]);
			$(".box-price-range__field-max-price").val(ui.values[1]);
		}
	});

	$("[data-toggle='mob-filter']").on("click", function () {
		$(this).siblings(".block-catalog__box-filter-container").toggleClass("active");
	});
});
