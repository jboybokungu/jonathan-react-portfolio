import React from "react";
import Budget from '../images/budget.png';
import Employee from '../images/employeescreenshot.png';
import Keyboard from '../images/keyboard.png';
import Notetaker from '../images/notetaker.png';
import Password from '../images/passwordgeneratorscreenshot.png';
import Project from '../images/project.png';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
<section className="card-container">
<div className="row">
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="bg-dark">
    <img src={Budget} class="card-img-top" alt="budget-tracker"/>
      <div className="card-body">
        <h5 className="text-danger">Progressive Budget</h5>
        <p className="card-text">This app was created with MongoDB/Mongoose, and it allows the users to manage their budget online and offline.</p>
        <a href="https://jonathan-budget-tracker001.herokuapp.com/" class="btn btn-primary">Heroku Link</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="bg-dark">
    <img src={Employee} class="card-img-top" alt="employee-tracker"/>
      <div className="card-body">
        <h5 className="text-danger">Employee Management System</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://drive.google.com/file/d/1zwGij17UazWofwvYQ2Q_x98jWppGb_UU/view?usp=sharing" class="btn btn-primary">Video Link</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="bg-dark">
    <img src={Keyboard} class="card-img-top" alt="keyboard-battle"/>
      <div className="card-body">
        <h5 className="text-danger">Keyboard Battle</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://keyboardbattle.herokuapp.com/" class="btn btn-primary">Heroku Link</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="bg-dark">
    <img src={Notetaker} class="card-img-top" alt="note-taker"/>
      <div className="text-danger">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://infinite-reef-21390.herokuapp.com/notes" class="btn btn-primary">Heroku Link</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="bg-dark">
    <img src={Password} class="card-img-top" alt="password-generator"/>
      <div className="card-body">
        <h5 className="text-danger">Password Generator</h5>
        <p className="card-text">Using mainly JavaScript, this allows the users to generate random passwords.</p>
        <a href="https://jboybokungu.github.io/jonathan-password/" class="btn btn-primary">GitHub</a>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="bg-dark">
    <img src={Project} class="card-img-top" alt="professor-gif"/>
      <div className="card-body">
        <h5 className="text-danger">Professor Gif Project</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://liladobe.github.io/professor-gif/" class="btn btn-primary">GitHub</a>
      </div>
    </div>
  </div>
</div>

</section>
    )
}


export default Portfolio;