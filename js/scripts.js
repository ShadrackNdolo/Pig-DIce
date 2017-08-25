
function clearFields() {
  $('input#playerOne').val("");
  $('input#playerTwo').val("");
}

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
