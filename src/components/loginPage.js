const login = () => {
    return (  <><div class="sidenav">
        <a href="https://codeenrrrun.github.io/Ecommerce/"><img src="flopkart1.png" alt="FlopKart logo" width="170" height="130"/></a>
        <div class="login-main-text">
            <h2> FlopKart<br></br></h2>
            <p>Login or register from here to access.</p>
        </div>
    </div><div class="main">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <label>User Name</label>
                            <input type="text" class="form-control" id="userName" placeholder="User Name"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password"></input>
                        </div>
                        <button type="button" class="btn btn-black" id="validate">Login</button>
                        <button type="submit" class="btn btn-secondary">Register</button>
                    </form>
                </div>
            </div>
        </div></>);
}
 
export default login;