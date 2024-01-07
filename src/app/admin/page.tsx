import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Academic Admin and Support Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'As an academic admin and support job, you will have the opportunity to work with diverse and talented people, contribute to the academic excellence and innovation of your institution.  ',
  keywords: 'Academic Admin and Support Jobs, Admin and Support AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Admin and Support Jobs
              </h1>
              <p>
              We have posts of all admin positions from the best institutions. Our academic institutions are constantly seeking the greatest admin staff, so apply on our website for incredible admin positions across the world.</p>

              <p className='pt-4'>Academic Admin and support Jobs will need to have a diploma or higher qualification in business administration or a related field, as well as relevant work experience in academic administration and support. Academic Admin and support Jobs will also need to have excellent communication, interpersonal, organizational, and problem-solving skills. Academic Admin and support Jobs need to be familiar with the policies and procedures of the higher education sector, as well as the applicable laws and regulations.</p>

              <JobSearchBox/>
              <SearchResults q={{ q: "admin" || 0 }} />
      </main>
   
  );
}
