var flowChart = {
// q are the questions used to determine if you should quit your tech job.
  "q" : [
    {
      "id": "q0",
      "text": "Has it IPO\'d?",
      "YNbtn": true,
      "Yes": "q1",
      "No": "q2"
    },
    {
      "id": "q1",
      "text": "Is there free food?",
      "YNbtn": true,
      "Yes": "q3",
      "No": "e0"
    },
    {
      "id": "q2",
      "text": "Is it in the Bay Area?",
      "YNbtn": true,
      "Yes": "q4",
      "No": "q6"
    },
    {
      "id": "q3",
      "text": "even tacos?",
      "YNbtn": true,
      "Yes": "q5",
      "No": "e0"
    },
    {
      "id": "q4",
      "text": "Is it all dudes?",
      "YNbtn": false,
      "opt1": "b0",
      "opt2": "b1"
    },
    {
      "id": "q5",
      "text": "Do you have standing desks?",
      "YNbtn": true,
      "Yes": "q7",
      "No": "e0"
    },
    {
      "id": "q6",
      "text": "You'll never get a good exit",
      "YNbtn": false,
      "opt1": "b3"
    },
    {
      "id": "q7",
      "text": "treadmill desks?",
      "YNbtn": true,
      "Yes": "q10",
      "No": "e2"
    },
    {
      "id": "q8",
      "text": "Is \"Moon Shots\" a topic of discussion?",
      "YNbtn": false,
      "opt1": "b2",
      "opt2": "b4"
    },
    {
      "id": "q9",
      "text": "Oh, like the HBO show!",
      "YNbtn": false,
      "opt1": "q12",
    },
    {
      "id": "q10",
      "text": "Free Beer?",
      "YNbtn": true,
      "Yes": "q13",
      "No": "e2"
    },
    {
      "id": "q11",
      "text": "Gross, get out.",
      "YNbtn": false,
      "Yes": "q0",
      "No": "q5"
    },
    {
      "id": "q12",
      "text": "Exactly.",
      "YNbtn": false,
      "Yes": "q0",
      "No": "q5"
    },
    {
      "id": "q13",
      "text": "Free Medical Marijuana?",
      "YNbtn": true,
      "Yes": "q15",
      "No": "e5"
    },
    {
      "id": "q14",
      "text": "How many free t-shirts did you get?",
      "YNbtn": false,
      "Yes": "q0",
      "No": "q5"
    },
    {
      "id": "q15",
      "text": "Are they hiring?",
      "YNbtn": true,
      "Yes": "e6",
      "No": "e4"
    },
    {
      "id": "q16",
      "text": "Score! Stay till you get a hoodie (or a tesla).",
      "YNbtn": false,
      "Yes": "q0",
      "No": "q5"
    },
    {
      "id": "q17",
      "text": "But what are you supposed to wear tomorrow?",
      "YNbtn": false,
      "Yes": "q0",
      "No": "q5"
    }
  ],
// b are the responses given to certain questions
  "b" : [
    {
      "id": "b0",
      "text": "Well, not all dudes"
    },
    {
      "id": "b1",
      "text": "Uh, Yeah, I said \"Tech Job.\""
    },
    {
      "id": "b2",
      "text": "Every Morning."
    },
    {
      "id": "b3",
      "text": "But I love Silicon prairie/alley/gulch/cesspool!"
    },
    {
      "id": "b4",
      "text": "No. Thank God."
    },
    {
      "id": "b5",
      "text": "Boxes"
    },
    {
      "id": "b6",
      "text": "Just one."
    },
    {
      "id": "b7",
      "text": "That's silicon valley."
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

var gameState = {
  id: null
};

var container = '<div id="%data1%" class="%data3%"><p>%data2%</p></div>';
var button = '<button id="%data1%" class="btn btn-info button-group">%data2%</button>';
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
      /*var formatedContainer = container.replace('%data2%', flowChart[x][y].text);
      var formatedContainer = formatedContainer.replace('%data1%', flowChart[x][y].id);
      var formatedContainer = formatedContainer.replace('%data3%', "sq-purple");
      $("#main").append(formatedContainer); */
      formattedButton = button.replace('%data2%', flowChart[x][y].text);
      formattedButton = formattedButton.replace('%data1%', flowChart[x][y].id);
      $(".buttons").append(formattedButton);
    } else {
      var formatedContainer = container.replace('%data2%', flowChart[x][y].text);
      var formatedContainer = formatedContainer.replace('%data1%', flowChart[x][y].id);
      var formatedContainer = formatedContainer.replace('%data3%', "sq-pink");
      $("#main").append(formatedContainer);
      }
    }
  }
$(".buttons").append(ynButton);

gameState.id = flowChart.q[0].id;
