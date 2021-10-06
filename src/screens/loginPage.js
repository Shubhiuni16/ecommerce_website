import './loginPage.css'
import Logo from '../Images/flopkart1.png'
const Login = () => {
    return(
            <div>
                <div className="sidenav">
                    <a href="https://codeenrrrun.github.io/Ecommerce/"><img src={Logo} alt="FlopKart logo" width="170" height="130"/></a>
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
                                    <input type="text" className="form-control" id="userName" placeholder="User Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                                </div>
                                <button type="button" className="btn btn-black" id="validate">Login</button>
                                <button type="submit" className="btn btn-secondary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Login;