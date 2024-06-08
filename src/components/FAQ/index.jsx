import React, { useState } from 'react';
import "./style.css"


const FAQ = () => {
    const faqData = [
        { question: 'So your aim is educating people on Blockchain technology?', answer: "It's ok you can say it. Decentralization is important but what underpins it? That's the complication. Our strategy is to create grassroot level of mass awareness on cryptocurrencies and Blockchain." },
        { question: 'Who should attend these courses?', answer: 'The criteria is simple, are you willing to kickstart your Web3 career and achieve certifications? Yes? Good, welcome to CryptoChuo. ' },
        { question: 'What is Web 3.0?', answer: 'Web 3.0 is the next generation of Internet technology that heavily relies on the use of machine learning and artificial intelligence (AI). It aims to create more open, connected, and intelligent websites and web applications, which focus on using a machine-based understanding of data. Through the use of AI and advanced machine learning techniques, Web 3.0 aims to provide more personalized and relevant information at a faster rate. ' },
        { question: 'What is Cryptocurrency?', answer: ' A cryptocurrency is a standard currency used for making or receiving payments on the blockchain, with the most popular cryptocurrency being Bitcoin. Altcoins are the various alternative cryptocurrencies that were launched after the massive success achieved by Bitcoin. The term means alternative coins—that is—other than bitcoins.' },
        { question: 'What are smart contracts?', answer: "Smart contracts are lines of code that are stored on a blockchain and automatically execute when predetermined terms and conditions are met. At the most basic level, they are programs that run as they’ve been set up to run by the people who developed them. The benefits of smart contracts are most apparent in business collaborations, in which they are typically used to enforce some type of agreement so that all participants can be certain of the outcome without an intermediary’s involvement." },
        { question: 'What is Blockchain mining?', answer: "Blockchain mining, a peer-to-peer computer process, is used to secure and verify cryptographic secured transactions. Mining involves crypto miners who add cryptocurrency transaction data to global public ledger of past transactions. In the ledgers, blocks are secured by miners and are connected to each other forming a chain. Cryptocurrencies or tokens, such as Bitcoin or Ethereum, have no central clearing house. Transactions are generally verified in decentralized clearing systems wherein people contribute computing resources to verify the same. This process of verifying transactions in called mining." },
      ];
      
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggleAnswer = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    
    return (
        <div className="faq-container">
            <div className='faq'>
                <h3>Frequently Asked Questions</h3>
                {faqData.map((item, index) => (
                    <div key={index} className='faq-item'>
                        <div className='question' onClick={() => handleToggleAnswer(index)}>
                            {item.question}
                            <span className={`plus ${expandedIndex === index ? 'minus' : 'plus'}`}>
                            {expandedIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {expandedIndex === index && <p className='answer'>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;