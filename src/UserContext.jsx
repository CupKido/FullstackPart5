import React, {createContext, useState, useContext } from 'react'

const UserContext = createContext()
const UserUpdateContext = createContext()

export function useUser(){
    return useContext(UserContext)
}

export function useUserUpdate(){
    return useContext(UserUpdateContext)
}

export function UserProvider({children}){
  const [user, setUser] = useState(0)
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider