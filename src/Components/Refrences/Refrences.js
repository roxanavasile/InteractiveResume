import React from 'react';
import resume from './roxana_developer.pdf';
import './References.css';
import recommendation from './roxana_recommendation_letter_blur.pdf';


const Refrences = () => {
  return(
    <div className='mobile center br3 ba b--black-10 mv6 mw7 shadow-5'>
      <h1 >What others say about me...</h1>
      <h2 style={{paddingLeft:"2em"}}>
         <a target="_blank" href={resume} >Resume</a>
      </h2>
      <br />
      <h2 style={{paddingLeft:"2em"}}>
         <a target="_blank" href={recommendation} >Recommendation Letter</a>
      </h2>
      <br />
      <h2 style={{paddingLeft:"2em"}}>
         <a target="_blank" href={"https://roxanavasiledeveloper.wordpress.com/"} >Don't forget to check out my blog! </a></h2>
   </div>
  );
}

export default Refrences;
