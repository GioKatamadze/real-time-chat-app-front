import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { userLogin } from "store/actions/authActions.js";
import { HashLink } from 'react-router-hash-link';

import Error from "components/error/error";
import Spinner from "components/spinner/spinner";
import { StyledForm, Paragraph } from "./style";
import Button from "./button/login-button";


const LoginForm = () => {

    const { loading, userInfo, error } = useSelector((state) => state.auth)
    const { register, handleSubmit } = useForm()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      if (userInfo) {
        navigate('/')
      }
    }, [navigate, userInfo])
  
    const submitForm = (data) => {
      dispatch(userLogin(data))
    }
  

    return (
        <StyledForm>
            {error && <Error>{error}</Error>}

            <form onSubmit={handleSubmit(submitForm)}>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    {...register('email')}
                    required/>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...register('password')}
                    required/>

                <Button 
                    className="button" 
                    type="submit" 
                    disabled={loading}> 
                        {loading ? <Spinner /> : 'Login to your account'}
                </Button>

                <Paragraph>
                    Don't have an account? 
                    <HashLink className="nostyle" smooth to="/signup">Sign Up</HashLink>
                </Paragraph>
            </form>
            <p>
                To test app, use <br/>
                email: demo@example.com <br/>
                password: demo123
            </p>
            <p>
                or signup if you wish
            </p>

        </StyledForm>
    )
}

export default LoginForm