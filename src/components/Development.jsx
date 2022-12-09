import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function Development(props) {
  return (
    <div>
      <div className="return-button">
        <Button variant="light" href="/">
          {" "}
          &#x2190; Return to home
        </Button>{" "}
      </div>
      <h2 className="project-title">Development</h2>
      <h6 className="project-date">November 29, 2022</h6>
      <img
        src={require("../assets/development.png")}
        alt="Header"
        className="header-video"
      />
      <h2 className="project-title">Description</h2>
      <h6 className="project-date">
        In Development, I looked back to an earlier project: Responsive
        Redesign. I loved the idea of designing this new interface for
        FineWineCollector.com, but I wanted to take it to the next level. I
        refactored the entire page in React (from plain HTML/CSS) and added in
        functionality. The updated Development has a sleeker feel, supports Add
        to Cart functionality, as well as filtering and sorting.
      </h6>
      <h2 className="project-title">The Developed Design</h2>
      <div className="centered-button">
        <Button
          variant="primary"
          href="https://delightfuldolphin212.github.io/development/"
        >
          Try it out!
        </Button>
      </div>
      <h2 className="project-title">Conclusion</h2>
      <h6 className="project-date">
        Through Development, I got to use the skills of Iteration I learned in
        the last project. I took into account a myriad of comments I received in
        UX Factor from Responsive Redesign, redesigned the whole site, and then
        devleloped it from scratch in React. I really enjoyed getting to make it
        actually work and I plan on taking this project further for my capstone.
      </h6>
      <h2 className="project-title">Other Links</h2>
      <div className="centered-button">
        <Button variant="primary" href="https://finewinecollector.com">
          Current FineWineCollector.com
        </Button>
      </div>
      <div className="centered-button">
        <Button
          variant="primary"
          href="https://delightfuldolphin212.github.io/responsive-redesign/"
        >
          Original Responsive Redesign
        </Button>
      </div>
    </div>
  );
}
