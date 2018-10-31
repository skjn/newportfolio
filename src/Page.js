import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css';
import './W3s.css';
import './Overrides.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ThesisBody, {UdBody, OmaBody, IllustrationsBody, SkjnBody, 
  HousingBody, DfhBody, NgBody, BitsBody} from './PageContent';

import img from './images'


class Page extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact  render={
            ()=>{
              return (<HomePage/>);
            }
            }/>
            <Route path="/About" exact strict render={
            ()=>{
              return (<AboutPage/>);
            }
            }/>
            <Route path="/Resume" exact strict render={
            ()=>{
              return (img[48]);
            }
            }/>
            <Route path="/Thesis" exact strict render={
            ()=>{
              return (<ThesisPage/>);
            }
            }/>
            <Route path="/UD" exact strict render={
            ()=>{
              return (<UdPage/>);
            }
            }/>
            <Route path="/OMA" exact strict render={
            ()=>{
              return (<OmaPage/>);
            }
            }/>
            <Route path="/BITS" exact strict render={
            ()=>{
              return (<BitsPage/>);
            }
            }/>
            <Route path="/NG" exact strict render={
            ()=>{
              return (<NgPage/>);
            }
            }/>
            <Route path="/Illustrations" exact strict render={
            ()=>{
              return (<IllustrationsPage/>);
            }
            }/>
            <Route path="/Housing" exact strict render={
            ()=>{
              return (<HousingPage/>);
            }
            }/>
            <Route path="/Skjn" exact strict render={
            ()=>{
              return (<SkjnPage/>);
            }
            }/>
            <Route path="/DFH" exact strict render={
            ()=>{
              return (<DfhPage/>);
            }
            }/>
        </div>  
      </Router>
    );
  }
}


// Display Page code compilations

class HomePage extends Component {
  render() {
    return (
    <div className="container">
       
       <Cover/>
       <Navbar />
       <Projects/>
       <hr/>
       <Skills/>
       <Footer/>
       </div>
    );
  }
}

class AboutPage extends Component {
  render() {
    return (
  <div className="container">
         <Navbar />
         <AboutMe/>
         <hr className="mb-5 mt-5"/>
         <Education/>
         <hr className="mb-5 mt-5"/>
         <Experience/>
         <Footer />
  </div>
    );
  }
}

class ThesisPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <ThesisBody/>
      <Footer/>
    </div>
    );
  }
}

class OmaPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <OmaBody/>
      <Footer/>
    </div>
    );
  }
}

class HousingPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <HousingBody/>
      <Footer/>
    </div>
    );
  }
}

class UdPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <UdBody/>
      <Footer/>
    </div>
    );
  }
}

class BitsPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <BitsBody/>
      <Footer/>
    </div>
    );
  }
}

class IllustrationsPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <IllustrationsBody/>
      <Footer/>
    </div>
    );
  }
}

class NgPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <NgBody/>
      <Footer/>
    </div>
    );
  }
}

class DfhPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <DfhBody/>
      <Footer/>
    </div>
    );
  }
}

class SkjnPage extends Component {
  render() {
    return (
    <div className="container">
      <Navbar />
      <SkjnBody/>
      <Footer/>
    </div>
    );
  }
}

// Components - Reusable

class Navbar extends Component {
  render(){  
  return(
    <div className="row mb-5">
    <div className="col navbar ">
      <ul className="nav nav-tabs mx-auto text-center">
    <li className="nav-item">
      <a className="nav-link text-secondary" href="/">Work</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href="About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href={img[48]} target="_blank">Resume</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-secondary" href="#Footer">Connect</a>
    </li>
    </ul>
    </div> 
    </div>

    )
  }
}

function Cover() {
    return (  
      <div>
    <div className = "container text-center mt-5">
      <img src = {img[42]} alt= "logo" className="text-center" style={{maxWidth: "20%"}}/>
            <p className="pb-0 mb-0 mt-3 text-muted">Hi, I am <strong>Shashank</strong>, and I</p>
            <h2 className="pt-0 mt-0 text-muted"><strong style={{color:"#ed4964"}}>Design </strong> Solutions</h2>
            <p className="text-muted">User Experience | Product | Graphic </p>
        </div>
        <div>
    </div>
    </div>
    )
  }

