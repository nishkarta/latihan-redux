import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/actions/userActions'
import Styles from './Login.module.css'

const Login = () => {

    const navigate = useNavigate()
    const {authenticated} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    console.log(authenticated)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(form))
    }

    useEffect(()=> {
        if(authenticated){
            navigate('/home')
        }
    })

    return (
        <div className={Styles.Container}>
            <div className={Styles.Header}>
                <span>
                    Login
                </span>
            </div>
            <div className={Styles.FormContainer}>
                <form className={Styles.Form} onSubmit={handleSubmit}>
                    <div className={Styles.BoxForm}>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' value={form.username} onChange={handleChange} required />
                    </div>
                    <div className={Styles.BoxForm}>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' value={form.password} onChange={handleChange} required />
                    </div>
                    <button className={Styles.Button} type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login