import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from 'services/chatroomServices.js';
import { singleChatroomActions } from 'store/slices/singleChatroomSlice.js';
import { fetchSingleChatroom } from "store/actions/chatroomActions.js";
import { fetchUsers } from "store/actions/usersActions.js";
import { useParams } from 'react-router-dom';
import { StyledContainer } from './newMessageStyle.jsx';

const NewMessage = (props) => {

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();
  const limit = 1000;

  const Scroll = () => {
    let scroll_to_bottom = document.getElementById("chatWrapper")
    scroll_to_bottom.scrollTop = scroll_to_bottom.scrollHeight;
  }

  const messageHandler = (event) => {
    if (event.target.value.length <= limit) setMessage(event.target.value);
  };

  const backspace = (event) => {
    const str = event.target.value.slice(0, message.length);
    if (event.target.value.length === limit && event.key === 'Backspace') {
      setMessage(str);
    }
  };

  const onAddMessage = async () => {
    if (message.trim().length > 3) {
      const messageObj = {
        content: message,
        chatroomId: +props.chatroomId,
        userId: props.userId,
      };

      try {
        const response = await addMessage(messageObj);
        const newMessage = response.data;
        newMessage.replies = [];
        dispatch(singleChatroomActions.addMessage(newMessage));
        dispatch(fetchSingleChatroom(id))
        dispatch(fetchUsers())
        setMessage('');
        setTimeout(Scroll, 1500);
      } catch (error) {}
    }
  };

  return (
    <StyledContainer>
      <textarea
        placeholder='Type your message here'
        value={message}
        onChange={messageHandler}
        onKeyDown={backspace}
      ></textarea>
      <button type='button' onClick={onAddMessage}>send</button>
    </StyledContainer>
  );
};

export default NewMessage;