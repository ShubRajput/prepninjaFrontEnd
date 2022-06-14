import React, { Component } from "react";

class NewAboutUs extends Component {
  render() {
    return (
      <div className="AboutUsContainer ">
        <div className="AboutUsContent">
          <h2>
            <span>Who</span>
            <span>We </span>
            <span>Are</span>
            <span>?...</span>
          </h2>
          <div className="transbox">
            <h5>
              <p>
                Hello Ninja's we are the team of Hardworking, Fearless and
                passionate about to Help, peoples. our vision continues to help
                other students prepare for placements effectively from his
                learnings and make preparation easier and effective. understands
                the importance of basic needs of the students to maximize one’s
                learnability and time saving not just for placements but also in
                general aspects of life. We notice that the problem that
                education become the business for most of the pepole, most of
                the candidates who cannot afford that price and the become the
                barrier for their placemaent preparartion . So here is solution
                i.e Prepninja team . who makes your placment joureny more easy
                and towards your Goal . and we definetly says that AB Placement
                Hoga...
              </p>
            </h5>
          </div>
        </div>
        {/* <div className="avatar my-4 container"> */}
        {/* <a href="https://codepen.io/MarioDesigns/">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
                alt="Skytsunami"
              />
            </a> */}
        {/* <div className="container container-avatar">
          <div className="avatar my-2 mx-4  container">
            <img src="golu.JPG" alt="gaurav" width="200" height="190" />
          </div>

          <div className="avatar my-2 mx-4 container">
            <img src="rohan.JPG" alt="rohan" width="200" height="190" />
          </div>
          <div className="avatar my-2 mx-4 container">
            <img src="Juhi.jpeg" alt="juhi" width="250" height="250" />
          </div>
          <div className="avatar my-2 mx-4 container">
            <img src="shubham.JPG" alt="shubham" width="200" height="190" />
          </div>
        </div> */}

        {/* Info of avtar */}
        {/* <div className="container container-avatar ">
          <div className=" my-0 mx-4  container info-avatar">
            <h4>Gaurav Patil</h4>
           

          </div>

          <div className=" my-0 mx-4 container info-avatar">
          <h4>Rohan Suryawanshi</h4>
          </div>
          <div className=" my-0 mx-4 container info-avatar">
          <h4>Juhi Aruja</h4>
          </div>
          <div className="my-0 mx-4 container info-avatar">
          <h4>Shubham Rajput</h4>
          </div>
          
        </div> */}

        <div className="row-avatar row ">
          <div className="column-avatar">
            <div className="card-avatar ">
              <img className="img-avatar" src="golu.JPG" alt="Jane" />
              <div className="container">
                <h2>Gaurav Patil</h2>
                <p className="title-avatar">Founder/Full Stack Developer</p>
                {/* <p>
                  I am an open and honest person who doesn't believe in
                  misleading other people and tries to be fair in everything I
                  do.
                </p> */}
                <p>gauravpatil6570@gmail.com</p>

                <form
                  action="https://www.linkedin.com/in/gaurav-patil-52a181171"
                  className="btn button-avatar"
                  target="_blank"
                >
                  <p>
                    <input type="submit" value="Contact" />
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="column-avatar">
            <div className="card-avatar">
              <img className="img-avatar" src="shubham.JPG" alt="John" />
              <div className="container">
                <h2>Shubham Rajput</h2>
                <p className="title-avatar">
                  Co-Founder/Mock Interviewer/Technical Team Lead/ReactJS
                  Developer
                </p>
                {/* <p>
                  I am a hard-working and driven individual who isn't afraid to
                  face a challenge
                </p> */}
                <p>shubhamrajput252000@gmail.com</p>

                <form
                  action="https://www.linkedin.com/in/shubham-rajput-8b337b175"
                  target="_blank"
                  className="btn button-avatar"
                >
                  <p>
                    <input type="submit" value="Contact" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row-avatar row mx-8">
          <div className="column-avatar">
            <div className="card-avatar">
              <img className="img-avatar" src="rohan.JPG" alt="Mike" />
              <div className="container">
                <h3>Rohan Suryawanshi</h3>
                <p className="title-avatar">
                  Co-Founder/Mock Interviewer/Content Manager/Full Stack
                  Developer
                </p>
                {/* <p>
                  I would describe myself as innovative, creative, adaptable to
                  change, a fast learner.
                </p> */}
                <p>suryawanshirohan07@gmail.com</p>

                <form
                  action="http://www.linkedin.com/in/rohan-suryawanshi-729281170"
                  target="_blank"
                  className="btn button-avatar"
                >
                  <p>
                    <input type="submit" value="Contact" />
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="column-avatar ">
            <div className="card-avatar ">
              <img className="img-avatar" src="Juhi.jpeg" alt="Jane" />
              <div className="container">
                <h2>Juhi Aruja</h2>
                <p className="title-avatar">
                  Content Creator/Social Media Handler/Software Developer
                </p>
                {/* <p>
                  I am an open and honest person who doesn't believe in
                  misleading other people and tries to be fair in everything I
                  do.
                </p> */}
                <p>juhiaruja2701@gmail.com</p>

                <form
                  action="https://www.linkedin.com/in/juhi-aruja-564773212"
                  className="btn button-avatar"
                  target="_blank"
                >
                  <p>
                    <input type="submit" value="Contact" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewAboutUs;
