
'use srtict';

alert('welcome to my web site');

let userName = prompt('what\'s your name ?');
userName : userName.toLowerCase
console.log(userName);
alert('Welcome to my website ' + userName);

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

let  memes = prompt('do i like memes ?');
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

alert('you are welcome to visit us any time');

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

let favBand = ['Metallica','Nirvana','Opeth','Pink Floyd','Katatonia'];
console.log(favBand)
for (let j=0;j<6;j++)
{
    favBandQ = prompt('what is my favourite band ?');
    favBandQ = favBandQ.toLowerCase();
    if (favBandQ===favBand[0] || favBandQ===favBand[1] || favBandQ===favBand[2]
        || favBandQ===favBand[3] || favBandQ===favBand[4])
    
        {
            alert ('Yep, I love them');
            break;
        } else {
            alert('soory, you gussed worong');
        }

    }
    
    // if(favBand[0],[1],[2],[3],[4] === favBandQ)
    // { alert ('Yep, I love them')
    // this method don't work
    // if (favBand [0] === favBandQ ||favBand[1] ===  favBandQ || 
    //     favBand [2] === favBandQ ||favBand[3] ===  favBandQ ||
    //     favBand[4] ===  favBandQ )
    // {
    // alert ('Yes I love them, you\'re correct!');
    //     score++;
    //     break;
    // } else {
    //     alert('soory, you gussed worong');
    // } 

