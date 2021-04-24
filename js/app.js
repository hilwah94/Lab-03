
'use srtict';
function welcomingMessege()
{
  alert ('Welcome to my web site!');
}
welcomingMessege();

function userName()
{
let userName = prompt('what\'s your name ?');
userName.toLowerCase
console.log(userName);
alert('Welcome to my website ' + userName);
}
userName();

function alien ()
{
let Alien = prompt( 'Am I Alien ?');

switch(Alien.toLowerCase())
{ case 'yes':
  case 'y' :
    alert('you got me');
    break;
  case 'n' :
  case 'no' :
    alert('as u say human');
    break;
    default:
        
        alert('it\'s scary i know ');
}
}
alien();

function memes ()
{
  let memes = prompt('do i like memes ?');
  switch(memes.toLowerCase())
{ case 'yes':
  case 'y' :
    alert('more than any thing');
    break;
  case 'no' :
  case 'n' :
    alert('you are right, i love it');
    break;
    default:
        alert('even we aliens love memes');
}
}

memes ();

function catPerson ()
{
let  catPerson = prompt( 'Am i a cat person?');
switch(catPerson.toLowerCase())
{ case 'yes':
  case 'y' :
    alert('they are adorable');
    break;
  case 'no' :
  case 'n' :
    alert('evrey one is a cat person when you relaize it');
    break;
    default:
        alert('bet in general are human best friend');
}
}

catPerson ();

function music ()
{
let music = prompt( 'do i like music?');
switch(music.toLowerCase())
{ case 'yes':
  case 'y' :
    alert('sure thing');
    break;
  case 'no' :
  case 'n' :
    alert('who don\'t like music ? ');
    break;
    default:
        alert('music is therapy');
}
}

music();

function greeting()
{
alert('you are welcome to visit us any time');
}

greeting();

function favNum()
{
let score = 0;
let favNum = null;

for (let i=0 ; i<4 ; i++)
{
    favNum = prompt('What\'s my favourite number ?');
    favNum = parseInt(favNum);
    if (favNum === 13) 
    {
        alert('correct')
        score++;
        break;
    }
    else if (favNum<13) {
        alert('too low');
    }
    else {
        alert ('too high');
    }
    if (i===3)
    {
        alert ('you lost my lucky number is 13 !');
    }
    
}
}
favNum();

<<<<<<< HEAD
let favBand = ['metallica','nirvana','opeth','pink floyd','katatonia'];
console.log(favBand)
for (let j=0 ;j<6 ;j++)
{
  favBandQ = prompt('what is my favourite band ?');
  favBandQ.toLowerCase();
  {
    if (favBandQ === favBand[0] ||favBandQ === favBand[1] || favBandQ === favBand[2] || favBandQ === favBand[3]
      || favBandQ === favBand[4])
    {
      alert ('Yep, I love them');
      break;
    } else {
      alert('soory, you gussed worong');
    }
  }
}
=======

function favBand()
{
  let favBand = ['metallica','nirvana','opeth','pink floyd','katatonia'];
  console.log(favBand)
  for (let j=0;j<6;j++)
  {
      favBandQ = prompt('what is my favourite band ?');
      favBandQ.toLowerCase();
      if (favBandQ===favBand[0] || favBandQ===favBand[1] || favBandQ===favBand[2]
          || favBandQ===favBand[3] || favBandQ===favBand[4])
      
          {
              alert ('Yep, I love them');
              break;
          } else {
              alert('soory, you gussed worong');
          }
  
      }
}
favBand();
>>>>>>> 37e3d311096ac34285b7f327fedb9ec55cca8a29
