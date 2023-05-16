// delcare variables
var markers = ["X", "O"]
var turn = 0;
var players = ["Player 1", "Player 2"]
var wins = [0, 0]
var tieGames = 0;
var totals = [];
var winValues = [7, 56, 73, 84, 146, 273, 292, 448];
var gameOver;

// runs onload
function start()
{
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i <= 3; i++)
	{
		innerDivs += '<div id="row-' + i + '">';
		
		for (j = 1; j <=3; j++)
		{
			innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
			counter *= 2;
		}
		
		innerDivs += '</div>';
	}
	
	document.getElementById("board").innerHTML = innerDivs;
	totals = [0, 0];
	gameOver = false;
	document.getElementById("start-message").innerText = "Enter Player 1";
	document.getElementById("player1").select();
}

// runs when player 1 submit's their name
function playerOneName()
{
	players[0] = document.getElementById("player1").value;
	document.getElementById("player1").className = "hide";
	document.getElementById("submit").attributes[4].nodeValue = "playerTwoName();";
	document.getElementById("player2").className = "show";
	document.getElementById("player2").select();
	document.getElementById("p1name").innerText = players[0];
	document.getElementById("p1wins").innerText = wins[0];
	document.getElementById("ties-title").innerText = "Ties"
	document.getElementById("numties").innerText = tieGames;
	document.getElementById("start-message").innerText = "Enter Player 2";
}

// runs when player 2 submit's their name
function playerTwoName()
{
	players[1] = document.getElementById("player2").value;
	document.getElementById("player2").className = "hide";
	document.getElementById("submit").className = "hide";
	document.getElementById("board").className = "";
	document.getElementById("board-placeholder").className = "hide";
	document.getElementById("stop-audio").className = "";
	document.getElementById("p2name").innerText = players[1];
	document.getElementById("p2wins").innerText = wins[1];
	document.getElementById("game-message").innerText = players[0] + "'s turn!";
	document.getElementById('audio-play').play();
	document.getElementById('audio-play').loop();
	
}

function restart()
{
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i <= 3; i++)
	{
		innerDivs += '<div id="row-' + i + '">';
		
		for (j = 1; j <=3; j++)
		{
			innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
			counter *= 2;
		}
		
		innerDivs += '</div>';
	}
	
	document.getElementById("board").innerHTML = innerDivs;
	totals = [0, 0];
	gameOver = false;
	turn = 0;
	document.getElementById("play-again").className = "hide";
	document.getElementById("game-message").innerText = players[0] + "'s turn!";
	document.getElementById("board-placeholder").className = "hide";
}

// runs as tiles are clicked
function playGame(clicked, tileValue)
{
	if (!gameOver)
	{
		// toggle x and o
		clicked.innerText = markers[turn];
		//click sound and allow to be played if game occurs too fast
		document.getElementById("audio-click").load();
		document.getElementById("audio-click").play();
		// add to totals
		totals[turn] += tileValue;
		console.log("p1: " + totals[0]);
		console.log("p2: " + totals[1]);
		// call winCode to check for win
		if (winCode())
			{
				wins[turn] += 1;
				document.getElementById("game-message").innerText = players[turn] + " wins!";
				//allows the audio to play again if game occurs too fast
				document.getElementById('audio-win').load();
				document.getElementById('audio-win').play();
				document.getElementById("play-again").className = "";
				document.getElementById("board-placeholder").className = "";
				document.getElementById("start-message").innerText = "";
				document.getElementById("p1wins").innerText = wins[0];
				document.getElementById("p2wins").innerText = wins[1];
			}
		else if (gameOver)
		{
				document.getElementById("game-message").innerText = "Tie Game!";
				//allows the audio to play again if game occurs too fast
				document.getElementById('audio-tie').load();
				document.getElementById('audio-tie').play();
				document.getElementById("board-placeholder").className = "";
				document.getElementById("play-again").className = "";
				document.getElementById("start-message").innerText = "";
				tieGames += 1;
				document.getElementById("numties").innerText = tieGames;
		}
		else
			{
				// toggle player turn
				if (turn) turn = 0; else turn = 1;
				// prevent double selection
				clicked.attributes["0"].nodeValue = "";
				// game-message to player's turn
				document.getElementById("game-message").innerText = players[turn] + "'s turn!";
			}
	}
}

function winCode()
{
	for (i = 0; i < winValues.length; i++)
	{
		if ((totals[turn] & winValues[i]) == winValues[i]) { gameOver = true; return true;}
	}
	if (totals[0] + totals[1] == 511) {gameOver = true;}
	return false;
}

function stopAudio()
{
	document.getElementById("audio-play").pause();
	document.getElementById("stop-audio").className = "hide";
	document.getElementById("play-audio").className = "";
}

function playAudio()
{
	document.getElementById("audio-play").load();
	document.getElementById("audio-play").play();
	document.getElementById("stop-audio").className = "";
	document.getElementById("play-audio").className = "hide";
}
