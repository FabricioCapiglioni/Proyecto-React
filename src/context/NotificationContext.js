import React, { useState } from 'react'

const Context = React.createContext()

export const NotificationContextProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    const setNotification = ( type, message, sec ) => {
        window.scrollTo(0, 0);
        setType(type)
        setMessage(message)        
        setTimeout(() => {
            setMessage('')
        }, sec) 
    }

    return (
        <Context.Provider 
            value={{
               notification: {
                   message,
                   type
               },
               setNotification
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context