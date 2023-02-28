import React, { useState } from 'react'
import Styles from './Register.module.css'

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {

    }


    return (
        <div className={Styles.Container}>
            <div className={Styles.Header}>Register</div>
            <div className={Styles.FormContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.BoxForm}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className={Styles.BoxForm}>
                        <label htmlFor="phone">Phone:</label>
                        <input type="number" name="phone" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className={Styles.BoxForm}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className={Styles.BoxForm}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" value={form.username} onChange={handleChange} />
                    </div>
                    <div className={Styles.BoxForm}>
                        <label htmlFor="name">Password:</label>
                        <input type="text" name="name" value={form.password} onChange={handleChange} />
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Register