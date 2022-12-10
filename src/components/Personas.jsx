import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

export default function Personas(props) {
  return (
    <div>
      <div className="return-button">
        <Button variant="light" href="/">
          {" "}
          &#x2190; Return to home
        </Button>{" "}
      </div>
      <h2 className="project-title">Personas</h2>
      <h6 className="project-date">October 4, 2022</h6>
      <video loop autoPlay muted className="header-video">
        <source
          src={require("../assets/personas/header.mp4")}
          type="video/mp4"
        />
      </video>
      <h2 className="project-title">Description</h2>
      <h6 className="project-date">
        The apartment buzzer solves the problem of securely managing the flow of
        people into a building without requiring a doorman. The interface’s key
        components can be divided into two key sections: those for Visitors and
        those for Residents. Visitors' main goals are to gain approved access to
        the building and then to physically enter once granted access.
        Residents’ primary goals, however, are similarly entering the building.
        The resident needs to prove their residency to gain access rather than
        obtain access like the visitor.
      </h6>
      <img
        src={require("../assets/personas/sketch.jpg")}
        alt="My sketch"
        className="header-video"
      />
      <h2 className="project-title">Key Insights</h2>
      <h6 className="project-date">
        There are two main types of users: Residents and Visitors. Residents
        notably do not pause upon approach. It is clear that they've interacted
        with the system many times. Additionally, the Residents frequently
        encounter the problem of approaching the system with their hands full.
        Within the Visitors, it became evident that there were even more nuanced
        subcategories: Delivery Drivers and Visiting Friends. Delivery Drivers
        often took a brief pause to look over the interface (length of pause
        often correlated with age of driver). Drivers also frequently had to
        recheck their phones to find the unit number of the resident. All
        Delivery Drivers followed one of four action sequences: Leave food
        outside and don't press call button, Leave food outside and press call
        button, Press call button and leave food inside after gaining entry, or
        Press call button and walk food to apartment door after gaining entry
        for direct delivery. Within the Visiting Friends subcategory of
        Visitors, this population also took a longer pause to look over the
        interface. This population also often took a long stare at the apartment
        numbers list section of the interface. There were multiple Visiting
        Friends who even had to call their friends to verify the apartment
        number before ringing the buzzer.
      </h6>
      <h2 className="project-title">Q&A Summary</h2>
      <Accordion defaultActiveKey="0" className="project-date">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What were your goals in this interaction?
          </Accordion.Header>
          <Accordion.Body className="h6">
            For Residents, to safely get into their apartments. For Delivery
            Drivers, to get the correct food to the correct customer.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How do you feel about your experience trying to enter the building
            today and to what degree do you feel your goals have been met?
          </Accordion.Header>
          <Accordion.Body className="h6">
            Residents and maitenance were always positive, given their
            consistent interaction with the interface. Visiting Friends were
            surprisingly the most critical. Many brought up that they preferred
            the buzzer systems at their own residences. Delivery Drivers were
            mostly ambivalent. General complaints included latency time taking
            money out of their pockets.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What issues did you encounter?</Accordion.Header>
          <Accordion.Body className="h6">
            Visiting Friends often needed to verify the apartment number before
            buzzing. Delivery Drivers complained about the wide variety of
            different interfaces they encounter for the same thing. One cited
            that for the most part, the most high tech looking ones do the exact
            same thing as the most antiquated ones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Did the interface require you think about your actions or focus off
            your original task?
          </Accordion.Header>
          <Accordion.Body className="h6">
            Delivery drivers’ major pauses occurred when verifying the apartment
            number on the delivery address listed in their app. Visiting Friends
            were largely okay except for a note that their flow of meeting their
            friend was interrupted by the authoritative figure of an access
            entry system.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h2 className="project-title">Empathy Map 1</h2>
      <h6 className="project-date">
        Delivery Dave is a delivery driver who frequently makes deliveries
        across DoorDash, GrubHub, and Uber Eats. Dave is out of work and relies
        on these deliveries to support himself and his family.
      </h6>
      <div className="project-date">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Thinks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Feels</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Says</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Does</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h7>"How do I find this apartment?"</h7>
                  <br />
                  <h7>"Which apartment was it again?"</h7>
                  <br />
                  <h7>"Ugh, I have so many orders to drop off right now."</h7>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h7>Frustrated by how many delivery apps he uses at once.</h7>
                  <br />
                  <h7>
                    Annoyed at all the different entry interfaces he has to
                    interact with.
                  </h7>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h7>"Is this 130 Waterman Street?"</h7>
                  <br />
                  <h7>"Sorry for the delay, enjoy your food."</h7>
                  <br />
                  <h7>
                    On phone: "Hi I'm looking for your apartment. I think I'm
                    outside."
                  </h7>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h7>
                    Presses the wrong apartment's call button before finding the
                    right one.
                  </h7>
                  <br />
                  <h7>Calls the customer when lost.</h7>
                  <br />
                  <h7>
                    Struggles to open the door with all the delivery bags.
                  </h7>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <h2 className="project-title">Empathy Map 2</h2>
      <h6 className="project-date">
        Friendly Fiona is a senior excited to visit her friend Zoe in her new
        apartment. She really likes her own apartment and building but is
        curious to check out Zoe’s place in new apartment building.
      </h6>
      <div className="project-date">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Thinks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Feels</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Says</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Does</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h7>"Which unit is she again?"</h7>
                  <br />
                  <h7>
                    "My building's entry system is so much easier to use."
                  </h7>
                  <br />
                  <h7>"Ugh, Zoe's building has better parking."</h7>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h7>
                    Jealous that Zoe's apartment building is nicer than hers.
                  </h7>
                  <br />
                  <h7>
                    Happy that Zoe's entryway is less convenient than her own.
                  </h7>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h7>"Zoe, I love your building!"</h7>
                  <br />
                  <h7>On intercom: "Hey, it's me. Open up."</h7>
                  <br />
                  <h7>On phone: "Which unit is it again?"</h7>
                  <br />
                  <h7>"Just tell me the code for next time."</h7>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h7>Presses the wrong apartment's call button.</h7>
                  <br />
                  <h7>Calls Zoe to confirm which apartment she's in.</h7>
                  <br />
                  <h7>Takes in Zoe's package outside for her.</h7>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <h2 className="project-title">Storyboard</h2>
      <h6 className="project-date">
        Note: Creator not pictured for anonymity. Actors were used.
      </h6>
      <div className="project-date">
        <div>
          <video loop autoPlay muted className="storyboard-video">
            <source
              src={require("../assets/personas/tile1.mp4")}
              type="video/mp4"
            />
          </video>
          <video loop autoPlay muted className="storyboard-video-right">
            <source
              src={require("../assets/personas/tile2.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <h6 className="storyboard-text">
            Frame 1: Delivery Dave checks his phone and has a delivery request.
          </h6>
          <h6 className="storyboard-text-right">
            Frame 2: Delivery Dave checks his phone and has a delivery request.
          </h6>
        </div>
      </div>
      <div className="project-date">
        <div>
          <video loop autoPlay muted className="storyboard-video">
            <source
              src={require("../assets/personas/tile3.mp4")}
              type="video/mp4"
            />
          </video>
          <video loop autoPlay muted className="storyboard-video-right">
            <source
              src={require("../assets/personas/tile4.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <h6 className="storyboard-text">
            Frame 3: Delivery Dave leaves the restaurant and proceeds to the
            final destination.
          </h6>
          <h6 className="storyboard-text-right">
            Frame 4: Delivery Dave double checks his phone to confirm the
            address as he approaches the building.
          </h6>
        </div>
      </div>
      <div className="project-date">
        <div>
          <video loop autoPlay muted className="storyboard-video">
            <source
              src={require("../assets/personas/tile5.mp4")}
              type="video/mp4"
            />
          </video>
          <video loop autoPlay muted className="storyboard-video-right">
            <source
              src={require("../assets/personas/tile6.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <h6 className="storyboard-text">
            Frame 5: Delivery Dave finds the right building and approaches the
            entry system.
          </h6>
          <h6 className="storyboard-text-right">
            Frame 6: Delivery Dave locates the unit number and presses the call
            button.
          </h6>
        </div>
      </div>
      <div className="project-date">
        <div>
          <video loop autoPlay muted className="storyboard-video">
            <source
              src={require("../assets/personas/tile7.mp4")}
              type="video/mp4"
            />
          </video>
          <video loop autoPlay muted className="storyboard-video-right">
            <source
              src={require("../assets/personas/tile8.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <h6 className="storyboard-text">
            Frame 7: Delivery Dave identifies himself to the customer via the
            built-in intercom system.
          </h6>
          <h6 className="storyboard-text-right">
            Frame 8: The customer buzzes in Delivery Dave and he gains entry to
            the building.
          </h6>
        </div>
      </div>
      <div className="project-date">
        <div>
          <video loop autoPlay muted className="storyboard-video">
            <source
              src={require("../assets/personas/tile9.mp4")}
              type="video/mp4"
            />
          </video>
          <video loop autoPlay muted className="storyboard-video-right">
            <source
              src={require("../assets/personas/tile10.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <h6 className="storyboard-text">
            Frame 9: Delivery Dave navigates the building to find the customer's
            apartment.
          </h6>
          <h6 className="storyboard-text-right">
            Frame 10: Delivery Dave knocks on the customer's door and hands off
            the food order.
          </h6>
        </div>
      </div>
      <h2 className="project-title">Conclusion</h2>
      <h6 className="project-date">
        Through Personas, I learned the importance of understanding your user.
        We can build as many products as we want for ourselves because that is
        what we, out of instinct, imagine when designing products. However,
        we're not the target customer for many products. And even for those
        where we are, we still have to design for all of the other personas also
        using that product. This project helped me understand the essence of UX
        design.
      </h6>
    </div>
  );
}
