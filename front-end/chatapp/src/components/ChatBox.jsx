import React, { useState } from 'react';
import { SendHorizonal } from 'lucide-react'; // optional: install `lucide-react` for icons

function ChatBox() {
    const [messages, setMessages] = useState([
        'Hello there!',
        'Welcome to the chatbox!',
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;
        setMessages([...messages, input]);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="rounded-t-4xl shadow-inner shadow-indigo-500/50 bg-purple-200 p-4 w-full h-full flex flex-col">
            {/* Message area */}
            <div className="flex-1 overflow-y-auto space-y-2 mb-3 p-2 bg-white rounded">
                {messages.map((msg, idx) => (
                    <div key={idx} className="bg-indigo-100 p-2 rounded shadow text-sm break-words max-w-full">
                        {msg}
                    </div>
                ))}
            </div>

            {/* Input + Send Button */}
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 p-2 rounded border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                    <SendHorizonal size={18} />
                </button>
            </div>
        </div>
    );
}

export default ChatBox;
