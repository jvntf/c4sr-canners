var pathDoc, path_obj, path, controller, currentCanner;
var legendDoc, legend_obj;

window.onload=function(){
    $('body').css({display:'block'});
    loadPath().then(loadlegend).then(loadCameraImages).then(loadDataPage);
    $(document).click(function(e) {
        closeDrop();
        closeImgs();
        stopVids();
    })
    $('#canners_menu').click((e)=> dropDown(e));
}
window.onresize = function(){
    var loc = legendDoc.getElementById("sc-image").getBoundingClientRect();
    positionSC(loc);
    console.log("res")
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
        currentCanner = document.URL.split("!")[1];
        var obj = document.createElement('object');
        obj.data = currentCanner+'/'+currentCanner+'.svg';
        obj.id = 'path_obj';
        obj.setAttribute('type',"image/svg+xml");
        obj.setAttribute("style","visibility:hidden");
        obj.onload = () => {
            path_obj = document.getElementById("path_obj");
            path_obj.setAttribute("style","visibility:visible");
            pathDoc = path_obj.contentDocument;
            path = pathDoc.getElementById("path");
            controller = new ScrollMagic.Controller();
            preparePath(path).then(makeAllTweens);
            $(pathDoc).click(function(e) {
                closeDrop();
                closeImgs();
                stopVids();
            })
            resolve();

        }
        document.getElementById('container').appendChild(obj);
    })
}
let loadlegend = function(){
    return new Promise(function(resolve,reject){
        var obj = document.createElement('object');
        obj.data = currentCanner+'/legend.svg';
        obj.id = 'legend_obj';
        obj.setAttribute('type',"image/svg+xml");
        obj.setAttribute("style","height:88vh");
        obj.onload = () => {
            var scLoc = obj.contentDocument.getElementById("sc-image").getBoundingClientRect();
            loadSC(scLoc);
            legend_obj = obj;
            legendDoc = obj.contentDocument;
            makeDataPageTweens();
            $(obj.contentDocument).click(function(e) {
                closeDrop();
                closeImgs();
                stopVids();
            })
            resolve();
        }
        document.getElementById('legend').appendChild(obj);
    })
}
let loadCameraImages = function(){
    return new Promise(function(resolve,reject){
        var files = cannerAttr[currentCanner].images;
        var cameras = pathDoc.getElementsByClassName("cameraImage");

        var offset = $("#path_obj")[0].getBoundingClientRect();
        var header = $("#menu")[0].getBoundingClientRect();
        console.log(cameras);
        for(let [index,file] of files.entries()){
            let img;
            if (file.includes("jpg")){
                img = $("<img>",{
                    class:'camPopImg',
                    src:"../img/"+currentCanner+"/camera/"+file,
                    style: "width:2vw",
                }).appendTo('#container');

                img[0].onclick = function(e){
                    e.stopPropagation()
                    closeImgs().then( ()=>{
                        stopVids();
                        $(this).css({marginTop:"3.5vh", marginLeft:"2.5vw",width:"20vw"})
                                .animate({"opacity":1});
                    });
                    
                }
            } else{
                img = $("<video>",{
                    controls:"",
                    class:'camPopImg',
                    src:"../img/"+currentCanner+"/camera/"+file,
                    style: "width:10vw",
                }).appendTo('#container');

              img[0].onclick = function(e){
                    e.stopPropagation()
                $(this).css({marginTop:"3.5vh", marginLeft:"2.5vw",width:"20vw"})
                        .animate({"opacity":1});
                        this.play();
                console.log("click")
              }
                img[0].onplay = function(e){
                //     e.stopPropagation()
                //     closeImgs().then( ()=>{
                        $(this).css({marginTop:"3.5vh", marginLeft:"2.5vw",width:"20vw"})
                                .animate({"opacity":1});
      
                //     });
                }

            }
            img.css({
                position:"absolute",
                top: cameras[index].getBoundingClientRect().y +offset.y + header.y + window.scrollY,
                left: cameras[index].getBoundingClientRect().left +offset.left,
                cursor:"pointer",
                opacity:0

            });

            if(index === files.length-1){
                resolve();
            }
        } 
    })
}
let closeImgs = function(){
    return new Promise(function(resolve,reject){
        $(".camPopImg").animate({"opacity":0},
            () => {
                $(".camPopImg").css({marginTop:"0", marginLeft:"0",width:"2vw"})
                resolve(); 
            })
            // .css({marginTop:"0", marginLeft:"0",width:"2vw"})
        
    })
    
}

