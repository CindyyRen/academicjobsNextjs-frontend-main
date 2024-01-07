import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Post Doc Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'In Post Doc, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission.  ',
  keywords: 'Academic Postdoc Jobs, Postdoc AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Postdoc Jobs
              </h1>
              <p>
              View all of the Post Doc jobs that respectable universities now have available on AcademicJobs. Our academic institutions are constantly seeking the greatest Post Docs, and academics may apply for fantastic global academic Post Doc positions through our website.</p>

              
              <JobSearchBox/>
              <SearchResults q={{ q: "postdoc" || 0 }} />
      </main>
   
  );
}
