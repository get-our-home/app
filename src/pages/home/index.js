import Header from '../../components/Header';
import Category from './Category';
import Recommendation from './Recommendation';
import MostSearched from './MostSearched';
import Footer from '../../components/Footer';
import SearchBar from './SearchBar';
import { useAuth } from '../../context/AuthContext';

export default function Home() {
  const { isLoggedIn } = useAuth(); // 로그인 상태를 가져옴

  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-shrink-0" />
      <div className="flex-grow">
        <SearchBar />
        <Category />
        {isLoggedIn ? (
          <Recommendation />
        ) : (
          <MostSearched />
        )}
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}
