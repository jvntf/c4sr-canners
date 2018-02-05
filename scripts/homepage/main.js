$(function(){
	preparepaths();
	// 
	// 

	$(".data_portrait").click(function(){
		// console.log($(this).next());
		$(this).next().css({
						'stroke-width':'2px',
							'stroke':'#222222'});
		var mySvg = $(this).next().drawsvg({
			duration:700,
			easing:'linear'
		});
		mySvg.drawsvg('animate');
	})



	// function draw(path){
	// 	path.css('visibility','visible');
	// 	// path.animate({'strokeDashoffset':0},100000);
	// }

	function preparepaths(){
		console.log($('.overlay_path')[0]);
		$('.overlay_path').each(function(){
			console.log(this);
			var lineLength = this.getTotalLength();
			$(this).css("stroke-dasharray", lineLength);
			$(this).css("stroke-dashoffset", lineLength);
			$(this).attr('length',lineLength);
		})

	
	}
})