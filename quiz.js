$(document).ready(function(){
  var clicked = false;
  var answered = 0;
  var current_question;
  var score = 0;
  $(".quiz_topic").mouseenter(function(){
    if(!clicked) {
      $("#question_box").text("Click to see the question");
    }
    $(this).css("background-color", "gold");
  });
  $(".quiz_topic").mouseleave(function(){
    if(!clicked) {
      $("#question_box").empty();
    }
    $(this).css("background-color", "white");
  });
  $(".quiz_topic").click(function(){
    if(!clicked){
      current_question = $(this);
      switch (current_question.text()) {
        case "Queens":
          $("#question_box").text("Ramses the Great's favored wife was named Nefertari.");
          break;
        case "Gods":
          $("#question_box").text("The Egyptian goddess known as Ammit had the head of a wasp and the body of a hippo.");
          break;
        case "Symbols":
          $("#question_box").text("The ankh was used as a symbol of death.");
          break;
        case "Locations":
          $("#question_box").text("Ramses the Great was buried in the Valley of the Kings.");
          break;
        default:
      }
      clicked = true;
      $("form").css("visibility", "visible");
    }
    else {
      alert("Must answer current question");
    }
  });
  $("#quiz_btn").click(function() {
    if(clicked){
      if($('#radioT').is(':checked')) {
        switch (current_question.text()) {
          case "Queens":
          case "Locations":
            $("aside").append(":-)  ");
            $("#question_box").text("Correct");
            score++;
            break;
          default:
            $("aside").append(":-(  ");
            $("#question_box").text("Incorrect");
            break;
        }
        $("aside").append(current_question.text()+"<br />");
        current_question.remove();
        $("#radioT").prop("checked", false);
        $("form").css("visibility", "hidden");
        clicked = false;
        answered++;
      }
      else if($('#radioF').is(':checked')) {
        switch (current_question.text()) {
          case "Queens":
          case "Locations":
            $("aside").append(":-(  ");
            $("#question_box").text("Incorrect");
            break;
          default:
            $("aside").append(":-)  ");
            $("#question_box").text("Correct");
            score++;
            break;
        }
        $("aside").append(current_question.text()+"<br />");
        current_question.remove();
        $("#radioF").prop("checked", false);
        $("form").css("visibility", "hidden");
        clicked = false;
        answered++;
      }
      else {
        alert("Must select true/false");
      }
      $("#score").text("Score: " + score + "/4 (" + (25 * score) + "%)");
    }
    if(answered >= 4){
      $("#finished_game").append(score + " out of 4!!!");
      $("#finished_game").fadeIn('slow');
      $("#question_box").empty();
    }
  });
  $("#finished_game").dblclick(function() {
    var aniMe = $(this);
    aniMe.animate({fontSize: '40px', opacity: '0.9'}, "slow");
    aniMe.animate({width: '60%', opacity: '0.8'}, "slow");
    aniMe.animate({fontSize: '30px', opacity: '0.7'}, "slow");
    aniMe.animate({width: '40%', opacity: '0.6'}, "slow");
    aniMe.animate({fontSize: '20px', opacity: '0.5'}, "slow");
    aniMe.animate({width: '20%', opacity: '0.4'}, "slow");
    aniMe.animate({fontSize: '10px', opacity: '0.3'}, "slow");
    aniMe.animate({fontSize: '0px', width: '0%', opacity: '0'}, "slow");
  });
});
