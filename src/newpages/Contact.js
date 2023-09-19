// Importing Libraries 

import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import "./Contact.css"

export const Contact = () => {

    // Vairables names that my contact form will handle
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection(db, 'contactdata');

    const handleSubmit = async () => {
        try {
            await addDoc(userCollectionRef, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                number: number,
                message: message,
            });
            console.log('Document successfully written!');
        } catch (error) {
            console.error('Error writing document: ', error);
        }
    };

    return (
        <div className='outer-container'>


            <form className='contactform'>
                <h3> Contact Form </h3>

                <label> First Name </label>
                <input
                    type='text'
                    placeholder='Enter your first name'
                    onChange={(event) => setFirstName(event.target.value)}
                />

                <label> Last Name </label>
                <input
                    type='text'
                    placeholder='Enter your last name'
                    onChange={(event) => setLastName(event.target.value)}
                />

                <label> Email address </label>
                <input
                    type='email'
                    placeholder='Enter your email address'
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label> Phone Number </label>
                <input
                    type='number'
                    placeholder='Enter your phone number'
                    onChange={(event) => setNumber(event.target.value)}
                />

                <label> Inquiry </label>
                <textarea
                    type='text'
                    placeholder='Enter your question'
                    onChange={(event) => setMessage(event.target.value)}
                />

                <button onClick={handleSubmit}> SUBMIT </button>
            </form>
        </div>
    );
};
