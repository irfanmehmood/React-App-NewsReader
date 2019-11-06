import React from "react";

function Navbar(props) {

      return (
        <ul className='topnav'>
            <li><button className={`${ props.selectedChannel === 'top' ? 'active' : '' }`} onClick={() => {props.loadNews('top')}}>Just In</button></li>
            <li><button className={`${ props.selectedChannel === 'world' ? 'active' : '' }`} onClick={() => {props.loadNews('world')}}>World</button></li>
            <li><button className={`${ props.selectedChannel === 'uk' ? 'active' : '' }`}  onClick={() => {props.loadNews('uk')}}>UK</button></li>
            <li><button className={`${ props.selectedChannel === 'business' ? 'active' : '' }`}  onClick={() => {props.loadNews('business')}}>Business</button></li>
            <li><button className={`${ props.selectedChannel === 'health' ? 'active' : '' }`} onClick={() => {props.loadNews('health')}}>Health</button></li>
            <li><button className={`${ props.selectedChannel === 'science' ? 'active' : '' }`} onClick={() => {props.loadNews('science')}}>Science</button></li>
            <li><button className={`${ props.selectedChannel === 'technology' ? 'active' : '' }`} onClick={() => {props.loadNews('technology')}}>Technology</button></li>
            <li><button className={`images-buts ${ props.selectedImages === 'animGif' ? 'active' : '' }`} onClick={() => {props.changeImage('animGif')}}>Fun</button></li>
            <li><button className={`images-buts ${ props.selectedImages === 'image3' ? 'active' : '' }`} onClick={() => {props.changeImage('image3')}}>image3</button></li>
            <li><button className={`images-buts ${ props.selectedImages === 'image2' ? 'active' : '' }`} onClick={() => {props.changeImage('image2')}}>image2</button></li>
            <li><button className={`images-buts ${ props.selectedImages === 'image1' ? 'active' : '' }`} onClick={() => {props.changeImage('image1')}}>image1</button></li>
        </ul>
      );

}
export default Navbar;