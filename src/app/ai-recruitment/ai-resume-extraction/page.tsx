import Image from 'next/image';

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worlds Best AI Resume Extraction & Parsing Tool', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Academic Jobs is the leading AI Recruitment Platform specializing in helping Higher Education Institutions, Research & Development (R&D) Industries, and many other sectors find candidates with our specialized AI tools that significantly enhance the job posting process..',
  keywords: 'AI Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <main className="">
   
    <div className="hero max-h-fit bg-violet-100 py-8">
      <div className="container mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <Image
           width="1280"
           height="380"
            src="/ai-resume-extraction/ai-resume-extraction.jpg"
            className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-4"
            alt="AI Powered Recruitment Platform"
          />
          <div>
            <h1 className="text-4xl font-bold text-aj">
              AI Resume Extraction, Convert CVs into Structured Data
            </h1>
            <p className="py-6">
              Efficient and accurate resume extraction with our leading AI
              Resume Extraction tool. Simply upload a CV and withing seconds
              and effortlessly get high quality structured data from the
              uploaded CV. Tailored for busy HR professionals and recruiters,
              our state-of-the-art AI technology simplifies the daunting task
              of resume analysis.
            </p>
            <Link className="btn btn-aj" href="/contact-us">
              Learn more about AI
            </Link>
          </div>
        </div>
      </div>
    </div>
    <section className="container mx-auto px-4 mt-12">
      <h2 className="text-center">
        AI Resume Extraction makes Talent Pool management Fast and Easy
      </h2>
      <p className="text-center mt-4 max-w-xl mx-auto">
        By intelligently parsing through Resumes/CVs, it extracts and
        organizes key information such as skills, experience, and education
        into a structured format. This innovative approach not only saves
        valuable time and in combination with{" "}
        <Link
          href="/ai-recruitment/ai-job-application-sentiment-analysis"
          className="link link-warning hover:text-orange-500"
        >
          AI&nbsp;Sentiment&nbsp;Analysis
        </Link>{" "}
        we deliver a powerhouse tool that accurately profiles a candidate,
        ensuring you quickly identify the most suitable applicants. Embrace
        the power of AI to transform your recruitment process, making it
        faster, more accurate, and perfectly aligned with the needs of the
        modern job market.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="icon-ai">
              <Image
                width={90}
                height={90}
                src="/ai-resume-extraction/talent-pool.svg"
                alt="AI-Driven Talent Pool"
              />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Streamline Talent Pool Growth</h2>
            <p>
              Effortlessly grow your Talent Pool with AI-driven data
              ingestion, transforming diverse resume formats into organized,
              searchable candidate profiles.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="icon-ai">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M44 31c0 5.523-4.477 10-10 10c-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.975 9.975 0 0 1 34 21c5.523 0 10 4.477 10 10Z" />
                  <path d="M34 12v9a9.975 9.975 0 0 0-7.442 3.32A9.963 9.963 0 0 0 24 31a10.01 10.01 0 0 0 5.074 8.705C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12" />
                  <path d="M34 12c0 2.761-6.716 5-15 5c-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5ZM4 28c0 2.761 6.716 5 15 5c1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5c2.756 0 5.339-.248 7.558-.68M34 26l-3 4l6 2l-3 4" />
                </g>
              </svg>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Comprehensive Resume Format Conversion
            </h2>
            <p>
              Convert MS Word, PDF, and image-based resumes into structured
              data with our advanced AI technology, enhancing the
              accessibility and utility of every candidate profile.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="icon-ai">
              <Image
                width={90}
                height={90}
                src="/ai-resume-extraction/precise-candidate-matching.svg"
                alt="AI-Driven Talent Pool"
              />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Precise AI-Powered Job Matching</h2>
            <p>
              Experience the power of AI CV Extraction for job-matching
              capabilities. Align structured CV data with job listings,
              ensuring optimal candidate-job fit.
            </p>
          </div>
        </div>
        {/* End Cards */}
      </div>
    </section>
    <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-sky-600">
          Why build your Talent Pool with an AI Resume Extractor?
        </h2>
        <div className="text-col-2">
          <p className="mb-4">
            Our AI CV Extraction tool is a game-changer for HR professionals
            and recruiters facing the ever-growing challenge of efficiently
            processing resumes. When you or a candidate uploads a CV to our
            system it transforms it into high-quality, structured data within
            seconds. This rapid conversion is pivotal for busy recruitment
            environments where time is of the essence.
          </p>
          <p className="mb-4">
            Our advanced AI technology doesn't just parse through the resume;
            it intelligently identifies and organizes crucial information such
            as skills, experience, and educational background into an easily
            accessible format.
          </p>
          <p className="mb-4">
            This not only speeds up the resume review process but also ensures
            that no critical information is missed. Additionally, the
            integration of{" "}
            <Link
              href="/ai-recruitment/ai-job-application-sentiment-analysis"
              className="link link-warning hover:text-orange-500"
            >
              AI&nbsp;Sentiment&nbsp;Analysis
            </Link>{" "}
            adds another layer of candidate evaluation, offering a
            comprehensive profile that aids in quickly pinpointing the most
            fitting applicants. This efficiency and accuracy are vital in
            today’s fast-paced job market, where the ability to rapidly
            identify top talent can significantly impact organizational
            success.
          </p>
          <p className="mb-4">
            The AI Resume Extraction tool is more than just a time-saver; it’s
            a game changer… AI CV Extraction is a complete talent acquisition
            solution. By efficiently converting diverse resume formats,
            including MS Word, PDFs, and even text-based images, into
            structured data, our AI ensures that every piece of candidate
            information is captured and made searchable. This comprehensive
            approach to resume conversion enhances the utility of every
            candidate profile, making it easier for recruiters to access and
            analyze the information they need. Furthermore, our tool's
            precision in AI-powered job matching is unparalleled.
          </p>
          <p className="mb-4">
            By aligning structured CV data with specific job listings, it
            ensures an optimal match between the candidate’s qualifications
            and the job requirements. This precision not only streamlines the
            recruitment process but also contributes to better hiring
            decisions, aligning candidates with roles where they are most
            likely to succeed and thrive. In an era where finding the right
            talent is more crucial than ever, our AI Resume Extraction tool
            stands as an essential asset for any recruitment strategy.
          </p>
        </div>
      </div>
    </div>

    <section>
      <h3 className="container mx-auto text-center py-8 px-4">
        To learn more about AI Resume Extraction{" "}
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
        </Link>{" "}
        <Link
          href="/ai-recruitment/ai-job-application-sentiment-analysis"
          className="link link-warning hover:text-orange-500 mx-4"
        >
          AI&nbsp;Sentiment&nbsp;Analysis
        </Link>{" "}
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
