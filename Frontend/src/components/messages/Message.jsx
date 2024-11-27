import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
              alt="demo avatar"
            />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}> Hi! What is upp?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
    </div>
  );
};

export default Message