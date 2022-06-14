// import React, { useContext, useState, useEffect } from "react";
// import questionsContext from "../Context/questions/questionsContext";
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";

// function InterviewQForm() {
//   const context = useContext(questionsContext);
//   const { addQuestion } = context; //calling addQuestions function from context
//   let history = useNavigate();

//   const context_temp = useContext(questionsContext);
//   const { ShowAlert } = context_temp; //calling ShowAlert function from context

//   const [note, setNote] = useState({
//     name: "",
//     company_name: "",
//     duration: "",
//     questions: "",
//   });

//   const handleClick = (e) => {
//     e.preventDefault();
//     // console.log("handleClick clicked");
//     addQuestion(note.name, note.company_name, note.duration, note.questions);
//     // console.log("Added successfully");
//     // setNote(note.name="",note.company_name="",note.duration="",note.questions="");

//     // setNote(note.name="",note.company_name="",note.duration="",note.questions="");
//     setNote({ name: " ", company_name: " ", duration: " ", questions: " " });
//     history('/InterviewQForm');
//   };

//   const onChange = (e) => {
//     setNote({ ...note, [e.target.name]: e.target.value });
//   };

//   // Date Picker codee
//   // const [startDate, setStartDate] = useState(new Date());

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       // alert(" alredy Logged in")
//     } else {
//       history("/login");
//       ShowAlert("You Need LogIn To Add your Interview Experince", "error");
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="interview-container">
//       {/* <!-- code here --> */}

//       <div className="interview-card">
//         <div className="interview-card-image"></div>
//         <div className="wrapper">
//           <div className="title">Add Your Interview Experience</div>

//           <form onSubmit={handleClick}>
//             <div className="form">
//               <div className="inputfield">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="input"
//                   id="name"
//                   name="name"
//                   onChange={onChange}
//                   minLength={3}
//                   required
//                 />
//               </div>
//               <div className="inputfield">
//                 <label>Company Name</label>
//                 <input
//                   type="text"
//                   className="input"
//                   id="company_name"
//                   name="company_name"
//                   onChange={onChange}
//                   required
//                 />
//               </div>

//               <div className="inputfield">
//                 <label>Duration</label>
//                 <input
//                   type="text"
//                   className="input"
//                   id="duration"
//                   name="duration"
//                   onChange={onChange}
//                   placeholder="Please Fill the Time in H hr:M min"
//                   required
//                 />
//               </div>

//               {/* <div className="inputfield">
//                   <label>Date</label>
//                   <DatePicker
//                     name="date"
//                     id="date"
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                   />
//                 </div> */}

//               <div className="inputfield">
//                 <label>Add Question</label>
//                 {/* <style>
//                   {`#p-wrap {
//           white-space: pre-line;
//         }`}
//                 </style> */}

//                 <textarea
//                   className="textarea"
//                   id="questions"
//                   name="questions"
//                   onChange={onChange}
//                   minLength={5}
//                   // value={value}
//                   placeholder="Please add the question in proper fromat:e.g. 1:Introduce YourSelf 2:Next questions "
//                 ></textarea>
//                 {/* <p id="p-wrap">{value}</p> */}
//               </div>

//               <div className="interview-SubmitBtn">
//                 <button
//                   className="btn btn-info"
//                   type="submit"
//                   // onClick={handleClick}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InterviewQForm;
