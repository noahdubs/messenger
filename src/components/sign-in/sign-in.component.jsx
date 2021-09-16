import React, { useState } from 'react'

import { FormInput } from '../form-input/form-input.component'
import CustomButton  from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.css'

const SignIn = () => {

    const [ info, setInfo ] = useState({
        email: '',
        password: ''
    })


    const handleChange = event => {
        const { name, value } = event.target 

        setInfo({ ...info, [ name ]: value })
    }

    const handleSubmit = async event => {
        const { email, password } = info
        event.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setInfo({email: '', password: ''})
        } catch(error) {
            console.log(error)
        }
        console.log(info)
        setInfo({email: '', password: ''})
    }   

    return (
        <div className="col-lg-6 sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput  
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={info.email}
                    label="email"
                    type="login-form-input"
                    placeholder="Email"
                    required
                />  
                <FormInput  
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={info.password}
                    label="email"
                    type="login-form-input"
                    placeholder="Password"
                    required
                />
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
            </form>
        </div>
        
    ) 
}

export default SignIn 