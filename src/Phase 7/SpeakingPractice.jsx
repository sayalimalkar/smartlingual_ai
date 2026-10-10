import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SpeakingPractice.css";

const CONVERSATION_SCENARIOS = {
  German: [
    {
      id: "cafe",
      title: "At the Café in Berlin",
      aiRole: "Barista (Lukas)",
      userRole: "Customer",
      initialMessage: "Guten Tag! Willkommen im Café Berlin. Was darf ich Ihnen bringen?",
      translation: "Good day! Welcome to Café Berlin. What can I get for you?",
      prompts: [
        { text: "Ich hätte gerne einen Kaffee, bitte.", label: "I would like a coffee, please." },
        { text: "Haben Sie Hafermilch?", label: "Do you have oat milk?" },
        { text: "Was kostet ein Cappuccino?", label: "How much is a cappuccino?" }
      ],
      aiReplies: {
        "Ich hätte gerne einen Kaffee, bitte.": {
          reply: "Sehr gerne! Möchten Sie Milch und Zucker dazu?",
          translation: "With pleasure! Would you like milk and sugar with that?",
          prompts: [
            { text: "Nur ein wenig Milch, bitte.", label: "Just a little milk, please." },
            { text: "Schwarz, danke schön.", label: "Black, thank you very much." }
          ]
        },
        "Haben Sie Hafermilch?": {
          reply: "Ja, natürlich! Wir haben Hafermilch und Sojamilch.",
          translation: "Yes, of course! We have oat milk and soy milk.",
          prompts: [
            { text: "Perfekt, dann mit Hafermilch bitte!", label: "Perfect, then with oat milk please!" }
          ]
        },
        "default": {
          reply: "Ausgezeichnet! Das macht 3 Euro fünfzig. Zahlen Sie bar oder mit Karte?",
          translation: "Excellent! That is 3 euros fifty. Are you paying cash or card?",
          prompts: [
            { text: "Mit Karte, bitte.", label: "By card, please." },
            { text: "Bar, danke.", label: "Cash, thank you." }
          ]
        }
      }
    }
  ],
  Japanese: [
    {
      id: "cafe",
      title: "At the Café in Tokyo",
      aiRole: "Barista (Kenji)",
      userRole: "Customer",
      initialMessage: "いらっしゃいませ！ご注文はお決まりですか？ (Irasshaimase! Gochuumon wa okimari desu ka?)",
      translation: "Welcome! Are you ready to order?",
      prompts: [
        { text: "コーヒーを一つお願いします。", label: "One coffee, please." },
        { text: "おすすめは何ですか？", label: "What do you recommend?" }
      ],
      aiReplies: {
        "default": {
          reply: "かしこまりました！店内でお召し上がりですか？ (Kashikomarimashita! Dennai de omeshiagari desu ka?)",
          translation: "Understood! Will you be having that in the store?",
          prompts: [
            { text: "はい、ここで飲みます。", label: "Yes, I will drink here." },
            { text: "持ち帰りでお願いします。", label: "Takeout, please." }
          ]
        }
      }
    }
  ],
  English: [
    {
      id: "hotel",
      title: "Hotel Check-in",
      aiRole: "Receptionist (Sarah)",
      userRole: "Guest",
      initialMessage: "Good afternoon! Welcome to the Grand Central Hotel. How can I assist you today?",
      translation: "Formal check-in greeting",
      prompts: [
        { text: "Hello! I have a reservation under the name Smith.", label: "Check in with reservation" },
        { text: "Hi, do you have any rooms available for tonight?", label: "Inquire about room availability" }
      ],
      aiReplies: {
        "default": {
          reply: "Certainly! Let me check that for you right away. Could you please show me your ID?",
          translation: "Polite confirmation and request for identification.",
          prompts: [
            { text: "Here is my passport.", label: "Provide identification" }
          ]
        }
      }
    }
  ]
};

function SpeakingPractice() {
  const navigate = useNavigate();

  const [user] = useState(() => {
    try {
      const saved = localStorage.getItem("smartlingualUser");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return { selectedLanguage: "German" };
  });

  const language = user.selectedLanguage && CONVERSATION_SCENARIOS[user.selectedLanguage]
    ? user.selectedLanguage
    : "German";

  const scenario = CONVERSATION_SCENARIOS[language][0];

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: scenario.initialMessage,
      translation: scenario.translation
    }
  ]);

  const [currentPrompts, setCurrentPrompts] = useState(scenario.prompts);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "German" ? "de-DE" : language === "Japanese" ? "ja-JP" : "en-US";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendPrompt = (promptObj) => {
    const userMsg = {
      sender: "user",
      text: promptObj.text,
      translation: promptObj.label
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsSpeaking(true);

    // Speak user phrase for feedback
    speakText(promptObj.text);

    // AI response simulation
    setTimeout(() => {
      const replyData = scenario.aiReplies[promptObj.text] || scenario.aiReplies.default;
      const aiMsg = {
        sender: "ai",
        text: replyData.reply,
        translation: replyData.translation
      };

      setMessages((prev) => [...prev, aiMsg]);
      setCurrentPrompts(replyData.prompts || []);
      setIsSpeaking(false);
      speakText(replyData.reply);
    }, 1200);
  };

  return (
    <div className="practice-page">
      {/* HEADER */}
      <header className="practice-header">
        <div className="practice-brand" onClick={() => navigate("/dashboard")}>
          ✦ Smartlingual <span>AI</span>
        </div>

        <div className="practice-header-right">
          <div className="scenario-badge">
            🎙️ {scenario.title}
          </div>
          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            ← Dashboard
          </button>
        </div>
      </header>

      {/* CHAT CONTAINER */}
      <div className="chat-wrapper">
        <div className="chat-intro">
          <div className="tutor-avatar">✦</div>
          <div>
            <h3>AI Conversation Coach</h3>
            <p>Practice speaking in a simulated real-world conversation.</p>
          </div>
        </div>

        <div className="messages-area">
          {messages.map((m, idx) => (
            <div key={idx} className={`message-row ${m.sender}`}>
              <div className="message-bubble">
                <div className="msg-header">
                  <strong>{m.sender === "ai" ? scenario.aiRole : "You"}</strong>
                  <button
                    className="audio-play-btn"
                    onClick={() => speakText(m.text)}
                    title="Listen"
                  >
                    🔊
                  </button>
                </div>
                <p className="msg-text">{m.text}</p>
                <small className="msg-trans">{m.translation}</small>
              </div>
            </div>
          ))}
          {isSpeaking && (
            <div className="message-row ai">
              <div className="message-bubble typing">
                <span>AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* PROMPT SUGGESTIONS / VOICE INPUT BAR */}
        <div className="chat-input-panel">
          <p className="suggest-hint">💡 Tap a phrase to practice speaking with your AI coach:</p>
          <div className="prompts-grid">
            {currentPrompts.length > 0 ? (
              currentPrompts.map((p, pIdx) => (
                <button
                  key={pIdx}
                  className="prompt-pill"
                  onClick={() => handleSendPrompt(p)}
                >
                  <span className="prompt-foreign">🎙️ "{p.text}"</span>
                  <span className="prompt-english">{p.label}</span>
                </button>
              ))
            ) : (
              <div className="conversation-completed">
                <p>🎉 Excellent practice conversation completed!</p>
                <button
                  className="restart-btn"
                  onClick={() => {
                    setMessages([
                      {
                        sender: "ai",
                        text: scenario.initialMessage,
                        translation: scenario.translation
                      }
                    ]);
                    setCurrentPrompts(scenario.prompts);
                  }}
                >
                  Restart Conversation ↺
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakingPractice;
