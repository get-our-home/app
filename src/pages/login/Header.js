import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full max-w-md flex flex-col items-start mb-4">
      <h1 className="text-3xl font-bold text-center w-full">Login</h1>
      <Link href="/" className="text-2xl text-black mb-2 ml-6"> 
        ←
      </Link>
    </div>
  );
}
