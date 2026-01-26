import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m Shweta’s portfolio assistant. Ask me about her skills or projects!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMsg.text }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white flex items-center justify-center
        shadow-lg hover:scale-110 transition"
      >
        <FaRobot size={22} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50
        w-80 h-[420px]
        bg-[#0f0f14]
        border border-purple-500/30
        rounded-2xl
        shadow-[0_0_30px_rgba(168,85,247,0.35)]
        flex flex-col overflow-hidden">

          {/* Header */}
          <div className="flex justify-between items-center
          bg-gradient-to-r from-purple-600 to-purple-800
          px-4 py-3 text-white font-semibold">
            <span>Shweta AI</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-xl max-w-[75%] ${
                  m.sender === "user"
                    ? "ml-auto bg-purple-600 text-white"
                    : "mr-auto bg-[#1a1a22] text-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-[#1a1a22] text-gray-400 px-3 py-2 rounded-xl">
                typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-2 border-t border-purple-500/20">
            <input
              className="flex-1 bg-transparent text-white text-sm outline-none px-2 placeholder-gray-400"
              placeholder="Ask about my projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="text-purple-400 hover:text-purple-300"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
