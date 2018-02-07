$(function(){
	preparepaths();
	$(document).click(function() {
	    
	    $('#popup').remove();
	    $('#current').remove();
	    $('.data_portrait').css({
	    	'visibility':'visible'
	    })

	    
	    $('.overlay_path').each(function(){
	    	$(this).animate({
	    		strokeDashoffset: $(this).attr('length'),
	    	},1000);
	    });



	});

	$("#legend_toggle").click(function(e){
		if( $('#legend').attr('class')=='on'){
			$('#legend').fadeOut().removeClass('on');
			$('#legend_toggle div:nth-child(2)').html('Show Legend');
			$('#triangle').addClass('On').removeClass('Off');

		}else{
			$('#legend').fadeIn().addClass('on');
			$('#legend_toggle div:nth-child(2)').html('Hide Legend');
			$('#triangle').removeClass('On').addClass('Off');
		}
	})


	$(".data_portrait").click(function(e){
		e.stopPropagation();
		
		if($(this).attr('id')!='current'){
			$('#popup').remove();
			$('.popup_info').remove();
			$('#current').remove();
			$('.data_portrait').css({
				'visibility':'visible'
			},500)

		}

		// console.log($(this).next());
		$(this).addClass('active')
			.css({
			'visibility':'hidden'
		})


		$(this).next().css({
						'stroke-width':'2px',
							'stroke':'#222222'});


		var mySvg = $(this).next().drawsvg({
			duration:700,
			easing:'linear'
		});
		mySvg.drawsvg('animate');

		var name = $(this).attr('canner');
		console.log($(this));


		var topVal = $(this).position().top
		var leftVal = $(this).position().left
		var rightVal=$(this).position().right
		console.log(this);
		// console.log($(this).attr('canner'))

		// $("this").insertAfter()
		// $("#popup").offset({
		// 	top:topVal,
		// 	left:leftVal
		// }).css({visibility:'visible'});
		// 
		// 
		


		$("<img id='current' class='data_portrait' src='img/homepage/data_portraits/"+name+".png'/>").insertAfter("#paths")
			.offset({
				top:topVal,
				left:leftVal
			})
			.css({
				transform:'scale(2)'
			});

		// $("<div")

	


		$("<div id='popup'>"+
				"<div id='name'>"+name[0].toUpperCase()+name.slice(1)+"</div>"+
				"<div id='popup_info'>"+ 
					"<div id='soundbite'>"+
						"<div id='play_pause'></div>"+
						"<div>MEET MORENA</div>"+
					"</div>"+
					"<div id='link'>"+
						"<img src='img/morena/collection.png'>"+
						"<a href='canners/morena'><div>GO CANNING</div></a>"+
					"</div>"+
				"</div>"+
			"</div>").insertAfter('#current').offset({
				top:topVal*1.1,
				left:leftVal-$(window).width()*0.12
			});;


	})

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