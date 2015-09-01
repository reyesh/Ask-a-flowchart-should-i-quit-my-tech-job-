var main = function() {
  // display the first question
  $('#q0').toggle();
  // diplay the yes & no buttons
  $('.yn-group').toggle();
  console.log(gameState.id);

  $('button').click(function(){

    var type = gameState.id.substr(0,1);
    var num = gameState.id.substr(1)
    var what = $(this).prop('id');

    if (type === 'q'){ // type of statement, question or verdict.
      if (flowChart[type][num].YNbtn){ // does the statement require yes or no response
        if (what === 'yes'){

          var nextQ = flowChart[type][num].opt1
          //don't display the current statement
          $('#'+gameState.id).toggle();
          //display the next statement after clicking on yes button
          $('#'+nextQ).toggle();
          //set the current id to gameState
          gameState.id = nextQ;
          $('.yn-group').toggle();

        } else {

          var nextQ = flowChart[type][num].opt2
          $('#'+gameState.id).toggle();
          $('#'+nextQ).toggle();
          gameState.id = nextQ;
          $('.yn-group').toggle();

        }
      }

      var type = nextQ.substr(0,1);
      var num = nextQ.substr(1)

      if (flowChart[type][num].YNbtn){
        $('.yn-group').toggle();
      //s  $('#'+flowChart[type][num].opt1).toggle();
      } else {
        console.log(flowChart[type][num].id);
        $('.'+flowChart[type][num].id).toggle();
      }
    }

  })
}; // end of main function

$(document).ready(main);
