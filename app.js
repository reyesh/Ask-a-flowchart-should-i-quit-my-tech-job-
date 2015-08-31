var main2 = function() {

var playLogic = function (button) {

  var type = gameState.id.substr(0, 1);
  var num = gameState.id.substr(1);

  if (type === 'q'){
    if (button.id === "Yes"){
      var next_type = flowChart.q[num].Yes.substr(0, 1);
      var next_num = flowChart.q[num].Yes.substr(1);

      var initYellowSq = yellowSq.replace('%data2%', flowChart[next_type][next_num].text);
      var initYellowSq = initYellowSq.replace('%data1%', flowChart[next_type][next_num].id);
      $("#"+gameState.id).replaceWith(initYellowSq);
      gameState.id = flowChart[next_type][next_num].id;

      if(flowChart[next_type][next_num].YNbtn){
        $("#"+gameState.id).append(yesNoBtns);
      }

    } else { // if this.id does not equals "Yes" then it must be "NO"

      var next_type = flowChart.q[num].No.substr(0, 1);
      var next_num = flowChart.q[num].No.substr(1);

      var initYellowSq = yellowSq.replace('%data2%', flowChart[next_type][next_num].text);
      var initYellowSq = initYellowSq.replace('%data1%', flowChart[next_type][next_num].id);
      $("#"+gameState.id).replaceWith(initYellowSq);
      gameState.id = flowChart[next_type][next_num].id;
      if(flowChart[next_type][next_num].YNbtn){
        $("#"+gameState.id).append(yesNoBtns);
      }
    } // end of else statement

    if (next_type === 'e') {
      $("#"+gameState.id).toggleClass("sq-final");
    }
} // end of if type equals 'q'
$("#"+gameState.id).focus();

} // end of playLogic function

$("button").click( function(){
  playLogic(this);
});

$("#main").on("click", "button.circle-right", function(){
  playLogic(this);
});

$("#main").on("click", "button.circle-left", function(){
  playLogic(this);
});

}; // end of main2 function

$(document).ready(main2);
