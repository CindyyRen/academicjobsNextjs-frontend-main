import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Academic part-time Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic part-time Jobs
              </h1>
              <p>
             From part-time positions to vibrant on-site roles, we've curated diverse part-time opportunities just for you. </p>

              <JobSearchBox/>
              <SearchResults q={{ q: "part time" || 0 }} />
      </main>
   
  );
}
