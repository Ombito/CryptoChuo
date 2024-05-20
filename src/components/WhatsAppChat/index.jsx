// import React from 'react'
// import '../Chat/chat.css';
// const Chat = () => {
//   return (
//         <div class="card">
//             <div class="chat-header">Chat</div>
//             <div class="chat-window">
//                 <ul class="message-list"></ul>
//             </div>
//             <div class="chat-input">
//                 <input type="text" class="message-input" placeholder="Type your message here" />
//                 <button class="send-button">Send</button>
//             </div>
//         </div>
//   )
// }

// export default Chat;

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../WhatsAppChat/chat.css';

const WhatsAppChat = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="whatsapp-chat-container">
      <div className={`whatsapp-chat ${showChat ? 'show' : ''}`}>
        <div className="chat-header">
          <h4>Support</h4>
          <button className="close-btn" onClick={handleChatToggle}>&times;</button>
        </div>
        <div className="chat-body">
          <div class="chat-window">
            <ul class="message-list"></ul>
          </div>
          <div class="chat-input">
            <input type="text" class="message-input" placeholder="Type your message here" />
            <button class="send-button">Send</button>
          </div>
        </div>
      </div>
      <div className="whatsapp-icon" onClick={handleChatToggle}>
        <FaWhatsapp size={32} />
      </div>
    </div>
  );
};

export default WhatsAppChat;