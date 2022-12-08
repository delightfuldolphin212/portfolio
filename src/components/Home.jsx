import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Home(props) {
  return (
    <div>
      <div className="gallery-container">
        <div>
          <h1 className="half-container">Welcome to my CS1300 Portfolio!</h1>
          <h5 className="sub-text">
            My name is
            &#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588;&#x2588; and
            over the course of a semester-long journey into the design of
            food/drink interfaces, I discovered my passion for minimalist
            design. As it moves from the buzzers food delivery drivers interact
            with all the way to ecommerce liquor stores, my portfolio clearly
            demonstrates the exploration of various schools of design and
            eventual convergence on minimalism.
          </h5>
        </div>
        <img
          src={require("../assets/bear-hungry.gif")}
          alt="Cute Food GIF"
          className="gif"
        />
      </div>

      <div className="first-tile">
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={require("../assets/personas.png")} />
          <Card.Body>
            <Card.Title>Personas</Card.Title>
            <Card.Text>
              In Personas, I explored the design and use cases of a tech-enabled
              apartment buzzer. In this project, I seek to further my
              understanding of the relationship between a user interface and one
              of its primary personas—the delivery driver.
            </Card.Text>
            <Button variant="outline-primary" href="/personas">
              Explore Further
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">October 4, 2022</Card.Footer>
        </Card>
      </div>
      <div className="tile">
        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src={require("../assets/responsive-redesign.png")}
          />
          <Card.Body>
            <Card.Title>Responsive Redesign</Card.Title>
            <Card.Text>
              In Responsive Redesign, I explored a popular website for buying
              fine wines and liquors. Despite the site's heavy traffic, it
              clearly hasn't seen a redesign since the early days of the
              internet. It especially needed a responsive redesign to accomodate
              today's mobile users.
            </Card.Text>
            <Button variant="outline-primary" href="/responsive-redesign">
              Explore Further
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">October 18, 2022</Card.Footer>
        </Card>
      </div>
      <div className="tile">
        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src={require("../assets/iterative-design.png")}
          />
          <Card.Body>
            <Card.Title>Iterative Design</Card.Title>
            <Card.Text>
              In Iterative Design, I worked in a group to imagine a potential
              interface for up and coming UK-based startup, Yhangry. The company
              is frequently called "Uber for Chefs" in the way it connects
              on-demand chefs to paying customers. Here, we explored the idea of
              iteration—tweaking our design based on the comments of
              professional UI testers.
            </Card.Text>
            <Button variant="outline-primary" href="/iterative-design">
              Explore Further
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">November 9, 2022</Card.Footer>
        </Card>
      </div>
      <div className="tile">
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={require("../assets/development.png")} />
          <Card.Body>
            <Card.Title>Development</Card.Title>
            <Card.Text>
              In Development, I looked back to one of my earliest HTML-only
              interface designs—Responsive Redesign. In Development, I used the
              iteration skills learned from Iterative Design to overhaul the
              interface from Responsive Redesign. I saught a sleeker and more
              modern look. Further I actually developed it into a functioning
              application—supporting sorting, filtering, and the maitenance of a
              cart.
            </Card.Text>
            <Button variant="primary">Explore Further</Button>
          </Card.Body>
          <Card.Footer className="text-muted">November 29, 2022</Card.Footer>
        </Card>
      </div>
    </div>
  );
}
