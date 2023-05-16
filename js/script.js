var quotes = [
		'If I have seen further than others, it is by standing upon the shoulders of giants.',
		'There is no greater education than one that is self-driven.',
		'Talent hits a target no one else can hit. Genius hits a target no one else can see.',
		'For small creatures such as we the vastness is bearable only through love.',
		'I have noticed that even people who claim everything is predetermined and that we can do nothing to change it, look before they cross the road.',
		'The history of astronomy is a history of receding horizons.',
		'You cannot teach a man anything, you can only help him find it within himself.',
		'A man who dares to waste one hour of time has not discovered the value of life.',
		'Life is like riding a bicycle. To keep your balance, you must keep moving.',
		'It is the infinite alone that cannot be attained, for if it could it would become finite.',
		'Consciousness is the one thing in this universe that cannot be an illusion.',
		'The real question is whether all your pondering and analyses will convince you that life is worth living. That is what it all comes down to.',
		'I have made it a rule never to employ a larger telescope when a smaller will answer the purpose.',
		'I much prefer the sharpest criticism of a single intelligent man to the thoughtless approval of the masses.',
		'The task is, not so much to see what no one has yet seen; but to think what nobody has yet thought, about that which everybody sees.',
		'Opposites are complementary.',
		'What I cannot create, I do not understand.',
		'Nothing in life is to be feared, it is only to be understood.',
		'If you are receptive and humble, mathematics will lead you by the hand.',
		'It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.',
		'An alleged scientific discovery has no merit unless it can be explained to a barmaid.',
		'An expert is someone who knows some of the worst mistakes that can be made in his subject, and how to avoid them.',
		'The important thing is to know how to take all things quietly.',
		'To live among friends is the primary essential of happiness.',
		'Only by doing the best we can with the very best that an era offers, do we find the way to do better in the future.',
	]
	
var quoteSig = [
		'-Isaac Newton',
		'-Neil deGrasse Tyson',
		'-Michio Kaku',
		'-Carl Sagan',
		'-Stephen Hawking',
		'-Edwin Hubble',
		'-Galileo Galilei',
		'-Charles Darwin',
		'-Albert Einstein',
		'-Leonardo da Vinci',
		'-Sam Harris',
		'-Brian Greene',
		'-William Herschel',
		'-Johannes Kepler',
		'-Erwin Schrodinger',
		'-Niels Bohr',
		'-Richard Feynman',
		'-Marie Curie',
		'-Paul Dirac',
		'-Max Planck',
		'-Ernest Rutherford',
		'-Werner Heisenberg',
		'-Michael Faraday',
		'-William Thomson',
		'-Frank Drake',
	]
function start()
{
var quoteNum = Math.floor(Math.random() * (quotes.length));
document.getElementById('quote').innerText = quotes[quoteNum];
document.getElementById('quoteSig').innerHTML = quoteSig[quoteNum];
}

function newQuote()
{
	quoteNum = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quote').innerText = quotes[quoteNum];
	document.getElementById('quoteSig').innerHTML = quoteSig[quoteNum];
}
function featured()
{
	document.getElementById("featured").scrollIntoView();
}
function select()
{
	document.getElementById("click").load();
	document.getElementById("click").play();
}
function choose()
{
	document.getElementById("choose").load();
	document.getElementById("choose").play();
}