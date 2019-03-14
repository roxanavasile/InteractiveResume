import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return(
    <div className="pad_mobile center">
      <p className='f4' id="">
         {'Right click on any image on the web and select "Open in new Tab". Then copy the url and paste below to detect faces in your pictures.'}
      </p>
      <div className='center'>
         <div className='form  center pa4 br3 shadow-5'>
            <input
               className='f4 pa2 w-70 center'
               type='text'
               onChange={onInputChange}/>
            <button
               className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple '
               onClick={onButtonSubmit}
            >Detect</button>
         </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
