// import React, {  useRef } from "react";
// // import questionsContext from "../Context/questions/questionsContext";
// import Moment from 'react-moment';

// // Questions item is used for the Fetching All users questions.
// // const [questioID,setquestionID]=useState([]);
// const QuestionsItem = (props) => {
//   // const context = useContext(questionsContext);

//   const { notes } = props;
//   const ref = useRef(null);
//   // const refClose = useRef(null);

//   //viewQuestion function
//   const viewQuestion = (note) => {
//     // console.log("Note id is" + notes._id);
//     // console.log(notes.questions);
//     // console.log(note);
//    // setquestionID(note);
//   //  note=note.split('/n').map(str => <p>{str}</p>);

//    document.getElementById('que').innerHTML=note;
//     ref.current.click();
//     // alert(notes.questions);
//   };

//   return (
//     // questions cards
//     <div className="questionCard col-lg-8 align-items-stretch ">
//       <div className=" questionCardBody my-3">
//         <h4>Name:{notes.name}</h4>

//         <div className="card-body ">
//           <h5 className="card-title">Company Name : {notes.company_name}</h5>
//           {/* <h5 className="card-title">Questions : {notes.questions}</h5> */}
//           <h5 className="card-title">Date :<Moment format="DD/MM/YYYY">{notes.date}</Moment></h5>
//           <h5 className="card-title">Duration: {notes.duration}</h5>
             

//           {/* <p className="card-text">Questions:{notes.questions}</p> */}

//           <button className="btn btn-primary" onClick={() => viewQuestion(notes.questions)}>
//             view Question
//           </button>
        
//           {/* <input type="hidden" value={notes._id} id="hidden"></input> */}



//           {/* *********************************veiw question modal****************NEW */}
//           <button
//             ref={ref}
//             type="button"
//             className="btn btn-primary d-none"
//             data-bs-toggle="modal"
//             data-bs-target="#exampleModalLong"
//           />
//           {/* <h1>Hello</h1> */}
//           <div
//             className="modal fade"
//             id="exampleModalLong"
//             tabIndex="-1"
//             role="dialog"
//             aria-labelledby="exampleModalLongTitle"
//             aria-hidden="true"
//           >
          
          
              
//             <div className="modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="exampleModalLongTitle">
//                     Questions asked:
//                   </h5>
//                   <button   
//                     type="button"
//                     className="close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   >
//                     <span aria-hidden="true">&times;</span>
//                   </button>
//                 </div>
//                 <div className="modal-body">
//                   <span id="que"></span>
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* veiw question modal */}

//       {/* <button
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
//             <div className="modal-body">Questions:{notes._id}</div>
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
//       </div> */}
//     </div>
//   );
// };

// export default QuestionsItem;
