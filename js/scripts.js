//BACKEND

function player(turn) {
  this.turn = turn;
  this.score = score;
  this.name = name;
}

function clearFields() {
  $('input#playerOne').val("");
  $('input#playerTwo').val("");
}

//FRONT-END

$(document).ready(function () {
  $('#players').submit(function (event) {
    event.preventDefault();
    var inputtedFirstPlayer = $("input#playerOne").val();
    console.log(inputtedFirstPlayer);
    var inputtedSecondPlayer = $("input#playerTwo").val();
    console.log(inputtedSecondPlayer);

    $('.player1').text(inputtedFirstPlayer);
    $('.player2').text(inputtedSecondPlayer);
    clearFields();
  });
});

//NEWPART



//ENDOFNEWPART
