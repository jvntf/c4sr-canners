var pathDoc, path_obj, path, controller;

window.onload=function(){
    $('body').css({display:'block'});
    
    loadPath().then(loadlegend).then(loadDataPage);
    $('body').click(()=> closeDrop());
    $('#canners_menu').click((e)=> dropDown(e));
    // $('#dropdown').click(function(e){
    //     e.stopPropagation();
    // });
}

let reload = function(canner){
    var old = window.location.href;
    window.location.href = old.split("!")[0]+"!"+canner;
    window.location.reload(true);
}
let dropDown = function(e){
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
let loadPath = function(){
    return new Promise(function(resolve,reject){
        var canner = document.URL.split("!")[1];
        var obj = document.createElement('object');
        obj.data = canner+'/'+canner+'.svg';
        obj.id = 'path_obj';
        obj.setAttribute('type',"image/svg+xml");
        obj.setAttribute("style","visibility:hidden");
        obj.onload = () => {
            console.log('loaded object')
            path_obj = document.getElementById("path_obj");
            path_obj.setAttribute("style","visibility:visible");
            pathDoc = path_obj.contentDocument;
            path = pathDoc.getElementById("path");
            controller = new ScrollMagic.Controller();
            preparePath(path).then(makeAllTweens);
            resolve();
        }
        document.getElementById('container').appendChild(obj);
    })
}
let loadlegend = function(){
    return new Promise(function(resolve,reject){
        var canner = document.URL.split("!")[1];
        var obj = document.createElement('object');
        obj.data = canner+'/legend.svg';
        obj.id = 'legend_obj';
        obj.setAttribute('type',"image/svg+xml");
        obj.setAttribute("style","height:88vh");

        obj.onload = () => {
            console.log(document.getElementById("legend_obj"))
            makeDataPageTweens();
            resolve();
        }
        document.getElementById('legend').appendChild(obj);
    })
}

let loadDataPage = function(){
    return new Promise(function(resolve,reject){
        var canner = document.URL.split("!")[1];
        var obj = document.createElement('object');
        obj.data = canner+'/data_page.svg';
        obj.id = 'legend_obj';
        obj.setAttribute('type',"image/svg+xml");
        obj.onload = () => {

            resolve();
        }
        document.getElementById('data').appendChild(obj);
    })
}

let preparePath = function(path){
    return new Promise((resolve, reject) => {
        var lineLength = path.getTotalLength();
        path.setAttribute("stroke-dasharray", lineLength);
        path.setAttribute("stroke-dashoffset", lineLength);
        resolve();
    });
}

function makeAllTweens(){
    return new Promise(function(resolve, reject){
        makePathTween();
        makeAppear("content")
        resolve();
    })
        


    // var $clock = $('#clock').children();
    // $clock.toArray().forEach(function(thought,i){

    //     i+=1;
    //     var clockTween = new TimelineMax()
    //                   .add(TweenMax.to('#clock *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
    //                           // 
    //     var clockScene = new ScrollMagic.Scene({triggerElement: '#clock *:nth-child('+i+')', duration:50,offset:75,
    //         tweenChanges: true, reverse: true})
    //             .setTween(clockTween)
    //             // .setPin('#morena_path')
    //             // .addIndicators() // add indicators (requires plugin)
    //             .addTo(controller);
    // })   

}
function makeAppear(layer){

    var currentLayer = pathDoc.getElementById(layer).childNodes
    console.log(currentLayer)
    currentLayer.forEach(function(item,i){
        // console.log(item)
        if (item.data !== undefined){
            if (item.data.trim() === ""){
                // return;
            }
        } else{
            var currentLayerTween = new TimelineMax()
                          .add(TweenMax.to(item, 1 , {visibility:'visible', useFrames:true})); // draw draw dot for 0.1
                                  // 
            var currentLayerScene = new ScrollMagic.Scene({triggerElement: path_obj, triggerHook: 0.4,
                duration:item.getBoundingClientRect().height, offset: item.getBoundingClientRect().top,
                tweenChanges: true, reverse: true})
                    .setTween(currentLayerTween)
                    // .setPin('#morena_path')
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
        }
    })

}
function makePathTween(){
    var pathTween = new TimelineMax()
                  .add(TweenMax.to(path,  1,{strokeDashoffset: 0, ease:Linear.easeNone, useFrames:true})); // draw draw dot for 0.1
                          // 
    var pathScene = new ScrollMagic.Scene({triggerElement: "#path_obj", triggerHook: 0.7,
        duration:path.getBoundingClientRect().height, offset: path.getBoundingClientRect().top,
        tweenChanges: true, reverse: true})
            .setTween(pathTween)
            // .setPin('#legend')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}
function makeDataPageTweens(){
    var leg_obj = document.getElementById("legend_obj").contentDocument.getElementById("legend_icons");
    var data_leg_obj = document.getElementById("legend_obj").contentDocument.getElementById("data_legend_icons");
    console.log(leg_obj, data_leg_obj)
    var pathTween = new TimelineMax()
                  .add(TweenMax.to(leg_obj, 0.3 , {opacity:0 ,ease:Linear.easeNone}))
                  .add(TweenMax.to(data_leg_obj, 0.3 , {opacity:1,delay:0.3,ease:Linear.easeNone})); // draw draw dot for 0.1
                          
    var pathScene = new ScrollMagic.Scene({triggerElement: "#data",
        duration:0,
        tweenChanges: true, reverse: true})
            .setTween(pathTween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}
function makeClock(){
    var theWindow = $(window);
    var winHeight = theWindow.height();
    var animDuration = winHeight * 4;
    var animData = {
        container: document.getElementById('clock'),
        renderer: 'canvas',
        loop: false,
        autoplay: false,
        path: 'data.json'
    };

    var anim = bodymovin.loadAnimation(animData);


    $( window ).scroll(function() {
      animatebodymovin(animDuration, anim);
    });

    function animatebodymovin(duration, animObject) {
      
      var scrollPosition = theWindow.scrollTop();
      var maxFrames = animObject.totalFrames;
      var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      animObject.goToAndStop(frame, true);
      
    }
}

