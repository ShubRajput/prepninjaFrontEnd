import React from "react";
// import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <section id="contact">
        <div className="contact-wrapper container">
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                {/* Message icon */}
                <i className="fa-solid fa-message fa-2x">
                  <span className="contact-text google-form">
                    <a href="https://forms.gle/RmusMqQuziX5EKR17" target="_blank" rel="noreferrer" title="Write Your Suggetion">
                      Write Your Suggetions
                    </a>
                  </span>
                </i>
              </li>

              <li className="list-item">
                {/* mail Icon */}
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a
                      href="mailto:perepninja1312@gmail.com"
                      title="Send me an email"
                    >
                      prepninja1312@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr />
            
            {/* youtube */}

            {/* <li> */}
            <a
              href="https://www.youtube.com/channel/UCPEjapI09gqmwOpzK1pdYEQ"
              className="contact-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://thumbs.dreamstime.com/b/print-227329903.jpg"
                alt="Loading error"
                width="70"
                height="70"
                title="Join YouTube"
              ></img>
            </a>
            {/* telegram */}

            <a
              href="https://t.me/prepninjaoffical"
              className="contact-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.pinimg.com/474x/9c/42/0f/9c420faf6ecd50fa172564c0da157f03.jpg"
                alt="Loading error"
                width="105"
                height="105"
                title="Message Us On Telegram"
              ></img>
            </a>
       
            {/* Instagram */}
            <a
              href="https://instagram.com/prepninja.in?igshid=YmMyMTA2M2Y="
              className="contact-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpQvxP4si0a_LP6Pw_5cqXhmTJJk-mQFRiQ&usqp=CAU"
                alt="Loading error"
                width="60"
                height="55"
                title="Message us on Insta"
              ></img>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gaurav-patil-52a181171"
              className="contact-icon mx-4"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://pnggrid.com/wp-content/uploads/2021/05/Linkedin-Logo-PNG-Black-Circle-1024x1024.png"
                alt="Loading error"
                width="57"
                height="57"
                title="Join Us on Linked In"
              ></img>
            </a>
            {/* </li> */}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
