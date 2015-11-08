var Engine = (function(global){

	var octopus = {
		getState: function(){
			return flowChart.currentState;
		},
		getContent: function(state){
			var abc = state.substr(0,1);
    		var num = state.substr(1);
			return flowChart[abc][num];
		},
		setState: function(state){
			flowChart.currentState = state;
		}
	};

	var view = {
		//Initiates the flow chart; starts with q0 from var flowChart
		init: function(){
   			//Set the h1 title in the jumbotron with the flowchart question we're trying to anwser
			document.getElementsByClassName("jumbotron")[0].children[1].textContent = flowChart.questionTitle;
    		view.renderEverything("q0");
		},

		// Erases the main and buttons div
		mainErase: function(){
            document.getElementById("main").innerHTML = "";	
            document.getElementById("buttons").innerHTML = "";			
		},
		// Render the main div
		mainRender: function(state){
    		var content = octopus.getContent(state);
	        var mainDiv = document.createElement('p');

	        if(content.id.substr(0,1) == "q"){
	        	//plain white background
	        	mainDiv.className="question";
	        }else{
	        	//gives it a pinkish colour background
	        	mainDiv.className="verdict";
	        }

	        mainDiv.innerHTML = content.text;
	        document.getElementById("main").appendChild(mainDiv);
		},
		// During init or button press this function is called
		renderEverything: function(state){
			view.mainErase();
			octopus.setState(state);
			view.mainRender(octopus.getState());
			view.buttonRender(octopus.getState());				
		},
		// This function determine which buttons need to render depending on currentState type
		buttonRender: function(state){

    		var content = octopus.getContent(state);
    		var res_btn;
    		var content1;

			function makeClickHandler(state){
	            return function(){
	              view.renderEverything(state);
	            };
			}

			if (content.type == 1) {
				// type: 1, yes and no buttons 
				var no_btn = document.createElement('button');
				no_btn.className = "btn btn-primary";
				no_btn.innerHTML = "No";
		        no_btn.addEventListener('click', makeClickHandler(content.opt2));
				document.getElementById("buttons").appendChild(no_btn);

				var yes_btn = document.createElement('button');
				yes_btn.className = "btn btn-primary yes";
				yes_btn.innerHTML = "Yes";
		        yes_btn.addEventListener('click', makeClickHandler(content.opt1));			
				document.getElementById("buttons").appendChild(yes_btn);

			} else if (content.type == 2) {
				//type: 2, response buttons

				//Iterates a q entry to see how many opts are available, for each one
				//a button needs to be created.

				for (var variable in content){
					if (variable.substr(0,3) == "opt"){
						res_btn = document.createElement('button');
						content1 = octopus.getContent(content[variable]);
						res_btn.id = content1.id;				
						res_btn.className = "btn btn-primary";
						res_btn.innerHTML = content1.text;
				        res_btn.addEventListener('click', makeClickHandler(content1.opt1));				
						document.getElementById("buttons").appendChild(res_btn);
					}
				}

			} else if (content.type == 3){
				// type: 4, verdict button
				var ver_btn = document.createElement('button');
				content1 = octopus.getContent(content.opt1);
				console.log(content1);
				ver_btn.className = "btn btn-primary btn-warning";
				ver_btn.innerHTML = "Verdict";
		        ver_btn.addEventListener('click', makeClickHandler(content1.id));				
				document.getElementById("buttons").appendChild(ver_btn);				

			} else {
				// else it's the verdict being display and the game needs a button to restart
				var reset_btn = document.createElement('button');
				reset_btn.className = "btn btn-primary btn-danger";
				reset_btn.innerHTML = "Reset";
		        reset_btn.addEventListener('click', makeClickHandler("q0"));				
				document.getElementById("buttons").appendChild(reset_btn);			
			}
		}
	};

	//Initiates the flowchart.
    view.init();    

})(this);
