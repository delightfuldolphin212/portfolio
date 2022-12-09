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
      <h2 className="project-title">Iterative Redesign</h2>
      <h6 className="project-date">November 9, 2022</h6>
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
      <h2 className="project-title">Wireframes</h2>
      <div className="project-date">
        <Carousel variant="dark">
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/wireframe-slide1.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/wireframe-slide2.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src={require("../assets/iterative-design/wireframe-slide3.png")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <h2 className="project-title">Initial Figma</h2>
      <video loop autoPlay muted className="header-video">
        <source
          src={require("../assets/iterative-design/figma.mp4")}
          type="video/mp4"
        />
      </video>
      <h2 className="project-title">Critiques from Studio</h2>
      <h6 className="project-date">
        Our 'Book Now' page had an error where once a user made a selection,
        they could not go back and edit this choice afterwards.
      </h6>
      <h6 className="project-date">
        Having a seperate review page was confusing, as reviews should instead
        be specific to each chef.
      </h6>
      <h6 className="project-date">
        Dishes and Chefs were displayed only on the home page and not the nav
        bar, so users had to navigate back to the home page in order to look at
        different chefs and dishes.
      </h6>
      <h6 className="project-date">
        The users also expressed confusion about the book through chef option,
        and said it was confusing if they wanted to book a specific dish.
      </h6>
      <h6 className="project-date">
        Finally, users expressed that the aesthetic of the website did not fit
        the vibe of a gourmet food service, rather something casual, so we might
        not attract the right users with the current images and style.
      </h6>
      <h2 className="project-title">Addressing Studio Critiques</h2>
      <h6 className="project-date">
        Improved the 'Book Now' page so that after a user makes a selection,
        they can still go back and edit this choice afterwards.
      </h6>
      <h6 className="project-date">
        Removed the seperate 'customer reviews' page, instead we added reviews
        under each chef's specific profile.
      </h6>
      <h6 className="project-date">
        Added Dishes and Chefs to the navbar to bring users to these pages.
      </h6>
      <h6 className="project-date">
        Refined the booking process; allows you to see which chefs are available
        for the meal you chose.
      </h6>
      <h6 className="project-date">
        Changed yhangry slogan on homepage, chose a more high-class design to
        better reflect the vibe of a gourmet food service.
      </h6>
      <h2 className="project-title">User Testing Instructions</h2>
      <h6 className="project-date">
        First, users should use the arrows on the home page to browse through
        recent meals cooked through yhangry.
      </h6>
      <h6 className="project-date">
        Users should click on the recent meal 'salmon with brussel sprouts.'
        This should allow them to then read what chef serves that salmon meal.
      </h6>
      <h6 className="project-date">
        Next, the user should start their booking process by clicking 'Book Now'
        in the navbar.
      </h6>
      <h6 className="project-date">
        Now on the booking page, users must select Indian as cuisine, a party
        size of 5 people, Halal meal, and the chef Sammy.
      </h6>
      <h6 className="project-date">
        Once all meal details are chosen, the user should then add this meal to
        their cart.
      </h6>
      <h6 className="project-date">
        Next, press confirm. This will take them to a final congratulations
        page, ending the user test.
      </h6>
      <h2 className="project-title">User Testing Videos</h2>
      <h6 className="project-date">Use these links to watch videos now!</h6>
      <div className="centered-button">
        <Button
          variant="primary"
          href="https://click.usertesting.com/CL0/https:%2F%2Fapp.usertesting.com%2Fv%2Fbcf29c6b-a036-444b-8a0b-d9a1bf1922f3%3Fencrypted_video_handle=6f14f047-7cd9-4c29-8311-ddca8fbfc950%26shared_via=email/1/0100018454104d16-7e857208-4c4c-4a0e-a6d0-92603c0fff13-000000/2Gb4noiGy0ASd-T9m1FaZIIZet6qql4GaSR7LZfTcMM=273"
        >
          First Video
        </Button>
      </div>
      <div className="centered-button">
        <Button
          variant="primary"
          href="https://click.usertesting.com/CL0/https:%2F%2Fapp.usertesting.com%2Fv%2F968a5bca-b76e-4031-bd23-3083e6080bb3%3Fencrypted_video_handle=935b07ca-2228-4363-a626-e6459b304271%26shared_via=email/1/0100018454109419-aaeb591d-aee1-43ce-85d0-f74197df3a56-000000/dKTOuEzmYWY8QxBoQilABgpc7gKCcI9fFKjnxmb34_A=273"
        >
          Second Video
        </Button>
      </div>
      <div className="centered-button">
        <Button
          variant="primary"
          href="https://click.usertesting.com/CL0/https:%2F%2Fapp.usertesting.com%2Fv%2F0459408c-3b58-492f-b3c1-2645e4cf83f7%3Fencrypted_video_handle=461153ed-939b-40f5-9402-ae76e6d357e9%26shared_via=email/1/0100018454110134-d24b7604-dee1-4456-9caf-888d53b8e97d-000000/s_fCdmGqPQxLyWKZRmFEVs18UA93diVLAvOtbPwdlyU=273"
        >
          Third Video
        </Button>
      </div>

      <h2 className="project-title">Video Reflections</h2>

      <h6 className="project-date">
        We should have specifically told users to press 'Fit to screen' in the
        figma. Our first instructions only worked if the figma was in 'Fit to
        screen mode.' Due to this error, users were not able to complete the
        first task. However, we decided not to retest because the main feature
        we were trying to test was the booking process of the service and the
        checking out feature.
      </h6>
      <h6 className="project-date">
        The users were easily and efficiently able to complete the 'Book Now'
        process. They were able to quickly find the icons the instructions asked
        for and successfully checked out with the right meal, party size,
        allergy restrictions, and chef.
      </h6>
      <h6 className="project-date">
        Some users positively expressed how the liked the use of images and the
        lack of text and that it had a hierarchy that was easy to understand.
      </h6>
      <h6 className="project-date">
        Users were quickly able to checkout from the booking page. They found
        the process easy to understand, and it worked exactly as they expected.
        Our instructions at the beginning of the test (describing they wanted
        Indian food, a 5 person meal, etc.) make the booking process easy! Users
        had no problems with these steps.
      </h6>
      <h6 className="project-date">
        Some users expressed that the landing page after confirming the purchase
        was too simple a page for the task that was completed and thought it
        should be more vibrant.
      </h6>

      <h6 className="project-date">
        One user felt that the “Service Fee” on the checkout page should have
        been shown before the user added the meal to their cart. Thus, a change
        we would make is displaying the service fee earlier on.
      </h6>
      <h6 className="project-date">
        Overall, users liked the simplicity of our site, which was clear and
        easy-to-use. They also enjoyed the vibrancy of our colors and pictures,
        making the experience of booking their meal enjoyable!
      </h6>
      <h2 className="project-title">Our Interactive Figma</h2>
      <Button
        variant="primary"
        href="https://www.figma.com/proto/PvA6Jc4rSRw1mEHo2pMWHE/new-hi-fi-prototype?node-id=178%3A90&starting-point-node-id=178%3A90&scaling=scale-down"
      >
        Try it out!
      </Button>
      <h2 className="project-title">Conclusion</h2>
      <h6 className="project-date">
        Through Iterative Design, I learned the importance of both team work in
        UI/UX as well as appreciating feedback. I realized just how important
        feedback is in our design of user experiences, and the best designs are
        those where the designers are most receptive to feedback and iterating.
        I'm grateful for my team in this project in helping me get to this point
        where I was receptive of others' feedback.
      </h6>
    </div>
  );
}
