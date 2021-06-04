import "./LoginForm.css"
import Input from "../UI/Input"

const LoginForm =(props) =>{
    return (
        <form>
        <div className="login__elements">
            <Input className="login__element"
                labelText="Username"
                input = {{
                    id: "username",
                    type: "Username"
                }}
        />
            <Input className="login__element"
                labelText="Password"
                input = {{
                    id: "password",
                    type: "password"
                }}

                />
                </div>
                <div className="login__actions">
                    <button type = "submit">Add metric</button>
                </div>


                </form>
    )
}

export default LoginForm