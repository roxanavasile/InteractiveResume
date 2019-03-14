import React, { Component } from 'react';
import PictureAndName from './Components/PictureAndName/PictureAndName';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Portfolio from './Components/Portfolio/Portfolio.js';
import ContactForm from './Components/ContactForm/ContactForm';
import Refrences from './Components/Refrences/Refrences.js';
import BurgerIcon from './Components/HamburgerMenu/BurgerToggleDrawer.js';
import TopDrawer from './Components/HamburgerMenu/TopDrawer.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Popup from "reactjs-popup";
import './App.css';


const app = new Clarifai.App({
 apiKey: 'd6cf27830731446880c3fa55f858ca7e'
});

const paramsOptions = {
   particles: {
      number: {
         value: 200,
         density: true,
         value_area: 800
      },
   },

   interactivity: {
      events: {
         onhover: {
            enable: true,
            mode: 'grab'
         }
      }
   }
}

class App extends Component {

   constructor(props){
   super(props);
   this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'about',
      isHidden: true,
      topdrawerOpen: false
   }
}

toggleHidden() {
   this.setState({
      isHidden: !this.state.isHidden
   });
   console.log(this.state.isHidden)
}

onInputChange = (event) => {
      this.setState({input: event.target.value});
   }

onRouteChange = (route) => {
   this.setState({route});
   console.log(route);
}

calculateFaceLocation = (data) => {
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputImage');
   const width = Number(image.width);
   const height = Number(image.height);
   return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
   }
}

onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        this.calculateFaceLocation(response);
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  displayFaceBox = (box) => {
      console.log(box);
      this.setState({box: box});
   }

   drawerToggleClickHandler = () => {
      this.setState((prevState) => {
         return {topdrawerOpen: !prevState.topdrawerOpen};
      });
   };

  render() {

     let area;
     let topDrawer;

     if(this.state.route === 'about' )
     {
        area = <PictureAndName onRouteChange ={this.onRouteChange}/>;
     }
     else if(this.state.route === 'play' )
     {
        area =
        <div className='play wrapper br3 ba b--black-10 mv4 mw7 shadow-5 center '>
           <ImageLinkForm
                        onInputChange = {this.onInputChange}
                        onButtonSubmit = {this.onButtonSubmit}
                     />
            <FaceRecognition
               box = {this.state.box}
               imageUrl = {this.state.imageUrl}
               />
        </div>

     }
     else if(this.state.route === 'portfolio' )
     {
        area = <Portfolio onRouteChange ={this.onRouteChange}/>;
     }
     else if(this.state.route === 'refrences' )
     {
        area = <Refrences onRouteChange ={this.onRouteChange}/>;
     }


     if(this.state.sidedrawerOpen) {
        topDrawer = <TopDrawer />
     }

    return (
      <div >
         <Particles className='particles'
              params={paramsOptions}
            />
         <Popup
               modal
               closeOnDocumentclick={false}
               trigger={open => <BurgerIcon open={open} />}
               contentStyle={{background: "#0288D1", padding: "0px", margin: "0px", height: "70px", width: "100%", boxShadow: "2px 0px 5px rgba(255, 0, 0, 0.5)" }}
            >
            {close => <TopDrawer close={close} onRouteChange={this.onRouteChange}/>}
         </Popup>
         <Navigation onRouteChange={this.onRouteChange} />
         {area}
         <div className='contact_me'>
            <button
               className='contact_btn grow'
               onClick={this.toggleHidden.bind(this) }

               >Contact me</button>
         </div>
         {!this.state.isHidden && <ContactForm classname='contact_form' to="roxanavasile91@gmail.com" />}

      </div>
    );
  }
}

export default App;
