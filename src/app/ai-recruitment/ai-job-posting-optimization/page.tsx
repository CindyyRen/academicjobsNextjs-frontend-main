import Image from 'next/image';

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionize Talent Acquisition with AI-Generated Job Listings and Smart Posting Solutions', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Academic Jobs is the leading AI Recruitment Platform specializing in helping Higher Education Institutions, Research & Development (R&D) Industries, and many other sectors find candidates with our specialized AI tools that significantly enhance the job posting process and hiring talent.',
  keywords: 'AI Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <main className="">
    
    <div className="hero max-h-fit bg-teal-100 py-8">
      <div className="container mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            width="1280"
            height="380"
           
            src="/ai-jop-posting/ai-job-listing-automation.jpg"
            className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-4"
            alt="AI Powered Job Posting Automation"
          />
          <div>
            <h1 className="text-4xl font-bold text-aj">
              AI-Generated Job Listings &amp; Smart Job Posting Solutions
            </h1>
            <p className="py-6">
              Academic Jobs AI-Generated Job Listings & Smart Job Posting
              Solutions are the future of recruitment. Leveraging cutting-edge
              AI technology, our platform transforms the way you create and
              distribute job postings. By intelligently generating listings
              and optimizing them for maximum engagement, we ensure your
              vacancies stand out to the right candidates.
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
        Increase Efficiency & Quality of Talent Acquisition with AI-Driven Job
        Ads
      </h2>
      <p className="text-center mt-4 max-w-xl mx-auto">
        Our smart AI solutions automate the intricate process of crafting job
        descriptions, selecting effective keywords, and targeting desired
        demographics, saving you time and increasing the accuracy of your
        recruitment efforts. Embrace the power of AI to enhance your job
        postings' visibility and effectiveness, attracting top talent
        effortlessly.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {/* Card 1 - Efficiency in Recruitment Processes */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="icon-ai">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 512 512"
                className="transform scale-x-[-1]"
              >
                <path
                  fill="#E5E4DF"
                  d="M495 64c-4.602 0-8.9 1.297-12.552 3.543L10 340.311l.082.143C3.982 344.805 0 351.935 0 360c0 12.259 9.194 22.364 21.061 23.814l-.061.228l122.212 32.747L112 448h400V64h-17z"
                />
                <path
                  fill="#0074A8"
                  d="m512 64l-17 6c-4.602 0-8.9-4.703-12.552-2.457L10 340.311l.082.143L512 144V64z"
                />
                <path fill="#132028" d="m216 424l-24 24h320v-24z" />
                <path
                  fill="#575A5B"
                  d="M336 424c0 26.51-21.49 48-48 48s-48-21.49-48-48h24c0 13.255 10.745 24 24 24s24-10.745 24-24h24zm88 0c0 13.255-10.745 24-24 24s-24-10.745-24-24h-24c0 26.51 21.49 48 48 48s48-21.49 48-48h-24z"
                />
                <ellipse cx="46" cy="358" fill="#FFD469" rx="14" ry="8" />
                <path fill="#F9F9F7" d="M512 341.822L64 357.524V358h448z" />
                <path
                  fill="#132028"
                  d="M0 464h512v32H0zM512 64.953c-18.851-5.617-79.619 14.086-146.893 48.673c-76.57 39.367-132.563 83.104-125.064 97.689c7.499 14.585 75.65-5.504 152.22-44.871C450.039 136.74 496.091 104.551 512 84.271V64.953z"
                />
              </svg>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Efficiency in Recruitment Processes
            </h2>
            <p>
              AI-driven automation streamlines crafting job descriptions and
              selecting keywords, enhancing recruitment efficiency.
            </p>
          </div>
        </div>

        {/* Card 2 - Enhanced Visibility and Candidate Engagement */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="icon-ai">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M186.436 86.738c-9.044 0-19.112 5.87-26.735 21.114l-6.807 13.62c2.48-.203 4.968-.31 7.455-.31c18.02 0 36.005 5.363 51.87 15.977v-30.984c-7.5-13.917-17.102-19.418-25.782-19.418zm139.128 0c-8.68 0-18.28 5.5-25.78 19.418v30.994c18.064-12.06 38.895-17.28 59.345-15.638l-6.83-13.66c-7.624-15.245-17.692-21.114-26.736-21.114zm-165.216 51.926c-19.05 0-38.08 7.693-53.74 23l-37.38 65.418c14.492-6.743 30.633-10.518 47.64-10.518c39.96 0 75.16 20.792 95.35 52.124V159.846c-15.293-14.115-33.58-21.182-51.87-21.182zm192.433.033c-18.662-.306-37.39 6.74-52.997 21.145v108.845c20.19-31.33 55.39-52.123 95.348-52.123c17.01 0 33.15 3.775 47.643 10.518l-37.38-65.418c-15.35-15.003-33.95-22.66-52.612-22.967zM256 151.957c-5.113 0-11.882 2.775-25.783 9.627v133.014c7.246-5.314 16.164-8.467 25.783-8.467c9.62 0 18.537 3.154 25.783 8.468V161.584c-13.9-6.852-20.67-9.627-25.783-9.627zm-139.13 82.607c-52.767 0-95.35 42.582-95.35 95.348s42.583 95.35 95.35 95.35c52.765 0 95.347-42.584 95.347-95.35c0-52.766-42.582-95.348-95.348-95.348zm278.26 0c-52.765 0-95.347 42.582-95.347 95.348s42.582 95.35 95.348 95.35c52.767 0 95.35-42.584 95.35-95.35c0-52.766-42.583-95.348-95.35-95.348zm-279.827 19.004a80.4 80.4 0 0 1 3.674.03c7.344.225 14.694 1.462 21.77 3.816c36.842 11.343 59.745 51.664 50.622 89.11c-7.652 37.743-45.455 64.51-83.595 59.17c-38.748-3.865-69.376-39.578-67.16-78.483c.167-11.41 3.133-22.336 8.2-32.124A26.087 26.087 0 0 0 73.39 312.52a26.087 26.087 0 0 0 26.09-26.084a26.087 26.087 0 0 0-17.447-24.584c9.058-4.694 19.097-7.594 29.606-8.147a84.277 84.277 0 0 1 3.663-.137zm278.26 0a80.345 80.345 0 0 1 3.673.03c7.344.225 14.696 1.462 21.774 3.816c36.84 11.343 59.742 51.664 50.62 89.11c-7.652 37.742-45.453 64.51-83.59 59.173c-38.75-3.865-69.38-39.582-67.163-78.488c.167-11.41 3.133-22.334 8.2-32.122a26.087 26.087 0 0 0 24.575 17.433a26.087 26.087 0 0 0 26.086-26.084a26.087 26.087 0 0 0-17.443-24.584c9.057-4.694 19.095-7.594 29.603-8.147c1.22-.072 2.44-.118 3.664-.137zM256 304.13c-14.346 0-25.783 11.436-25.783 25.782s11.437 25.783 25.783 25.783c14.346 0 25.783-11.437 25.783-25.783c0-14.346-11.437-25.78-25.783-25.78z"
                />
              </svg>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Enhanced Visibility and Engagement</h2>
            <p>
              Optimize job listings for maximum engagement, ensuring vacancies
              attract relevant, top-quality candidates.
            </p>
          </div>
        </div>

        {/* Card 3 - Precision in Targeting Ideal Candidates */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="icon-ai">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 48 48"
              >
                <g fill="none">
                  <path
                    fill="#2F88FF"
                    stroke="#000"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    stroke-width="4"
                    d="M23.8887 39.8887C32.7287 39.8887 39.8887 32.7287 39.8887 23.8887C39.8887 15.0487 32.7287 7.88867 23.8887 7.88867C15.0487 7.88867 7.88867 15.0487 7.88867 23.8887C7.88867 32.7287 15.0487 39.8887 23.8887 39.8887Z"
                  />
                  <path
                    fill="#43CCF8"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    stroke-width="4"
                    d="M23.8887 31.8887C28.3087 31.8887 31.8887 28.3087 31.8887 23.8887C31.8887 19.4687 28.3087 15.8887 23.8887 15.8887C19.4687 15.8887 15.8887 19.4687 15.8887 23.8887C15.8887 28.3087 19.4687 31.8887 23.8887 31.8887Z"
                  />
                  <path
                    fill="#000"
                    d="M23.8887 25.8887C24.9887 25.8887 25.8887 24.9887 25.8887 23.8887C25.8887 22.7887 24.9887 21.8887 23.8887 21.8887C22.7887 21.8887 21.8887 22.7887 21.8887 23.8887C21.8887 24.9887 22.7887 25.8887 23.8887 25.8887Z"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    stroke-width="4"
                    d="M23.8887 7.88867V3.88867"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    stroke-width="4"
                    d="M37.8887 43.8887L33.8887 36.8887"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    stroke-width="4"
                    d="M13.8887 36.8887L9.88867 43.8887"
                  />
                </g>
              </svg>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Precision in Candidate Targeting</h2>
            <p>
              AI solutions target specific demographics, attracting top talent
              that aligns with your organizational needs.
            </p>
          </div>
        </div>

        {/* End Cards */}
      </div>
    </section>

    <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-sky-600">
          Why Generate Job Listings with AI?
        </h2>
        <div className="text-col-2">
          <p className="mb-4">
            Boost your recruitment strategy with our AI-Generated Job Posting
            and Listing Tool, the cutting-edge solution for modern hiring
            challenges. Harnesses the power of artificial intelligence to
            create job postings that are compelling and highly targeted.
            Experience the ease of AI-driven keyword selection and job
            description generation that ensures your listings resonate with
            the right audience.
          </p>
          <p className="mb-4">
            By optimizing every aspect of your job postings, from titles to
            detailed descriptions, we help you elevate your visibility in the
            competitive job market, making it easier for you to attract and
            engage top-tier talent. This innovative approach not only saves
            valuable time but also significantly enhances the effectiveness of
            your recruitment efforts.
          </p>
          <p className="mb-4">
            Choose precision and efficiency with our AI-Generated Job Posting
            and Listing Tool. Designed for recruiters who demand excellence,
            this tool provides an unmatched level of sophistication in job
            advertisement creation. Our AI technology intelligently analyzes
            market trends and candidate preferences, allowing you to tailor
            your job listings for optimal candidate attraction.
          </p>
          <p className="mb-4">
            The result? A streamlined recruitment process that not only
            identifies but also attracts the best fits for your organization.
            With our AI tool, gain access to a world of data-driven insights
            and embrace a future where AI empowers every step of your
            recruitment journey, setting a new standard in the recruitment
            landscape.
          </p>
        </div>
      </div>
    </div>

    <section>
      <h3 className="container mx-auto text-center py-8 px-4 sm:mb-4">
        To learn more about AI-Driven Job Postings{" "}
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
