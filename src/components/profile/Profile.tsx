import { useState } from "react";
import { ContactInfo } from "./ui/ContactInfo";
import { cl } from "../../constants/CurrentLocation";

export default function Profile() {
    const [showMobileInfo, setShowMobileInfo] = useState<boolean>(false);
    const toggleMobileInfo = () => setShowMobileInfo(!showMobileInfo);

    return (
        <div className="lg:sticky lg:top-[100px] lg:w-[272px]" role="complementary" aria-label="프로필 정보">
            <div className="space-y-4 py-2 px-4 max-lg:flex max-lg:justify-between">
                {/* 프로필 이미지 및 이름 */}
                <div className="flex items-center lg:block max-lg:absolute max-lg:left-2 top-20">
                    <img src={`${cl}/img/증명사진ver2.1.jpg`} alt="프로필 사진" 
                        className="w-16 lg:w-44 border p-1 rounded-full z-[10]" 
                    />
                    <h1 className="text-xl font-semibold ml-4 lg:ml-0 lg:mt-4">
                        강다윤 <br className="hidden sm:block max-lg:block" /> (Dayoon Kang)
                    </h1>
                </div>

                {/* 모바일 프로필 정보 토글 버튼 */}
                <div className="lg:hidden max-lg:absolute max-lg:top-20 max-lg:right-2">
                    <button onClick={toggleMobileInfo} 
                        aria-expanded={showMobileInfo}
                        aria-controls="mobile-profile-info"
                        aria-label="프로필 정보 토글"
                        className="px-4 py-1.5 text-sm bg-white border border-gray-300 hover:bg-black 
                            hover:text-white cursor-pointer rounded transition duration-300"
                    >
                        프로필 정보
                    </button>
                    
                    {showMobileInfo && (
                        <div 
                            id="mobile-profile-info"
                            className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg z-10"
                            role="dialog"
                            aria-labelledby="mobile-profile-title"
                        >
                            <div className="p-4 space-y-3">
                                <h2 id="mobile-profile-title" className="sr-only">프로필 상세 정보</h2>
                                <ContactInfo />
                            </div>
                        </div>
                    )}
                </div>

                {/* 데스크톱 프로필 정보 */}
                <div className="hidden lg:block">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}