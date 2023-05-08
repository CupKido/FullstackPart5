import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function getUser(username){
        return await fetch('https://jsonplaceholder.typicode.com/users?username=' + username)
        .then(response => response.json())
    }
    async function login() {
        const users = (await getUser(username));
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
        }
        else{
            console.log("Login Failed")
        } 
    }
    
    return (
      <>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} 
            onChange={e => setUsername(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} 
            onChange={e => setPassword(e.target.value)} />    
            <button type="button" onClick={login}>Login</button>
        </form>    
      </>
    )
  }
  
  export default Login