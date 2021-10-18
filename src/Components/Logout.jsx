// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Redirect } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import { Alert } from '@mui/material';


// export class Login extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { credData: [] ,flag:0,userName:''}
//     }

//     handler = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value })
//     }
//     componentDidMount = async () => {
//         try {
//             const URL = "  http://localhost:3001/Cred";
//             const res = await fetch(URL);
//             const resData = await res.json();
//             console.log(resData);
//             this.setState({ credData: resData });
//             // console.log(this.stata.credData.length)
//             // <Redirect to='/dash' />

//         }
//         catch (err) {
//             console.log(err)
//         }
//     }

//     submit = () => {
//         let credData = this.state.credData;
//         console.log(Object.keys(credData).length);
//         let i = 0;
//         while (i <= Object.keys(credData).length) {
//             if (document.getElementById("email").value == '' || document.getElementById("pass").value == '') {
//                 alert("Please fill the fields");
//                 break;
//             }

//             if ((document.getElementById("email").value == credData[i].email) && (document.getElementById("pass").value == credData[i].password)) {
//                 console.log("done");
//                 let credArr = {
//                     email: document.getElementById("email").value,
//                     pass: document.getElementById("pass").value
//                 }
//                 localStorage.setItem('credArr', JSON.stringify(credArr));
//                 alert("Login Succcessfully");
//                 this.setState({flag:1});
//                 this.state.userName=credData[i].email;
//                 console.log(this.state.userName)
//                 document.getElementById("email").value = ''
//                 document.getElementById("pass").value = '';
//                 break;
//             }
//             else {
//                 console.log("no")
//                 i++;
//                 if (i == Object.keys(credData).length) {
//                     alert("Your Credientials Does not match please enter correct details");
//                     break;
//                 }
//             }
//         }
//     }
//     render() {
//         return (
//             <>
//                 <h1 className="my-4">Login here</h1>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: 1, width: '100ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField id="outlined-basic" name="email" id="email" label="Enter Your Email" onChange={this.handler} variant="outlined" />
//                     <TextField id="outlined-basic" name="pass" id="pass" label="Enter Your Password" onChange={this.handler} variant="outlined" />

//                 </Box>
//                 {
//                     this.state.flag==1 && <Redirect to="/dash"/>
//                 }
//                 <Button className="mb-5" onClick={this.submit} variant="contained">Submit</Button>
//             </>
//         )
//     }
// }

// export default Login
