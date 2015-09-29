
// hotel mainPhoto js//
$(function(){
		var x = $("#contr").width();
     $("#mainPhotoSlide").width(x);
});


$(window).resize(function(){
		var x = $("#contr").width();
     $("#mainPhotoSlide").width(x);
});

// nav overlay //
$(function(){
		var wH = $(window).height();
		var _glContr = $("#glContr");
		var _navBtnSearch = $("#navBtnSearch");
		var _overlay = $("#overlay");

		_navBtnSearch.click(function(){
			if(_overlay.hasClass("hidden") == true){
				_overlay.removeClass("hidden");
				_overlay.height(wH -56);
				_glContr.height(wH);
				_glContr.css({"overflow":"hidden"});
				_navBtnSearch.removeClass("navBtnSearch");
				_navBtnSearch.addClass("navBtnClose");
			}else{
				_overlay.addClass("hidden");
				_overlay.height("");
				_glContr.height("");
				_glContr.css({"overflow":""});
				_navBtnSearch.removeClass("navBtnClose");
				_navBtnSearch.addClass("navBtnSearch");
			};

		});

});
