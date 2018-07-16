var pathDoc, path_obj, path, controller;

window.onload=function(){
    $('body').css({display:'block'});

    // var m_path = document.getElementById("morena_path");
    // console.log(m_path)
    // 
    // makeTweens();
    // makeClock();
    // 
    // 
    path_obj = document.getElementById("path_obj");
    pathDoc = path_obj.contentDocument;
    path = pathDoc.getElementById("path");
    controller = new ScrollMagic.Controller();


    // console.log(pathDoc);
    pathPrepare(path);
    makeAllTweens();


}





// $(window).on('resize', function(){
//       var dur = document.getElementById('container').clientHeight * .9;
//       pathScene.duration(dur);
// });
function makeSoundWave(){
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'grey',
        progressColor: 'orange',
        hideScrollbar: true,
        height: 25,
        barHeight:10,
        barWidth: 1
    });

    wavesurfer.load('meet_morena.mp3');

    $('.playpause').click(function(){
        if (wavesurfer.isPlaying()){
            $('#stop').css('visibility','hidden');
            $('#play').css('visibility','visible');
            wavesurfer.playPause();
        }else{
            $('#stop').css('visibility','visible');
            $('#play').css('visibility','hidden');
            wavesurfer.playPause();


        }
    })

}
function pathPrepare (path) {
    // console.log(path)
    var lineLength = path.getTotalLength();


    path.setAttribute("stroke-dasharray", lineLength);
    path.setAttribute("stroke-dashoffset", lineLength);
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

function makeAllTweens(){    
    makePathTween();
    makeAppear("equipment");
    makeAppear("text_labels");
    makeAppear("icons");
    makeAppear("mile_marks");
    makeAppear("thoughts");
    makeAppear("encounters");
    makeAppear("collections");
    makeAppear("highlights");
    makeAppear("observations_frame");
    makeAppear("observations");
    makeAppear("progress_map_bkg");
    makeAppear("progress_map_comp");


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
    currentLayer.forEach(function(item,i){
        // console.log(item)
        if (item.data !== undefined){
            if (item.data.trim() === ""){
                // return;
            }
        } else{
            var currentLayerTween = new TimelineMax()
                          .add(TweenMax.to(item, 1 , {visibility:'visible'})); // draw draw dot for 0.1
                                  // 
            var currentLayerScene = new ScrollMagic.Scene({triggerElement: path_obj, 
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
                  .add(TweenMax.to(path, 1 , {strokeDashoffset: 0, ease:Linear.easeNone})); // draw draw dot for 0.1
                          // 
    var pathScene = new ScrollMagic.Scene({triggerElement: "#path_obj", 
        duration:path.getBoundingClientRect().height*.9, offset: path.getBoundingClientRect().top,
        tweenChanges: true, reverse: true})
            .setTween(pathTween)
            // .setPin('#legend')
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
}
