import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { Reply, ReplyForm } from '.';

const Message = (props) => {
  const [replyForm, setReplyForm] = useState(false);
  const feedback = useSelector((state) => state.singleChatroom.feedback);
  const { userInfo } = useSelector((state) => state.auth)
//   const users = useSelector((state) => state.users.users);
  const message = feedback.messages[props.index];
//   const user = users.find((human) => human.id === message.userId);
  const onReply = () => {
    setReplyForm(!replyForm);
  };

  return (
    <div className='w-full mt-6'>
        <div className='w-full md:flex'>
          <div className='w-full'>
            <div className='w-full flex items-center'>
              <div id='user-info' className='ml-4 flex flex-col'>
                <span className='text-darkBlueTwo jost-b-h4'>{userInfo.name}</span>
              </div>
              <button
                id={'reply-btn' + message.id}
                type='button'
                className='text-electric hover:underline jost-b-h4 ml-auto'
                onClick={onReply}
              >
                Reply
              </button>
            </div>
            <p className='w-full text-gray jost-r-h3 mt-6 md:ml-4'>
              {message.content}
            </p>
            {/* {replyForm ? (
              <ReplyForm
                commentId={comment.id}
                replyTo={user.username}
                setReplyForm={setReplyForm}
              />
            ) : null} */}
          </div>
        </div>
      {/* {comment.replies.length > 0 && users.length > 0 ? (
        <div className='w-full border-l-gray border-l-[1px] border-opacity-10 pl-6 mt-6 flex flex-col gap-y-6'>
          {comment.replies.map((reply) => (
            <Reply reply={reply} key={reply.id} commentId={comment.id} />
          ))}
        </div>
      ) : null} */}
    </div>
  );
};

export default Message;