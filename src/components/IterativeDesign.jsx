import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function IterativeDesign(props) {
  return (
    <div>
      <div className="return-button">
        <Button variant="light" href="/">
          {" "}
          &#x2190; Return to home
        </Button>{" "}
      </div>
      <h2 className="project-title">Responsive Redesign</h2>
      <h6 className="project-date">October 18, 2022</h6>
      <img
        src={require("../assets/iterative-design/header.png")}
        alt="Header"
        className="header-video"
      />
      <h2 className="project-title">About yhangry</h2>
      <h6 className="project-date">
        yhangry connects customers with private chefs to come cook for them or
        for a small group. They have different packages that include Michelin
        chefs, master chefs, date nights, and birthdays. They cook all different
        types of food styles ranging from Mexican to Italian, and they will
        adjust to dietary restrictions. They are located in the UK. Customers
        are allowed to customize their events by messaging with chefs, choosing
        from over 500 vetted private chefs. We are developing a website to
        explore the dining options and book the service. yhangry users are
        middle-upper class adults who are hosting a celebratory meal. This may
        be wealthy elderly people, so we must ensure that the interface is
        accessible for elderly.
      </h6>
      <h2 className="project-title">Initial Sketches</h2>
      <div className="project-date">
        <Carousel variant="dark">
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/slide1.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/slide2.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/slide3.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/slide4.jpg")}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <h6 className="project-date">
        Too much text; no images (even physical descriptors like scuffed label
        are typed not pictured)
      </h6>
      <h6 className="project-date">Colors/logos/images outdated</h6>
      <h6 className="project-date">“Add” button doesn’t specify quantity</h6>
      <h6 className="project-date">Rating system outdated</h6>
      <h6 className="project-date">
        Difficult to learn (interface doesn’t match typical ecommerce sites
        users are used to, too much going on)
      </h6>
      <h6 className="project-date">
        Some text is actually images of text (top right customer pane)
      </h6>
      <h2 className="project-title">Accessibility Test Summary</h2>
      <h6 className="project-date">
        Many of the accessibility concerns are valid. The lack of alternative
        text likely hurts the site’s SEO, its missing language and region hurt
        accessibility, and its low contrast is simply bad design. However, there
        are some areas where I believe WAVE was too harsh. For example, the site
        is laid out using layout tables. While perhaps not best practice,
        there’s no denying that the site’s elements (however old or outdated or
        poorly designed they may be) are laid out with structure and in a
        somewhat responsive manner. Further, WAVE detected broken and redundant
        links. However, these are neither broken nor redundant but rather used
        to sort the site’s main table. I don’t agree with their presence because
        I think there are better ways to let the user to sort—but
        realistically—the links do, in fact, work.
      </h6>
      <h2 className="project-title">Low Fidelity Prototypes</h2>
      <img
        src={require("../assets/responsive-redesign/lowfi.png")}
        alt="Low fidelity prototypes"
        className="header-video"
      />
      <h2 className="project-title">Visual Design Style Guide</h2>
      <img
        src={require("../assets/responsive-redesign/style-guide.png")}
        alt="Low fidelity prototypes"
        className="header-video"
      />
      <h2 className="project-title">High Fidelity Prototypes</h2>
      <img
        src={require("../assets/responsive-redesign/highfi.png")}
        alt="High fidelity prototypes"
        className="header-video"
      />
      <h2 className="project-title">Responsive Redesign</h2>
      <Button
        variant="primary"
        href="https://delightfuldolphin212.github.io/responsive-redesign/"
      >
        View Redesigned Site
      </Button>
      <h6 style={{ padding: "1%" }}>
        https://delightfuldolphin212.github.io/responsive-redesign/
      </h6>
      <h2 className="project-title">Conclusion</h2>
      <h6 className="project-date">
        Through Responsive Redesign, I learned the importance of staying
        current. With UI/UX, although functionality is principally important, it
        is not everything. Yes, FineWineCollector.com works. However, it is not
        at all current—something that likely turns away potential customers.
        Even though a completely legitimate site, users must think on occaision
        that it is a scam or their information is unsecure givent the obselete
        interface (as evidenced by the TrustPilot button on footer). This
        project showed me how just some effort into redesign utilizing an
        accessibility tester can go a long way.
      </h6>
    </div>
  );
}
