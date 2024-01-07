import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title:
    'Fastest growing Academic Job Board with the best customer service & support', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Academic Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords:
    'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <>
      <main>
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/students-working-on-campus.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-white py-8">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-2xl md:text-4xl font-bold">
                Earn Extra Cash & Acquire Key Skills while Studying
              </h1>
              <p className="mb-5 text-sm md:text-lg">
                Get ahead of the curve by earning money and acquiring essential
                skills from diverse on-campus student jobs. These academic
                opportunities offer more than just income; they are pathways to
                practical work experience, that will enhance employability
                skills, and expand academic and social&nbsp;networks.
              </p>
              <Link className="btn btn-aj" href="/student">
                Find Student Jobs on Campus
              </Link>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <section className="container mx-auto px-4 mt-12">
          <h2 className="text-center mb-6">
            Need Cash? Fund your personal life with a student job…
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <Link href={`/student/student-part-time`}>
              <div className="badge badge-outline p-3">
                Part-Time Student Jobs
              </div>
            </Link>
            <Link href={`/student/student-casual`}>
              <div className="badge badge-outline p-3">Casual Student Jobs</div>
            </Link>
            <Link href={`/student/student-full-time`}>
              <div className="badge badge-outline p-3">
                Full-Time Student Jobs
              </div>
            </Link>
            <Link href={`/student`}>
              <div className="badge badge-outline p-3">
                Find All Student Jobs
              </div>
            </Link>
          </div>
          {/* Diverse Roles Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/diverse-student-jobs.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Diverse Roles: From Admin to Research in Academic Campus Jobs
              </h2>
              <p className="max-w-screen-sm">
                Academic student jobs on campus span administration, customer
                service, events, and more. Whether in marketing, IT, library
                services, research, teaching, or other vital university
                functions, these roles provide invaluable hands-on experience.
              </p>
              <p className="max-w-screen-sm">
                Students can immerse themselves in various aspects of campus
                life, enriching their educational journey with real-world skills
                and insights.
              </p>
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Search Student Jobs on Campus
                </Link>
              </div>
            </div>
          </div>
          {/* Flexible Part-Time Opportunities for Students Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/flexible-work-hours.jpg"
                alt="Work Part-Time with Flexible Opportunities for Students"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Flexible Part-Time Opportunities for Students
              </h2>
              <p className="max-w-screen-sm">
                Discover flexible part-time jobs on campus tailored for
                students. These positions are designed to fit around your class
                schedule, offering the perfect balance between work and study.
                From library assistants to campus tour guides, find a role that
                complements your academic life and builds your professional
                skills.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/student">
                  Earn Extra Cash
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Breakout Section */}
        <div className="bg-sky-200 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8 text-sky-700">
              {countryRegionPlural()} #1 Job Board for Student Jobs on Campus{' '}
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Academic Jobs stands out as the {countryRegionPlural()} premier
                platform for Student Jobs on Campus, celebrated for linking
                students with valuable on-campus employment opportunities. Our
                platform is meticulously crafted to meet the specific needs of
                student employment within academic settings.
              </p>
              <p className="mb-4">
                Facilitating ideal matches between students and various campus
                roles. Whether it's part-time positions or work-study
                opportunities, we connect you with roles that enhance your
                academic experience and provide practical work skills. Opt for
                Academic Jobs for unrivaled access to the{' '}
                {countryRegionPlural()} most sought-after student positions in
                academia.
              </p>
            </div>
          </div>
        </div>
        <section className="container mx-auto px-4 mt-12">
          {/* Gain Real-World Experience in Academic Settings Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/real-world-experience.jpg"
                alt="Experience the Real-World in Academic Settings"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Gain Real-World Experience in Academic Settings
              </h2>
              <p className="max-w-screen-sm">
                Step into roles that provide real-world experience right on a
                college campus. Engage in jobs that enhance your academic
                knowledge, such as research assistants or departmental aides.
                These positions not only offer practical experience but also a
                deeper understanding of your field of study.
              </p>
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Gain Valuable Skills
                </Link>
              </div>
            </div>
          </div>

          {/* Build Your Network with On-Campus Employment Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/networking-with-campus-jobs.jpg"
                alt="Build Your Network with On-Campus Employment"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Build Your Network with On-Campus Employment
              </h2>
              <p className="max-w-screen-sm">
                Working on campus is more than just a job; it's an opportunity
                to build your professional and academic network. Interact with
                faculty, staff, and fellow students in roles that expand your
                connections and open doors for future career opportunities.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/student">
                  Develop Your Network
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-sky-600">
              Let Academic Jobs buy your next beer or help fund your
              higher&nbsp;education…
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Unlock Your Potential with Campus Employment Opportunities from
                Academic Jobs. Our platform is tailored to help students like
                you find the ideal on-campus job that complements your academic
                schedule. Student Jobs on Campus can provide the cash you need
                to go out, buy a new gadget or pay eduction expenses?
              </p>
              <p className="mb-4">
                With Academic Jobs, you get access to a wide array of
                student-focused positions that not only provide a source of
                income but also enhance your university experience. From library
                aides to research assistants, we connect you to roles that align
                with your study goals and personal interests.
              </p>
              <blockquote>
                Let us guide you to opportunities that enrich your academic
                journey and prepare you for your future career.
              </blockquote>
              <p className="mb-4">
                Maximize Your College Experience with Academic Jobs. We
                understand the unique needs of student life, and our service is
                designed to simplify your job search on campus. Whether you're
                looking to develop professional skills, build your network, or
                manage your educational expenses, Academic Jobs is your go-to
                resource.
              </p>
            </div>
          </div>
        </div>
        <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link href="/academic-talent-pool" className="btn btn-aj">
              Join our Talent Pool
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
