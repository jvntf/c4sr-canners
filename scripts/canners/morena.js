


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
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
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
                // .addIndicators() // add indicators (requires plugin)
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
    

    //PINS
    //
    //
    
    // var pinScene = new ScrollMagic.Scene({triggerElement: '#test', duration:400})
    //                 .on("start", function (event) {
    //                     pathScene.remove();
    //                     })
    //                 .on("end", function (event) {
    //                     pathScene.addTo(controller);
    //                     })
    //                 // .setPin('#container')
    //                 .addIndicators()
    //                 .addTo(controller);





  });
