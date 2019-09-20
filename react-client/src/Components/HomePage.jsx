import React, {Component} from 'react';
import {Button, Icon, Header, Container,Card} from 'semantic-ui-react';
import { ParallaxBanner } from 'react-scroll-parallax';



class HomePage extends Component {
    render(){
        return(
            <homepage>
               <ParallaxBanner
                className="your-class"
                layers={[
                    {
                        image: 'http://www.sclance.com/pngs/png-pattern/png_pattern_1072283.png',
                        amount: 0.5,
                    },
                    {
                        image: 'https://cdn.pixabay.com/photo/2017/07/13/17/49/square-background-2501275_960_720.png',
                        amount: 0.1,
                    },
                ]}
                style={{
                    height: '2000px',
                    width: '1000px',
                    align: 'left',
                }}
                >
                </ParallaxBanner>
            </homepage>
        )
    }
}

export default HomePage;