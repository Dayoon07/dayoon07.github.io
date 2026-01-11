/** 로딩 스피너 컴포넌트 */
export default function LoadingSpinner({ message = "로딩 중..." }: { message: string }) {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="text-gray-600 text-lg font-medium">{message}</p>
            </div>
        </div>
    );
}