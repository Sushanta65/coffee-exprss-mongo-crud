
const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }


    return (
        <div style={{margin: '20px'}}>
            <h2>Login Now</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;