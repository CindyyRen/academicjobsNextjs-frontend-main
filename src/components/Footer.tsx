import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 px-7 md:mt-4 md:pb-10 bg-[#f4a10c] rounded-b-3xl rounded-t-lg shadow-xl pb-4 border-4 ">
      <hr className="w-ful my-2 bg-white border-0 rounded md:my-2 md:mb-4 dark:bg-gray-700 max-w-screen-xl mx-auto "></hr>
      <div className=" text-white font-open-sans grid grid-cols-1 md:grid-cols-4 gap-8 pb-4 max-w-screen-xl mx-auto pl-2">
        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Recruiters</li>

            <li>
              <a className="footer-nav__link" href="/job-ads">
                Post a Job
              </a>
            </li>
            <li>
              <Link href="/ai-recruitment">AI Recruitment</Link>
            </li>
            <li>
              <Link href="/about">About AJ</Link>
            </li>
            <li>
              <Link href="/recruitment">Recruitment Assistance</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1">Job Seekers</li>
            <li>
              <Link href="/jobs/">Find Jobs</Link>
            </li>
            <li>
              <Link href="/student-jobs-on-campus">Student Jobs on Campus</Link>
            </li>
            <li>
              <Link href="/employers">Find Employers</Link>
            </li>
            <li>
              <Link href="/academic-hub">Academic Hub</Link>
            </li>
            <li>
              <Link href="/academic-talent-pool">Talent Pool</Link>
            </li>
          </ul>
        </div>

        <div className=" text-white font-open-sans">
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Navigation</li>
            {/* <li><a className="footer-nav__link" href="/">Home</a></li> */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>

            {/* <li>
              <Link href="/sitemap">Site Map</Link>
            </li> */}
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Socials</li>
            {/* <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li> */}
            <li>
              <a
                className="footer-nav__link"
                href="https://www.facebook.com/profile.php?id=100088232015128"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                className="footer-nav__link"
                href="https://www.youtube.com/channel/UCIaknpVcM_ZijJSWJCYi8aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/academic-jobs/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
