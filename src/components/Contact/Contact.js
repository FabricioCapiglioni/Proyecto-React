import './Contact.css'
import { useContext, useState } from "react";
import Input from '../Input/Input'
import NotificationContext from '../../context/NotificationContext'
import { newContact } from '../../assets/Services/firebase/firebase';


const Contact= () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')  
  const [reason, setReason] = useState('')  
  const [comment, setComment] = useState('')
  const { setNotification } = useContext(NotificationContext)

  const setStatus = [setName, setEmail, setReason, setComment]

    const setFunction = () => {
        setStatus.map(set =>{
            return set('')
        })
    }

    const handleContactForm = (e) => {
        e.preventDefault();
        setNotification("spinner", "Processing", 2000) 
        const contactData = {
            name: name,
            email: email,
            reason: reason,
            comment: comment
        }
        newContact(contactData).then( message => {
          setNotification('check', message, 3000)
      }).catch(error => {
          setNotification('error', error, 2000)
      }).finally(() => {
        setFunction()
      })
    }

    const handleClearForm = () => {
        setFunction()
    }

    return (
      <div className="container-fluid contact">
            <h1>Contact Us</h1>
            <form className="form" onSubmit={handleContactForm}>
                <div className="col-sm-4">
                    <Input mb="mb-3" type="text" value={name} setValue={setName} label="FullName" />
                    <Input mb="mb-3" type="email" value={email} setValue={setEmail} label="Email" />
                    <Input mb="mb-3" type="text" value={reason} setValue={setReason} label="Reason / Motive" />            
                    <div className="form-floating mb-3">
                        <textarea value={comment} onChange={({ target }) => setComment(target.value)} className="form-control" />
                        <label>Comment</label>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={() => handleClearForm()} >Clear Form</button>
                    <button type="submit" className="btn btn-primary" >Send</button>
                </div>
            </form>                    
        </div>
    
    );
  }
  
  export default Contact;