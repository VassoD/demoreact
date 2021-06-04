import "./LoginForm.css"

const LoginForm =(props) =>{
    return (
        <form>
            <Input
                labelText="Username"
                input = {{
                    id: "username",
                    type: "Username"
                }}
        />
        <Input
                labelText="Password"
                input = {{
                    id: "password",
                    type: "Password"
                }}
                type="password"/>
                </form>
    )
}

export default LoginForm