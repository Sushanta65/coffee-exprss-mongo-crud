import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        createUser(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
            const userCreatedAt = result.user.metadata.creationTime;

            const newUser = {name, email, userCreatedAt}
            fetch('http://localhost:5200/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch(error => {
            console.log(error.message)
        })
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