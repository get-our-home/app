import { useState } from 'react';
import Header from '../../components/Header';
import Category from './Category';
import Recommendation from './Recommendation';
import MostSearched from './MostSearched';  // MostSearched 컴포넌트 임포트
import Footer from '../../components/Footer';
import SearchBar from './SearchBar';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-shrink-0" />
      <div className="flex-grow">
        <SearchBar />
        <Category />
        {isLoggedIn ? (
          <Recommendation />
        ) : (
          <MostSearched />  // MostSearched 컴포넌트 사용
        )}
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}
