import Image from 'next/image';

export default function Loading() {
  const loadingSvg = (
    <svg className="h-10 w-10 animate-spin stroke-black" viewBox="0 0 256 256">
      <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
      <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line> {/* вот здесь была правка */}
    </svg>
  );

  return (
    <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
      {loadingSvg}
      <span className="text-2xl font-medium text-black">Loading...</span>
    </div>
  );
}
