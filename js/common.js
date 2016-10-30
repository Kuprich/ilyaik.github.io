$(function() {
	

	// toggle header burger and header navigation
	$(".main_head .toggle_menu").click(function(){
		$(this).toggleClass("on");
		$(".main_head .main_menu").slideToggle();

	});
	// togge nav in footer
	$(".main_footer .toggle_menu").click(function(){
		$(this).toggleClass("on");
		$(".main_footer .main_menu").slideToggle();
	});



	//animate cards in section_4
	$(".section_4 ").waypoint(function(){

		$(".section_4 .card").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("card_off").addClass("card_on");
			}, 150*index);
		});
	},{
		offset : "20%"
	});

	//SVG animation 

	$(".section_5 ").waypoint(function(){

		$(".section_5 .tc_item").each(function(index){
			var ths = $(this);
			setTimeout(function(){
				var myAnimation = new DrawFillSVG({
					elementId: "tc_svg"+index
				});
				ths.removeClass("").addClass("");
			}, 500*index);
		});
		this.destroy();
	},{
		offset : "40%"
	});

	// OVL Carousel in section_6
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		navSpeed: 600,
		dotsSpeed: 600
	});

	//nav menu scroll
	$(".main_footer .toggle_menu").click(function(){
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".arrow_bottom").click(function(){
		$("html, body").animate({ scrollTop: $(".main_head").height()+90 }, "slow");
		return false;
	});

	$(".scroll_top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	$(".section-head h2, .section-head p").animated("fadeInRight");
	$('.info_item').animated("zoomIn");
	$('.section_8 .forms').animated("bounceInUp");

	$(".section_2").waypoint(function(){
		$(".s2_item_wrap").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 200*index);
		});
	});

	$(".section_8").waypoint(function(){
		$(".s8_item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass("on");
			}, 200*index);
		});
	},{
		offset : "30%"
	});

			
		

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//magnific-popup
	$(".home_sect .section_bottom .buttons").click(function(){
		$("#callback h4").html($(this).text());
		$("#callback input[title=formName]").val($(this).text());	
		}).magnificPopup({
			type: "inline",
			mainClass: "mfp-forms"
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка принята");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
