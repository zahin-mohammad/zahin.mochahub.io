import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubCalendar from 'react-github-calendar';
import './pages.css';
const ReactMarkdown = require('react-markdown/with-html')



const markdown = 
`Currently: <code> Unemployed and looking for Fall 2020 Internships</code>. You can reach out to me at <code>zahin.dev@gmail.com</code>.      

Hey, I am a 3B Computer Engineering student at the University of Waterloo with a focus on software development. I expect to graduate in Winter 2021.  
  
I am interested in backend development, cryptocurrency, and machine learning.
I've previously worked at <code> Lumina </code> and <code>Aterica</code> as a backend developer.  

Outside of software development, I enjoy hiking, ping-pong, financial life-hacks, and watching van-life conversion videos on youtube.`
export default class About extends Component {
    render() {
        return (
            <Container>
                <Row noGutters = {false} style ={{paddingTop:"10vh"}} className="align-items-center">
                <Col sm = {12 }lg={6}>
                    <div  style = {{textAlign:"center"}}>
                    <img
                        className = "circle-div"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQGNhUy7gOn_hQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=PE5gbHRaiHQyw_20NITEQU64nDStCUZqPIfgv5kGDks"
                        alt="Zahin Mohammad"
                    />
                    <GitHubCalendar username="zahin-mohammad" />
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
