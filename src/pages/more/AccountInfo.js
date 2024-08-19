import { useRouter } from 'next/router';

export default function AccountInfo() {
  const router = useRouter(); 

  const handleMyReviews = () => {
    router.push('/my-reviews'); 
  };

  const handleChat = () => {
    router.push('/my-chats'); 
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow rounded-lg mb-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full flex justify-center items-center mr-4">
          <img
            src="/icons/default-user.png"
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">계정 정보</div>
          <div className="text-sm text-gray-600">ID: your_id</div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button 
          className="flex items-center p-2 border rounded-lg"
          onClick={handleMyReviews} 
        >
          <img
            src="/icons/review_icon.png"
            alt="Review Icon"
            width={16}
            height={16}
            className="mr-1"
          />
          내가 쓴 후기
        </button>
        <button 
          className="flex items-center p-2 border rounded-lg"
          onClick={handleChat} 
        >
          <img
            src="/icons/chat_icon.png"
            alt="Chat Icon"
            width={16}
            height={16}
            className="mr-1"
          />
          상담 chat
        </button>
      </div>
    </div>
  );
}