let stopVids = function(){
    for(let vid of $('video').toArray()){
        console.log(vid)
        if (vid){
            vid.pause();
        }
    }
}
let loadDataPage = function(){
    return new Promise(function(resolve,reject){
        var obj = document.createElement('object');
        obj.data = currentCanner+'/data_page.svg';
        obj.id = 'data_page_obj';
        obj.setAttribute('type',"image/svg+xml");
        obj.onload = () => {
            $(obj.contentDocument).click(function(e) {
                closeDrop();
                closeImgs();
                stopVids();
            })
            resolve();
        }
        document.getElementById('data').appendChild(obj);
    })
}

let preparePath = function(path){
    return new Promise((resolve, reject) => {
        console.log(path);
        var lineLength = path.getTotalLength();
        path.setAttribute("stroke-dasharray", lineLength);
        path.setAttribute("stroke-dashoffset", lineLength);
        resolve();
    });
}
let open = function(index){
    var imgs = document.getElementsByClassName(".cameraImage");

}

let makeAllTweens = function(){
    return new Promise(function(resolve, reject){
                // console.log("makeAll")
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
let makeAppear = function(layer){


    var currentLayer = pathDoc.getElementById(layer).childNodes
    // console.log(currentLayer)
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
            var currentLayerScene = new ScrollMagic.Scene({triggerElement: path_obj, triggerHook: 0.7,
                duration:0, offset: item.getBoundingClientRect().top,
                tweenChanges: true, reverse: true})
                    .setTween(currentLayerTween)
                    // .setPin('#morena_path')
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
        }
    })

}
let makePathTween = function(){
    var pathTween = new TimelineMax()
                  .add(TweenMax.to(path,  1,{strokeDashoffset: 0, ease:Linear.easeNone, useFrames:true})); // draw draw dot for 0.1
                          // 
    var pathScene = new ScrollMagic.Scene({triggerElement: "#path_obj", triggerHook: 0.9,
        duration:path.getBoundingClientRect().height,
        offset: path.getBoundingClientRect().top,
        tweenChanges: true, reverse: true})
            .setTween(pathTween)
            // .setPin('#legend')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}
let makeDataPageTweens = function(){
    var leg_obj = document.getElementById("legend_obj").contentDocument.getElementById("legend_icons");
    var data_leg_obj = document.getElementById("legend_obj").contentDocument.getElementById("data_legend_icons");
    // console.log(leg_obj, data_leg_obj)
    var pathTween = new TimelineMax()
                  .add(TweenMax.to(leg_obj, 0.3 , {opacity:0 ,ease:Linear.easeNone}))
                  .add(TweenMax.to(data_leg_obj, 0.3 , {opacity:1,delay:0.3,ease:Linear.easeNone})); // draw draw dot for 0.1
                          
    var pathScene = new ScrollMagic.Scene({triggerElement: "#data",
        duration:0,
        tweenChanges: true, reverse: true})
            .setTween(pathTween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}
let loadSC = function(location){
    $("#sc")
    .attr("src", cannerAttr[currentCanner].sclink)
    .css({
        position:"fixed",
        zIndex:100,
        display:"block"
    });
    positionSC(location);
}
let positionSC = function(location){
    var offset = $("#legend_obj")[0].getBoundingClientRect();
    $("#sc").css({
        top:location.top+offset.top+"px",
        left:location.left + offset.left +"px",
    })
}
let makeClock = function(){
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

