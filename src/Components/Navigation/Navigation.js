import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange}) => {

   return(
      <div className="main_navigation">
         <ul>
            <li  onClick={() => onRouteChange('about')} >About |</li>
            <li  onClick={() => onRouteChange('play')} >Play |</li>
            <li  onClick={() => onRouteChange('portfolio')} >Portfolio |</li>
            <li  onClick={() => onRouteChange('refrences')} >Refrences</li>
         </ul>
      </div>
   )
}
export default Navigation;
