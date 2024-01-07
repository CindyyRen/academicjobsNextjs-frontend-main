import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Professor Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Academic professor jobs can cover a wide range of topics and disciplines, depending on the field of specialization and the institution. ',
  keywords: 'Academic professor Jobs. professor positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Professor Jobs
              </h1>
              <p>
              See all available professor job opportunities on AcademicJobs right now from reputable colleges. Our institutions are always looking for the best professors, and through our academic platform, academics may apply for amazing worldwide academic professor jobs.</p>

              <p className='pt-4'>Academic professor jobs are professor of law, professor of computer science, professor of practice, professor of chemistry, professor of engineering, and other professor jobs. Academic professor jobs deliver courses, supervising students and staff, conducting original and impactful research, publishing in academic journals and books, applying for grants and funding, collaborating with other researchers and institutions, engaging with industry and community partners, and contributing to the academic governance and administration.</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "professor" || 0 }} />
      </main>
   
  );
}
