import {StyledContainer, Chatroom, StyledForm} from "./style.jsx";

import * as React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "store/slices/authSlice.js";
import { Navigate } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import { fetchChatrooms } from "store/actions/chatroomActions.js";



const Home = () => {

    const dispatch = useDispatch();
    const chatrooms = useSelector((state) => state.chatrooms.items);
    const { userInfo } = useSelector((state) => state.auth)

    const AllChatrooms = chatrooms.map((chatroom) => {
        const path = "/chatroom/" + `${chatroom.id}`

        return (
            <Chatroom 
            key={chatroom.title}
            >
                <div className='buttonDiv'>
                    <HashLink className="button" smooth to={path}>
                        {chatroom.title}
                    </HashLink>
                </div> 
            </Chatroom>  
        )
    })

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, [dispatch]);

    return (
    <StyledContainer>
        <StyledForm>
            <div className="wrapper" >
                <h2>
                    {userInfo !== null
                        ? `Welcome ${userInfo.name}`
                        : "You're not logged in"}
                </h2>

                <div className='buttonDiv'>
                    {userInfo ? (
                        <button className='button' onClick={() => dispatch(logout())}>
                        Logout
                        </button>
                    ) : (
                        <Navigate to='/signin'/>
                    )}
                </div> 

                {AllChatrooms}  

            </div>
        </StyledForm>
    </StyledContainer>
    )
}

export default Home



