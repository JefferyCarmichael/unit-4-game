

// Initial setup for game board.
var target, jewel1, jewel2, jewel3, jewel4;
var total = 0;
var losses = 0;
var wins =0;
shuffle();

// Click functions for the 4 jewels

// Jewel1
$("#jewel1").on("click", function () {
    total = total + jewel1;
    $("#current-score-counter").html(total);
    play();
});

// Jewel 2
$("#jewel2").on("click", function () {
    total = total + jewel2;
    $("#current-score-counter").html(total);
    play();
});

// Jewel 3
$("#jewel3").on("click", function () {
    total = total + jewel3;
    $("#current-score-counter").html(total);
    play();
});

// Jewel 4
$("#jewel4").on("click", function () {
    total = total + jewel4;
    $("#current-score-counter").html(total);
    play();
});

//Checks score to determine if player won or loss.
function play() {

    if (total == target) {
        wins++;
        $("#current-score-counter").html(total);
        alert(total + ": you win");
        $("#win-counter").html(wins);
        shuffle();
    }

    else if (total > target) {
        losses++;
        $("#current-score-counter").html(total);
        alert(total + ": you lose");

        $("#loss-counter").html(losses);
        shuffle();
    }

}
// Clears board after win or loss.
function shuffle() {
    target = Math.floor(Math.random() * 102 + 19);
    jewel1 = Math.floor(Math.random() * 12 + 1);
    jewel2 = Math.floor(Math.random() * 11 + 1);
    jewel3 = Math.floor(Math.random() * 12 + 1);
    jewel4 = Math.floor(Math.random() * 11 + 1);
    total = 0;
    $("#random-number").html(target);
    $("#current-score-counter").html(total);
   
}

