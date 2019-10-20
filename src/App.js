import React, {Component} from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Education from './Education';
import Languages from './Languages';
import Interests from './Interests';
import Projects from './Projects';

class App extends Component{
  renderExperiences(){
    let resultsArray = [];
    resume.experiences.map((item, i) => (
      resultsArray.push(<Experience item={item} key={i} />)
    ));
    return resultsArray;
  }
  renderEducation(){
    let resultsArray = [];
    resume.education.map((item, i) => (
      resultsArray.push(<Education item={item} key={i} />)
    ));
    return resultsArray;
  }
  renderLanguages(){
    let resultsArray = [];
    resume.languages.map((item, i) => (
      resultsArray.push(<Languages item={item} key={i} />)
    ));
    return resultsArray;
  }
  renderInterest(){
    let resultsArray = [];
    resume.interests.map((item, i) => (
      resultsArray.push(<Interests item={item} key={i} />)
    ));
    return resultsArray;
  }
  renderProject(){
    let resultsArray = [];
    resume.projects.map((item, i) => (
      resultsArray.push(<Projects item={item} key={i} />)
    ));
    return resultsArray;
  }
  render(){
  return(
    <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Software Engineer</h3>
            </div>

            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope"></i><a href="mailto: neelalex007@gmail.com">{resume.email}</a></li>
                    <li className="phone"><i className="fas fa-phone"></i><a href="tel: +919567953022">{resume.phone}</a></li>
                    <li className="website"><i className="fas fa-globe"></i><a href="https://www.hackerrank.com/neelalex" target="_blank">{resume.hackerrank}</a></li>
                    <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/neel-alex-286920106" target="_blank">{resume.linkedin}</a></li>
                    <li className="github"><i className="fab fa-github"></i><a href="https://github.com/NeelAlex" target="_blank">{resume.github}</a></li>
                </ul>
            </div>

            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.renderEducation()}
            </div>

            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderLanguages()}
                </ul>
            </div>

            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderInterest()}
                </ul>
            </div>

        </div>

        <div className="main-wrapper">

            <section className="section summary-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                <div className="summary">
                    <p> A passionate Software Engineer with 2.5 years of development experience. Looking to advance my career through innovations that will foster the life of millions, if not, billions.   </p>
                </div>
            </section>

            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>

                {this.renderExperiences()}


            </section>

            <section className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                  <div className="item">
                      <span className="project-title"><a>eBuff</a></span> - <span className="project-tagline">Co-founded eBuff (April 2015- March 2016). This Startup was aimed at providing online repair portal for electronic gadgets in and around Kerala,
                      India. Focus was on the implementation of Idea followed by the development and design of website (Full Stack Development).</span>
                  </div>
                {this.renderProject()}

            </section>


            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">

                <div className="item">
                    <h3 className="level-title">{resume.skills[1].name}</h3>
                    <div className="progress level-bar">
                <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '98%'}} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>



                    <div className="item">
                        <h3 className="level-title">{resume.skills[2].name}</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">{resume.skills[0].name}</h3>
                        <div className="progress level-bar">
                  <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">{resume.skills[4].name}</h3>
                        <div className="progress level-bar">
						    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
                    </div>


                    <div className="item">
                        <h3 className="level-title">{resume.skills[3].name}</h3>
                        <div className="progress level-bar">
							    <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
                    </div>


                </div>
            </section>

        </div>
    </div>

  );
}
}

export default App;
