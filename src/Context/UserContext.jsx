import React, { createContext, useState } from "react";

export const UserContext = createContext([]);

export function CartProvider({ children }) {

    const [user,setUser]= useState({
        name: "Tomas",
        email: "example@example.com",
    });
    
    function updateName(name) {
        setUser({
         ...user,
            name: name
        })
    }

    function updateEmail(email) {
        setUser({ 
            ...user, 
            email: email
        });
    }

  return (
    <UserContext.Provider value={{user, updateName, updateEmail}}>
      {children}
    </UserContext.Provider>
  );
}
