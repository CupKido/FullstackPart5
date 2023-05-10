import { useState } from 'react'
import { useUser, useUserUpdate } from './UserContext'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function getUser(username){
        return await fetch('https://jsonplaceholder.typicode.com/users?username=' + username)
        .then(response => response.json())
    }

    const userUpdatedFunction = useUserUpdate();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault()
        //console.log(await getUsers())
        const users = (await getUser(username));
        console.log(users)
        if (users.length === 0){
            console.log("Login Failed")
            return
        }
        const user = users[0];
        let number = user.address.geo.lat;
        console.log(number)
        let lastFourDigits = String(number).replace('.', '').slice(-4);
        console.log(lastFourDigits)
        if(password === lastFourDigits){
            console.log("Login Successful")
            userUpdatedFunction(user)
            navigate('/todos')
        }
        else{
            console.log("Login Failed")
        } 
    }
    
    return (
      <>
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} 
            onChange={e => setUsername(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} 
            onChange={e => setPassword(e.target.value)} />    
            <button type="submit">Login</button>
        </form>    
      </>
    )
  }
  
  export default Login