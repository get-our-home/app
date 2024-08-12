import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 flex justify-around items-center border-t">
      <Link href="/home" className="flex flex-col items-center">
        <img src="/icons/home.png" alt="홈" className="w-6 h-6"/>
        <span className="text-xs mt-1">홈</span>
      </Link>
      <Link href="/favorites" className="flex flex-col items-center">
        <img src="/icons/heart.png" alt="관심목록" className="w-6 h-6"/>
        <span className="text-xs mt-1">관심목록</span>
      </Link>
      <Link href="/map" className="flex flex-col items-center">
        <img src="/icons/map.png" alt="지도" className="w-6 h-6"/>
        <span className="text-xs mt-1">지도</span>
      </Link>
      <Link href="/more" className="flex flex-col items-center">
        <img src="/icons/more.png" alt="더보기" className="w-6 h-6"/>
        <span className="text-xs mt-1">더보기</span>
      </Link>
    </footer>
  );
}
