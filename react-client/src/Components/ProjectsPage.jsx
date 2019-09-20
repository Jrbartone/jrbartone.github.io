import React, {Component} from 'react';
import {Button, Icon, Header, Container, Card, Grid,Image} from 'semantic-ui-react';


class ProjectsPage extends Component {
    render(){
        return(
            <projectspage>
                <Grid columns={1} align="middle">
                    <Grid.Row>
                    <Grid.Column>
                    <Card image='https://cdn1.iconfinder.com/data/icons/hospital-47/64/surgeon-doctor-operation-surgery-medical-hospital-512.png'
                    header='Super-elastic Continuum Robot (SCREAM)'
                    meta='WIP: Fall 2019 - Summer 2020'
                    description='Major Qualifying Project: A robotic endoscope for throat surgery. Worked on camera tracking/ image processing and stability.'
                    />
                    </Grid.Column>
                     <Grid.Column>
                     <Card image='http://clipart-library.com/images/pc78ooxRi.png'
                    header='Money Recognition Assistive Device'
                    meta='WIP: Summer 2019'
                    description='IRobot summer intern project. Uses OpenCV to distinguish between different types of bills for the visually impaired.'
                    />
                    </Grid.Column>
                    <Grid.Column>
                    <Card>
                        <Image src= {require('./assets/FF.jpg')} />
                        <Card.Content>
                            <Card.Header>Firefighting Robot</Card.Header>
                            <Card.Meta>Winter 2017</Card.Meta>
                            <Card.Description>Robot designed from scratch for RBE 2002. 100% 3D printed/laser cut. Used Arduino controller and ESP for the fan.</Card.Description>
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card>
                        <Image src= {require('./assets/door.jpg')} />
                        <Card.Content>
                            <Card.Header>Bluetooth Lightswitch</Card.Header>
                            <Card.Meta>Winter 2016</Card.Meta>
                            <Card.Description>BLE connected device using Arduino to turn off the lights in my freshman dorm.</Card.Description>
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </projectspage>
        )
    }
}

export default ProjectsPage;