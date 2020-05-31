import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubCalendar from 'react-github-calendar';
import ReactMarkdown from 'react-markdown';
import ReactTooltip from 'react-tooltip';
import MyImage from '../assets/me.jpg';
import Typography from '@material-ui/core/Typography';

const ghCalendarTheme = {
    background: 'transparent',
    text:   'var(--text)',
    grade4: '#196127',
    grade3: '#239a3b',
    grade2: '#7bc96f',
    grade1: '#c6e48b',
    grade0: '#ebedf0',
  };

const markdown = (`
Currently \`unemployed\` and looking for \`Fall 2020\` internships. You can reach out to me at [zahin.dev@gmail.com](mailto:zahin.dev@gmail.com?subject[From%Portfolio]).  

Hey I am a 4A Computer Engineering student at the University of Waterloo and am expected to graduate in June 2021. Some interesting courses I have taken/taking are (🚧 in progress):
- Software Design and Architectures 🚧
- Reinforcement Learning 🚧
- Cooperative and Adaptive Algorithms 🚧
- Database Systems (89%)
- Compilers (89%)
- Algorithms and Data Structures (81%)

Throughout my university schooling and internships I have had a focus on software development, automation and ml/ai. I am most interested in backend development, cryptocurrency and machine learning / artifical intelligence. My most recent work experiences were at [Lumina](https://www.lumina.app/) and [Aterica](https://www.aterica.com/), both for backend development.  

Outside of software development, I enjoy hiking, ping-pong, day-trading and making ☕!
`);


export default class About extends Component {
    render() {
        return (
            <Container>
                <Row noGutters = {false} style ={{paddingTop:"10vh"}} className="align-items-center">
                <Col sm = {12 }lg={6}>
                    <div  style = {{textAlign:"center"}}>
                        <Typography gutterBottom variant="h2" component="h2">
                            Zahin Mohammad
                        </Typography>
                        <img
                            style={{width:"300px", height:"300px", borderRadius:"100%"}}
                            className = "circle-div"
                            src={MyImage}
                            alt="Zahin Mohammad"
                        />
                        <GitHubCalendar username="zahin-mohammad" theme={ghCalendarTheme}>
                            <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                    </div>
                </Col>
                <Col sm = {12} lg={6}>
                    <ReactMarkdown
                    source={markdown}
                    escapeHtml={false}
                    />
                </Col>
                </Row>
            </Container>
        )
    }
}
