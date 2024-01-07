import Image from 'next/image';

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worlds Best AI Recruitment Platform', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Academic Jobs is the leading AI Recruitment Platform specializing in helping Higher Education Institutions, Research & Development (R&D) Industries, and many other sectors find candidates with our specialized AI tools that significantly enhance the job posting process..',
  keywords: 'AI Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <main>
      {/* Hero banner */}
      <div className="hero max-h-fit bg-slate-200 py-8">
        <div className=" mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src="/ai-recruitment/hero-img-2.jpg"
              width={1280}
              height={380}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="AI Powered Recruitment Platform"
            />
            <div>
              <h1 className="text-4xl font-bold text-aj">
                No. 1 AI Recruitment Platform for Academic Jobs & Higher
                Education Positions
              </h1>
              <p className="py-6">
                Academic Jobs is the leading AI Recruitment Platform
                specializing in helping Higher Education Institutions, Research
                & Development (R&D) Industries, and many other sectors find the
                right candidate for the job.
              </p>
              <Link className="btn btn-aj" href="/ai-recruitment/ai-job-posting-optimization">
                Learn more about AI
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-center">
          Revolutionize &amp; Automate Your Recruitment Process with
          AI-Driven&nbsp;Solutions
        </h2>
        <p className="text-center mt-4 max-w-xl mx-auto">
          Our suite of specialized AI tools can significantly enhance both the
          job posting process and the job search experience.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z"
                  />
                </svg>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Data-Informed Keyword Optimization</h2>
              <p>
                Maximize your job listings visibility with our AI-driven Keyword
                Optimization. We analyze market trends to pinpoint effective
                keywords, ensuring your postings rank higher and reach the ideal
                candidates efficiently.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="#EA596E"
                    d="M29.896 26.667c.003.283-.07.653-.146.958c-.531 2.145-2.889 4.552-6.208 4.333c-3.008-.198-5.458-1.642-5.458-3.667s2.444-3.667 5.458-3.667s6.335.018 6.354 2.043z"
                  />
                  <path
                    fill="#DD2E44"
                    d="M23.542 24.964c-1.619 0-5.314.448-6.162.448c-1.498 0-2.713.94-2.713 2.1c0 .558.286 1.062.744 1.438c0 0 1.006 1.009 2.818.525c.793-.212 2.083-1.786 4.354-2.036c1.131-.125 3.25.75 6.974.771c.16-.344.193-.583.193-.583c0-2.027-3.194-2.663-6.208-2.663z"
                  />
                  <path
                    fill="#F4ABBA"
                    d="M29.75 27.625s2.184-.443 3.542-2.229c1.583-2.083 1.375-4.312 1.375-4.312c1.604-3-.5-5.813-.5-5.813C33.958 12.104 32 10.792 32 10.792c-1.271-3.021-4.083-3.833-4.083-3.833c-2.208-2.583-6.125-2.5-6.125-2.5s-3.67-1.345-8.708.167c-.833.25-3.625.833-5.667 2.083C.981 10.649.494 16.793.584 17.792C1.083 23.375 5 24.375 7.5 24.958c.583 1.583 2.729 4.5 6.583 3.417c4.75-.833 6.75-2.25 7.917-2.25s4.417 1.25 7.75 1.5z"
                  />
                  <g fill="#EA596E">
                    <path d="M17.737 18.648c2.328-1.255 3.59-1.138 4.704-1.037c.354.032.689.057 1.028.055c1.984-.045 3.591-.881 4.302-1.69a.501.501 0 0 0-.752-.661c-.548.624-1.899 1.313-3.573 1.351c-.3.009-.601-.021-.913-.05c-1.195-.111-2.679-.247-5.271 1.152c-.665.359-1.577.492-2.565.592c-2.197-3.171-.875-5.933-.497-6.591c.037.002.073.014.111.014c.4 0 .802-.098 1.166-.304a.5.5 0 0 0-.492-.87a1.426 1.426 0 0 1-1.88-.467a.5.5 0 0 0-.841.539c.237.371.571.65.948.837c-.521 1.058-1.51 3.84.372 6.951c-1.324.13-2.65.317-3.688.986a7.182 7.182 0 0 0-1.878 1.791c-.629-.108-2.932-.675-3.334-3.231c.25-.194.452-.45.577-.766a.5.5 0 1 0-.93-.368a.772.772 0 0 1-.454.461a.777.777 0 0 1-.643-.07a.5.5 0 0 0-.486.874c.284.158.588.238.89.238c.037 0 .072-.017.109-.019c.476 2.413 2.383 3.473 3.732 3.794a3.69 3.69 0 0 0-.331 1.192a.5.5 0 0 0 .454.542l.045.002a.5.5 0 0 0 .498-.456c.108-1.213 1.265-2.48 2.293-3.145c.964-.621 2.375-.752 3.741-.879c1.325-.121 2.577-.237 3.558-.767zm12.866-1.504a.5.5 0 0 0 .878.48c.019-.034 1.842-3.449-1.571-5.744a.5.5 0 0 0-.558.83c2.644 1.778 1.309 4.326 1.251 4.434zM9.876 9.07a.497.497 0 0 0 .406-.208c1.45-2.017 3.458-1.327 3.543-1.295a.5.5 0 0 0 .345-.938c-.96-.356-3.177-.468-4.7 1.65a.5.5 0 0 0 .406.791zm13.072-1.888c2.225-.181 3.237 1.432 3.283 1.508a.5.5 0 0 0 .863-.507c-.054-.091-1.34-2.218-4.224-1.998a.5.5 0 0 0 .078.997zm9.15 14.611c-.246-.014-.517.181-.539.457c-.002.018-.161 1.719-1.91 2.294a.499.499 0 0 0 .157.975a.499.499 0 0 0 .156-.025c2.372-.778 2.586-3.064 2.594-3.161a.502.502 0 0 0-.458-.54z" />
                    <path d="M7.347 16.934a.5.5 0 1 0 .965.26a1.423 1.423 0 0 1 1.652-1.014a.5.5 0 0 0 .205-.979a2.354 2.354 0 0 0-1.248.086c-1.166-1.994-.939-3.96-.936-3.981a.502.502 0 0 0-.429-.562a.503.503 0 0 0-.562.427c-.013.097-.28 2.316 1.063 4.614a2.376 2.376 0 0 0-.71 1.149zm11.179-2.47a1.069 1.069 0 0 1 1.455.015a.502.502 0 0 0 .707-.011a.5.5 0 0 0-.01-.707a2.004 2.004 0 0 0-.797-.465c.296-1.016.179-1.467-.096-2.312a20.6 20.6 0 0 1-.157-.498l-.03-.1c-.364-1.208-.605-2.005.087-3.13a.5.5 0 0 0-.852-.524c-.928 1.508-.587 2.637-.192 3.944l.03.1c.059.194.113.364.163.517c.247.761.322 1.016.02 1.936a2.022 2.022 0 0 0-1.01.504a.5.5 0 0 0 .682.731zm6.365-2.985a2 2 0 0 0 .859-.191a.5.5 0 0 0-.426-.905a1.072 1.072 0 0 1-1.384-.457a.5.5 0 1 0-.881.472c.18.336.448.601.76.785c-.537 1.305-.232 2.691.017 3.426a.5.5 0 1 0 .947-.319c-.168-.498-.494-1.756-.002-2.826c.038.002.073.015.11.015zm4.797 9.429a.497.497 0 0 0-.531-.467a1.825 1.825 0 0 1-1.947-1.703a.509.509 0 0 0-.533-.465a.502.502 0 0 0-.465.533c.041.59.266 1.122.608 1.555c-.804.946-1.857 1.215-2.444 1.284c-.519.062-.973.009-1.498-.053c-.481-.055-1.025-.118-1.698-.098l-.005.001c-.02-.286-.088-.703-.305-1.05a.501.501 0 0 0-.847.531c.134.215.159.558.159.725c-.504.181-.94.447-1.334.704c-.704.458-1.259.82-2.094.632c-.756-.173-1.513-.208-2.155-.118c-.1-.251-.258-.551-.502-.782a.5.5 0 0 0-.687.727c.086.081.154.199.209.317c-1.103.454-1.656 1.213-1.682 1.25a.499.499 0 0 0 .407.788a.502.502 0 0 0 .406-.205c.005-.008.554-.743 1.637-1.04c.56-.154 1.363-.141 2.146.037c.219.05.422.067.619.07c.093.218.129.477.134.573a.501.501 0 0 0 .499.472l.027-.001a.5.5 0 0 0 .473-.523a3.023 3.023 0 0 0-.13-.686c.461-.167.862-.428 1.239-.673c.572-.373 1.113-.726 1.82-.749c.592-.021 1.08.036 1.551.091c.474.055.94.091 1.454.061c.091.253.084.591.07.704a.503.503 0 0 0 .497.563a.5.5 0 0 0 .495-.435a2.883 2.883 0 0 0-.059-.981a4.67 4.67 0 0 0 2.345-1.471a2.807 2.807 0 0 0 1.656.413a.499.499 0 0 0 .465-.531z" />
                  </g>
                </svg>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Strategic Job Title Recommendations
              </h2>
              <p>
                Attract top talent with precision-crafted job titles. Our AI
                system evaluates industry norms and search patterns to suggest
                titles that resonate with qualified candidates, enhancing the
                appeal of your listings.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.002 30.384c0 7.794 5.04 12.116 11.01 12.116a8.832 8.832 0 1 0 0-17.664c-5.715 0-11.01-4.32-11.01-9.954v15.502Z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M31.936 24.82a9.149 9.149 0 1 0-16.115-.048"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.002 14.882c0-5.57 3.537-9.382 8.832-9.382s7.045 3.348 8.552 5.825m.613 16.943a8.817 8.817 0 0 1 6.99-3.432c5.714 0 11.009-4.32 11.009-9.954v15.502c0 7.794-5.04 12.116-11.01 12.116A8.817 8.817 0 0 1 24 39.068m17.998-24.186c0-5.57-3.537-9.382-8.831-9.382c-5.295 0-7.046 3.348-8.553 5.825"
                  />
                </svg>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Engaging Job Descriptions</h2>
              <p>
                Create compelling job descriptions with our AI assistance. By
                focusing on critical responsibilities and unique perks, we help
                you craft narratives that capture interest and encourage
                applications from the best talent.
              </p>
            </div>
          </div>
          {/* End Cards */}
        </div>

        {/* Revolutionize Your Recruitment Card */}
        <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
          <figure>
            <Image
              src="/ai-recruitment/ai-driven-job-optimization.jpg"
              width={1280}
              height={380}
              alt="AI Optimized Job Postings"
              className="w-full lg:max-w-lg rounded-xl m-6"
            />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">
              AI-Enhanced Job Listings for Maximum&nbsp;Impact
            </h2>
            <p className="max-w-screen-sm">
              Our AI-driven system elevates your job postings by analyzing
              successful listings across various industries. We provide tailored
              suggestions for keywords, job titles, and descriptions. This
              data-driven approach ensures that your listings are not just seen
              but are compelling to the right candidates. It also saves you time
              and increases your chances of finding the right candidate for the
              job.
            </p>
            <div className="card-actions justify-end">
              <Link href="/ai-recruitment/ai-job-posting-optimization" className="btn btn-aj">
                Learn about AI Optimization
              </Link>
            </div>
          </div>
        </div>

        {/* Enhance Job Listings Card */}
        <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
          <figure className="lg:order-1">
            <Image
              src="/ai-recruitment/ai-enhanced-job-listing.jpg"
              width={1280}
              height={380}
              alt="AI Enhanced Job Listings"
              className="w-full lg:max-w-lg rounded-xl m-6"
            />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">
              Revolutionize Your Recruitment with AI-Driven Job Posting
              Optimization
            </h2>
            <p className="max-w-screen-sm">
              In the dynamic landscape of today’s job market, securing top
              talent demands more than just a standard job posting. Academic
              Jobs introduces a groundbreaking AI solution – Automated Job
              Posting Optimization. This innovative tool is transforming the way
              employers approach job listings, ensuring your vacancies not only
              reach but resonate with the most qualified candidates.
            </p>
            <div className="card-actions justify-end">
              <Link
                href="/ai-recruitment/ai-job-application-sentiment-analysis"
                className="btn btn-aj"
              >
                Learn about AI Job Postings
              </Link>
            </div>
          </div>
        </div>

        <div className="alert mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            Resume extraction and parsing provides candidates with the ability
            to create structured data from their uploaded resume (Supports MS
            Word, PDF & JPEG). Coming soon!
          </span>
          <div>
            <Link href="/ai-recruitment/ai-resume-extraction" className="btn btn-sm btn-aj">
              More about Resume Parsing
            </Link>
          </div>
        </div>

        <div className="mb-16 max-w-lg mx-auto">
          <h3 className="mb-4">
            Choose Academic Jobs and Gain the Superpowers that AI-Enhanced
            Recruitment&nbsp;Delivers
          </h3>
          <li>
            Tailored AI Solutions: Customized AI recommendations specific to
            your industry and company needs.
          </li>
          <li>
            Advanced Candidate Matching: Cutting-edge technology to match the
            right talent with your job requirements.
          </li>
          <li>
            Efficient Recruitment Process: Save time and resources with
            automated, AI-driven job posting optimization.
          </li>
        </div>
      </section>
      <div className="hero min-h-fit bg-orange-100 mb-8">
        <div className="container mx-auto text-center py-8 px-4">
          <h2 className="text-5xl font-bold">Why Choose Academic Jobs?</h2>
          <p className="py-6 max-w-2xl mx-auto">
            Elevate your job postings with our intelligent analytics. Our
            platform transforms listings into data-rich resources, offering
            continuous performance monitoring and actionable insights to
            optimize your recruitment strategy.
          </p>
          <p className="max-w-2xl mx-auto">
            Harness AI power for precision-targeted job listings. Our system not
            only broadcasts but smartly targets your ideal demographic, from
            specific groups like US citizens to a broader audience. Enhanced
            with selective visibility, we streamline your recruitment for
            maximum efficiency. Contact us to discover more.
          </p>
        </div>
      </div>
      <section>
        <h3 className="container mx-auto text-center py-8 px-4">
          To learn more about this time saving opportunity{' '}
          <Link href="/contact-us" className="btn btn-aj">
            Contact us Today
          </Link>
        </h3>
        <p className="text-center p-4">
          <Link
            href="/ai-recruitment/ai-job-posting-optimization"
            className="link link-warning hover:text-orange-500"
          >
            AI&nbsp;Job&nbsp;Listings
          </Link>{' '}
          <Link
            href="/ai-recruitment/ai-job-application-sentiment-analysis"
            className="link link-warning hover:text-orange-500 mx-4"
          >
            AI&nbsp;Sentiment&nbsp;Analysis
          </Link>{' '}
          <Link
            href="/ai-recruitment/ai-resume-extraction"
            className="link link-warning hover:text-orange-500"
          >
            AI&nbsp;Resume&nbsp;Extraction
          </Link>
        </p>
      </section>
    </main>
  );
}
