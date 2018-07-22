$(function(){
	preparepaths();

	$(document).click(function(e) {
	    console.log(e.target)

	    if(e.target.id !=='sound'){
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
	    }
	});


	$('#popup_info').click(function(e){
		console.log("hello")
		e.stopPropagation();
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
		var name = $(this).attr('canner');
		
		if($(this).attr('id')!='current'){
			$('#popup').remove();
			$('.popup_info').remove();
			$('#current').remove();
			$('.data_portrait').css({
				'visibility':'visible'
			},500)
			$('.overlay_path').each(function(i,v){
				if ($(v).attr('canner')=== name){
					return 1
				}

				$(this).animate({
					strokeDashoffset: $(this).attr('length'),
				},1000);
			});
		}

		
		$(this).addClass('active')
			.css({
			'visibility':'hidden'
		})


		var target = '#'+$(this).attr('canner')+'_overlay'
		$(target).css({
						'stroke-width':'2px',
							'stroke':'#222222'});


		// console.log($(this).attr('canner'))

		var mySvg = $(target).drawsvg({
			duration:700,
			easing:'linear'
		});
		mySvg.drawsvg('animate');

		
		


		var topVal = $(this).position().top
		var leftVal = $(this).position().left
		var rightVal=$(this).position().right
		
		// 

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
						 "<audio id='sound' controls>"+
						  "<source src='../../canners/morena/meet_morena.mp3' type='audio/mpeg'>"+
						  "Your browser does not support the audio tag."+
						"</audio>"+
					"</div>"+
					"<div id='link'>"+
						"<img src='img/morena/Cart.png'>"+
						"<a href='canners/index.html#!"+name+"'><div>GO CANNING</div></a>"+
					"</div>"+
				"</div>"+
			"</div>").insertAfter('#current').offset({
				top:topVal*1.1,
				left:leftVal-$(window).width()*0.12
			});;


	})

	function preparepaths(){
		
		$('.overlay_path').each(function(){
			
			var lineLength = this.getTotalLength();
			$(this).css("stroke-dasharray", lineLength);
			$(this).css("stroke-dashoffset", lineLength);
			$(this).attr('length',lineLength);
		})
	}




})