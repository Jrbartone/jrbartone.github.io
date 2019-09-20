import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './HomePage'
import NavBar from './NavBar'
import EducationPage from './EducationPage'
import SkillsPage from './SkillsPage'
import ExperiencePage from './ExperiencePage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'
import { Header, Container } from 'semantic-ui-react';





class App extends Component {
    render(){
        return(
            <Router>
                    <Header><NavBar/></Header>
                    <Container textAlign='middle'>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="education" exact path="/education" component={EducationPage} />
                    <Route name="skills" exact path="/skills" component={SkillsPage} />
                    <Route name="experience" exact path="/experience" component={ExperiencePage} />
                    <Route name="projects" exact path="/projects" component={ProjectsPage} />
                    <Route name="contact" exact path="/contact" component={ContactPage} />
                    </Container>
            
            </Router>
        )
    }
}

export default App;