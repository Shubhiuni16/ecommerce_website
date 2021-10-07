import { useEffect, useState } from "react";

const Register = () => {

    const [registered,setRegister] = useState(false);


    return ( 
    <div className="main">
    <div className="col-md-6 col-sm-12">
        <div className="login-form">
            <form>
                <div className="form-group">
                <label>Name: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required/> <br/>
                </div>
                <div className="form-group">
                <label>Username: </label> &nbsp;&nbsp;&nbsp;
            <input type="email" required/><br/>
                </div>
                <div className="form-group">
                <label>Password:</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" required/><br/>
                </div>
                <button type="button" className="btn btn-secondary" onClick={()=>{
                            alert("You have successfully registered on FlopKart !!");
                }}>Register</button>
            </form>
        </div>
    </div>
</div>);
}
 
export default Register;