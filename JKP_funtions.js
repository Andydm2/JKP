
function JKP()
{
    var player1 = Math.ceil(Math.random()*3);
    // this generated a random number between 1&3 for id player1//
    document.getElementById("player1").innerHTML = player1;
    //this called player1 as an id//
    var player2 = Math.ceil(Math.random()*3);
        // this generated a random number between 1&3 for id player2//
    document.getElementById("player2").innerHTML = player2;
        //this called player2 as an id//
    if (player1 ==1)
    {
        document.getElementById("player1").innerHTML = "JAN";
        //this calls number 1 for player1//
    }
    else if (player1 == 2)
    {
        document.getElementById("player1").innerHTML = "KEN";
      //this calls number 2 for player1//

    }
    else //player1 = 3
    {
        document.getElementById("player1").innerHTML = "PON"
                //this calls number 3 for player1//

    }
    if (player2 ==1)
        {
            document.getElementById("player2").innerHTML = "JAN";
                    //this calls number 1 for player2//

        }
        else if (player2 == 2)
        {
            document.getElementById("player2").innerHTML = "KEN";
        }        //this calls number 2 for player2//

        else //player2 = 3
        {
            document.getElementById("player2").innerHTML = "PON"
                    //this calls number 3 for player2//

        }

        if (player1 == player2)
        {
            document.getElementById("results").innerHTML = "Undefine - Same results" + player1;
            //this calls (results) as an id and give a (undefine) text//
        }
        else if ((player1 ==1 && player2 ==3) || (player1 == 2 && player2 ==1) || (player1 ==3 && player2 ==2))
        {
            document.getElementById("results").innerHTML = "player 1 wins~!!";
     //this calls (results) as an id and claim (playe1) as winner//

        }
        else //player2 won
        {
            document.getElementById("results").innerHTML = "player 2 wins~!!";
                 //this calls (results) as an id and claim (playe2) as winner//

        }
        
    
        
}


