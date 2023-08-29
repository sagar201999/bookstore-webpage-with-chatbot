import React, { useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [botResponse, setBotResponse] = useState([{ message: "Hello there! What's your name?" }]);


    const textHandle = (e) => {
        const getUserInput = e.target.value;
        setUserInput(getUserInput);
    };

    const sendText = () => {
        if (displayName === '') {
            setDisplayName(userInput);
            setUserInput('');
            setBotResponse(prevMessages => [
                ...prevMessages,
                { message: `Nice to meet you, ${userInput}! Please choose a number` },
                { message: `1. What genre are you in the mood for?` },
                { message: `2. Are you looking for a particular language?` },
                { message: `3. Are you interested in discounted books?` }
            ]);
        } else {
            const choice = parseInt(userInput);
            if (choice === 1) {
                const genre = [
                    { message: "Great! What genre are you interested in?" },
                    { message: "4. Fantasy" },
                    { message: "5. Adventure" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...genre]);

            } else if (choice === 4) {
                const fantasy = [
                    { message: "Here are some good fantsy books you might like ?" },
                    { message: "Game of Thrones" },
                    { message: "lord of The Rings" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...fantasy]);
            } else if (choice === 5) {
                const adventure = [
                    { message: "Here are some good adventures books you might like ?" },
                    { message: "Fireborn" },
                    { message: "Twin Crowns" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...adventure]);
            } else if (choice === 2) {
                const language = [
                    { message: "What language are you looking for ?" },
                    { message: "6. English" },
                    { message: "7. spanish" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...language]);
            } else if (choice === 6) {
                const english = [
                    { message: "here are books that availble in english" },
                    { message: "Game Of Thrones" },
                    { message: "Harry Potter" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...english]);
            } else if (choice === 7) {
                const spanish = [
                    { message: "soory we don't have any books available in spanish" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...spanish]);
            } else if (choice === 3) {
                const discounted = [
                    { message: "here are some books with great discount !" },
                    { message: "Six Of Crows" },
                    { message: "Your Name" },
                ];
                setBotResponse(prevMessages => [...prevMessages, ...discounted]);
            } else {
                setBotResponse(prevMessages => [...prevMessages, { message: "Sorry, I didn't understand that choice. Please select a valid option." }]);
            }
            setUserInput('');
        }
    };

    return (
        <div className='position-relative playfair'>
            {/* header */}
            <div>
                <div className='d-flex justify-content-between p-3 mt-3 bg-secondary text-dark t-container'>
                    <div className='d-flex'>
                        <img src='images/chatlogo.png' alt="logo" className='chat-icon' />
                        <h5 className='mt-2 ms-2 '>ChatBot | Online</h5>
                    </div>
                    <FontAwesomeIcon icon={faRotateRight} className='fs-5 mt-2 cursor' onClick={() => { setDisplayName(''); setBotResponse([{ message: "Hello there! What's your name?" }]); }} />
                </div>
            </div>

            {/* body */}
            <div className='bg-dark m-container pt-2'>
                <div>
                    {botResponse.map((obj, index) => (
                        <div key={index} className=''>
                            <p className='bg-secondary px-3 py-2 w-75 rounded text-light mt-2 ms-2'>{obj.message}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {/* {displayName !== '' && (
                        <div className=' justify-content-between mt-1'>
                            <p className='bg-b w-75 rounded text-light px-3 py-2 ms-2  mt-2'>{displayName}</p>
                        </div>
                    )} */}
                </div>
            </div>

            {/* footer */}
            <div className='d-flex f-container justify-content-between p-3  bg-secondary '>
                <input type="text" placeholder="Type Here..." value={userInput} className='bg-secondary text-bar-width ms-2' onChange={textHandle} />
                <FontAwesomeIcon className='fs-2 mx-3 cursor' icon={faPaperPlane} onClick={sendText} />
            </div>
        </div>
    );
};

export default Chatbot;
