import React, { useState } from "react";

export default function Profile() {
    const [showMobileInfo, setShowMobileInfo] = useState(false);

    const toggleMobileInfo = () => {
        setShowMobileInfo(!showMobileInfo);
    };

    return (
        <div className="w-full md:w-60 md:fixed md:top-20">
            <div className="space-y-4">
                <div className="flex items-center md:block">
                    <img src="https://dayoon07.github.io/img/증명사진.jpg" alt="프로필 사진" className="w-16 sm:w-20 md:w-28 lg:w-40 rounded-full" />
                    <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">
                        강다윤 <br className="hidden sm:block" /> (Dayoon Kang)
                    </h3>
                </div>
                
                <div className="md:hidden absolute right-4 top-20">
                    <button onClick={toggleMobileInfo} 
                        className="px-4 py-1 bg-white border border-gray-400 hover:bg-gray-800 hover:text-white cursor-pointer rounded transition duration-300"
                    >
                        프로필 정보
                    </button>
                    
                    {showMobileInfo && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg z-10">
                            <div className="p-4 space-y-3">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 12 22 12 22C12 22 19 13.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"/>
                                    </svg>
                                    <p>경기도 안양시</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 3L1 9L12 15L23 9L12 3ZM4.12 10.5L12 14.78L19.88 10.5L12 6.22L4.12 10.5ZM5 13V17H19V13L12 17L5 13Z"/>
                                    </svg>
                                    <p>근명고등학교</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM20 6L12 11L4 6V6.01L12 11.99L20 6.01V6Z"/>
                                    </svg>
                                    <a href="mailto:dayoon071022@gmail.com" className="hover:underline">dayoon071022@gmail.com</a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.697 3.438 22.097 8.205 23.697C8.805 23.797 9.025 23.447 9.025 23.147C9.025 22.897 9.015 22.297 9.01 21.447C5.672 22.097 4.968 19.847 4.968 19.847C4.422 18.397 3.633 18.047 3.633 18.047C2.546 17.347 3.717 17.362 3.717 17.362C4.922 17.447 5.555 18.602 5.555 18.602C6.633 20.497 8.422 19.997 9.148 19.697C9.248 18.922 9.547 18.397 9.88 18.097C7.203 17.797 4.39 16.747 4.39 11.947C4.39 10.597 4.873 9.497 5.673 8.647C5.548 8.347 5.123 7.047 5.793 5.347C5.793 5.347 6.823 5.022 9.01 6.377C9.987 6.107 11.037 5.972 12.087 5.967C13.137 5.972 14.187 6.107 15.165 6.377C17.352 5.022 18.381 5.347 18.381 5.347C19.052 7.047 18.627 8.347 18.502 8.647C19.302 9.497 19.785 10.597 19.785 11.947C19.785 16.757 16.965 17.792 14.28 18.087C14.697 18.447 15.065 19.197 15.065 20.347C15.065 21.947 15.05 22.872 15.05 23.147C15.05 23.447 15.27 23.802 15.875 23.697C20.64 22.097 24.075 17.697 24.075 12.297C24.075 5.67 18.703 0.297 12 0.297Z"/>
                                    </svg>
                                    <a href="https://github.com/dayoon07" className="hover:underline">dayoon07</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-2 hidden md:block">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 12 22 12 22C12 22 19 13.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"/>
                        </svg>
                        <p>경기도 안양시</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3L1 9L12 15L23 9L12 3ZM4.12 10.5L12 14.78L19.88 10.5L12 6.22L4.12 10.5ZM5 13V17H19V13L12 17L5 13Z"/>
                        </svg>
                        <p>근명고등학교</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM20 6L12 11L4 6V6.01L12 11.99L20 6.01V6Z"/>
                        </svg>
                        <a href="mailto:gangd0642@gmail.com" className="hover:underline">
                            gangd0642@<br className="lg:hidden" />gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.697 3.438 22.097 8.205 23.697C8.805 23.797 9.025 23.447 9.025 23.147C9.025 22.897 9.015 22.297 9.01 21.447C5.672 22.097 4.968 19.847 4.968 19.847C4.422 18.397 3.633 18.047 3.633 18.047C2.546 17.347 3.717 17.362 3.717 17.362C4.922 17.447 5.555 18.602 5.555 18.602C6.633 20.497 8.422 19.997 9.148 19.697C9.248 18.922 9.547 18.397 9.88 18.097C7.203 17.797 4.39 16.747 4.39 11.947C4.39 10.597 4.873 9.497 5.673 8.647C5.548 8.347 5.123 7.047 5.793 5.347C5.793 5.347 6.823 5.022 9.01 6.377C9.987 6.107 11.037 5.972 12.087 5.967C13.137 5.972 14.187 6.107 15.165 6.377C17.352 5.022 18.381 5.347 18.381 5.347C19.052 7.047 18.627 8.347 18.502 8.647C19.302 9.497 19.785 10.597 19.785 11.947C19.785 16.757 16.965 17.792 14.28 18.087C14.697 18.447 15.065 19.197 15.065 20.347C15.065 21.947 15.05 22.872 15.05 23.147C15.05 23.447 15.27 23.802 15.875 23.697C20.64 22.097 24.075 17.697 24.075 12.297C24.075 5.67 18.703 0.297 12 0.297Z"/>
                        </svg>
                        <a href="https://github.com/dayoon07" target="_blank" className="hover:underline">dayoon07</a>
                    </div>
                </div>
            </div>
        </div>
    );
}