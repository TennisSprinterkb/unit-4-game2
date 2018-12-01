//Lets page load quicker
$(document).ready(function() {

    //Tracking wins & losses
    var win = 0;
    var loss = 0;

    //Computer random speed to hit
    var target = [];

    //Random speed assigned to vehicles
    var BentleyNum;
    var RangeNum;
    var GTRNum;
    var PorscheNum;

    //User score counter
    var counter = 0;

    //Game Start
    function gameStart() {
        var carNum = Math.floor(Math.random() * 220) + 16;
        target.push(carNum);
        $("#random").text(target[0]);
        console.log("Computer number: " + target);

        //Random number for vehicles
        BentleyNum = Math.floor(Math.random() * 15) + 2;
        console.log("Bentley: " + BentleyNum);

        RangeNum = Math.floor(Math.random() * 12) + 1;
        console.log("Range: " + RangeNum);

        GTRNum = Math.floor(Math.random() * 25) +2;
        console.log("GTR: " + GTRNum);

        PorscheNum = Math.floor(Math.random() * 22) +1;
        console.log("Porsche: " + PorscheNum);
    };

    //Reset game
    function newGame() {
        target.length = 0;
        counter = 0;
        gameStart();
    };

    //Function if player counter</=/> computer's number
    function checkNum() {
        if (counter === target[0]) {
            win++;
            $("#outcome").html("You won!!");
            $("#win").html("Wins: "+ win);
            //console.log("You won!!");
            newGame();
        }

        else if (counter > target[0]) {
            loss++;
            $("#outcome").html("You lost!!");
            // $(".winRlose").text("Loser");
            $("#loss").html("Losses: "+ loss);
            //console.log("You lost!!");
            newGame();
        }

      
    };

    //Game start
    gameStart();

    //Clicking vehicles
    $("#Bentley").on("click", function() {
        counter = BentleyNum + counter;
        $("#yourSpeed").text(counter);
        //console.log(counter);
        checkNum();
    });

    $("#Range").on("click", function() {
        counter = RangeNum + counter;
        $("#yourSpeed").text(counter);
        checkNum();
    });
    $("#GTR").on("click", function() {
        counter = GTRNum + counter;
        $("#yourSpeed").text(counter);
        checkNum();
    
    });
    $("#Porsche").on("click", function() {
        counter = PorscheNum + counter;
        $("#yourSpeed").text(counter);
        checkNum();
    });



    

    
    


    

});