var x = prompt("How many lottery picks would you like?");
var lotto = [];
var lottoPicks = "";
while (x < 1 || x > 8)
{
	var x = prompt("ERROR: Pick a number 1-8 for your lottery picks!");
}

// fills lotto array
for (var i = 0; i < x; i++) lotto[i] = Math.ceil(Math.random() * 100);

// displays results
for (var i = 0; i < lotto.length; i++)if (i == 0) lottoPicks += lotto[i]; else lottoPicks += "-" + lotto[i];
console.log(lottoPicks);
