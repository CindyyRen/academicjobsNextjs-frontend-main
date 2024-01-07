import type { Metadata } from 'next';
import Link from 'next/link';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Lecturer Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Research Jobs
              </h1>
              <p>
              Browse all Research positions from well regarded universities right now on AcademicJobs. The top researchers are sought after by our universities, and academics may pursue fantastic global academic researcher jobs through our academic job platform.</p>

              <p className='pt-4'>Academic Researcher jobs create original and innovative research in their fields of interest, often as part of a larger project or team. Academic Researchers typically have a PhD or equivalent qualification, as well as relevant skills and experience in data analysis, methodology, and communication. Academic Researcher jobs may also be involved in teaching, supervision, and outreach activities, depending on their role and contract type.</p>

              <Link href="/research/faq" className='pt-4 text-sky-500'>View Research Jobs FAQ</Link>

              <JobSearchBox/>
              <SearchResults q={{ q: "research" || 0 }} />
             
      </main>
   
  );
}
