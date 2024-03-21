import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import Popup from 'reactjs-popup';
import chatbot from "./../../assets/chatbot-ic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import send from './../../assets/send.png';

const Chatbot = () => {
    const [chatopen, setChatopen] = useState(false);
    const [inputText, setInputText] = useState('');
    const messages = ['Hi, I am your personal chatbot! Ask me about the weather!', 'What is the weather like today?', 'Its 38 degrees today but feels like 41 degrees.'];
    const chatRef = useRef(null);

    const toggle = () => {
        setChatopen(!chatopen);
    }

    const handleSend = () => {
        // Here you can handle sending the message
        console.log("Sending message:", inputText);
        setInputText('');
    }

    const handleClickOutside = (event) => {
        if (chatRef.current && !chatRef.current.contains(event.target)) {
            setChatopen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button className='button' onClick={toggle}>
                <img className="float-icon" src={chatbot} alt="ChatBot" />
            </button>

            {chatopen && (
                <div id='chatCon' ref={chatRef}>
                    <div className="chat-box">
                        <div className="header">Chat with me</div>
                        <div className="msg-area">
                            {messages.map((msg, i) => (
                                <p key={i} className={i % 2 === 0 ? "left" : "right"}><span>{msg}</span></p>
                            ))}
                        </div>
                        <div className="footer">
                            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                            <button className='button' onClick={handleSend}><img src={send} alt="Send" /></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
