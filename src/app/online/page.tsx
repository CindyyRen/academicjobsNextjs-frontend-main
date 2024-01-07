import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Executive Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Executive Jobs
              </h1>
              <p>
              Explore all higher education opportunities through academic jobs online, whether your a student, graduate, or professional. Beyond the prospect of earning income, these roles offer a unique avenue to delve into the complexities of higher education settings. Engaging in academic online jobs, particularly in higher education, involves a spectrum of roles—from teaching and research to administration, customer service, events management, marketing, IT, and library curation.</p>

              <p className='pt-4'>Participants not only improve their employability skills but also cultivate a deep connection with the academic community, creating a comprehensive and rewarding experience. Through higher ed jobs online, individuals can actively contribute to the advancement of knowledge, the cultivation of learning environments, and the overall growth of the academic landscape while simultaneously expanding their professional horizons.</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "online" || 0 }} />
      </main>
   
  );
}
