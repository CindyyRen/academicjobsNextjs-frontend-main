import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Graduate Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Looking for a flexible and rewarding job ? Browse hundreds of graduate jobs in various roles and departments at your university. Apply today and gain valuable work experience and skills.',
  keywords: 'Graduate Jobs , Graduate academic Jobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Graduate Jobs
              </h1>
              <p>
              All graduate job openings from the top universities are available on our site. Apply on our website for amazing graduate roles worldwide, since our academic institutions are always looking for the best graduate jobs.</p>

              <p className='pt-4'>Graduate jobs are temporary or part-time positions in a variety of departments and functions in a university or research institute. These positions give graduates the chance to improve their academic and social networks, earn money, obtain useful work experience, and develop employability skills. Graduate positions can be found in a variety of fields, such as research, teaching, administration, customer service, events, marketing, IT, and libraries. You can locate graduate programs, part-time and casual work, and unique internship possibilities in Australia and throughout the world if you're interested in seeking graduate jobs. You can obtain important work experience and abilities that will benefit you in your future career by applying for these opportunities.</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "graduate" || 0 }} />
      </main>
   
  );
}
