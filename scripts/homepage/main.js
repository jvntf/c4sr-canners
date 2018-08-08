

$(function(){
	preparepaths();
	makeDropDownMenu();
	// $('#canners_menu').click((e)=> dropDown(e));
	// $('#canners_menu').hover( (e) => $("#dropdown").fadeIn(), (e)=> $("#dropdown").fadeOut());
	$('#canners_menu').mouseenter( (e) => $("#dropdown").fadeIn());
	$('#dropdown').mouseleave( (e) => {
		var next = e.toElement || e.relatedTarget;
		console.log(next)
		if (next.id === "buttons"){
			console.log("nothing");
		}else{
			$("#dropdown").fadeOut()
		}
	});
	$(".page").mouseenter( () => $("#dropdown").fadeOut());

	$(document).click(function(e) {
		// closeDrop()
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
			$('#legend_toggle div:nth-child(2)').html('SHOW LEGEND');
			$('#triangle').addClass('On').removeClass('Off');

		}else{
			$('#legend').fadeIn().addClass('on');
			$('#legend_toggle div:nth-child(2)').html('HIDE LEGEND');
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



		var mySvg = $(target).drawsvg({
			duration:700,
			easing:'linear'
		});
		mySvg.drawsvg('animate');





		var topVal = $(this).position().top
		var leftVal = $(this).position().left
		var rightVal= $(this).position().right


		$("<img id='current' class='data_portrait' src='img/homepage/data_portraits/"+name+".png'/>").insertAfter("#paths")
			.offset({
				top:topVal,
				left:leftVal
			})
			.css({
				transform:'scale(2)',
				zIndex:10
			});

		// $("<div")

	var popup = $("<div>",{id:"popup"})
	popup.css({display:"none"});
	var namediv = $("<div>",{
		id:"name"}).html( name.replace(/_/g," ").toProperCase())

	var scframe;

	if(name==="morena"){
		scframe = $("<div>",{
            id:"sc",
            width: "100%",
            height: "20"
        }).html("<a href='https://brown.columbia.edu/canners-nyc-goes-live/' target='_blank'>Meet Morena</a>")
        .css({
        	fontFamily:"Amatic SC",
        	marginBottom:"2vh"
        })
	}
	else{
		scframe = $("<iframe>",{
			id:"sc",
			width:"100%",
			height:"20",
			scrolling:"no",
			frameborder:"no",
			src:cannerAttr[name].sclink
		})
	}

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
	popup.fadeIn();

	if(name==="venzen"){
		popup.insertAfter("#current").offset({
					top:topVal*1.06,
					left:leftVal+50
				});
	}else{
		popup.insertAfter("#current").offset({
					top:topVal*1.1,
					left:leftVal-$(window).width()*0.15
				});
	}

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

let makeDropDownMenu = function(){
	var $menu = $("#canners_menu");
	console.log($menu.width());
	$("#dropdown").css({
		top: 0 + "px",
		left: $menu.offset().left + "px",
		width: $menu.width() + "px"
	})
}
let reload = function(canner){
    var old = window.location.href;

    console.log(window.location.origin)

    window.location.href = window.location.origin+"/canners/index.html#!"+canner;
    console.log(window.location.href)
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
