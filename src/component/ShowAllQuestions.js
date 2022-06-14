// import React, { useEffect, useContext } from "react";
// import questionsContext from "../Context/questions/questionsContext";
// import QuestionsItem from "./QuestionsItem";

// const ShowAllQuestions = () => {
//   const context = useContext(questionsContext);

//   const { notes, getAllQuestion } = context;
//   useEffect(() => {
    
//     getAllQuestion();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
// return(
// <>
//   <div className="row my-3 mx-3">
//   <h1>All MNC's Interview Experience</h1>
//   {notes.map((notes) => {
//     return (
//       <QuestionsItem
//         notes={notes}
//         key={notes._id}
//       />
//     );
//   })}
// </div>
// </>
// );
// };

// export default ShowAllQuestions;
