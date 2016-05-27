var wins = 0;
var losses = 0;
var ties = 0;
for(var i = 0; i <scores.length; i++) {
  var us = parseInt(scores[i].us);
  var them = parseInt(scores[i].them);
  var uscontext;
  var themcontext;
  if(us > them)
  {
    uscontext = "alert-success";
    themcontext = "alert-danger";
    wins++;
  }
  else if(us == them) {
    uscontext = "alert-warning";
    themcontext = "alert-warning";
    ties++;
  }
  else {
    uscontext = "alert-danger";
    themcontext = "alert-success";
    losses++;
  }
  $("#scoreboardtable").append(
    "<tr><td><span class=\"badge " + uscontext + "\">" + scores[i].us + "</span>" +
    "</td><td>" + scores[i].op +
    "</td><td><span class=\"badge " + themcontext + "\">" + scores[i].them + "</span>" +
    "</td></tr>"
  );
}
$("#scoreboardwins").append(wins);
$("#scoreboardlosses").append(losses);
$("#scoreboardties").append(ties);
