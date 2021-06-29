import React, { useState } from 'react';
import './multipleInputs.css'

export default function MultipleInputs() {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
        console.log(records);
        setRecords([...records, newRecord]);

        setUserRegistration({
            username: "",
            email: "",
            phone: "",
            password: ""
        });
    }

    return (
        <><div className="main-layout">
            <div className="close-btn">
            <i class="fas fa-times"></i>
            </div>
            <header>
                <div className="sign-up-header">
                <h1>Sign Up</h1>
            <h3>or login to your account</h3>
                </div>
            <div className="sign-up-icon">
            
            </div>
            </header>
            
            <form action="" onSubmit={handleSubmit}>
                <div className="form-element">
                    {/* <label htmlFor="username">Fullname</label> */}
                    <input type="text" autoComplete="off"
                    placeholder="Username"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="username" id="username" />
                </div>

                <div className="form-element">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="text" autoComplete="off"
                    placeholder="Email"
                        value={userRegistration.email}
                        onChange={handleInput}
                        name="email" id="email" />
                </div>

                <div className="form-element">
                    {/* <label htmlFor="phone">Phone</label> */}
                    <input type="text" autoComplete="off"
                    placeholder="Phone"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        name="phone" id="phone" />
                </div>
                <div className="form-element">
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" autoComplete="off"
                    placeholder="Password"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password" />
                </div>

                <button type="submit" className="sign-up-button">
                    Registration
                </button>
            </form><div>
                {
                    records.map((item) => {
                        const { id, username, email, phone, password } = item;
                        return (<div key={id}><p className ="show-data">{username}</p>
                            <p className ="show-data">{email}</p>
                            <p className ="show-data">{phone}</p>
                            <p className ="show-data">{password}</p>
                        </div>)
                    })
                }
            </div>
        </div>

        </>
    )
}
