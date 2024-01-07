import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Diversity Statement Academic Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover a diverse and inclusive academic job board site committed to equity and accessibility. Explore opportunities that value and embrace diversity.',
  keywords: 'Diversity Statement Academic Jobs, AcademicJobs Diversity Statement',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
              <h1>
                Diversity Statement
              </h1>
              <p>
                AcademicJobs’ purpose is to match the right people to the right
                jobs. We put job seekers and employers at the heart of
                everything we do. We are committed to creating an environment
                where everyone can bring their authentic selves to work and
                allow others to do the same. A diverse mix of minds,
                backgrounds, and experiences, and an inclusive work environment
                leads to excellence. AcademicJobs provides equal opportunities
                to all employees and applicants for employment, without regard
                to race, religion, color, age, sex, national origin, sexual
                orientation, gender identity, genetic disposition,
                neurodiversity, disability, veteran status, or any other
                protected category under federal, state and local law.
              </p>
      </main>
    </>
  );
}
