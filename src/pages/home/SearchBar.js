import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/search');  // 검색 결과 페이지로 이동
  };

  return (
    <div className="px-4 mt-4 flex justify-end">
      <div 
        className="border border-black py-1 px-4 w-[200px] text-center cursor-pointer flex items-center justify-center"
        onClick={handleSearchClick}
      >
        <p className="text-gray-500 text-sm">어떤 매물을 찾으시나요?</p>
      </div>
    </div>
  );
}
