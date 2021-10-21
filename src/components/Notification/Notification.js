import React, { useContext, useEffect, useState } from 'react'
import { faCheck,faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import NotificationContext from '../../context/NotificationContext'
import './Notification.css'


export const Notification = () => {

    const { notification }  = useContext(NotificationContext)
    const [type, setType] = useState('')
    const spinner = <div className="spinner-border text-primary" role="status"/>
    const check = <FontAwesomeIcon className="confirmIcon me-1" icon={faCheck}/>
    const error = <FontAwesomeIcon className="errorIcon me-1" icon={faExclamationCircle}/>

    useEffect (() => {
        setType(notification.type)
    },[notification.type])
    
    if(notification.message === '') {
        return null
    }

    
    return (
        <div className="d-flex justify-content-center">
            <div className="alert row col-sm-6 alert-primary alert-dismissible fade show" role="alert">
                <h3> 
                    {(type === "spinner") ? spinner 
                    : (type === "check") ? check 
                    : (type === "error") ? error : null} 
                    {notification.message} 
                    </h3>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Notification;
