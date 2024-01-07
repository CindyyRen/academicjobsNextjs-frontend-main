import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Full-Time', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Full-Time Jobs
              </h1>
              <p>
              Are you ready to take the next leap in your career journey? We are actively seeking a dedicated and passionate professional to join our dynamic team in a full-time role. As a key player in our organization, you will have the opportunity to contribute your expertise and make a significant impact. If you thrive in a collaborative environment, possess a strong work ethic, and are eager to take on new challenges, we invite you to apply. This is more than just a job – it's a chance to grow and excel in a supportive and innovative workplace. Join us on this exciting journey and let's build a successful future together. Your next career adventure awaits – apply now!</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "full time" || 0 }} />
      </main>
   
  );
}
