let reload = function(canner){
    var old = window.location.href;
    window.location.href = old+"canners/index.html#!"+canner;
    console.log(window.location.href)
    // window.location.reload(true);
}
let dropDown = function(e){
	console.log("dropdown")
    e.stopPropagation();
    var $menu = $("#dropdown");
    if ($menu.attr("state")==="open"){
        $menu.attr("state","closed").fadeOut();
    }else if($menu.attr("state")==="closed"){
        $menu.attr("state","open").fadeIn();
        console.log($menu)
    }
}
let closeDrop = function(){
    // e.stopPropagation();
    var $menu = $("#dropdown");
    if ($menu.attr("state")==="open"){
        $menu.attr("state","closed").fadeOut();
    }
}

$(function(){
	preparepaths();
	$('#canners_menu').click((e)=> dropDown(e));

	$(document).click(function(e) {
		closeDrop()
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
		var rightVal= $(this).position().right
		
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

	console.log(name);
	var popup = $("<div>",{id:"popup"})
	var namediv = $("<div>",{
		id:"name"}).html( name.replace(/_/g," ").toProperCase())
	var scframe = $("<iframe>",{
		id:"sc",
		width:"100%",
		height:"20",
		scrolling:"no",
		frameborder:"no",
		src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480189960%3Fsecret_token%3Ds-cknB8&color=%23ff5500&inverse=false&auto_play=false&show_user=false"
	})
	var link = $("<div>",{id:"goCanLink"})
	var cartimg = $("<img>").attr("src","img/morena/Cart.png")
	.css({
		width: "3vh",
		marginRight:"2vw"
	})
	var canlink = $("<a>").attr("href","canners/index.html#!" + name)
	.html("GO CANNING")
	.css({fontFamily: 'Amatic SC'});

	link.append(cartimg).append(canlink);

	popup.append(namediv).append(scframe).append(link);
	
	if(name==="venzen"){
		popup.insertAfter("#current").offset({
					top:topVal*1.06,
					left:leftVal+50
				});
	}else{
		popup.insertAfter("#current").offset({
					top:topVal*1.1,
					left:leftVal-$(window).width()*0.12
				});
	}
	

		// $("<div id='popup'>"+
		// 		"<div id='name'>"+name[0].toUpperCase()+name.slice(1)+"</div>"+
		// 		"<div id='popup_info'>"+ 

		// 			"<div id='soundbite'>"+
		// 				"<div id='play_pause'></div>"+
		// 				"<div>MEET MORENA</div>"+
		// 				 "<audio id='sound' controls>"+
		// 				  "<source src='../../canners/morena/meet_morena.mp3' type='audio/mpeg'>"+
		// 				  "Your browser does not support the audio tag."+
		// 				"</audio>"+
		// 			"</div>"+

		// 			"<div id='link'>"+
		// 				"<img src='img/morena/Cart.png'>"+
		// 				"<a href='canners/index.html#!"+name+"'><div>GO CANNING</div></a>"+
		// 			"</div>"+
		// 		"</div>"+
		// 	"</div>").insertAfter('#current').offset({
		// 		top:topVal*1.1,
		// 		left:leftVal-$(window).width()*0.12
		// 	});


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

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};