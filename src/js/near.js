
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
		var _navBtnSearch = $("#navBtnSearch");
		var _overlay = $("#overlay");

		_navBtnSearch.click(function(){
			if(_overlay.hasClass("hidden") == true){
				_overlay.removeClass("hidden");
			}else{
				_overlay.addClass("hidden");
			};

		});

});
