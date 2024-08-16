import Link from 'next/link';

export default function Header({ title }) {
  return (
    <div className="flex items-center mb-6">
      <Link href="/" className="mr-4 text-xl">
        ←
      </Link>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}
