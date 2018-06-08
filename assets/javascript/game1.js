

// Initial setup for game board.
var target, jewel1 ,jewel2, jewel3, jewel4;
var total, wins, losses = 0;
shuffle();



// Click functions for the 4 jewels


$("#jewel1").on("click", function () {
    total = total + jewel1;

    $("#current-score-counter").html(total);
    play();
});


$("#jewel2").on("click", function () {
    total = total + jewel2;

    $("#current-score-counter").html(total);
    play();
});

$("#jewel3").on("click", function () {
    total = total + jewel3;

    $("#current-score-counter").html(total);
    play();
});

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
        console.log("wins:" + wins);
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
    target = Math.floor(Math.random() * 101 + 20);
    jewel1 = Math.floor(Math.random() * 12 + 1);
    jewel2 = Math.floor(Math.random() * 11 + 1);
    jewel3 = Math.floor(Math.random() * 12 + 1);
    jewel4 = Math.floor(Math.random() * 11 + 1);
    total = 0;
    $("#random-number").html(target);
    $("#current-score-counter").html(total);

}

