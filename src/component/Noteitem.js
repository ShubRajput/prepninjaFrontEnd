// import React, { useContext, useRef } from "react";
// import questionsContext from "../Context/questions/questionsContext";

// //This the import for the moment date....
// import Moment from "react-moment";
// // import 'moment-timezone';

// // ************  NoteItem is used for User Specific question
// const Noteitem = (props) => {
//   const context = useContext(questionsContext);
//   const { deleteQuestions } = context;
//   const { notes, updateQuestion } = props;
//   const ref = useRef(null);
//   // const refClose = useRef(null);

//   //viewQuestion function
//   const viewQuestion = (note) => {
//     // console.log(notes._id);
//     // console.log(notes.questions);
//     document.getElementById("que").innerHTML = note;
//     ref.current.click();
//   };

//   return (
//     // questions cards

//     <div className="questionCard col-lg-8 align-items-stretch ">
//       <div className=" questionCardBody my-3 mx-2">
//         <h4>Name:{notes.name}</h4>

//         <div className="card-body ">
//           <h5 className="card-title">Company Name : {notes.company_name}</h5>
//           <h5 className="card-title">
//             Date :<Moment format="DD/MM/YYYY">{notes.date}</Moment>
//           </h5>
//           <h5 className="card-title">Duration : {notes.duration}</h5>

//           {/* <Moment date={notes.date}></Moment> */}

//           {/* <p className="card-text">Questions:{notes.questions}</p> */}

//           <button
//             href="#"
//             className="btn btn-primary"
//             onClick={() => viewQuestion(notes.questions)}
//           >
//             view Question
//           </button>
//           <div className="d-flex align-item-center">
//             {/* delete icon */}
//             <i
//               className="fa-solid fa-trash-can mx-2 my-3"
//               onClick={() => {
//                 deleteQuestions(notes._id);
//               }}
//             ></i>

//             {/* edit icon */}
//             <i
//               className="fa-solid fa-pen-to-square mx-2 my-3"
//               onClick={() => {
//                 updateQuestion(notes);
//               }}
//             ></i>
//           </div>
//         </div>
//       </div>

//       {/* veiw question modal */}

//       <button
//         ref={ref}
//         type="button"
//         className="btn btn-primary d-none"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModalLong"
//       />

//       <div
//         className="modal fade"
//         id="exampleModalLong"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLongTitle"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLongTitle">
//                 Questions asked
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>

//             {/* This it the div tag of the question */}
//             <div className="modal-body">
//               <span id="que"></span>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Noteitem;
