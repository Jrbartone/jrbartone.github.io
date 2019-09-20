import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Icon, Header, Visibility, Responsive, Segment, Container} from 'semantic-ui-react';
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css';


class NavBar extends Component{

    render(){
        return(
            <StickyHeader
                    header={
                     <Header as='h3'>
                        <ul id="headerButtons">
                            <Link to="/">
                                <Button className="navButton" animated='fade'>
                                    <Button.Content visible>Home</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='home' />
                                    </Button.Content>
                                </Button>
                            </Link>
                            <Link to="/education">
                                <Button className="navButton" animated='fade'>
                                    <Button.Content visible>Education</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='book' />
                                    </Button.Content>
                                </Button>
                            </Link>
                            <Link to="/skills">
                                <Button className="navButton" animated='fade'>
                                    <Button.Content visible>Skills</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='terminal' />
                                    </Button.Content>
                                </Button>
                            </Link>
                            <Link to="/experience">
                                <Button className="navButton" animated='fade'>
                                    <Button.Content visible>Experience</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='briefcase' />
                                    </Button.Content>
                                </Button>
                            </Link>
                            <Link to="/projects">
                                <Button className="navButton" animated='fade'>
                                    <Button.Content visible>Projects</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='list' />
                                    </Button.Content>
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button className="navButton" animated='fade' >
                                    <Button.Content visible>Contact</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='mail' />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </ul>
                    </Header>
                    }
                    >
                </StickyHeader>
                   
                
        )
    }
}



export default NavBar;