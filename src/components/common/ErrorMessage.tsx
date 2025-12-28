/** 에러 메시지 컴포넌트 */
export default function ErrorMessage({ 
    error, onRetry
}: { error: any, onRetry: (p?: any) => any }) {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <div className="text-center">
                    <p className="text-red-600 text-lg font-medium mb-2">
                        데이터를 불러오는데 실패했습니다
                    </p>
                    {error && (
                        <p className="text-gray-500 text-sm mb-4">{error}</p>
                    )}
                    {onRetry && (
                        <button 
                            onClick={onRetry}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            다시 시도
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}