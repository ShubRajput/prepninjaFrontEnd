// import { useState } from "react";
// import questionsContext from "./questionsContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { confirm } from "react-confirm-box";

// const QuestionsState = (props) => {
//   const host = "http://localhost:5001";  
//   const notesInitial = [];

//   const [notes, setNotes] = useState(notesInitial);

//   const getQuestion = async () => {
//     //API call
//     const response = await fetch(`${host}/api/questions/fetchUserSpecificQue`, {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.

//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',

//         //localStorage.getItem('token')

//         "auth-token": localStorage.getItem("token"),
//       },
//     });
//     const json = await response.json();
//     // console.log(json);
//     setNotes(json);
//   };

//   //add question
//   const addQuestion = async (name, company_name, duration, questions) => {
//     try {
//       //API call
//       try {
//         const response = await fetch(`${host}/api/questions/addquestions`, {
//           method: "POST", // *GET, POST, PUT, DELETE, etc.

//           headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',

//             //localStorage.getItem('token')
//             "auth-token": localStorage.getItem("token"),
//           },
//           body: JSON.stringify({ name, company_name, duration, questions }), // body data type must match "Content-Type" header
//         });
//       } catch (error) {
//         console.log(error);
//         // alert("Error ali rre");
//       }
//       // const json = response.json();
//       // console.log(json);

//       // logic to add the note at client side

//       // console.log("Adding a new note");
//       const note = {
//         _id: "62772ace567b47acee0c294f",
//         user: "6274a7771f3f92861b939250",
//         name: name,
//         company_name: company_name,
//         duration: duration,
        
//         questions: questions,
        
//         date: "2022-05-08T02:28:30.057Z",
//         __v: 0,
//       };
//       // console.log("Added a new note successfluly");
//       setNotes(notes.concat(note));
      
//       ShowAlert("Note added successfully");
//       // setNotes({name: " ", company_name: " ", duration: " ", questions: " " });
//       // console.log("success");
//     } catch (error) {
//       // alert("Error occure while addding the note");
//       ShowAlert("Note  not added","error");
//     }
//   };

//   //delete question
//   const deleteQuestions = async (id) => {
//     const result = await confirm("Are you sure to Delete the Questions?");
//     if (result) {
//       //API call
//       const response = await fetch(
//         `${host}/api/questions/deletequestions/${id}`,
//         {
//           method: "DELETE", // *GET, POST, PUT, DELETE, etc.

//           headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',

//             //localStorage.getItem('token')
//             "auth-token": localStorage.getItem("token"),
//           },
//         }
//       );
//       const json = response.json();
//       // console.log(json);

//       //logic to delete at client side
//       // console.log("deleting the note with id " + id);
//       const newNotes = notes.filter((notes) => {
//         return notes._id !== id;
//       });
//       setNotes(newNotes);
//     }
//   };

//   //edit question
//   const editQuestion = async (id, name, company_name, duration, questions) => {
//     //API call
//     // console.log("name" + name);
//     const response = await fetch(
//       `${host}/api/questions/updatequestions/${id}`,
//       {
//         method: "PUT", // *GET, POST, PUT, DELETE, etc.

//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',

//           //localStorage.getItem('token')
//           "auth-token": localStorage.getItem("token"),
//         },

//         body: JSON.stringify({ name, company_name, duration, questions }), // body data type must match "Content-Type" header
//       }
//     );
//     const json = response.json(); // parses JSON response into native JavaScript objects

//     //logic to edit the client side
//     let newNotes = JSON.parse(JSON.stringify(notes));
//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].name = name; //check it latter
//         newNotes[index].company_name = company_name;
//         newNotes[index].duration = duration;
//         newNotes[index].questions = questions;
//         console.log("Breaked");
//         break;
//       }
//     }
//     // console.log(newNotes);
//     setNotes(newNotes);
//   };

//   //I am creating this function in this context because when ia waas creating this function in alert Context then it was showing error
//   //Actullly this function should be in alertContext,...but for some time let it be here....
//   const ShowAlert = async (msg, type) => {
    
//     toast(msg, { type: type });
//     // <ToastContainer/>
//   };

//   // Route 5:Function for to fetch all the User questions
//   const getAllQuestion = async () => {
//     //API call
//     const response = await fetch(`${host}/api/questions/fetchAllUserQue`, {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.

//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     // console.log(json);
//     setNotes(json);
//   };

//   return (
//     <questionsContext.Provider
//       value={{
//         notes,
//         addQuestion,
//         deleteQuestions,
//         editQuestion,
//         getQuestion,
//         ShowAlert,
//         getAllQuestion,
//       }}
//     >
//       {props.children}
//       <ToastContainer />
//     </questionsContext.Provider>
//   );
// };

// export default QuestionsState;
