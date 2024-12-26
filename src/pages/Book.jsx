/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Book ({clickedBack}) {
    
    const [language, setLanguage] = useState("");

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);

        if (selectedLanguage){
            const fileUrls = {
                English: "https://drive.google.com/uc?export=download&id=1p8m5BIoYA8sn7R-PERpgyFJ4k_tCYO4T",
                Spanish: "https://drive.google.com/uc?export=download&id=1nMf3-S6hOtK1qbtzOlt0IwrqvJglPv0q",
                Tagalog: "https://drive.google.com/uc?export=download&id=1e8dHU3ZeFddWBP3XbTzqzcaF7a7B3PLl",
                Chinese: "https://drive.google.com/uc?export=download&id=1uauZa2VUKZ3u9mpzKujovyr-I_bcU4G3",
                Japanese: "https://drive.google.com/uc?export=download&id=1bJ10Z1oWHyA0j8oqF0iaWr9F_Xq0pRQl",
                French: "https://drive.google.com/uc?export=download&id=17cb_EQR3YScDx0zKhJgaBpATpoeUv6K_",
                German: "https://drive.google.com/uc?export=download&id=1tbb6uYmJejhhZNC0m_DkmXo1TwNq-rup",
                Italian: "https://drive.google.com/uc?export=download&id=1jpwhnysFFuaAgCPZx5C6OpeT-x2RePFl",
                Portuguese: "https://drive.google.com/uc?export=download&id=1lsAhtuMJcUfHHbDSi8cgBbvWR4M5L-pQ",
                Romanian: "https://drive.google.com/uc?export=download&id=1F7ca-71e7n_3WhCXsl-oN0RYzypvCCSN",
                Russian: "https://drive.google.com/uc?export=download&id=16bptoq3mmt8N-gI2yqU9LETEarKfiVlV",
            };
            const url = fileUrls[selectedLanguage];
            if (url){
                const link = document.createElement("a");
                link.href = url;
                link.download = `${selectedLanguage}-SC.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        };

    };

    const BookHeader = () => {
    return (
        <div className="relative bg-gradient-to-r rounded from-purple-700 to-indigo-800 px-8 py-12 text-center">
        <div className="absolute inset-0 bg-landscape-bg opacity-20 bg-cover bg-center" />
        <div className="relative">
            <h2 className="text-4xl font-bold text-white">The book of Hope</h2>
            <p className="text-white/80 mt-2 text-lg">A Journey of hope and salvation</p>
        </div>
        </div>
    );
    };

    const BookDescription = () => {
        return(
            <div className="bg-purple-50 rounded-xl p-6 mb-8 border border-purple-100">
                <p className="text-gray-700 text-2xl leading-relaxed">
                    The following book leads those looking meaning in life to discover it in <span className="text-red-600">Jesus Christ </span>
                    and, step by step, to find forgiveness, confidence, security and real joy.
                </p>
                <p className="text-gray-700 text-2xl leading-relaxed">
                    It shows <span className="text-red-600">Christ</span> as the way to lasting peace.
                </p>
            </div>
        );
    };
    
    
    return(
    <div className="z-50 inset-0 fixed min-h-screen overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 py-0 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-2xl rounded-2xl border border-gray-100">
                <BookHeader/>
            <div className="p-0 lg:p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                <BookDescription/>
                </div>
                
                <div className="text-xl bg-stone-200 p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-inner mt-6">
                    <p className="text-xl mb-4 font-medium">Download the book in PDF in the language that you may prefer:</p>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="block w-full lg:w-1/2 bg-white border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    >
                        <option value="">Select a language</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Tagalog">Tagalog</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                    </select>
            </div>
                <div className="mt-2">
                    <button 
                        className="bg-purple-600 p-2 text-white rounded text-lg"
                        onClick={clickedBack}
                    >
                        Back to message
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};