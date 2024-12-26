import Book from "./Book";
import { useState } from "react";

export default function LandingPage () {

    const [bookVisibility, setBookVisibility] = useState(false);

    const Message = () => {
        
        const MessageHeader = ()=> {
            return(
            <div className="space-y-4 mb-12">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fade-in tracking-tight">
                    &quot;For God so loved the world...&quot;
                </h1>
                <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
            </div>
            );
        }

        const MessageContent = () => {
            return(
                <p className="text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                    John 3:16 - For God so loved the world that he gave his one and only Son (Jesus), 
                    that whoever believes in him shall not perish but have eternal life.
                </p>
            )
        };

        // eslint-disable-next-line react/prop-types
        const GiftButton = ({onClick}) => {
            return(
                <button
                    onClick={onClick}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 
                    text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2
                    hover:bg-white hover:text-purple-900 transition-all duration-300 transform
                    hover:scale-105"
                >
                    We have a special gift for you. Click here!
                </button>
            );
        };
        
        return(
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
            <div className="absolute font-bold bg-cross-bg inset-0 bg-cover opacity-20"/>
            <div className="relative flex items-center justify-center min-h-screen">
                <div className="text-center p-8 max-w-3xl mx-auto">
                    <MessageHeader/>
                    <MessageContent/>
                    <GiftButton onClick={() => {
                        console.log("Toggling visibility");
                        setBookVisibility((p) => !p);
                        }} 
                    />
                </div>
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