import {StyledContainer, Chatroom, StyledForm} from "./style.jsx";

import * as React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { logout } from "store/slices/authSlice.js";
import { Navigate } from "react-router-dom"

import { fetchChatrooms, fetchSingleChatroom } from "store/actions/chatroomActions.js";



const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const chatrooms = useSelector((state) => state.chatrooms.items);
    const { userInfo } = useSelector((state) => state.auth)



    const AllChatrooms = chatrooms.map((chatroom) => {
        const navigateChatroom = () => {
            navigate('/chatroom/' + chatroom.id, { state: { from: location } });
            dispatch(fetchSingleChatroom(chatroom.id))
          };

        return (
            <Chatroom 
            key={chatroom.title}
            >
                <div className='chatroomDiv'>
                    <button className="button" onClick={navigateChatroom}>
                        {chatroom.title}
                    </button>
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



