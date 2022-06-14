// import React, { useContext, useEffect, useRef, useState } from "react";
// import questionsContext from "../Context/questions/questionsContext";
// import Noteitem from "./Noteitem";
// import { useNavigate } from "react-router-dom";

// const ShowMyQuestion = () => {
//   const context = useContext(questionsContext);
//   const { notes, getQuestion, editQuestion,ShowAlert } = context; //destructuring from context
//   let history = useNavigate();

//   //fetching notes
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       getQuestion();
//     } else {
//       history("/login");
//       ShowAlert("Login to Continue","error");
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const ref = useRef(null);
//   const refClose = useRef(null);

//   const updateQuestion = (currentNote) => {
//     ref.current.click();
//     setNote({
//       id: currentNote._id,
//       modal_name: currentNote.name,
//       modal_company_name: currentNote.company_name,
//       modal_duration: currentNote.duration,
//       modal_questions: currentNote.questions,
//     });
    

//   };

//   const [note, setNote] = useState({
//     id: "",
//     modal_name: "",
//     modal_company_name: "",
//     modal_duration: "",
//     modal_questions: "",
//   });

//   const handleClick = (e) => {
//     // console.log("Updating the note", note);
//     // let user_id=document.getElementById("modal_id").value
//     // let username=document.getElementById("modal_name").value;
//     // let company_name=document.getElementById("modal_CompanyName").value;
//     // let duration=document.getElementById("modal_duration").value;
//     // let Que=document.getElementById("modal_questions").value;
//     // console.log(note.modal_name);
//     editQuestion(
//       note.id,
//       note.modal_name,
//       note.modal_company_name,
//       note.modal_duration,
//       note.modal_questions
//     );
//     //console.log(note.name);
//     // console.log("FUNCTION CALLED");
//     refClose.current.click();
//     ShowAlert("Question Updated","success");
//   };

//   const onChange = (e) => {
//     setNote({ ...note, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       {/*edit modal */}

//       <button
//         ref={ref}
//         type="button"
//         className="btn btn-primary d-none"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModalCenter"
//       >
//         Launch demo modal
//       </button>

//       <div
//         className="modal fade container wrapper"
//         id="exampleModalCenter"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLongTitle">
//                 Edit Questions
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
//             <div className="modal-body container">
//               <form>
//                 <input
//                   type="hidden"
//                   className="input"
//                   id="modal_id"
//                   name="modal_id"
//                   value={note.id}
//                   onChange={onChange}
                  
//                 />
//                 <div className="form">
//                   <div className="inputfield">
//                     <label>Name</label>
//                     <input
//                       type="text"
//                       className="input mx-2"
//                       id="modal_name"
//                       name="modal_name"
//                       value={note.modal_name}
//                       onChange={onChange}
//                       minLength={3}
//                       required
//                     />
//                   </div>
//                   <div className="inputfield">
//                     <label>Company Name</label>
//                     <input
//                       type="text"
//                       className="input mx-2"
//                       id="modal_company_name"
//                       name="modal_company_name"
//                       value={note.modal_company_name}
//                       onChange={onChange}
//                       required
//                     />
//                   </div>

//                   <div className="inputfield">
//                     <label>Duration</label>
//                     <input
//                       type="text"
//                       className="input mx-2"
//                       id="modal_duration"
//                       name="modal_duration"
//                       value={note.modal_duration}
//                       onChange={onChange}
//                       required
//                     />
//                   </div>

//                   <div className="inputfield">
//                     <label>Add Question</label>
//                     <textarea
//                       className="textarea mx-2"
//                       id="modal_questions"
//                       name="modal_questions"
//                       value={note.modal_questions}
//                       onChange={onChange}
//                       minLength={5}
//                     ></textarea>
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 ref={refClose}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleClick}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Update Info
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ************************************* */}

//       <div className="row my-3 mx-3">
//         <h1>Your Interview Experinces</h1>
//         {notes.map((notes) => {
//           return (
//             <Noteitem
//               key={notes._id}
//               updateQuestion={updateQuestion}
//               notes={notes}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ShowMyQuestion;
