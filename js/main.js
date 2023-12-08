
var quote=[
{
    q: '“Be yourself; everyone else is already taken.”',
    name: 'Oscar Wilde'
},

{
    q:'“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
    name:'Albert Einstein'
},
{
    q:'“So many books, so little time.”',
    name:'Frank Zappa'
},
{

    q:'“A room without books is like a body without a soul.”―',
    name:' Marcus Tullius Cicero'
},
{
    q:'“You only live once, but if you do it right, once is enough.”―',
    name:'Mae West'
},
{
    q:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    name:' Mahatma Gandhi'
},
{
    q:'“We accept the love we think we deserve.”',
    name:'Stephen Chbosky, The Perks of Being a Wallflower'
},
{
    q:'“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
    name:'Ralph Waldo Emerson'
},
{
    q:'“Insanity is doing the same thing, over and over again, but expecting different results.”',
    name:'Narcotics Anonymous'
},
{
    q:'“Beware of what you become in pursuit of what you want.”',
    name: 'Jim Rohn'
}]


function randomQuote(){
    var rand = Math.floor(Math.random()*quote.length);
    document.getElementById('quote').innerHTML=`${quote[rand].q}`
    document.getElementById('author').innerHTML=`― ${quote[rand].name}`
}

