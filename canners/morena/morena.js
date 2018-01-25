
  $(function() {
    var controller = new ScrollMagic.Controller();


    function pathPrepare ($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
    }

    var $m_path = $("path#morena_path");
    pathPrepare($m_path);



    var tween = new TimelineMax()
                  .add(TweenMax.to('#morena_path', 1 , {strokeDashoffset: 0, ease:Linear.easeNone})); // draw draw dot for 0.1
                          // 
    var scene = new ScrollMagic.Scene({triggerElement: "#container", duration: 4300,tweenChanges: true, reverse: true})
            .setTween(tween)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);



    var dotTween2 = new TimelineMax()
                      .add(TweenMax.to('#mark_2',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene2 = new ScrollMagic.Scene({triggerElement: "#mark_2",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween2)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);



    var dotTween3 = new TimelineMax()
                      .add(TweenMax.to('#mark_3',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene3 = new ScrollMagic.Scene({triggerElement: "#mark_3",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween3)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween4 = new TimelineMax()
                      .add(TweenMax.to('#mark_4',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene4 = new ScrollMagic.Scene({triggerElement: "#mark_4",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween4)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween5 = new TimelineMax()
                      .add(TweenMax.to('#mark_5',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene5 = new ScrollMagic.Scene({triggerElement: "#mark_5",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween5)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween6 = new TimelineMax()
                      .add(TweenMax.to('#mark_6',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene6 = new ScrollMagic.Scene({triggerElement: "#mark_6",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween6)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween7 = new TimelineMax()
                      .add(TweenMax.to('#mark_7',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene7 = new ScrollMagic.Scene({triggerElement: "#mark_7",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween7)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween8 = new TimelineMax()
                      .add(TweenMax.to('#mark_8',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene8 = new ScrollMagic.Scene({triggerElement: "#mark_8",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween8)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween9 = new TimelineMax()
                      .add(TweenMax.to('#mark_9',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene9 = new ScrollMagic.Scene({triggerElement: "#mark_9",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween9)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween10 = new TimelineMax()
                      .add(TweenMax.to('#mark_10',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene10 = new ScrollMagic.Scene({triggerElement: "#mark_10",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween10)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween11 = new TimelineMax()
                      .add(TweenMax.to('#mark_11',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene11 = new ScrollMagic.Scene({triggerElement: "#mark_11",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween11)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween12 = new TimelineMax()
                      .add(TweenMax.to('#mark_12',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene12 = new ScrollMagic.Scene({triggerElement: "#mark_12",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween12)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween13 = new TimelineMax()
                      .add(TweenMax.to('#mark_13',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene13 = new ScrollMagic.Scene({triggerElement: "#mark_13",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween13)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween14 = new TimelineMax()
                      .add(TweenMax.to('#mark_14',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene14 = new ScrollMagic.Scene({triggerElement: "#mark_14",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween14)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween15 = new TimelineMax()
                      .add(TweenMax.to('#mark_15',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene15 = new ScrollMagic.Scene({triggerElement: "#mark_15",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween15)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween16 = new TimelineMax()
                      .add(TweenMax.to('#mark_16',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene16 = new ScrollMagic.Scene({triggerElement: "#mark_16",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween16)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween17 = new TimelineMax()
                      .add(TweenMax.to('#mark_17',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene17 = new ScrollMagic.Scene({triggerElement: "#mark_17",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween17)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    var dotTween18 = new TimelineMax()
                      .add(TweenMax.to('#mark_18',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene18 = new ScrollMagic.Scene({triggerElement: "#mark_18",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween18)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween19 = new TimelineMax()
                      .add(TweenMax.to('#mark_19',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene19 = new ScrollMagic.Scene({triggerElement: "#mark_19",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween19)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween20 = new TimelineMax()
                      .add(TweenMax.to('#mark_20',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene20 = new ScrollMagic.Scene({triggerElement: "#mark_20",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween20)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween21 = new TimelineMax()
                      .add(TweenMax.to('#mark_21',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene21 = new ScrollMagic.Scene({triggerElement: "#mark_21",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween21)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween22 = new TimelineMax()
                      .add(TweenMax.to('#mark_22',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene22 = new ScrollMagic.Scene({triggerElement: "#mark_22",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween22)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween23 = new TimelineMax()
                      .add(TweenMax.to('#mark_23',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene23 = new ScrollMagic.Scene({triggerElement: "#mark_23",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween23)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween24 = new TimelineMax()
                      .add(TweenMax.to('#mark_24',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene24 = new ScrollMagic.Scene({triggerElement: "#mark_24",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween24)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween25 = new TimelineMax()
                      .add(TweenMax.to('#mark_25',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene25 = new ScrollMagic.Scene({triggerElement: "#mark_25",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween25)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween26 = new TimelineMax()
                      .add(TweenMax.to('#mark_26',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene26 = new ScrollMagic.Scene({triggerElement: "#mark_26",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween26)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween27 = new TimelineMax()
                      .add(TweenMax.to('#mark_27',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene27 = new ScrollMagic.Scene({triggerElement: "#mark_27",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween27)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween28 = new TimelineMax()
                      .add(TweenMax.to('#mark_28',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene28 = new ScrollMagic.Scene({triggerElement: "#mark_28",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween28)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween29 = new TimelineMax()
                      .add(TweenMax.to('#mark_29',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene29 = new ScrollMagic.Scene({triggerElement: "#mark_29",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween29)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    var dotTween30 = new TimelineMax()
                      .add(TweenMax.to('#mark_30',1,{visibility:'visible', ease:Linear.easeIn})); 
    var scene30 = new ScrollMagic.Scene({triggerElement: "#mark_30",offset: 800,tweenChanges: true, reverse: false})
            .setTween(dotTween30)
            // .setPin('#morena_path')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
 

  });
