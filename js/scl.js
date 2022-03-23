function delay(t) {
  setTimeout('initFadeIn()', t);
}

function initFadeIn() {
  $("body").css("visibility", "visible");
  $("body").fadeIn(300);
}

function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions2 = slide({
    name : "instructions2",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions3 = slide({
    name : "instructions3",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions4 = slide({
    name : "instructions4",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.causalPrior = slide({
    name : "causalPrior",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions0 = slide({
    name : "instructions0",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions01 = slide({
    name : "instructions01",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions02 = slide({
    name : "instructions02",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions03 = slide({
    name : "instructions03",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.instructions04 = slide({
    name : "instructions04",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.conditionTwo = slide({
    name : "conditionTwo",
    start: function() {
    
      document.getElementById('myVideo2').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('start-video2').play()
      document.getElementById('toggler2').style.visibility = 'hidden';
      document.getElementById('myVideo2').play()


     // exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  slides.conditionThree = slide({
    name : "conditionThree",
    start: function() {
      document.getElementById('myVideo3').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('start-video3').play()
      document.getElementById('toggler3').style.visibility = 'hidden';
      document.getElementById('myVideo3').play()
      //  exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  slides.conditionRepeat = slide({
    name : "conditionRepeat",
    start: function() {
    
      document.getElementById('myVideoR').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('start-videoR').play()
      document.getElementById('togglerR').style.visibility = 'hidden';
      document.getElementById('myVideoR').play()


     // exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  slides.conditionVaried = slide({
    name : "conditionVaried",
    start: function() {
      document.getElementById('myVideoV').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      exp.go();// What you want to do after the event
    }
    },
    button : function() {
      document.getElementById('start-videoV').play()
      document.getElementById('togglerV').style.visibility = 'hidden';
      document.getElementById('myVideoV').play()
      //  exp.go(); //use exp.go() if and only if there is no "present" data.
    } // remove for actual

  });

  var randomSort = function(arr){ 
    range = []
    output = []
  
    for(i = 0; i < arr.length; i++) {
      range = range.concat(i)
    }
  
    var getRandomFromBucket = function(bucket) {
      var randomIndex = Math.floor(Math.random()*bucket.length);
      return bucket.splice(randomIndex, 1)[0];
    }
  
    for (i = 0; i < arr.length; i++) { 
      randomIndex = getRandomFromBucket(range)
      output = output.concat(arr[randomIndex])
    }
    return output
  }

  slides.causalMatrix0 = slide({
    name : "causalMatrix0",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue0]:checked').length == 0|$('input[name=pink0]:checked').length == 0|$('input[name=orange0]:checked').length == 0|$('input[name=bp0]:checked').length == 0|$('input[name=po0]:checked').length == 0|$('input[name=bo0]:checked').length == 0|$('input[name=all0]:checked').length == 0|$('input[name=other0]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause0RT": this.RT,
          "cause0Blue" : $('input[name="blue0"]:checked').val(),
          "cause0Pink" : $('input[name="pink0"]:checked').val(),
          "cause0Orange" : $('input[name="orange0"]:checked').val(),
          "cause0B&P" : $('input[name="bp0"]:checked').val(),
          "cause0P&O" : $('input[name="po0"]:checked').val(),
          "cause0B&O" : $('input[name="bo0"]:checked').val(),
          "cause0All" : $('input[name="all0"]:checked').val(),
          "cause0Other" : $('input[name="other0"]:checked').val()
        }
        )
    }
  });

  slides.causalMatrix1 = slide({
    name : "causalMatrix1",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue1]:checked').length == 0|$('input[name=pink1]:checked').length == 0|$('input[name=orange1]:checked').length == 0|$('input[name=bp1]:checked').length == 0|$('input[name=po1]:checked').length == 0|$('input[name=bo1]:checked').length == 0|$('input[name=all1]:checked').length == 0|$('input[name=other1]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause1RT": this.RT,
          "cause1Blue" : $('input[name="blue1"]:checked').val(),
          "cause1Pink" : $('input[name="pink1"]:checked').val(),
          "cause1Orange" : $('input[name="orange1"]:checked').val(),
          "cause1B&P" : $('input[name="bp1"]:checked').val(),
          "cause1P&O" : $('input[name="po1"]:checked').val(),
          "cause1B&O" : $('input[name="bo1"]:checked').val(),
          "cause1All" : $('input[name="all1"]:checked').val(),
          "cause1Other" : $('input[name="other1"]:checked').val()
        }
        )
    }
  });

  slides.causalMatrix2 = slide({
    name : "causalMatrix2",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue2]:checked').length == 0|$('input[name=pink2]:checked').length == 0|$('input[name=orange2]:checked').length == 0|$('input[name=bp2]:checked').length == 0|$('input[name=po2]:checked').length == 0|$('input[name=bo2]:checked').length == 0|$('input[name=all2]:checked').length == 0|$('input[name=other2]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause2RT": this.RT,
          "cause2Blue" : $('input[name="blue2"]:checked').val(),
          "cause2Pink" : $('input[name="pink2"]:checked').val(),
          "cause2Orange" : $('input[name="orange2"]:checked').val(),
          "cause2B&P" : $('input[name="bp2"]:checked').val(),
          "cause2P&O" : $('input[name="po2"]:checked').val(),
          "cause2B&O" : $('input[name="bo2"]:checked').val(),
          "cause2All" : $('input[name="all2"]:checked').val(),
          "cause2Other" : $('input[name="other2"]:checked').val()
        }
        )
    }
  });

  slides.causalMatrix3 = slide({
    name : "causalMatrix3",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue3]:checked').length == 0|$('input[name=pink3]:checked').length == 0|$('input[name=orange3]:checked').length == 0|$('input[name=bp3]:checked').length == 0|$('input[name=po3]:checked').length == 0|$('input[name=bo3]:checked').length == 0|$('input[name=all3]:checked').length == 0|$('input[name=other3]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause3RT": this.RT,
          "cause3Blue" : $('input[name="blue3"]:checked').val(),
          "cause3Pink" : $('input[name="pink3"]:checked').val(),
          "cause3Orange" : $('input[name="orange3"]:checked').val(),
          "cause3B&P" : $('input[name="bp3"]:checked').val(),
          "cause3P&O" : $('input[name="po3"]:checked').val(),
          "cause3B&O" : $('input[name="bo3"]:checked').val(),
          "cause3All" : $('input[name="all3"]:checked').val(),
          "cause3Other" : $('input[name="other3"]:checked').val()
        }
        )
    }
  });

  slides.causalMatrix4 = slide({
    name : "causalMatrix4",
    start: function() {
      $(".err").hide();
      this.startTime = Date.now();
  
    },
    button : function() {

      if($('input[name=blue4]:checked').length == 0|$('input[name=pink4]:checked').length == 0|$('input[name=orange4]:checked').length == 0|$('input[name=bp4]:checked').length == 0|$('input[name=po4]:checked').length == 0|$('input[name=bo4]:checked').length == 0|$('input[name=all4]:checked').length == 0|$('input[name=other4]:checked').length == 0){
        $(".err").show();
      } else {
  
        this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
        this.log_responses();
  
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        exp.go()
      }
  
    },
  
    log_responses : function() {
      append(exp.data,
        {
          "cause4RT": this.RT,
          "cause4Blue" : $('input[name="blue4"]:checked').val(),
          "cause4Pink" : $('input[name="pink4"]:checked').val(),
          "cause4Orange" : $('input[name="orange4"]:checked').val(),
          "cause4B&P" : $('input[name="bp4"]:checked').val(),
          "cause4P&O" : $('input[name="po4"]:checked').val(),
          "cause4B&O" : $('input[name="bo4"]:checked').val(),
          "cause4All" : $('input[name="all4"]:checked').val(),
          "cause4Other" : $('input[name="other4"]:checked').val()
        }
        )
    }
  });

slides.attention1 =  slide({ //check this!!!
  name : "attention1",

  //this gets run only at the beginning of the block
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function(){

    if($('input[name=blueA1]:checked').length == 0|$('input[name=pinkA1]:checked').length == 0|$('input[name=orangeA1]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      exp.go();
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "attention1RT": this.RT,
        "attention1Blue" : $('input[name="blueA1"]:checked').val(),
        "attention1Pink" : $('input[name="pinkA1"]:checked').val(),
        "attention1Orange" : $('input[name="orangeA1"]:checked').val()
      }
      )

  }
});

slides.attention2 =  slide({ //check this!!!
  name : "attention2",

  //this gets run only at the beginning of the block
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function(){

    if($('input[name=blueA2]:checked').length == 0|$('input[name=pinkA2]:checked').length == 0|$('input[name=orangeA2]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      exp.go();
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "attention2RT": this.RT,
        "attention2Blue" : $('input[name="blueA2"]:checked').val(),
        "attention2Pink" : $('input[name="pinkA2"]:checked').val(),
        "attention2Orange" : $('input[name="orangeA2"]:checked').val()
      }
      )

  }
});

slides.attention3 =  slide({ //check this!!!
  name : "attention3",

  //this gets run only at the beginning of the block
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function(){

    if($('input[name=blueA3]:checked').length == 0|$('input[name=pinkA3]:checked').length == 0|$('input[name=orangeA3]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      exp.go();
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "attention3RT": this.RT,
        "attention3Blue" : $('input[name="blueA3"]:checked').val(),
        "attention3Pink" : $('input[name="pinkA3"]:checked').val(),
        "attention3Orange" : $('input[name="orangeA3"]:checked').val()
      }
      )

  }
});

slides.attention4 =  slide({ //check this!!!
  name : "attention4",

  //this gets run only at the beginning of the block
  start: function() {
    $(".err").hide();
    this.startTime = Date.now();

  },
  button : function(){

    if($('input[name=blueA4]:checked').length == 0|$('input[name=pinkA4]:checked').length == 0|$('input[name=orangeA4]:checked').length == 0) {
      $(".err").show();
    } else {

      this.RT = (Date.now() - this.startTime) / 1000; // record time spent on trial
      this.log_responses();

      exp.go();
    }

  },

  log_responses : function() {
    append(exp.data,
      {
        "attention4RT": this.RT,
        "attention4Blue" : $('input[name="blueA4"]:checked').val(),
        "attention4Pink" : $('input[name="pinkA4"]:checked').val(),
        "attention4Orange" : $('input[name="orangeA4"]:checked').val()
      }
      )

  }
});

slides.subj_info =  slide({
  name : "subj_info",
  start: function() {
    $(".err").hide();

  },
  submit : function(e){
    //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
    append(exp.data, 
      {
      url : window.location.href,
      id : getID(window.location.href),
      age : $("#age").val(),
      gender : $("#gender").val(),
      citizenship : $("#citizenship").val(),
      ethnicity: $("#ethnicity").val(),
      year : $("#year").val(),
      degree: $("#degree").val(),
      comments : $("#comments").val(),
      condition : exp.condition,
      totalRT : (Date.now() - exp.startT)/60000,
      browser : exp.system["Browser"],
      os : exp.system["OS"],
      screenH: exp.system["screenH"],
      screenUH: exp.system["screenUH"],
      screenW: exp.system["screenW"],
      screenUW: exp.system["screenUW"]
    }
    )

    if(!Number.isNaN(parseInt($("#age").val())) || $("#age").val() == "") { //age should be a number

      exp.go(); //use exp.go() if and only if there is no "present" data.
    } else {

      $(".err").show();
    }
    
  }
});




  //////////////////////////////


  slides.thanks = slide({
    name : "thanks",
    start : function() {

      setTimeout(function() {sendDataToServer(exp.data);
      }, 1000);
      
    }
  });

  // simple language comprehension check to include at beginning of experiment
  slides.botcaptcha = slide({
     name : "botcaptcha",
     bot_trials : 0,
     start: function() {
       $("#error").hide();
       $("#error_incorrect").hide();
       $("#error_2more").hide();
       $("#error_1more").hide();
       // list of speaker names to be sampled from
       speaker = _.sample(["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles"]);
       // list of listener names to be sampled from
       listener = _.sample(["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Margaret"]);
       // create the utterance
       this.bot_utterance = speaker + " says to " + listener + ": It's a beautiful day, isn't it?"
       // creat ethe question
       this.bot_question = "Who is " + speaker + " talking to?"
       // append the utterance and the question to the view
       var bot_sentence = document.createElement("p");
       var bot_question = document.createElement("p");
       var content = document.createTextNode(this.bot_utterance);
       var q_content = document.createTextNode(this.bot_question);
       bot_sentence.name = "bot_sentence";
       bot_question.name = "bot_question";
       bot_sentence.appendChild(content);
       bot_question.appendChild(q_content);
       document.getElementById('bot_context').appendChild(bot_sentence);
       document.getElementById('bot_context').appendChild(document.createElement("br"));
       document.getElementById('bot_context').appendChild(bot_question);
       document.getElementById('bot_context').appendChild(document.createElement("br"));

     },
     button: function() {
       // get the participants' input
       bot_response = $("#botresponse").val();
       // append data if response correct
       if (bot_response.toLowerCase() == listener.toLowerCase()) {
         append(exp.data,
          {
            nFails: this.bot_trials,
            botSentence: this.bot_utterance,
            botQuestion: this.bot_question
          }
          )

         exp.go();
         // gives participant two more trials if the response was incorrect
       } else {
         this.bot_trials++;
         $("#error_incorrect").show();
         if (this.bot_trials == 1) {
             $("#error_2more").show();
         } else if (this.bot_trials == 2) {
             $("#error_2more").hide();
             $("#error_1more").show();
         } else {
           // if participant fails, they cannot proceed
             $("#error_incorrect").hide();
             $("#error_1more").hide();
             $("#bot_button").hide();
             $('#botresponse').prop("disabled", true);
             $("#error").show();
         };
       }
     }
  });


  return slides;
}

/// init ///
function init() {

  //; support for uniqueturker
  // https://uniqueturker.myleott.com
  /*
  repeatWorker = false;
  (function(){
      var ut_id = "[INSERT uniqueTurkerID]";
      if (UTWorkerLimitReached(ut_id)) {
        $('.slide').empty();
        repeatWorker = true;
        alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
      }
  })();
  */

  exp.data = {};
  exp.condition = _.sample(["23RV", "V23R", "RV23","3RV2", "2V3R", "R2V3", "3R2V", "V3R2"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };

  //blocks of the experiment:
  if (exp.condition == "23RV"){
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionTwo",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionThree",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionRepeat",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionVaried",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  }  else if(exp.condition == "V23R") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionVaried",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionTwo",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionThree",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionRepeat",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "RV23") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionRepeat",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionVaried",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionTwo",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionThree",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "3RV2") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionThree",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionRepeat",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionVaried",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionTwo",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "2V3R") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionTwo",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionVaried",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionThree",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionRepeat",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "R2V3") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionRepeat",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionTwo",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionVaried",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionThree",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "3R2V") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionThree",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionRepeat",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionTwo",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionVaried",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } else if(exp.condition == "V3R2") {
    exp.structure=[
      "i0",
      "botcaptcha",
      "instructions0",
      "causalPrior",
      "causalMatrix0",
      "instructions01",
      "conditionVaried",
      "causalMatrix1",
      "attention1",
      "instructions02",
      "conditionThree",
      "causalMatrix2",
      "attention2",
      "instructions03",
      "conditionRepeat",
      "causalMatrix3",
      "attention3",
      "instructions04",
      "conditionTwo",
      "causalMatrix4",
      "attention4",
      "subj_info",
      "thanks"
    ];

  } 
  
  

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  );


  // Extra check for US IP addresses
  // TO DO: add support for Canadian IP addresses
  /*
  function USOnly() {
    var accessKey = 'b487843addca6e9ec32e6ae28aeaa022';
     $.ajax({
       url: 'https://geo.ipify.org/api/v1?apiKey=at_nuIzsEIQJAft6sr1WH67UTfFDeMIO',
       dataType: 'jsonp',
       success: function(json) {
       if (json.location.country != 'US') {
         var slides = document.getElementsByClassName('slide');
         for (i=0; i<slides.length; i++) {
          slides[i].style.display = 'none';
         }
          document.getElementsByClassName('progress')[0].style.display = 'none';
          document.getElementById('unique').innerText = "This HIT is only available to workers in the United States. Please click 'Return' to avoid any impact on your approval rating.";
        }
      }
     });
  }
  */

  exp.go(); //show first slide
  //USOnly(); // check US IP address

}



function sendDataToServer(data) {
	$.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzw9dveyhVOhn4zBy3xwmpyBlNirGUBxsVoge13ODWQ2zCmQVZGf_wz6YtOqgdseEAnmQ/exec',
		type: 'post',
    data: data
	});
}
function append(dict1, dict2){
  var i
  var keys = Object.keys(dict2)
  for (i = 0; i < keys.length; i++){
    dict1[keys[i]] = dict2[keys[i]] 
  }
}

function getID(url){
  const start = "PROLIFIC_PID"
  var check = url.match(start)
  var reg = /PROLIFIC_PID=[a-z0-9]+&/
  if(check !== null){
    var extract = url.match(reg)
    return extract[0].slice(13,37)
  } else {
    return null
  }
  
}