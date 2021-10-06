import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../CartContext/UserContext'


const Login = () =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const { login } = useContext(UserContext)
    
    const logging = (event) => {
        event.PreventDefault()

        const objUser = {username, password}
        
        login(objUser)
        history.push("/")
    }

    return (
        <div>
          <h1>SignIn</h1>
          <form onSubmit={logging}>
            <div>
                <label>Username</label>
                <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
            </div>
            <button type='submit'>login</button>
          </form>
        </div>

    )

}

export default Login 