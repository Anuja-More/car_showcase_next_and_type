import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to the home page
      </Link>
    </div>
  );
};

export default Custom404;