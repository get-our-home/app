import Link from 'next/link';

export default function MenuItem({ title, link }) {
  return (
    <Link href={link} className="block p-4 text-center bg-white rounded-lg shadow">
      {title}
    </Link>
  );
}
