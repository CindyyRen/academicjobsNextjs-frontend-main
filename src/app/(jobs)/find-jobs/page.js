'use client'
//import JobsForm from '@/components/JobsForm';
import SearchResults from '@/components/SearchResults';
import { useSearchParams } from 'next/navigation'
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';
//import { useRouter } from 'next/router';
//import { useRouter } from 'next/navigation';
// export const metadata = {
//   title: 'find-jobs',
//   description:
//     'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
//   keywords: [
//     'Academic Jobs',
//     'Higher Ed Jobs',
//     'Academic positions',
//     'University Jobs',
//     'College Jobs',
//   ],
// };
export default function Page() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const l = searchParams.get('l')
  //const router = useRouter();
  console.log("router.query", searchParams)
  //const { q, l } = router.query;
  return (
    <div className=" w-full">
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <JobSearchBox />
          </div>
             {/* Employment Cat Container */}
          <div className="mt-[1rem] ">
            <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 px-2">
              <li className="hover:underline">
                <Link href="/lecturer">Lecturer{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/research/">Research{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/professor/">Professor{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/executive/">Executive{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/faculty/">Faculty{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/admin/">Admin{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/hr-jobs/">HR{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/student/">Student{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/graduate/"> Graduate{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/postdoc/"> Postdoc{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/phd/">PhD</Link>
              </li>
            </ul>
          </div>

          {/* Employment Type Container */}
          <div className="mt-7">

            <ul className="faculty-container flex gap-4 items-center justify-center text-[#f4a10c] px-2">
              <li className="hover:underline">
                <Link href="/online/">Online{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/remote/">Remote{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/full-time/">Full-Time{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/part-time/">Part-Time{"  "}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/casual/">Casual</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <SearchResults q={{ q, l }} />
    </div>
  );
}
