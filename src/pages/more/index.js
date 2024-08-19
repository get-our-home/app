import { useAuth } from '../../context/AuthContext';
import AccountInfo from './AccountInfo';
import MenuList from './MenuList';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';

export default function MorePage() {
  const { isLoggedIn, logout } = useAuth(); // 로그아웃 함수를 가져옴
  const router = useRouter(); // useRouter 훅 사용

  const handleLogout = () => {
    logout();
    router.push('/'); // 로그아웃 후 홈 화면으로 이동
  };

  const handleLoginRedirect = () => {
    router.push('/login'); // 로그인 페이지로 이동
  };



  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center bg-[rgba(216,234,239,0.39)]">
        {isLoggedIn ? (
          <>
            <AccountInfo />
            <MenuList />
            <button 
              className="w-full max-w-md bg-[#85C3D6] text-white py-2 rounded-lg mt-4" 
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <div className="w-full max-w-md p-4 bg-white shadow rounded-lg mb-6">
              <button 
                className="w-full bg-[#85C3D6] text-white py-2 rounded-lg"
                onClick={handleLoginRedirect} 
              >
                로그인 및 회원가입
              </button>
            </div>
            <MenuList />
          </>
        )}
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}
