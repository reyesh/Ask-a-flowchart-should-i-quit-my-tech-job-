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

			if (content.type == 1) {
				// type: 1, yes and no buttons 
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
				yes_btn.className = "btn btn-primary yes";
				yes_btn.innerHTML = "Yes";
		        yes_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
		            };
		        })(content.opt1));				
				document.getElementById("buttons").appendChild(yes_btn);

			} else if (content.type == 2) {
				//type: 2, two response buttons
				res_btn = document.createElement('button');
				content1 = octopus.getContent(content.opt1);
				res_btn.id = content1.id;				
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
				res1_btn.id = content2.id;
				res1_btn.className = "btn btn-primary";
				res1_btn.innerHTML = content2.text;
		        res1_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);		            	
		            };
		        })(content2.opt1));				
				document.getElementById("buttons").appendChild(res1_btn);

			} else if (content.type == 3) {
				//type: 3, one response button
				res_btn = document.createElement('button');
				content1 = octopus.getContent(content.opt1);
				res_btn.id = content1.id;
				res_btn.className = "btn btn-primary";
				res_btn.innerHTML = content1.text;
		        res_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
			            };
		        })(content1.opt1));				
				document.getElementById("buttons").appendChild(res_btn);

			} else if (content.type == 4){
				// type: 4, verdict button
				var ver_btn = document.createElement('button');
				content1 = octopus.getContent(content.opt1);
				console.log(content1);
				ver_btn.className = "btn btn-primary btn-warning";
				ver_btn.innerHTML = "Verdict";
		        ver_btn.addEventListener('click', (function(state){
		            return function(){
		              view.renderEverything(state);
			            };
		        })(content1.id));				
				document.getElementById("buttons").appendChild(ver_btn);				

			} else {
				// else it's the verdict being display and the game needs a button to restart
				var reset_btn = document.createElement('button');
				reset_btn.className = "btn btn-primary btn-danger";
				reset_btn.innerHTML = "Reset";
		        reset_btn.addEventListener('click', (function(){
		            return function(){
		            	// resets the game
		            	view.renderEverything("q0");
			            };
		        })());				
				document.getElementById("buttons").appendChild(reset_btn);			
			}
		}
	};
	//Initiates the flow chart; starts with q0 from var flowChart
    view.renderEverything("q0");

})(this);
