import * as React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChatrooms, fetchSingleChatroom } from "store/actions/chatroomActions.js";
import { fetchUsers } from "store/actions/usersActions.js";
import { Link, useLocation, useParams } from 'react-router-dom';
import {StyledContainer, StyledForm, Header} from "./generalStyle.jsx";
import NewMessage from "./newMessage.jsx";

const ChatRoom = () => {

    const feedback = useSelector((state) => state.singleChatroom.feedback);
    const allUsers = useSelector((state) => state.users.users);
    const { userInfo } = useSelector((state) => state.auth)
    const { id } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const userId = userInfo._id

    const Scroll = () => {
        let scroll_to_bottom = document.getElementById("chatWrapper")
        if ( scroll_to_bottom ) {
            console.log("send")
            scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
          }
    }

    const AllMessages = feedback.messages.map((message) => {
        Scroll()
        if (message.userId === userInfo._id) {
            return  (
                <div key={message.id} className="mychatWrapper" >
                    <h3 className="myauthor">{userInfo.name}</h3>                   
                    <div className="myMessage">
                        <p className="message">{message.content}</p>
                    </div>
                </div>)
        } else {
            let specificUser = allUsers.find(person => person.id === message.userId);
            return (
                <div key={message.id} className="otherchatWrapper" >
                    <h3 className="otherauthor">{specificUser.name}</h3>
                    <div className="otherMessage">
                        <p className="message">{message.content}</p>
                    </div>
                </div>)
        }
    })

      useEffect(() => {
        const interval = setInterval(() => {
            dispatch(fetchSingleChatroom(id))
          }, 3000)
        return () => clearInterval(interval);
      }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchChatrooms());
        dispatch(fetchUsers())
        dispatch(fetchSingleChatroom(id));
      }, [dispatch, id]);

    return (
    <StyledContainer>
        <Header>
            <Link className='back' to={location ? location.state.from.pathname : '/'}>??? Join Another ChatRoom</Link>   
            <div className='sign'>{feedback.title}</div>
        </Header>
        <StyledForm id="chatWrapper">
            {feedback ? <div>{AllMessages}</div> : <p>No Messages...</p>}
        </StyledForm>
        <NewMessage chatroomId={id} userId={userId}/>
    </StyledContainer>
    )
}

export default ChatRoom