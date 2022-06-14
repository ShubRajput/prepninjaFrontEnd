// import React, { useState,useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import Alert from "./Alert";
// // import alertContext from "../Context/Alert/alertContext";
// import questionsContext from "../Context/questions/questionsContext";//This is required to call the ShowAlert function




// const Login = () => {

//   //alert context code
//   // const context = useContext(alertContext);
//   // const { ShowAlert_temp } = context;

//   //testing the showAlert
//   const context_temp = useContext(questionsContext);
//   const { ShowAlert } = context_temp; //calling ShowAlert function from context


//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   let history = useNavigate(); //In react-router-dom v6 useHistory() is replaced by useNavigate().
 
  


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5001/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }), // body data type must match "Content-Type" header
//     });
//     const json = await response.json();
//     // console.log(json);
//     if (json.success) {
//       //Save the Auth Token and redirect
//       // alert("login success");

//       ShowAlert("Login success","success");
      
      
      
      
//       // localStorage.setItem('token',json.authtoken);
//       localStorage.setItem("token", json.authToken);
//       history("/");
      
//       // console.log("token is "+ localStorage.getItem('token'));
//       // console.log("token is " + json.authToken);
//     } else {
//       // alert("invlaid login");
//       ShowAlert("Login Fail","error");
      
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             name="email"
//             value={credentials.email}
//             onChange={onChange}
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div className="form-group">
//           <label htmlFor="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//             name="password"
//             value={credentials.password}
//             onChange={onChange}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary" >
//           Submit
          
//         </button>
//       </form>
//       <ToastContainer/>
//     </div>
//   );
// };

// export default Login;
