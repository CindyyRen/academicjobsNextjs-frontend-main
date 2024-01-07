import type { Metadata } from 'next';
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
              Academic Lecturer Jobs
              </h1>
              <p>
              Find all jobs for lecturers from top ranking universities on AcademicJobs today. Our universities are looking for the best lecturers, and our academic jobs platform allows lecturers to seek great careers in lecturing around the world.</p>

              <p className='pt-4'>Lecturers can find university jobs online, compare competitive salaries, generous benefits, and supportive work environments.</p>

              <p className='pt-4'>Sign up as a ‘Global Academic’ to get an academic ranking, and to get the opportunity to collaborate with national and international partners, to work with some of the best minds in your discipline, and access world-class facilities and resources.</p>
             

             <JobSearchBox/>
              <SearchResults q={{ q: "lecturer" || 0 }} />
      </main>
   
  );
}
