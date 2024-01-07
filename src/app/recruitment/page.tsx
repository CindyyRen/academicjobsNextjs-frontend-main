import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Fastest growing Academic Job Board with the best customer service & support', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Academic Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords: 'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <>
        <main>
        {/* Hero banner */}
        <section>
          <div className="hero max-h-fit bg-slate-200 py-8 mx-auto">
            <div className="container mx-auto">
              <div className="hero-content flex-col xl:flex-row-reverse mx-auto max-w-full">
                <Image
                  src="/academic-job-postings/global-academics.jpg"
                  className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
                  width={1280}
                  height={380}
                  alt="Number 1 Recruitment Platform"
                />
                <div>
                  <h1 className="text-3xl font-bold text-aj">
                    Join the Global No. 1 Academic Job Board &
                    Community
                  </h1>
                  <h4 className="">
                    Academic Jobs is the Premier Destination for Academic and
                    University staff Recruitment
                  </h4>
                  <p className="py-6">
                    HR professionals love how simple and affordable it is to
                    post jobs that target the best local & global talent. We
                    understand the importance of finding the right talent, and
                    we go above and beyond to help you achieve this.
                  </p>
                  <Link className="btn btn-aj" href="/job-ads">
                    Post a Job Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <section className="container mx-auto px-4 mt-12">
          <h2 className="text-left mb-4 md:px-10 text-xl font-bold">
            Connect with the Global Academic Elite on the
            Premier Job Board
          </h2>
          <div className="text-col-2 rounded-2xl shadow-lg pb-12 px-auto">
            <p className="max-w-xl mx-auto ">
              Leverage the power of the Global No. 1 Academic
              Job Board for unparalleled access to top-tier academic talent.
              Academic Jobs simplifies your recruitment process, offering an
              affordable, efficient way to find academics and university support
              staff.
            </p>
            <p className="max-w-xl mx-auto">
              With our commitment to genuine customer service, combined with
              cutting-edge AI technology, we provide a seamless and
              cost-effective recruitment experience, ensuring you attract the
              right candidates effortlessly.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Card 1 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#ff7f0e"
                      d="M112.39 6.389a6.707 6.707 0 0 0-2.585.416c-3.428 1.266-5.232 5.008-4.033 8.357c1.2 3.35 4.952 5.039 8.38 3.772v-.002c3.427-1.267 5.233-5.007 4.032-8.354c-.901-2.513-3.237-4.092-5.793-4.19zM72.6 33.059a19.327 19.327 0 0 0-6.506 1.207c-9.84 3.636-15.023 14.377-11.576 23.992c3.445 9.615 14.217 14.461 24.054 10.826c9.841-3.634 15.024-14.378 11.578-23.992c-2.69-7.512-9.853-12.113-17.55-12.033Zm-51.856 31.67a6.693 6.693 0 0 0-2.586.416c-3.429 1.267-5.233 5.009-4.033 8.357c1.201 3.35 4.952 5.038 8.379 3.771c3.429-1.267 5.231-5.008 4.031-8.357c-.9-2.511-3.234-4.09-5.79-4.188zm71.807 36.39a9.22 9.22 0 0 0-3.553.572c-4.71 1.74-7.191 6.882-5.543 11.483c1.65 4.603 6.806 6.923 11.514 5.183h.002c4.71-1.74 7.191-6.883 5.54-11.484c-1.237-3.452-4.446-5.62-7.96-5.754z"
                    />
                    <path
                      fill="#2c7fb8"
                      d="M112.709.008a13.345 13.345 0 0 0-9.396 3.433c-4.613 4.16-5.611 10.839-2.715 15.94l-7.776 7.002a32.376 32.376 0 0 0-18.312-6.574a32.996 32.996 0 0 0-12.766 2.033C45.761 27.748 36.87 44.689 41.047 60.588l-9.69 3.584c-2.254-3.508-6.105-5.663-10.254-5.83a13.196 13.196 0 0 0-3.302.34l-1.979-5.58c3.314-2.07 4.918-6.184 3.586-9.944l.002-.002c-1.151-3.246-4.174-5.293-7.463-5.437a8.554 8.554 0 0 0-3.318.515c-4.386 1.604-6.742 6.412-5.207 10.743c1.33 3.753 5.161 5.898 9.013 5.359l1.965 5.543c-5.7 2.998-8.565 9.74-6.373 15.855c2.39 6.664 9.893 10.022 16.641 7.528c5.843-2.16 9.321-8.016 8.6-13.873l9.66-3.569c6.355 13.711 21.803 20.877 36.687 17.283l3.998 11.155a18.588 18.588 0 0 0-8.922 10.601L69.414 104a8.206 8.206 0 0 0-6.896-7.797c-4.576-.747-8.992 2.32-9.864 6.861c-.871 4.54 2.185 8.885 6.762 9.631c3.973.649 7.82-1.578 9.336-5.15l5.166.842c-.304 2.62-.05 5.331.892 7.96c3.334 9.304 13.808 13.984 23.231 10.503c9.421-3.481 14.453-13.842 11.117-23.147a17.286 17.286 0 0 0-5.021-7.295l10.59-18.412l-.05-.027c3.783.788 7.795-1.098 9.536-4.725c2.034-4.158.212-9.228-4.002-11.078h-.004a8.405 8.405 0 0 0-3.25-.732h-.002c-2.648-.059-5.227 1.14-6.924 3.244l-6.678-3.207c2.243-6.597 2.403-13.899-.097-20.875A30.885 30.885 0 0 0 96.95 30.14l7.393-6.659c4.856 3.372 11.67 3.015 16.299-1.162c5.34-4.816 5.85-13.017 1.056-18.226c-2.398-2.605-5.661-3.972-8.99-4.086zm-.135 3.455c2.442.08 4.823 1.086 6.569 2.982c3.49 3.793 3.156 9.705-.827 13.297c-3.981 3.593-10.012 3.37-13.504-.422c-3.49-3.793-3.158-9.705.827-13.299a9.861 9.861 0 0 1 6.935-2.556v-.002zm-38.312 23.09c10.022.362 19.097 6.525 22.611 16.332c4.687 13.076-2.338 27.727-15.857 32.722v.002h-.002c-13.522 4.995-28.092-1.607-32.778-14.681c-4.685-13.075 2.34-27.727 15.86-32.723a26.522 26.522 0 0 1 10.166-1.652zM11.857 39.959c2.415.093 4.59 1.584 5.428 3.947l-.002.002c1.118 3.152-.583 6.676-3.853 7.871c-3.272 1.198-6.768-.402-7.885-3.554c-1.118-3.153.585-6.677 3.857-7.873h.002a6.4 6.4 0 0 1 2.453-.393zm9.12 21.836c3.723.131 7.08 2.42 8.384 6.057c1.739 4.849-.864 10.29-5.898 12.15c-5.034 1.86-10.428-.59-12.166-5.44c-1.74-4.849.865-10.29 5.898-12.15a9.886 9.886 0 0 1 3.782-.617zm95.92 1.89h.001a6.18 6.18 0 0 1 2.393.538l.008.002c3.054 1.335 4.38 4.991 2.89 8.03l-.003.01c-1.487 3.1-5.214 4.481-8.307 3.098l-.008-.004c-3.054-1.335-4.38-4.993-2.89-8.033l.003-.008c1.116-2.325 3.49-3.682 5.912-3.633zm-14.96 1.33l6.446 2.882c-.83 3.22.386 6.662 3.035 8.622l-10.252 17.823a18.214 18.214 0 0 0-8.101-2.28a18.42 18.42 0 0 0-1.956.116L86.894 80.42a33.295 33.295 0 0 0 15.043-15.404zm-9.05 31.87c5.197.183 9.89 3.375 11.709 8.453c2.428 6.77-1.206 14.37-8.235 16.967c-7.03 2.597-14.562-.824-16.988-7.594c-2.428-6.772 1.206-14.37 8.236-16.965a13.797 13.797 0 0 1 5.278-.861zM60.898 98.35c.414-.016.834.007 1.256.076h.002c3.379.553 5.55 3.646 4.909 6.984c-.642 3.341-3.908 5.615-7.288 5.063c-3.381-.552-5.552-3.646-4.91-6.985c.562-2.923 3.133-5.026 6.031-5.138z"
                    />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                  Global Leading Academic Job Board
                </h2>
                <p>
                  Connect with the Global top academic talent
                  on the No. 1 Academic Job Board. Posting jobs is simple and
                  affordable, targeting both local and global candidates.{" "}
                  <span className="hidden">
                    We specialize in matching premier academic professionals
                    with your specific needs, ensuring you find the right talent
                    every time.
                  </span>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/life-saving-customer-service.svg"
                    alt="Life Saving Customer Service & Support"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                  Customer Service with Innovative AI Recruitment
                </h2>
                <p>
                  Revolutionize your hiring process with Academic Jobs. Our
                  platform combines genuine customer service with advanced AI
                  technology, making the recruitment experience efficient and
                  enjoyable.
                  <span className="hidden">
                    Experience a new way of recruiting that reconnects you with
                    the best academic minds worldwide.
                  </span>
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/elite-talent.svg"
                    alt="Elite Academic Talent"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                  Affordable Access to Elite Academic Talent
                </h2>
                <p>
                  Access thousands of top academics without the high costs. We
                  offer the most affordable job listing fees, paired with a
                  comprehensive talent pool. Meaning better results with an
                  exceptional recruiter experience.
                </p>
              </div>
            </div>
            {/* End Cards */}
          </div>
        </section>
        {/* Uni hero image */}
        <div className="bg-gray-200 mt-16">
          <figure className="relative w-full min-h-[237px] max-h-[237px] overflow-hidden">
            <Image
              src="/academic-job-postings/top-universities-worldwide.jpg"
              alt="A new way to recruit with powerful AI tools"
              width={1280}
              height={380}
              className="absolute w-full h-full object-cover"
            />
          </figure>
        </div>
        <section className="container mx-auto px-4 mt-12">
          {/* A whole new way to recruit Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                src="/academic-job-postings/academics-networking.jpg"
                alt="A new way to recruit with powerful AI tools"
                width={1280}
                height={380}
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">A whole new way to&nbsp;recruit</h2>
              <p className="max-w-screen-sm">
                At Academic Jobs, we make connecting with a global pool of
                qualified academics and support staff easier and more efficient.
                By bringing back genuine customer service and leveraging the
                power of AI, we create a pleasurable customer experience that
                ALL modern platforms have lost. Quickly post jobs for executive
                jobs in higher education, academic jobs, administrative jobs and
                all university support roles
              </p>
              <div className="card-actions justify-end">
                <Link href="/job-ads" className="btn btn-aj">
                  Create a free profile now
                </Link>
              </div>
            </div>
          </div>

          {/* Lowest fees Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                src="/academic-job-postings/great-customer-service.jpg"
                alt="Great Customer Service with the Lowest Prices"
                width={1280}
                height={380}
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Exceptional Customer Service & Lowest&nbsp;fees
              </h2>
              <p className="max-w-screen-sm">
                We significantly reduce the cost of job listings while providing
                better results and exceptional recruiter experience. We have the
                best customer service and support.
              </p>
              <div className="card-actions justify-end">
                <Link href="/job-ads" className="btn btn-aj">
                  Check out our prices
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Breakout Section */}
        <div className="bg-sky-100 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8 text-sky-600">
              #1 Job Board for for ALL University&nbsp;Positions
            </h2>
            {/* <div className="text-col-2"> */}
            <p className="mb-4 text-center max-w-[500px] mx-auto">
              Academic Jobs doesn't just find academics, we specialize in
              finding the best candidates for Admin/Support roles in academia,
              Executive positions and HR specialists
            </p>
            {/* </div> */}
          </div>
        </div>
        <section className="container mx-auto px-4 mt-12">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-16">
            {/* Card 1 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-4">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/Top-Executive.jpg"
                    alt="Life Saving Customer Service & Support"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                  Your Gateway to Top University Executives
                </h2>
                <p>
                  Your Premier Source for Higher Education Executives. Access an
                  extensive network of elite university professionals,
                  Chancellors & Presidents to executive management teams.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/HR-Jobs.png"
                    alt="Elite Academic Talent"
                  />
                </div>
              </figure>
              <div className="card-body items-left text-left">
                <h2 className="card-title">
                  Attract the Finest HR&nbsp;Professionals
                </h2>
                <p>
                  The Premier Platform for University HR Job Postings in the
                  World. Connect with top-tier Human Resources talent from
                  universities across the Globe
                  {/* , attracting industry-leading
                  professionals exclusively through our platform. Whether from
                  the Ivy League, state universities, or private colleges,
                  discover unparalleled HR expertise to elevate your
                  institution. */}
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="icon-ai">
                  <Image
                    width={90}
                    height={90}
                    src="/academic-job-postings/Admin-Jobs.png"
                    alt="Elite Academic Talent"
                  />
                </div>
                <div className="icon-ai hidden">
                  <svg
                    xmlns="http://www.w3.org/Staff-Jobs.jpg"
                    width="90"
                    height="90"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#ff7f0e"
                      d="M112.39 6.389a6.707 6.707 0 0 0-2.585.416c-3.428 1.266-5.232 5.008-4.033 8.357c1.2 3.35 4.952 5.039 8.38 3.772v-.002c3.427-1.267 5.233-5.007 4.032-8.354c-.901-2.513-3.237-4.092-5.793-4.19zM72.6 33.059a19.327 19.327 0 0 0-6.506 1.207c-9.84 3.636-15.023 14.377-11.576 23.992c3.445 9.615 14.217 14.461 24.054 10.826c9.841-3.634 15.024-14.378 11.578-23.992c-2.69-7.512-9.853-12.113-17.55-12.033Zm-51.856 31.67a6.693 6.693 0 0 0-2.586.416c-3.429 1.267-5.233 5.009-4.033 8.357c1.201 3.35 4.952 5.038 8.379 3.771c3.429-1.267 5.231-5.008 4.031-8.357c-.9-2.511-3.234-4.09-5.79-4.188zm71.807 36.39a9.22 9.22 0 0 0-3.553.572c-4.71 1.74-7.191 6.882-5.543 11.483c1.65 4.603 6.806 6.923 11.514 5.183h.002c4.71-1.74 7.191-6.883 5.54-11.484c-1.237-3.452-4.446-5.62-7.96-5.754z"
                    />
                    <path
                      fill="#2c7fb8"
                      d="M112.709.008a13.345 13.345 0 0 0-9.396 3.433c-4.613 4.16-5.611 10.839-2.715 15.94l-7.776 7.002a32.376 32.376 0 0 0-18.312-6.574a32.996 32.996 0 0 0-12.766 2.033C45.761 27.748 36.87 44.689 41.047 60.588l-9.69 3.584c-2.254-3.508-6.105-5.663-10.254-5.83a13.196 13.196 0 0 0-3.302.34l-1.979-5.58c3.314-2.07 4.918-6.184 3.586-9.944l.002-.002c-1.151-3.246-4.174-5.293-7.463-5.437a8.554 8.554 0 0 0-3.318.515c-4.386 1.604-6.742 6.412-5.207 10.743c1.33 3.753 5.161 5.898 9.013 5.359l1.965 5.543c-5.7 2.998-8.565 9.74-6.373 15.855c2.39 6.664 9.893 10.022 16.641 7.528c5.843-2.16 9.321-8.016 8.6-13.873l9.66-3.569c6.355 13.711 21.803 20.877 36.687 17.283l3.998 11.155a18.588 18.588 0 0 0-8.922 10.601L69.414 104a8.206 8.206 0 0 0-6.896-7.797c-4.576-.747-8.992 2.32-9.864 6.861c-.871 4.54 2.185 8.885 6.762 9.631c3.973.649 7.82-1.578 9.336-5.15l5.166.842c-.304 2.62-.05 5.331.892 7.96c3.334 9.304 13.808 13.984 23.231 10.503c9.421-3.481 14.453-13.842 11.117-23.147a17.286 17.286 0 0 0-5.021-7.295l10.59-18.412l-.05-.027c3.783.788 7.795-1.098 9.536-4.725c2.034-4.158.212-9.228-4.002-11.078h-.004a8.405 8.405 0 0 0-3.25-.732h-.002c-2.648-.059-5.227 1.14-6.924 3.244l-6.678-3.207c2.243-6.597 2.403-13.899-.097-20.875A30.885 30.885 0 0 0 96.95 30.14l7.393-6.659c4.856 3.372 11.67 3.015 16.299-1.162c5.34-4.816 5.85-13.017 1.056-18.226c-2.398-2.605-5.661-3.972-8.99-4.086zm-.135 3.455c2.442.08 4.823 1.086 6.569 2.982c3.49 3.793 3.156 9.705-.827 13.297c-3.981 3.593-10.012 3.37-13.504-.422c-3.49-3.793-3.158-9.705.827-13.299a9.861 9.861 0 0 1 6.935-2.556v-.002zm-38.312 23.09c10.022.362 19.097 6.525 22.611 16.332c4.687 13.076-2.338 27.727-15.857 32.722v.002h-.002c-13.522 4.995-28.092-1.607-32.778-14.681c-4.685-13.075 2.34-27.727 15.86-32.723a26.522 26.522 0 0 1 10.166-1.652zM11.857 39.959c2.415.093 4.59 1.584 5.428 3.947l-.002.002c1.118 3.152-.583 6.676-3.853 7.871c-3.272 1.198-6.768-.402-7.885-3.554c-1.118-3.153.585-6.677 3.857-7.873h.002a6.4 6.4 0 0 1 2.453-.393zm9.12 21.836c3.723.131 7.08 2.42 8.384 6.057c1.739 4.849-.864 10.29-5.898 12.15c-5.034 1.86-10.428-.59-12.166-5.44c-1.74-4.849.865-10.29 5.898-12.15a9.886 9.886 0 0 1 3.782-.617zm95.92 1.89h.001a6.18 6.18 0 0 1 2.393.538l.008.002c3.054 1.335 4.38 4.991 2.89 8.03l-.003.01c-1.487 3.1-5.214 4.481-8.307 3.098l-.008-.004c-3.054-1.335-4.38-4.993-2.89-8.033l.003-.008c1.116-2.325 3.49-3.682 5.912-3.633zm-14.96 1.33l6.446 2.882c-.83 3.22.386 6.662 3.035 8.622l-10.252 17.823a18.214 18.214 0 0 0-8.101-2.28a18.42 18.42 0 0 0-1.956.116L86.894 80.42a33.295 33.295 0 0 0 15.043-15.404zm-9.05 31.87c5.197.183 9.89 3.375 11.709 8.453c2.428 6.77-1.206 14.37-8.235 16.967c-7.03 2.597-14.562-.824-16.988-7.594c-2.428-6.772 1.206-14.37 8.236-16.965a13.797 13.797 0 0 1 5.278-.861zM60.898 98.35c.414-.016.834.007 1.256.076h.002c3.379.553 5.55 3.646 4.909 6.984c-.642 3.341-3.908 5.615-7.288 5.063c-3.381-.552-5.552-3.646-4.91-6.985c.562-2.923 3.133-5.026 6.031-5.138z"
                    />
                  </svg>
                </div>
              </figure>
              <div className="card-body items-left text-left pt-14">
                <h2 className="card-title">
                  Global Leading Admin & Support Staff Job
                  Board
                </h2>
                <p>
                  Academic Jobs shines as the #1&nbsp;Job Board in the World for
                  Admin and Support roles in academia, renowned for connecting
                  top-tier administrative professionals with leading
                  institutions.
                </p>
              </div>
            </div>

            {/* End Cards */}
          </div>

          {/* Access to thousands of top academics Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                src="/academic-job-postings/global-academic-network.jpg"
                alt="Access to thousands of top global academics"
                width={1280}
                height={380}
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Access to thousands of top&nbsp;academics
              </h2>
              <p className="max-w-screen-sm">
                With the most comprehensive Academic Talent Pool, you can
                identify the most sought-after candidates and make informed
                decisions about who will join your organization.
              </p>
              <div className="card-actions justify-end">
                <Link href="/academic-talent-pool" className="btn btn-aj">
                  Join our Talent Pool
                </Link>
              </div>
            </div>
          </div>

          {/* Helpful tools and AI make it easy to list Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                src="/academic-job-postings/helpful-artificial-intelligence.jpg"
                alt="Helpful AI tools"
                width={1280}
                height={380}
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Helpful tools and AI make it easy to list
              </h2>
              <p className="max-w-screen-sm">
                Our tools make it easy to list and manage your job posts, find
                top candidates and improve talent acquisition. But most
                importantly, we are here to help you every step of the way.
              </p>
              <div className="card-actions justify-end">
                <Link href="/job-ads" className="btn btn-aj">
                  Try it for Yourself
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact us CTA */}
        <section className="container mx-auto px-4 mt-12">
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
              ​​Try out Academic Jobs today, not because we are number 1 but for
              the best customer service and support you will ever experience.
            </span>
            <div>
              <Link href="/contact-us" className="btn btn-sm btn-aj">
                Experience the Difference
              </Link>
            </div>
          </div>
        </section>
        <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-sky-600">
              Why Experience Academic Jobs?
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                <blockquote>
                  Discover the Ease of Academic Recruitment with the{" "}
                  Global
                  Leading Job Board
                </blockquote>
                Choosing Academic Jobs means partnering with the{" "}
                Global
                foremost academic job board, renowned for its simplicity,
                affordability, and unparalleled access to a global talent pool.
                As the premier destination for academic recruitment, we cater
                specifically to the needs of HR professionals in the academic
                sector, offering an effortless platform to post job vacancies.
              </p>
              <p className="mb-4">
                Understanding the critical importance of finding the right
                talent drives us to provide exceptional service, ensuring your
                job postings effectively target and attract local and global
                candidates. With options like unlimited job postings for two or
                three months at competitive prices, we make it feasible and
                highly advantageous for you to connect with the best minds in
                academia. Academic Jobs stands out for its extensive reach and
                commitment to making recruitment a smooth and rewarding
                experience.
              </p>
              <blockquote>
                Revolutionize Your Hiring with Advanced Tools and Exceptional
                Support
              </blockquote>
              <p className="mb-4">
                At Academic Jobs, we redefine the recruitment experience. By
                integrating genuine customer service with advanced AI
                technology, our platform offers a fresh and efficient approach
                to connecting with qualified academics worldwide. This synergy
                of technology and human touch results in a pleasurable and
                effective recruitment process, something we pride ourselves on
                in an era where true customer service has become a rarity.
              </p>
              <p className="mb-4">
                Our platform is designed to minimize your job listing costs
                while maximizing results and recruiter satisfaction. With access
                to our comprehensive academic talent pool, you can make informed
                hiring decisions and identify the most suitable candidates who
                will be a perfect fit for your organization.
              </p>
              <p className="mb-4">
                Our suite of tools simplifies listing and managing job posts,
                enhancing your talent acquisition strategy. Choose Academic Jobs
                not just for our prestigious status but for an unmatched level
                of customer service and support, ensuring you find the right
                academic talent effortlessly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            If you're interested in a great experience while saving time &
            money…{" "}
            <Link className="btn btn-aj" href="/job-ads">
              Post a Job Today
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