function AboutMe (){
  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 text-center">
          <div className = "shadow p-3 mb-5 bg-white rounded">
          <img src={img[42]} className="rounded-circle border border-secondary" alt="Display" />  
          </div>
          <h3>Hello, nice to meet you.</h3>
          <p>I am Shashank, and I design experiences.</p>
          <a className="text-secondary" href={img[48]} target="_blank">Download Resume</a>
        </div>
        <div className="col-6 ml-5">
          <p className="ml-10 text-justified">Architect turned UX designer, I have worked across multiple design fields. 
          Being passionate about design, I have been designing physical and virtual experiences for 
          people for last 7 years .It has helped me understand how people respond to forms, colors, 
          shapes and other intangible aspects. I feel that the perfect balance and harmony achieved 
          in design through user research is what converts a great design into the perfect one. 
          My interests lie in the field of designing interfaces and interactions for education and learning 
          technologies, developing online collaborative work environments and productivity softwares. I am also 
          interested in designing for upcoming technologies like VR to integrate in education + collaborative environments. </p>
             <p>Hello there Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In vehicula augue id velit dictum, id pharetra dui cursus. Phasellus 
            iaculis quam eros, vel pretium dolor tincidunt vitae. Aliquam erat volutpat. 
            In hac habitasse platea dictumstHello there Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In vehicula augue id velit dictum, id pharetra dui cursus. Phasellus 
            iaculis quam eros, vel pretium dolor tincidunt vitae. Aliquam erat volutpat. 
            In hac habitasse platea dictumst</p>
        </div>
      </div>
    </div>
  )
}

function Education(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-4 text-center">
          <h4>Education</h4>
        </div>
        <div className="col-6 ml-5">
          <h5>MS in Information Studies - HCI and UX design</h5>
          <p className="text-secondary"><i> School of Information, University of Texas at Austin 
            <br/>2018 - 2020 (expected) </i></p>
              <br/> <br/>
          <h5>Bachelor of Architecture </h5>
          <p className="text-secondary"> <i>School of Planning and Architecture, Delhi 
            <br/>2011 - 2016 </i></p>
        </div>
      </div>
    </div>
  )
}

