$(function() {

	var flowChart = {
// q are the questions used to determine if you should quit your tech job.
// type: 1 are yes no questions, type 2: are responses you have to choose
// type: 3 is a single respone. type: 4 is verdict button
  currentState: "q0",

  q: [
   {
      id: "q0",
      text: "Has it IPO\'d?",
      type: 1,
      opt1: "q1",
      opt2: "q2"
    },
    {
      id: "q1",
      text: "Is there free food?",
      type: 1,
      opt1: "q3",
      opt2: "v0"
    },
    {
      id: "q2",
      text: "Is it in the Bay Area?",
      type: 1,
      opt1: "q4",
      opt2: "q6"
    },
    {
      id: "q3",
      text: "even tacos?",
      type: 1,
      opt1: "q5",
      opt2: "v0"
    },
    {
      id: "q4",
      text: "Is it all dudes?",
      type: 2,
      opt1: "r0",
      opt2: "r1"
    },
    {
      id: "q5",
      text: "Do you have standing desks?",
      type: 1,
      opt1: "q7",
      opt2: "v0"
    },
    {
      id: "q6",
      text: "You'll never get a good exit",
      type: 3,
      opt1: "r3"
    },
    {
      id: "q7",
      text: "Treadmill desks?",
      type: 1,
      opt1: "q10",
      opt2: "v2"
    },
    {
      id: "q8",
      text: "Is \"Moon Shots\" a topic of discussion?",
      type: 2,
      opt1: "r2",
      opt2: "r4"
    },
    {
      id: "q9",
      text: "Oh, like the HBO show!",
      type: 3,
      opt1: "r7"
    },
    {
      id: "q10",
      text: "Free Beer?",
      type: 1,
      opt1: "q13",
      opt2: "v2"
    },
    {
      id: "q11",
      text: "Gross, get out.",
      type: 4,
      opt1: "v3"
    },
    {
      id: "q12",
      text: "Exactly.",
      type: 4,
      opt1: "v3"
    },
    {
      id: "q13",
      text: "Free Medical Marijuana?",
      type: 1,
      opt1: "q15",
      opt2: "v5"
    },
    {
      id: "q14",
      text: "How many free t-shirts did you get?",
      type: 2,
      opt1: "r5",
      opt2: "r6"
    },
    {
      id: "q15",
      text: "Are they hiring?",
      type: 1,
      opt1: "v6",
      opt2: "v4"
    },
    {
      id: "q16",
      text: "Score! Stay till you get a hoodie (or a tesla).",
      type: 4,
      opt1: "v7"
    },
    {
      id: "q17",
      text: "But what are you supposed to wear tomorrow?",
      type: 4,
      opt1: "v3"
    }
  ],
// r are the responses given to certain questions
  r: [
    {
      id: "r0",
      text: "Well, not all dudes",
      group: "q4",
      opt1: "q8"
    },
    {
      id: "r1",
      text: "Uh, Yeah, I said \"Tech Job.\"",
      group: "q4",
      opt1: "v1"
    },
    {
      id: "r2",
      text: "Every Morning.",
      group: "q8",
      opt1: "q11"
    },
    {
      id: "r3",
      text: "But I love Silicon prairie/alley/gulch/cesspool!",
      group: "q6",
      opt1: "q9"
    },
    {
      id: "r4",
      text: "No. Thank God.",
      group: "q8",
      opt1: "q14"
    },
    {
      id: "r5",
      text: "Boxes",
      group: "q14",
      opt1: "q16"
    },
    {
      id: "r6",
      text: "Just one.",
      group: "q14",
      opt1: "q17"
    },
    {
      id: "r7",
      text: "That's silicon valley.",
      group: "q9",
      opt1: "q12"
    }
  ],
// v are the possible verdicts to the question "should i quit my tech job?"
  v: [
    {
      id: "v0",
      text: "Outrageous! Vaya con Dios."
    },
    {
      id: "v1",
      text: "Bro, you gotta go."
    },
    {
      id: "v2",
      text: "Savages. Say Good-bye."
    },
    {
      id: "v3",
      text: "Hate-Quit."
    },
    {
      id: "v4",
      text: "Fine. Stay another week or two."
    },
    {
      id: "v5",
      text: "Guess they don\'t care about \"Wellness.\" Leave."
    },
    {
      id: "v6",
      text: "No. (But get me an interview!)"
    },
    {
      id: "v7",
      text: "No ... for now."
    }
  ]
}

	var octopus = {
		getState: function(){
			return flowChart.currentState;
		},
		getContent: function(state){
			var let = state.substr(0,1);
    		var num = state.substr(1);
			return flowChart[let][num];
		},
		setState: function(state){
			flowChart.currentState = state;
		}
	}

	var view = {

		init: function(){
			view.mainRender(octopus.getState());
			view.buttonRender(octopus.getState());
		},
		// Erases the main and buttons div
		mainErase: function(){
            document.getElementById("main").innerHTML = "";	
            document.getElementById("buttons").innerHTML = "";			
		},

		mainRender: function(state){
    		var content = octopus.getContent(state);
	        var mainDiv = document.createElement('p');
	        mainDiv.className="question";
	        mainDiv.innerHTML = content.text;
	        document.getElementById("main").appendChild(mainDiv);
		},

		renderEverything: function(state){
			view.mainErase();
			octopus.setState(state);
			view.mainRender(octopus.getState());
			view.buttonRender(octopus.getState());				
		},
		renderVerdict: function(state){
			view.mainErase();
			view.mainRender(octopus.getState());
		},

		buttonRender: function(state){

    		var content = octopus.getContent(state);

			if (content.type == 1) {

				var no_btn = document.createElement('button');
				no_btn.className = "btn btn-primary";
				no_btn.innerHTML = "No";
		        no_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
		            };
		        })(content.opt2));
				document.getElementById("buttons").appendChild(no_btn);

				var yes_btn = document.createElement('button');
				yes_btn.className = "btn btn-primary";
				yes_btn.innerHTML = "Yes";
		        yes_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
		            };
		        })(content.opt1));				
				document.getElementById("buttons").appendChild(yes_btn);

			} else if (content.type == 2) {

				var res_btn = document.createElement('button');
				var content1 = octopus.getContent(content.opt1);
				res_btn.className = "btn btn-primary";
				res_btn.innerHTML = content1.text;
		        res_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
		            };
		        })(content1.opt1));				
				document.getElementById("buttons").appendChild(res_btn);	

				var res1_btn = document.createElement('button');
				var content2 = octopus.getContent(content.opt2);
				res1_btn.className = "btn btn-primary";
				res1_btn.innerHTML = content2.text;
		        res1_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);		            	
		            };
		        })(content2.opt1));				
				document.getElementById("buttons").appendChild(res1_btn);

			} else if (content.type == 3) {

				var res_btn = document.createElement('button');
				var content1 = octopus.getContent(content.opt1);
				res_btn.className = "btn btn-primary";
				res_btn.innerHTML = content1.text;
		        res_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
			            };
		        })(content1.opt1));				
				document.getElementById("buttons").appendChild(res_btn);

			} else {

				var ver_btn = document.createElement('button');
				var content1 = octopus.getContent(content.opt1);
				console.log(content1);
				ver_btn.className = "btn btn-primary";
				ver_btn.innerHTML = "Verdict";
		        ver_btn.addEventListener('click', (function(state){
		            return function(){
		              console.log(state);
		              view.renderEverything(state);
			            };
		        })(content1.id));				
				document.getElementById("buttons").appendChild(ver_btn);				

			}
		}
	}

    view.init();

}());