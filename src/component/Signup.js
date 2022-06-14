// import React, { useState,useContext } from "react";
// import { useNavigate } from 'react-router-dom';
// import questionsContext from "../Context/questions/questionsContext";//This is required to call the ShowAlert function


// const Signup = () => {


  
//   const context_temp = useContext(questionsContext);
//   const { ShowAlert } = context_temp; //calling ShowAlert function from context

//     const [credentials, setCredentials] = useState({name:"", email: "", password: "",cpassword:"" });
//     let history=useNavigate();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const {name,email,password,cpassword}=credentials;

//         let message=document.getElementById("message");

//         if(password.length!==0)
//         {
//             if(password===cpassword)
//             {
//               message.textContent="password match";
//               message.style.background="#3ae374"
              

//             }
//             else{
//               message.textContent="password not matched";
//               message.style.background="#3ae374"
//               ShowAlert("Enter the correct password","error")

//               return;
//             }
//         }
//         else{

//         }

//         const response = await fetch("http://localhost:5001/api/auth/createuser", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: JSON.stringify({name,email,password}), // body data type must match "Content-Type" header
//         });
//         const json = await response.json();
//         // console.log(json);
//         if(json.success)
//         {
//             //Save the Auth Token and redirect
//             localStorage.setItem('token',json.authtoken);
//             history("/");
//             ShowAlert("Account created successfully","success");
//         }
//         else{
//             // alert("User with this   email already exist");
//             ShowAlert("User with this credentials already exist","error");
//         }
//       };
    
//       const onChange=(e)=>{
//           setCredentials({...credentials,[e.target.name]:e.target.value})
//       }
    
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//       <div className="form-group">
//           <label htmlFor="name"> Name</label>
//           <input
//           htmlFor='name'
//             type="text"
//             className="form-control"
//             id="name"
//             aria-describedby="emailHelp"
//             placeholder="Enter Name"
//             onChange={onChange}
//             name="name"
//             minLength={3}
//             required
//           />
          
//         </div>

          
//         <div className="form-group">
//           <label htmlFor="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             name="email"
//             onChange={onChange}
//             required
//           />
          
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Password"
//             name="password"
//             onChange={onChange}
//            minLength={5}
//            required 
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="cpassword">Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="cpassword"
//             placeholder="confirm Password"
//             name="cpassword"
//             onChange={onChange}
//             minLength={5}
//             required
//           />
//         </div>
//         <p id="message" className="my-2"></p>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
