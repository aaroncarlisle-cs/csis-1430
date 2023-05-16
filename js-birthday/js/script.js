//Get user input for name, age, and month variables.
var name = prompt ("Please enter your name:");
var age = prompt ("Please enter your age:");
var month = prompt ("Please enter your birth month:");

//Use month to set stone and season variables.
if (month == "January")
{ 
	var stone = "Garnet";
	var season = "Winter";
}
else if (month == "january")
{ 
	var stone = "Garnet";
	var season = "Winter";
}
else if (month == "February")
{
	var stone = "Amethyst";
	var season = "Winter"
}
else if (month == "february")
{
	var stone = "Amethyst";
	var season = "Winter"
}
else if (month == "March")
{
	var stone = "Aquamarine";
	var season = "Winter or Spring"
}
else if (month == "march")
{
	var stone = "Aquamarine";
	var season = "Winter or Spring"
}
else if (month == "April")
{
	var stone = "Diamond";
	var season = "Spring"
}
else if (month == "april")
{
	var stone = "Diamond";
	var season = "Spring"
}
else if (month == "May")
{
	var stone = "Emerald";
	var season = "Spring"
}
else if (month == "may")
{
	var stone = "Emerald";
	var season = "Spring"
}
else if (month == "June")
{
	var stone = "Alexandrite";
	var season = "Spring or Summmer"
}
else if (month == "june")
{
	var stone = "Alexandrite";
	var season = "Spring or Summmer"
}
else if (month == "July")
{
	var stone = "Ruby";
	var season = "Summer"
}
else if (month == "july")
{
	var stone = "Ruby";
	var season = "Summer"
}
else if (month == "August")
{
	var stone = "Peridot";
	var season = "Summer"
}
else if (month == "august")
{
	var stone = "Peridot";
	var season = "Summer"
}
else if (month == "September")
{
	var stone = "Sapphire";
	var season = "Summer or Fall"
}
else if (month == "september")
{
	var stone = "Sapphire";
	var season = "Summer or Fall"
}
else if (month == "October")
{
	var stone = "Pink Tourmaline";
	var season = "Fall"
}
else if (month == "october")
{
	var stone = "Pink Tourmaline";
	var season = "Fall"
}
else if (month == "November")
{
	var stone = "Topaz";
	var season = "Fall"
}
else if (month == "november")
{
	var stone = "Topaz";
	var season = "Fall"
}
else if (month == "December")
{
	var stone = "Blue Topaz";
	var season = "Fall or Winter"
}
else if (month == "december")
{
	var stone = "Blue Topaz";
	var season = "Fall or Winter"
}

//Alert greeting.
if (age >= 50)
{
	alert("Hello " + name + "! You are " + age + " years old! Wow! That's old! You were born in " + month + " in the " + season
	 + ", and your birthstone is a(n) " + stone + "!");
}
else
{
		alert("Hello " + name + "! You are " + age + " years old! You're still young! You were born in " + month + " in the " + season
	 + ", and your birthstone is a(n) " + stone + "!");
}

