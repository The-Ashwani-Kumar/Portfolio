import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/colllege.png";
import projImg2 from "../assets/img/pricepre.jpeg";
import projImg3 from "../assets/img/realtime.png";
import projImg4 from "../assets/img/sentiment_analysis.jpg";
import projImg5 from "../assets/img/twitter.png";
import projImg6 from "../assets/img/vulnerability.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "College App",
      description: "using Android Studio",
      imgUrl: projImg1,
    },
    {
      title: "Real time Chat Application",
      description: "using react,html,js and css",
      imgUrl: projImg3,
    },
    {
      title: "Sentimental Analysis ",
      description: "using machine learning",
      imgUrl: projImg4,
    },
    {
      title: "Twitter clone",
      description: "using block chain",
      imgUrl: projImg5,
    },
    {
      title: "price prediction of home",
      description: "using machine learning",
      imgUrl: projImg2,
    },
    {
      title: "vulnerability analysis tool",
      description: "using python",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>i have done project on web and also have made 2d games eg.ping-pang-po and snake game with that i have used the latest technology too like react and bootstrap nodejs and i have done projects on android studio like college app, smart city traveller,and chat app .</p>
		<p>and have done proect on machine learning eg. sentimental analysis and house price prediction and much more  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
  		    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
