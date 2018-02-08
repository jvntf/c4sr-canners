


  $(function() {
    // jQuery.scrollSpeed(20, 800);
    var controller = new ScrollMagic.Controller();
   

    function pathPrepare ($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
    }

    var $m_path = $("path#morena_path");
    pathPrepare($m_path);
    
    var dur = document.getElementById('container').clientHeight * .9
    console.log(dur);   

    // var clientHeight = document.getElementById('myDiv').clientHeight
    var pathTween = new TimelineMax()
                  .add(TweenMax.to('#morena_path', 1 , {strokeDashoffset: 0, ease:Linear.easeNone})); // draw draw dot for 0.1
                          // 
    var pathScene = new ScrollMagic.Scene({triggerElement: "#morena_path", 
        duration: dur,
        tweenChanges: true, reverse: true})
            .setTween(pathTween)
            // .setPin('#legend')
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var morenaTween = new TimelineMax()
                    .add(TweenMax.to('#portrait',1, {width:350, ease:Linear.easeNone}));
    var morenaScene = new ScrollMagic.Scene({triggerElement:"#portrait",triggerHook:'onLeave',
        duration:400, tweenChanges: true, reverse:true})
        .setTween(morenaTween)
        // .addIndicators()
        .addTo(controller);

    var morenaTween = new TimelineMax()
                    .add(TweenMax.to('#container',1, {marginTop:350, ease:Linear.easeNone}))
                    // .add(TweenMax.to("#legend svg",1,{position:'fixed'}));
    var morenaScene = new ScrollMagic.Scene({triggerElement:"#portrait",triggerHook:'onLeave',
        duration:400, tweenChanges: true, reverse:true})
        .setTween(morenaTween)
        // .addIndicators()
        .addTo(controller);


    var morenaTween = new TimelineMax()
                    .add(TweenMax.to('#legend svg',0.1, {visibility:'visible', ease:Linear.easeNone}))
                    .add(TweenMax.to('audio',0.5, {visibility:'visible', ease:Linear.easeNone}))
                    .add(TweenMax.to('#legend svg',0.9, {opacity:1, ease:Linear.easeNone}))
                    // .add(TweenMax.to("#legend svg",1,{position:'fixed'}));
    var morenaScene = new ScrollMagic.Scene({triggerElement:"#morena_path",
        duration:20, tweenChanges: true, reverse:true, offset:-150})
        .setTween(morenaTween)
        // .addIndicators()
        .addTo(controller);

 



    //WINDOW RESIZE UPDATE PARAMS
    $(window).on('resize', function(){
            var dur = document.getElementById('container').clientHeight * .9;
            pathScene.duration(dur);
    });


    // //MILE MARKERS
    // var $mileMarks = $('#mile_marks').children();
    // $mileMarks.toArray().forEach(function(mark,i){

    //     i+=1;
    //     var mileMarkTween = new TimelineMax()
    //                   .add(TweenMax.to('#mile_marks *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
    //                           // 
    //     var mileMarkScene = new ScrollMagic.Scene({triggerElement: '#mile_marks *:nth-child('+i+')', duration:50,
    //         tweenChanges: true, reverse: true})
    //             .setTween(mileMarkTween)
    //             // .setPin('#morena_path')
    //             // .addIndicators() // add indicators (requires plugin)
    //             .addTo(controller);
    // })  


    //THOUOGHTS
    var $thoughts = $('#thoughts').children();
    $thoughts.toArray().forEach(function(thought,i){

        i+=1;
        var thoughtTween = new TimelineMax()
                      .add(TweenMax.to('#thoughts *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var thoughtScene = new ScrollMagic.Scene({triggerElement: '#thoughts *:nth-child('+i+')', duration:50, offset:75,
            tweenChanges: true, reverse: true})
                .setTween(thoughtTween)
                // .setPin('#morena_path')
                // .addIndicators() // add 
                // indicators (requires plugin)
                .addTo(controller);
    })   

    //ENCOUNTERS
    var $encounters = $('#encounters').children();
    $encounters.toArray().forEach(function(thought,i){

        i+=1;
        var encounterTween = new TimelineMax()
                      .add(TweenMax.to('#encounters *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var encountersScene = new ScrollMagic.Scene({triggerElement: '#encounters *:nth-child('+i+')', duration:50, offset:75,
            tweenChanges: true, reverse: true})
                .setTween(encounterTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })   

    //COLLECTION
    var $collections = $('#collections').children();
    $collections.toArray().forEach(function(thought,i){

        i+=1;
        var collectionTween = new TimelineMax()
                      .add(TweenMax.to('#collections *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var collectionscene = new ScrollMagic.Scene({triggerElement: '#collections *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(collectionTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })   

    //EQUIPMENT
    var $equipment = $('#equipment').children();
    $equipment.toArray().forEach(function(thought,i){

        i+=1;
        var equipmentTween = new TimelineMax()
                      .add(TweenMax.to('#equipment *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var equipmentscene = new ScrollMagic.Scene({triggerElement: '#equipment *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(equipmentTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })

    //mile_marks
    var $mile_marks = $('#mile_marks').children();
    $mile_marks.toArray().forEach(function(thought,i){

        i+=1;
        var mile_markTween = new TimelineMax()
                      .add(TweenMax.to('#mile_marks *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var mile_markscene = new ScrollMagic.Scene({triggerElement: '#mile_marks *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(mile_markTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })

    //text_labels
    var $text_labels = $('#text_labels').children();
    $text_labels.toArray().forEach(function(thought,i){

        i+=1;
        var text_labelTween = new TimelineMax()
                      .add(TweenMax.to('#text_labels *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var text_labelscene = new ScrollMagic.Scene({triggerElement: '#text_labels *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(text_labelTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    }) 

    //highlights
    var $highlights = $('#highlights').children();
    $highlights.toArray().forEach(function(thought,i){

        i+=1;
        var highlightTween = new TimelineMax()
                      .add(TweenMax.to('#highlights *:nth-child('+i+') path', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var highlightscene = new ScrollMagic.Scene({triggerElement: '#highlights *:nth-child('+i+') path', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(highlightTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })

    //icons
    var $icons = $('#icons').children();
    $icons.toArray().forEach(function(thought,i){

        i+=1;
        var iconTween = new TimelineMax()
                      .add(TweenMax.to('#icons *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var iconscene = new ScrollMagic.Scene({triggerElement: '#icons *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(iconTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })

    //francesca_comments
    var $francesca_comments = $('#francesca_comments').children();
    $francesca_comments.toArray().forEach(function(thought,i){
        console.log(thought);

        i+=1;
        var francesca_commentTween = new TimelineMax()
                      .add(TweenMax.to('#francesca_comments *:nth-child('+i+')', 1 , {visibility:'visible'}))
                      // .add(TweenMax.to('#francesca_comments *:nth-child('+i+') *', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var francesca_commentscene = new ScrollMagic.Scene({triggerElement: '#francesca_comments *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(francesca_commentTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    }) 

    //real_path
    var $real_path = $('#real_path').children();
    $real_path.toArray().forEach(function(thought,i){

        i+=1;
        var real_pathTween = new TimelineMax()
                      .add(TweenMax.to('#real_path *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var real_pathScene = new ScrollMagic.Scene({triggerElement: '#real_path *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(real_pathTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })   

    var $clock = $('#clock').children();
    $clock.toArray().forEach(function(thought,i){

        i+=1;
        var clockTween = new TimelineMax()
                      .add(TweenMax.to('#clock *:nth-child('+i+')', 1 , {visibility:'visible'})); // draw draw dot for 0.1
                              // 
        var clockScene = new ScrollMagic.Scene({triggerElement: '#clock *:nth-child('+i+')', duration:50,offset:75,
            tweenChanges: true, reverse: true})
                .setTween(clockTween)
                // .setPin('#morena_path')
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
    })   
    






  });
