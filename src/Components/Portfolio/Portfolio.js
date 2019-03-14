import React from 'react';
import stokes_county from './img/stokes_county.PNG';
import tiles_wireframe from './img/tiles_wireframe.PNG';
import biltmore from './img/Blitmore.png';
import react from './img/react.jpg';
import python from './img/python.jpg';
import './Portfolio.css';

const Portfolio = ({onInputChange}) => {
  return(
    <div className='port br3 ba b--black-10 mv1  mw10 shadow-5 center pad_mobile'>
      <div className='inner'>
         <h1 > Work. Get stuff DONE. </h1>
      </div>
      <div  className="work_examples">
         <article className="grow bg-white center mw5 ba b--black-10 mv1">
          <div className="pv2 ph3">
              <h1 className="f6 ttu tracked">ASP.NET - C#</h1>
          </div>
          <img src="http://tachyons.io/img/cat-720.jpg" className="w-100 db" alt="Closeup of a tabby cat yawning." />
          <div className="pa3">
             <a target='_blank' href="https://github.com/roxanavasile/ASP.NET-with-C-projects.git" className="link dim lh-title" >GitHub Repo Class Projects</a>
          </div>
        </article>

         <article className=" grow bg-white center mw5 ba b--black-10 mv1">
           <div className="pv2 ph3">
              <h1 className="f6 ttu tracked">Python</h1>
           </div>
           <img src={python} className="w-100 db" alt="Closeup of a tabby cat yawning." />
           <div className="pa3">
             <a target='_blank' href="https://github.com/roxanavasile/Python" className="link dim lh-title">Easy Peasy</a>
           </div>
        </article>

       <article className=" grow bg-white center mw5 ba b--black-10 mv1">
         <div className="pv2 ph3">
            <h1 className="f6 tracked">React-Robofriends</h1>
         </div>
         <img src={react} className="w-100 db" alt="Closeup of a tabby cat yawning." />
         <div className="pa3">
           <a target='_blank' href="https://github.com/roxanavasile/ReactJs-Robofriends" className="link dim lh-title">Web Contacts App</a>
         </div>
         </article>

         <article className="grow bg-white center mw5 ba b--black-10 mv1">
           <div className="pv2 ph3">
              <h1 className="f6 ttu tracked">BOOTSTRAP</h1>
           </div>
           <img src={stokes_county} className="w-100 db" alt="Closeup of a tabby cat yawning." />
           <div className="pa3">
             <a target="_blank" href="https://github.com/roxanavasile/stokes_county_dreamweaver" className="link dim lh-title">Stokes County website redo</a>
           </div>
        </article>
        <article className="grow bg-white center mw5 ba b--black-10 mv1">
         <div className="pv2 ph3">
             <h1 className="f6 ttu tracked">Material Design Lite</h1>
         </div>
         <img src={biltmore} className="w-100 db" alt="Closeup of a tabby cat yawning." />
         <div className="pa3">
            <a target="_blank" href="https://github.com/roxanavasile/biltmore_nc_mdl" className="link dim lh-title">MDL Implementation</a>
         </div>
       </article>
       <article className="grow bg-white center mw5 ba b--black-10 mv1">
         <div className="pv2 ph3">
            <h1 className="f6 ttu tracked">Wireframes</h1>
         </div>
         <img src={tiles_wireframe} className="w-100 db" alt="Closeup of a tabby cat yawning." />
         <div className="pa3">
           <a target="_blank" href="https://github.com/roxanavasile/tiles_website" className="link dim lh-title"> HTML5, CSS3, Grid, and Flexbox</a>
         </div>
         </article>
      </div>
      <div>
         <p className='welcome'> I hope you enjoyed my sample work! </p>
      </div>
    </div>
  );
}

export default Portfolio;
