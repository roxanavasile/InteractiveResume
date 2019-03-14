import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return(
     <div className='center pad_mobile'>
      <div className='image_background absolute'>
         <img
            id = 'inputImage'
            alt='' src={imageUrl}
            width='200px'
            height='auto'
            />
         <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} > </div>
      </div>
    </div>
  );
}

export default FaceRecognition;
