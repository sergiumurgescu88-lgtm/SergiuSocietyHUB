import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#05070f] text-white p-4">
      <h1 className="text-6xl font-display font-black mb-4">404</h1>
      <p className="text-[#6b7299] text-xl mb-8">Page not found</p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
