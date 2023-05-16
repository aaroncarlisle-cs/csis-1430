//JAVASCRIPT STUFF
function toggleMembers()
{
	if (document.getElementById("members").className == "hide")
	{
		document.getElementById("members").className = "show";
		document.getElementById("members-heading").innerText = "Click to Hide Members";
	}
	else
	{
		document.getElementById("members").className = "hide";
		document.getElementById("members-heading").innerText = "Click to Show Members";
	}
}
function switchImage()
{
	if (document.getElementById("europe-image").attributes[1].nodeValue == "img/europe1.jpg")
	{
		document.getElementById("europe-image").src="img/europe2.jpg";
	}
	else
	{
		document.getElementById("europe-image").src="img/europe1.jpg";
	}
}
function toggleFont()
{
	if (document.getElementById("main-content").className == "default")
	{
		document.getElementById("main-content").className = "change-1";
	}
	else if (document.getElementById("main-content").className == "change-1")
	{
		document.getElementById("main-content").className = "change-2";
	}
		else if (document.getElementById("main-content").className == "change-2")
	{
		document.getElementById("main-content").className = "change-3";
	}
	else
	{
		document.getElementById("main-content").className = "default";
	}
}
