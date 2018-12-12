(function ($) {

	$(document).ready(function(){

	//Header shrinking function
	$(document).on("scroll", function(){
		if
      	($(document).scrollTop() > 100){
		  $("header#navbar").addClass("shrink");
		}
		else
		{
			$("header#navbar").removeClass("shrink");
		}
	});

		//accordion for toggling large content
		var coll = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    this.classList.toggle("accordion-active");
		    var content = this.nextElementSibling;
		    if (content.style.maxHeight){
		      content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    } 
		  });
		}
		//end accordion

		//Masonry js
			var $grid = $('.grid').masonry({
			  // options
			  itemSelector: '.grid-item',
			  columnWidth: '.grid-sizer',
			  gutter: 20,
			  percentPosition: true
			});
			// layout Masonry after each image loads
			//$grid.imagesLoaded().progress( function() {
			  //$grid.masonry('layout');
			//});
		//end Masonry js


	})
})(jQuery);