'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { countryMappings, countryMappings1 } from '@/lib/data/data';
export default function JobSearchBox() {
  const keyWordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  let region = 'Australia';
  const { setRegion, setSearchJobCriteria } = useStore();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const a: { q?: string; l?: string } = {};
    if (keyWordRef.current && keyWordRef.current.value.trim()) {
      a.q = keyWordRef.current.value.trim();
    }
    if (region !== 'Global') {
      const location = (countryMappings1 as any)[region]?.searchLocation || '';
      const params = new URLSearchParams({
        l: encodeURIComponent(location),
        q: encodeURIComponent(a.q || ''),
      });
      router.push(`/find-jobs?${params.toString()}`);
    } else {
      try {
        const response = await fetch(
          'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
        );
        const result = await response.json();
        const country = result.country.name;
        setRegion((countryMappings1 as any)[country.toLowerCase()]);
        const qValue = a.q || '';
        const lValue = (countryMappings1 as any)[
          (countryMappings as any)[country.toLowerCase()]
        ]?.searchLocation;
        router.push(`/find-jobs?q=${qValue}&l=${lValue}`);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  return (
    <form
      className="flex flex-col gap-1 items-center md:items-end w-full"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 mx-18 w-full mt-5 md:border rounded-lg p-2 md:shadow-md">
        <input
          type="text"
          className="flex-grow px-4 py-2 focus:outline-none border rounded-lg shadow-md md:border-none md:shadow-none text-base bg-white"
          placeholder="Jobs Search"
          ref={keyWordRef}
        />
        <button
          className="px-4 py-2 bg-[#f4a10c] text-white rounded-md hover:bg-orange-600 animate-pulse font-bold shadow-md"
          type="submit"
        >
          》Search In Your Country
        </button>
      </div>
      <h2
        className=" text-[#f4a10c] text-base pr-6"
        onClick={async (event: React.FormEvent) => {
          event.preventDefault();
          const a: { q?: string; l?: string } = {};
          if (keyWordRef.current && keyWordRef.current.value.trim()) {
            a.q = keyWordRef.current.value.trim();
          }
          setRegion('Global');
          const params = new URLSearchParams({
            l: '',
            q: encodeURIComponent(a.q || ''),
          });
          router.push(`/find-jobs?${params.toString()}`);
        }}
      >
        Or Search Globally
      </h2>
    </form>
  );
}
