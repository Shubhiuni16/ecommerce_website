import { useEffect, useState } from "react";
import './loginPage.css'
import Logo from '../Images/flopkart1.png'
import { Link } from 'react-router-dom';
import Register from "./RegisterFormPg";
const Login = (props) => {
    const [credentials,setCredentials]=new useState(null)
    const [user,setUser]=new useState("")
    const [pass,setPass]=new useState("")
    const [status,setStatus] = new useState(true);
    useEffect(()=>{
        fetch("http://localhost:8000/credentials").then((res)=>res.json()).then((res)=>setCredentials(res))
    },[])
    const LoginClicked=(e)=>{
        const logged=credentials.filter((c)=>{return user===c.user&&pass===c.password})
        console.log(logged)
        const loggedIn = {status}
        if(logged.length!==0){
            console.log("LOGGED IN")
            fetch("http://localhost:8000/LoginCheck/1",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(loggedIn)}).then(()=>{alert("YAY!!! LOGGED IN")
            props.history.push('/Home')})
            }else
            console.log("LOG IN AGAIN")
    }
    return(
            <div>
                <div className="sidenav">
                <Link to="/Home"><img src={Logo} alt="FlopKart logo" width="170" height="130"/></Link>
                    <div className="login-main-text">
                        <h2> FlopKart<br></br></h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" id="userName" placeholder="User Name" onChange={(e)=>setUser(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}></input>
                                </div>
                                <button type="button" className="btn btn-black" id="validate" onClick={()=>LoginClicked()}>Login</button>
                                <Link to="/Register"><button type="submit" className="btn btn-secondary">Register</button></Link>
                                <br /><Link to="/Home">Proceed Without Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Login;