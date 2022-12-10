import './App.css';
import React from 'react';
import photo1 from './images/c1.png';
import photo2 from './images/c3.png';
import photo3 from './images/c4.png';
import photo4 from './images/c2.png';
import photo5 from './images/c4.png';
import photo6 from './images/c4.png';
import photo7 from './images/c4.png';
import photo8 from './images/c5.png';
import photo9 from './images/c6.png';
import photo10 from './images/c7.png';
import photo11 from './images/c8.png';

function Key()
{
   return(
    <>
        <div>
           <img class="img1" src={`${photo1}`} alt='images' />
        </div>
        <div class="text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment Information</div>
        <div>
           <img class="img2" src={`${photo2}`} alt='images' />
        </div>
        <p class="text2">ENGLISH</p>
        <div>
           <img class="img3" src={`${photo3}`} alt='images' />
        </div>
        <button class="button"> 
            <p class="write">Credit Card</p>
        </button>
        <button class="button1"> 
            <p class="write">Debit Cards</p>
        </button>
        <button class="button2"> 
            <p class="write">Net Banking</p>
        </button>
        <button class="button3"> 
            <p class="write1">UPI</p>
        </button>
        <div>
           <img class="img4" src={`${photo4}`} alt='images' />
        </div>
        <div>
           <img class="img5" src={`${photo4}`} alt='images' />
        </div>
        <div>
           <img class="img6" src={`${photo4}`} alt='images' />
        </div>
        <div>
           <img class="img7" src={`${photo4}`} alt='images' />
        </div>
        <div>
           <img class="img8" src={`${photo5}`} alt='images' />
        </div>
        <div>
           <img class="img9" src={`${photo6}`} alt='images' />
        </div>
        <div>
           <img class="img10" src={`${photo7}`} alt='images' />
        </div>
        <div>
           <img class="img11" src={`${photo8}`} alt='images' />
        </div>
        </>
   )  
}
export default Key;