function Experience(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-4 text-center">
          <h4>Experience</h4>
        </div>
        <div className="col-6 ml-5">
        <div>
          <h5>Architect | WAL+L Architects, New Delhi</h5>
          <p className="text-secondary"><i>January 2018 - April 2018</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Affordable Housing Design | Skill Development Center</i></p>
          <p><i><strong>Roles :</strong> Concept Design, Graphic Design, Client Presentations, 3D Modelling</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architect | Morphogenesis, New Delhi</h5>
          <p className="text-secondary"><i>July 2016 - August 2017</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Riverfront Ghat Development | Highrise Tower</i></p>
          <p><i><strong>Roles :</strong> Architectural Design, 3D Modelling, Presentations, Site supervision, MEP Consultant Cordination, Preparing Working Drawings</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architectural Intern | Hexagramm Designs, New Delhi</h5>
          <p className="text-secondary"><i>January 2015 - July 2015</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Urban Landscape Design | Origami Installations and interior Design | Hotel Design</i></p>
          <p><i><strong>Roles :</strong> Architectural Design, Landscape design, Interior Design, Furn1ture Design, 3D Modelling, Presentations</i></p>
        </div>
        </div>
        <br/><br/>
        <div>
          <h5>Architectural Intern | School of Planning and Architecture</h5>
          <p className="text-secondary"><i>April 2014 - July 2014</i></p>
          <div className="text-secondary">
          <p><i><strong>Projects :</strong> Space Audit and Optimization for Ministry of Human Resource Development, Govt. of India</i></p>
          <p><i><strong>Roles :</strong> Measured Drawing, Space and Work-Flow Optimization, Presentation</i></p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

function Skills(){
  return(
    <div className="container">
      <h4 className="text-center mb-5 mt-5 text-dark">Skills</h4>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h5 className= "text-dark"> Design<strong style={{color:"red"}}>.</strong> </h5> 
          <p className="text-muted"> User Research | Rapid Prototyping | WireFraming | User Persona | 
          Usability Testing | Story Boarding | Illustration Design | Graphic Design</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h5 className= "text-dark"> Tools<strong style={{color:"red"}}>.</strong> </h5> 
            <p className="text-muted">Sketch | Invision | Figma | Photoshop | Illustrator | Indesign | Animate | Adobe XD | AutoCAD | Sketchup</p>
            <br/>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <h5 className= "text-dark"> Development<strong style={{color:"red"}}>.</strong> </h5> 
          <p className= "text-muted">HTML | CSS | Bootstrap | Javascript | Reactjs</p>
              <br/><br/>
            </div>
        </div>
    </div>
    </div>
  )
}

function Tile (props) {
  return(
  
  <a className="col-sm-12 col-md-6 col-lg-4 w3-hover-opacity" style={{textDecoration : "none"}} href={props.link}>
   <div className = "shadow p-3 mb-5 bg-white rounded">
    <section className="card mx-auto">
      <img className="card-img-top img-fluid" src={props.image}></img>
      <div className="card-body">
        <h4 className="card-title text-main text-dark">{props.title}</h4>
        <p className="card-text text-muted"> {props.description} </p>
        <h6 className="card-link text-secondary"> {props.fields} </h6>
      </div>
      </section>
    </div>
    </a>
  )
}

class Projects extends Component{
  constructor(props) {
    super(props)
    this.state = {
        projects : [
          {
            id : 1,
            link : "/Thesis",
            image : img[0],
            title: "Thesis",
            description: "Your description goes here",
            fields: "Architecture | Design "
          },
          {
            id : 2,
            link : "/Housing",
            image : img[6],
            title: "Housing",
            description: "Your description goes here",
            fields: "Architecture | Design "
          },
          {
            id : 3,
            link : "/UD",
            image : img[1],
            title: "Urban Design",
            description: "Your description goes here",
            fields: "Architecture | Design "
          },
          {
            id : 4,
            link : "/OMA",
            image : img[3],
            title: "OMA",
            description: "Your description goes here",
            fields: "Architecture | Design "
          },
          {
            id : 5,
            link : "/BITS",
            image : img[8],
            title: "BITS",
            description: "Your description goes here",
            fields: "Architecture | Design "
          },
          {
            id : 6,
            link : "/NG",
            image : img[4],
            title: "Namami Gange",
            description: "Your description goes here",
            fields: "Architecture | Design "
          },
          {
            id : 9,
            link : "/DFH",
            image : img[7],
            title: "Designing for Happiness",
            description: "Your description goes here",
            fields: "Architecture | Design "
          }
        
        
        ]
    }
  }


render() {
  return (
  //  <ReactTransitionGroup.TransitionGroup>
  //<ReactTransitionGroup.CSSTransition classNames="animated infinite bounce delay-2s" timeout={2000}>
       <div className="row">
          {this.state.projects.map(Tile)}
          </div>
         // </ReactTransitionGroup.CSSTransition>
        //  </ReactTransitionGroup.TransitionGroup>
  )
}
} 


class Footer extends Component{
  render(){
    return(
      
      <div className="container" id="Footer">
      <hr className="mb-3"/>
        <div className="row">
          <div className="col-12 text-center">
          <h4 className="mb-4 text-dark">Connect</h4>
          </div>
        </div>
        <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 text-left"> 
            <p className="text-secondary">+1-201-884-0830</p>
            <p className="ml-3 text-secondary mb-5">Austin, Texas</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center"> 
            <p className="text-secondary">sjain@utexas.edu</p>
            <p className="text-center text-secondary"><p><a href="">LinkedIn </a>  |  <a href="">Behance</a></p></p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-right"> 
            <a className="text-secondary" href={img[48]} target="_blank">Download Resume</a>
        </div>
        </div>
        <div className="col text-center text-secondary mb-3">Design & Code by Shashank Jain © 2018 | Last update: November 30th, 2018</div>
      </div>
    );
  }
}




export default Page;

