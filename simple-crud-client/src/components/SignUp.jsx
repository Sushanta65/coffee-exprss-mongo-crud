
const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }

    return (
        <div style={{margin: '20px'}}>
            <h2>Sign Up Now</h2>
            <form onSubmit={handleSignUp}>
                <input type="name" placeholder="Name" name="name" /><br />
                <input type="email" placeholder="Email" name="email" /><br />
                <input type="password" placeholder="Password" name="password" /><br />
                <input type="submit" value="Sing Up" />
            </form>
        </div>
    );
};

export default SignUp;