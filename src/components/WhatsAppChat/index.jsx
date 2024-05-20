import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../WhatsAppChat/chat.css';
import userAvatar from "../Assets/team2.png";
import botAvatar from "../Assets/virtual.png";

const WhatsAppChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Thank you for your message. I will respond shortly.', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="whatsapp-chat-container">
      <div className={`whatsapp-chat ${showChat ? 'show' : ''}`}>
        <div className="chat-header">
          <h5>Virtual Support</h5>
          <button className="close-btn" onClick={handleChatToggle}>&times;</button>
        </div>
        <div className="chat-body">
          <div className="chat-window">
            <ul className="message-list">
              {messages.map((message, index) => (
                <li key={index} className={`message ${message.sender}`}>
                  <div className="message-content">
                    <img
                      src={message.sender === 'user' ? userAvatar : botAvatar}
                      alt={message.sender === 'user' ? 'User' : 'Bot'}
                      className="avatar"
                    />
                    <span style={{'color': 'black'}}>{message.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-input">
            <input type="text" className="message-input" 
              placeholder="Type your message here" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}/>
            <button onClick={handleSendMessage} className="send-button">Send</button>
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