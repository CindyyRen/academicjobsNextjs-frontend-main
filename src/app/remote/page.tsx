import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Remote Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Remote Jobs
              </h1>
              <p>
              Step into the future of work with our remote job platform, breaking free from the 9-to-5 routine. Whether you're a seasoned professional or a newcomer, explore tailored opportunities across diverse industries. Escape the confines of a physical office and unlock the potential of working from your own space, reshaping your work-life balance. Discover flexibility to align your professional pursuits with your lifestyle choices. Find the ideal remote job transcending geographical boundaries. Join us in embracing a future where your workspace is as flexible as your ambitions. Redefine your career through our comprehensive remote job platform, unleashing boundless possibilities wherever you choose your path to be.</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "remote" || 0 }} />
      </main>
   
  );
}
