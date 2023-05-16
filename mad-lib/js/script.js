// Select lib
var choice = 0;
var choice = prompt("Choose your Mad-lib. Enter 1 or 2.");
while (choice != 1 && choice != 2)
{
	var choice = prompt("Invalid selection. Please enter 1 or 2.");
}
if (choice == 1)
{
	var noun1 = prompt("You've chosen story 1. Please enter a noun (person):")
	var noun2 = prompt("Please enter another noun:")
	var verb1 = prompt("Please enter a verb:")
	var verb2 = prompt("Please enter another verb:")
	var ad1 = prompt("Please enter an adjective:")
	var ad2 = prompt("Please enter another adjective:")
	var ad3 = prompt("Please enter one last adjective:")
	var con1 = prompt("Please enter a conjunction (word that describes an emotion):");
}
else if (choice == 2)
{
	var noun1 = prompt("You've chosen story 2. Please enter a noun:")
	var noun2 = prompt("Please enter another noun:")
	var verb1 = prompt("Please enter a verb:")
	var verb2 = prompt("Please enter another verb:")
	var ad1 = prompt("Please enter an adjective:")
	var ad2 = prompt("Please enter another adjective:")
}

