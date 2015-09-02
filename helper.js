var flowChart = {
// q are the questions used to determine if you should quit your tech job.
  "q" : [
    {
      "id": "q0",
      "text": "Has it IPO\'d?",
      "type": 1,
      "opt1": "q1",
      "opt2": "q2"
    },
    {
      "id": "q1",
      "text": "Is there free food?",
      "type": 1,
      "opt1": "q3",
      "opt2": "e0"
    },
    {
      "id": "q2",
      "text": "Is it in the Bay Area?",
      "type": 1,
      "opt1": "q4",
      "opt2": "q6"
    },
    {
      "id": "q3",
      "text": "even tacos?",
      "type": 1,
      "opt1": "q5",
      "opt2": "e0"
    },
    {
      "id": "q4",
      "text": "Is it all dudes?",
      "type": 2,
      "opt1": "b0",
      "opt2": "b1"
    },
    {
      "id": "q5",
      "text": "Do you have standing desks?",
      "type": 1,
      "opt1": "q7",
      "opt2": "e0"
    },
    {
      "id": "q6",
      "text": "You'll never get a good exit",
      "type": 3,
      "opt1": "b3"
    },
    {
      "id": "q7",
      "text": "Treadmill desks?",
      "type": 1,
      "opt1": "q10",
      "opt2": "e2"
    },
    {
      "id": "q8",
      "text": "Is \"Moon Shots\" a topic of discussion?",
      "type": 2,
      "opt1": "b2",
      "opt2": "b4"
    },
    {
      "id": "q9",
      "text": "Oh, like the HBO show!",
      "type": 3,
      "opt1": "q12",
    },
    {
      "id": "q10",
      "text": "Free Beer?",
      "type": 1,
      "opt1": "q13",
      "opt2": "e2"
    },
    {
      "id": "q11",
      "text": "Gross, get out.",
      "type": 4,
      "opt1": "e3"
    },
    {
      "id": "q12",
      "text": "Exactly.",
      "type": 4,
      "opt1": "e3"
    },
    {
      "id": "q13",
      "text": "Free Medical Marijuana?",
      "type": 1,
      "opt1": "q15",
      "opt2": "e5"
    },
    {
      "id": "q14",
      "text": "How many free t-shirts did you get?",
      "type": 2,
      "opt1": "b5",
      "opt2": "b6"
    },
    {
      "id": "q15",
      "text": "Are they hiring?",
      "type": 1,
      "opt1": "e6",
      "opt2": "e4"
    },
    {
      "id": "q16",
      "text": "Score! Stay till you get a hoodie (or a tesla).",
      "type": 4,
      "opt1": "e7",
    },
    {
      "id": "q17",
      "text": "But what are you supposed to wear tomorrow?",
      "type": 4,
      "opt1": "e3",
    }
  ],
// b are the responses given to certain questions
  "b" : [
    {
      "id": "b0",
      "text": "Well, not all dudes",
      "group": "q4",
      "opt1": "q8"
    },
    {
      "id": "b1",
      "text": "Uh, Yeah, I said \"Tech Job.\"",
      "group": "q4",
      "opt1": "e1"
    },
    {
      "id": "b2",
      "text": "Every Morning.",
      "group": "q8",
      "opt1": "q11"
    },
    {
      "id": "b3",
      "text": "But I love Silicon prairie/alley/gulch/cesspool!",
      "group": "q6",
      "opt1": "q9"
    },
    {
      "id": "b4",
      "text": "No. Thank God.",
      "group": "q8",
      "opt1": "q14"
    },
    {
      "id": "b5",
      "text": "Boxes",
      "group": "q14",
      "opt1": "q16"
    },
    {
      "id": "b6",
      "text": "Just one.",
      "group": "q14",
      "opt1": "q17"
    },
    {
      "id": "b7",
      "text": "That's silicon valley.",
      "group": "q9",
      "opt1": "q12"
    }
  ],
// e are the possible anwsers to the question "should i quit my tech job?"
  "e" : [
    {
      "id": "e0",
      "text": "Outrageous! Vaya con Dios.",
      "YNbtn": false
    },
    {
      "id": "e1",
      "text": "Bro, you gotta go.",
      "YNbtn": false
    },
    {
      "id": "e2",
      "text": "Savages. Say Good-bye.",
      "YNbtn": false
    },
    {
      "id": "e3",
      "text": "Hate-Quit.",
      "YNbtn": false
    },
    {
      "id": "e4",
      "text": "Fine. Stay another week or two.",
      "YNbtn": false
    },
    {
      "id": "e5",
      "text": "Guess they don\'t care about \"Wellness.\" Leave.",
      "YNbtn": false
    },
    {
      "id": "e6",
      "text": "No. (But get me an interview!)",
      "YNbtn": false
    },
    {
      "id": "e7",
      "text": "No ... for now.",
      "YNbtn": false
    }
  ]
};

var GameStateInit = function (){
  var obj = { id: null };
  obj.let = function (){
    return obj.id.substr(0,1);
  };
  obj.num = function (){
    return obj.id.substr(1);
  }
  return obj;
}

var gameState = GameStateInit();

var container = '<div id="%data1%" class="%data3%" aria-live=”assertive”><p>%data2%</p></div>';
var button = '<button id="%data1%" class="btn btn-info button-group">%data2%</button>';
var verdict = '<button id="v1" class="btn btn-info button-group verdict">verdict</button>';
var ynButton = '<div class="yn-group"><button id="yes" class="btn btn-info">Yes</button><button id="no" class="btn btn-info">No</button></div>';
for (x in flowChart) {
  for (y in flowChart[x]){
    console.log(flowChart[x][y].text);
    if (x === 'q'){
      var formatedContainer = container.replace('%data2%', flowChart[x][y].text);
      var formatedContainer = formatedContainer.replace('%data1%', flowChart[x][y].id);
      var formatedContainer = formatedContainer.replace('%data3%', "sq-yellow");
      $("#main").append(formatedContainer);
    } else if (x === 'b'){

      formattedButton = button.replace('%data2%', flowChart[x][y].text);
      formattedButton = formattedButton.replace('%data1%', flowChart[x][y].id);
      $(".buttons").append(formattedButton);

      if (flowChart[x][y].group){
        $("#"+flowChart[x][y].id).addClass(flowChart[x][y].group);
      }
    } else {
      var formatedContainer = container.replace('%data2%', flowChart[x][y].text);
      var formatedContainer = formatedContainer.replace('%data1%', flowChart[x][y].id);
      var formatedContainer = formatedContainer.replace('%data3%', "sq-pink");
      $("#main").append(formatedContainer);
      }
    }
  }

$(".buttons").append(ynButton);
$(".buttons").append(verdict);
gameState.id = flowChart.q[0].id;
