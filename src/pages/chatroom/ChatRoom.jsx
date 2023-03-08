import {StyledContainer, StyledForm} from "./style.jsx";

import * as React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatrooms, fetchSingleChatroom } from "store/actions/chatroomActions.js";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import NewComment from "./newComment.jsx";
import Message from "./Message.jsx";


const ChatRoom = () => {

    const feedback = useSelector((state) => state.singleChatroom.feedback);
    const { userInfo } = useSelector((state) => state.auth)
    const userId = userInfo._id
    const { id } = useParams();
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchChatrooms());
        dispatch(fetchSingleChatroom(id));
      }, [dispatch, id]);



    return (
    <StyledContainer>
        <Link to={location ? location.state.from.pathname : '/'}>◄ Join Another ChatRoom</Link>   
        <StyledForm>
            {feedback.title}
            {feedback.messages.map((message, index) => (
              <Message key={message.id} index={index} />
            ))}
        </StyledForm>
        <NewComment chatroomId={id} userId={userId}/>
    </StyledContainer>
    )
}

export default ChatRoom