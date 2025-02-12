/* eslint-disable react/prop-types */
import Book from "./Book";
import { useState, useEffect,useMemo, useRef } from "react";

export default function LandingPage () {

    const messages = useMemo(
        () => [
            {
                header: "...Weeping may endure for a night, But joy comes in the morning...",
                verse: "Psalms 30:5",
                message:
                    "Even if you feel sad today, trust: God has a dawn full of hope for you. Don't give up.",
            },
            {
            header:
                "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
            verse: "Isaiah 41:10",
            message:
                "Remember that you are never alone. God walks with you every step you take.",
            },
            {
            header:
                "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
            verse: "Jeremiah 29:11",
            message:
                "Trust in God's plans. He always wants the best for you. Commit your path to God each day.",
            },
        ],
        [] 
        );

    const [bookVisibility, setBookVisibility] = useState(false);

    const initialIndex = useRef(Math.floor(Math.random() * messages.length));

    const [messageToShow, setMessageToShow] = useState(messages[initialIndex.current]);

    useEffect(() => {
        let index = initialIndex.current; 

        const intervalId = setInterval(() => {
            setMessageToShow(messages[index]); 
            index = (index + 1) % messages.length; 
        }, 60000);

        return () => clearInterval(intervalId); 
    }, [messages]);


    const highlightWords = (text, wordsToHighlight) => {
        const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
        return text.split(regex).map((part, index) =>
        wordsToHighlight.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
            <span key={index} className="text-yellow-300 font-bold">
            {part}
            </span>
        ) : (
            part
        )
        );
    };

    const Message = () => {
        
        const MessageHeader = ({header})=> {
            const importantWords = ["fear","Lord","joy", "dismayed", "God", "help", "righteous", "I am", "peace","future","hope"];
            return(
            <div className="space-y-4 mb-5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in tracking-tight">
                    {highlightWords(header, importantWords)}
                </h1>
                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
            </div>
            );
        }

        const MessageContent = ({message}) => {
            const importantWords = ["trust", "best","God","hope", "never", "alone","path", "remember"];
            return(
                <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                    {highlightWords(message, importantWords)}
                </p>
            )
        };

        const MessageVerse = ({ verse }) => (
            <p className="text-xl md:text-2xl font-bold text-white my-4">
                {verse}
            </p>
        );
        // eslint-disable-next-line react/prop-types
        const GiftButton = ({onClick}) => {
            return(
                <button
                    onClick={onClick}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 
                    text-slate-200 text-xl font-bold px-8 py-4 rounded-full inline-flex items-center gap-2
                    hover:bg-white hover:text-purple-900 transition-all duration-300 transform
                    hover:scale-105"
                >
                    We have a special gift for you. Click here!
                </button>
            );
        };
        
        return(
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
            <div className="absolute font-bold bg-cross-bg bg-cover bg-center inset-0 opacity-20"/>
            <div className="relative flex items-center justify-center min-h-screen">
                <div className="text-center p-8 max-w-3xl mx-auto">
                    <MessageHeader header={messageToShow.header}/>
                    <MessageVerse verse={messageToShow.verse}/>
                    <MessageContent message={messageToShow.message}/>
                    <GiftButton onClick={() => {
                        setBookVisibility((p) => !p);
                        }} 
                    />
                </div>
                <a
                    href="https://wa.me/+35677590460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg absolute right-2 bottom-2 flex items-center space-x-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M12 2a10 10 0 0 1 8.17 15.79l.02.02-.8.23a.5.5 0 0 1-.65-.65l.23-.8A10 10 0 1 1 12 2zm0 1a9 9 0 0 0-7.45 14.07l.23.8a.5.5 0 0 0 .65.65l.8-.23A9 9 0 1 0 12 3zm-1.5 4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <span>Would you like to study the Bible?</span>
                </a>
            </div>
        </div>
        )
    };

    return(
        <>
        <Message/>
        {bookVisibility && (
            <div>
                <Book
                    clickedBack={()=>setBookVisibility((p)=>!p)}
                />
            </div>
        )}
        </>
    )
}