
var main = function() {
var counter = 0;
  var displayButtons = function (optN){

    console.log("hello: " + optN);
    var letter = optN.substr(0,1);
    var number = optN.substr(1);

    if (flowChart[letter][number].type === 1){

      $('.yesno').show();
      console.log("here");

    } else if (flowChart[letter][number].type === 2 ||
                  flowChart[letter][number].type === 3) {

      $('.yesno').hide();
      $('.button-group').hide();
      $('.'+optN).show();
      console.log("2 3");

    } else if (flowChart[letter][number].type === 4){
      // this the button layout for type 4 q statements

      // hide the current buttons that are displayed
      $('.button-group').hide();
      // hide yes/no buttons if present
      $('.yesno').hide();
      // show the verdict button, who's only outcome will be the final statement.
      $('.verdict').show();

    }
  };

  // when the user clicks on restart we want all variables and div states to reset
  // instead of reloading the page
  var resetApp = function (){

    gameState = GameStateInit();

    // display the first question
    $('#q0').show();

    // diplay the yes & no buttons
    //$('.yn-group').toggle();
    //hide the restart button
    $('#refresh').hide();
    $('.sq-pink').hide();
    displayButtons("q0");
    console.log("ran resetApp function");
  }

  resetApp();

  // when the flowchart ends it ask to restart, and a restart button appears, it is
  // important that this function appears before the function with the game logic
  // becuase it will pick up the restart button press, and run the game logic.
  $('#refresh').click(function() {
      counter=counter+1;
      console.log("about to run resetApp()" +counter);
    //  location.reload();
      resetApp();
  });

  $('.button-group').click(function(){
    console.log("start id: "+gameState.id);

    // gets the button id of the button pressed
    var what = $(this).prop('id');

    if (flowChart[gameState.let()][gameState.num()].type === 1){
      // type 1 statements are those that require yes or no responses

      if (what === "yes"){
        // shows the yes statement
        $('#'+flowChart[gameState.let()][gameState.num()].opt1).toggle();
        // hides the current message
        $('#'+gameState.id).toggle();
        // updates the current gameState.id
        gameState.id = flowChart[gameState.let()][gameState.num()].opt1;
        // displays buttons according to the new statement/message on screen.
        displayButtons(gameState.id);

      } else {
        // show the no statement
        $('#'+flowChart[gameState.let()][gameState.num()].opt2).toggle();
        // hides the current statement
        $('#'+gameState.id).toggle();
        // update the current gameState.id
        gameState.id = flowChart[gameState.let()][gameState.num()].opt2;
        // displays buttons according to the new statement/message on screen.
        displayButtons(gameState.id);
      }
    } else if (flowChart[gameState.let()][gameState.num()].type === 2){

      what = $(this).prop('id');
      bLetter = what.substr(0,1);
      bNumber = what.substr(1);
      if (what === 'b0'){ // button one
        console.log("b0");
        $('#'+gameState.id).toggle();
        $('#'+flowChart[bLetter][bNumber].opt1).toggle();
        gameState.id = flowChart[bLetter][bNumber].opt1;
        //console.log("before displayButtons, type 2: "+ gameState.id);
        displayButtons(gameState.id);
      } else { // button two
        console.log("b1");
        $('#'+gameState.id).toggle();
        $('#'+flowChart[bLetter][bNumber].opt1).toggle();
        gameState.id = flowChart[bLetter][bNumber].opt1;
        console.log("before displayButtons, type 2: "+gameState.id);
        displayButtons(gameState.id);
      }

    } else if (flowChart[gameState.let()][gameState.num()].type === 3){

      //gets the id of the button pressed
      what = $(this).prop('id');
      console.log("type 3: "+what);
      //breaks down the letter and number part of the button id, this is used to locate the json object
      bLetter = what.substr(0,1);
      bNumber = what.substr(1);
      // hides the current statement
      $('#'+gameState.id).toggle();
      // shows the new statement, from the button json object
      $('#'+flowChart[bLetter][bNumber].opt1).toggle();
      // changes the gameState ID to the next statement
      gameState.id = flowChart[bLetter][bNumber].opt1;
      //the displayButtons function determines what buttons need to be displayed for the type of statement that is displayed
      displayButtons(gameState.id);

    } else {

      //this else statement is for q statement who's only outcome is the final verdict, which have a type of 4

      //get the current message and hide it
      $('#'+flowChart[gameState.let()][gameState.num()].id).toggle();
      //get the verdict and final anwser
      $('#'+flowChart[gameState.let()][gameState.num()].opt1).toggle();
      gameState.id = flowChart[gameState.let()][gameState.num()].opt1;
    }

    // disabled any button on final verdict
    console.log("end of click: "+gameState.id);
    console.log("here :"+gameState.id);
    if (gameState.let() === 'e'){
      console.log("end of game");
      //$('.button-group, .yesno').prop('disabled', true);
      //$('.button-group').prop('disabled', true);
      $('.button-group, .yesno').hide();

      $('#refresh').show();

    }

  });

}; // end of main function

$(document).ready(main);
