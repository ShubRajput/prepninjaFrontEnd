import "./App.css";
import NewNavBar from "./component/NewNavBar";
import Slidder from "./component/Slidder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewCards from "./component/NewCards";
import NewAboutUs from "./component/NewAboutUs";
import React from "react";
import InterviewQForm from "./component/InterviewQForm";
import QuestionState from "./Context/questions/QuestionState";
import ShowMyQuestion from "./component/ShowMyQuestion";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ContactUs from "./component/ContactUs";
import ShowAllQuestions from "./component/ShowAllQuestions";

function App() {
  return (
    <>
      {/* <QuestionState> */}
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  {/* <Login></Login> */}
                  <NewNavBar></NewNavBar>
                  <Slidder></Slidder>
                  <h1 className="h1 my-3">Book Your Mock Interview Now</h1>
                  <NewCards></NewCards>
                </React.Fragment>
              }
            />

            <Route
              path="/NewAboutUs"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <NewAboutUs />
                </React.Fragment>
              }
            />

            {/* <Route
              path="/InterviewQForm"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <InterviewQForm />
                </React.Fragment>
              }
            /> */}
            {/* <Route
              path="/ShowMyQuestion"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <ShowMyQuestion />
                </React.Fragment>
              }
            /> */}
            {/* <Route
              path="/login"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <Login></Login>
                </React.Fragment>
              }
            /> */}

            {/* <Route
              path="/signup"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <Signup></Signup>
                </React.Fragment>
              }
            /> */}
            <Route
              path="/ContactUs"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <ContactUs></ContactUs>
                  
                </React.Fragment>
              }
            />

            {/* <Route
              path="/ShowAllQuestion"
              element={
                <React.Fragment>
                  <NewNavBar></NewNavBar>
                  <ShowAllQuestions></ShowAllQuestions>
                  
                </React.Fragment>
              }
            /> */}
          </Routes>
        </Router>

        {/* <NewNavBar ></NewNavBar> */}
        {/* <Slidder></Slidder>  */}
        {/* <Cards></Cards>*/}
      {/* </QuestionState> */}
    </>
  );
}

export default App;
