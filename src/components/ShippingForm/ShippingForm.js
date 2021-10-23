import './ShippingForm.css'
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Input from '../Input/Input'
import NotificationContext from '../../context/NotificationContext'
import { Link } from 'react-router-dom';

const ShippingForm = () => {

    const { setNotification } = useContext(NotificationContext)
    const { setBuyer, buyer } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [state, setState] = useState('')
    const [code, setCode] = useState('')    
    const [street, setStreet] = useState('')
    const [comment, setComment] = useState('')
    
    const setStatus = [setName, setEmail, setPhone, setState, setCode, setStreet, setComment]

    let history = useHistory();

    const setFunction = () => {
        setStatus.map(set =>{
            return set('')
        })
    }

    const handleContactForm = (e) => {
        e.preventDefault();
        const contactData = {
            name,
            email,
            phone,
            state,
            code,
            street,
            comment
        }
        setBuyer(contactData)
        setNotification('check', "Saved successfully", 3000) 
        history.push("/cart");
    }

    const handleClearForm = () => {
        setFunction()
        setBuyer()
    }


    return (
        <div className="container-fluid shippingForm">
            <h1>Shipping Form</h1>
            <form className="form" onSubmit={handleContactForm}>
                <div className="col-sm-4">
                    <Input mb="mb-3" type="text" value={name} setValue={setName} label="FullName" />
                    <Input mb="mb-3" type="email" value={email} setValue={setEmail} label="Email" />
                    <Input mb="mb-3" type="number" value={phone} setValue={setPhone} label="Phone Number" />
                    <div className="row g-2 mb-3">
                        <div className="col-md">
                            <Input type="text" value={state} setValue={setState} label="Country/State/Province" />
                        </div>
                        <div className="col-md">
                            <Input type="number" value={code} setValue={setCode} label="Postal Code" />                            
                        </div>
                    </div>                   
                    <Input mb="mb-3" type="text" value={street} setValue={setStreet} label="Street Address" />              
                    <div className="form-floating mb-3">
                        <textarea value={comment} onChange={({ target }) => setComment(target.value)} className="form-control" />
                        <label>Additional comment</label>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-secondary mb-3" onClick={() => handleClearForm()} >Clear</button>
                        
                        {buyer === undefined ?
                        <button type="submit" className="btn btn-primary" >Save</button>   
                        :
                        <Link  to="/cart">
                            <button type="button" className="btn btn-primary">
                                Back to cart
                            </button>
                        </Link>}      
                    </div>
                </div>
            </form>                    
        </div>
    )
}

export default ShippingForm;