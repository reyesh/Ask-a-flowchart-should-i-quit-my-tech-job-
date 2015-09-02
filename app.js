
var main = function() {

  var displayButtons = function (optN){

    console.log("hello: " + optN);
    var letter = optN.substr(0,1);
    var number = optN.substr(1);

    if (flowChart[letter][number].type === 1){

      $('.yn-group').show();

    } else if (flowChart[letter][number].type === 2 ||
                  flowChart[letter][number].type === 3) {

      $('.yn-group').hide();
      $('.button-group').hide();
      $('.'+optN).show();
      console.log("2 3");

    } else if (flowChart[letter][number].type === 4){
      // this the button layout for type 4 q statements

      // hide the current buttons that are displayed
      $('.button-group').hide();
      // hide yes/no buttons if present
      $('.yn-group').hide();
      // show the verdict button, who's only outcome will be the final statement.
      $('.verdict').show();

    }
  }

  // display the first question
  $('#q0').toggle();

  // diplay the yes & no buttons
  //$('.yn-group').toggle();
  displayButtons("q0");

  $('button').click(function(){
    console.log("start id: "+gameState.id);

    if (flowChart[gameState.let()][gameState.num()].type === 1){
      var what = $(this).prop('id');
      if (what === "yes"){
        $('#'+flowChart[gameState.let()][gameState.num()].opt1).toggle();
        $('#'+gameState.id).toggle();
        gameState.id = flowChart[gameState.let()][gameState.num()].opt1;
        displayButtons(gameState.id);
      } else {
        $('#'+flowChart[gameState.let()][gameState.num()].opt2).toggle();
        $('#'+gameState.id).toggle();
        gameState.id = flowChart[gameState.let()][gameState.num()].opt2;
        displayButtons(gameState.id);
      }
    } else if (flowChart[gameState.let()][gameState.num()].type === 2){

      var what = $(this).prop('id');
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
      var what = $(this).prop('id');
      bLetter = what.substr(0,1);
      bNumber = what.substr(1);
      console.log("type 3: "+gameState.id+" .opt1: "+flowChart[bLetter][bNumber].opt1);
      $('#'+gameState.id).toggle();
      $('#'+flowChart[bLetter][bNumber].opt1).toggle();
      gameState.id = flowChart[bLetter][bNumber].opt1;
      console.log("type 3: "+gameState.id);
      displayButtons(gameState.id);
    } else {
      
      //this else statement is for q statement who's only outcome is the final verdict, which have a type of 4

      //get the current message and hide it
      $('#'+flowChart[gameState.let()][gameState.num()].id).toggle();
      //get the verdict and final anwser
      $('#'+flowChart[gameState.let()][gameState.num()].opt1).toggle();
    }

  })
}; // end of main function

$(document).ready(main);
