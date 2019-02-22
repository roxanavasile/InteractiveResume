import React from 'react';
import Tilt from 'react-tilt'
import headshot from './headshot.jpg'
import './PictureAndName.css';


const PictureAndName = () =>
{
   return (
      <Tilt className="Tilt center" options={{ max : 5 }}  >
         <div className="Tilt-inner center">
           <div className= 'wrapper br3 ba b--black-10 mv4  mw7 shadow-5 center '>
            <img src={headshot} alt='Roxana Vasile'  className=' face shadow-4'/>
            <div className='intro'>
               <div>{'Hello!'}</div>
               <div >{'I am Roxana, a very enthusiastic web developer.'} </div>
               <div className='f3 dark-pink'>{'I LOVE coding and pizza.'} </div>
            </div>

     </div>
  </div>
  </ Tilt>



   );
}

export default PictureAndName;
