import React from 'react';
import './TopDrawer.css';

const TopDrawer = ({onRouteChange}) => {

   return(
      <div className="drawer">
         <ul id="list_drawer">
            <li  onClick={() => onRouteChange('about')} >About </li>
            <li  onClick={() => onRouteChange('play')} >Play </li>
            <li  onClick={() => onRouteChange('portfolio')} >Portfolio </li>
            <li  onClick={() => onRouteChange('refrences')} >Refrences</li>
         </ul>
      </div>
   )
}
export default TopDrawer;
