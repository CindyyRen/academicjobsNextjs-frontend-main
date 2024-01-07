import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
export const metadata: Metadata = {
  title: 'Post a job - Recruit Academics', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};
export default function myPage() {
  return (
    <>
      <main className="">
        <div className="blurb text-left pb-4">
          {/* Hero banner */}
          <div className="hero max-h-fit bg-slate-200 py-8">
            <div className="container mx-auto">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                  width={800}
                  height={534}
                  src="/job-ads/recruitment-post-a-job.jpg"
                  className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
                  alt="AI Powered Recruitment Platform"
                />
                <div>
                  <h1 className="text-4xl font-bold text-aj">
                    Find your Best Academic & Support Talent
                  </h1>
                  <p className="py-6">
                    Find exactly who you need on AcademicJobs.com… Post your
                    Academic, Higher Education and Admin/Support Staff ad and be
                    amazed as the right candidates for the job come to you.
                  </p>
                  <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="px-4 hidden">
            <picture className="max-w-screen-xl mx-auto">
              <Image
                width={1280}
                height={380}
                src="https://academicjobs.s3.amazonaws.com/img/banner/Recruitment-Academic-Jobs.jpg"
                alt="Academic Employers"
                className="rounded-t-3xl md:rounded-3xl shadow-xl"
              />
            </picture>

            <div className="text-xl max-w-screen-xl mx-auto mb-4">
              <ul className="p-4 pt-0 md:mt-[-20rem] mb-[8rem] pl-4 bg-gray-200 rounded-b-3xl md:bg-none">
                <div className="text-xl ">
                  <h2 className="text-[#f4a10c] text-[2.35rem] md:text-[4.5rem] font-bold md:mt-8 md:pt-4 mt-2">
                    FIND YOUR BEST
                  </h2>

                  <div
                    className=" md:pt-12 md:pb-16 "
                    style={{ marginTop: '10px' }}
                  >
                    Recruit academics & all Higher Ed staff with Academic Jobs.{' '}
                  </div>
                </div>
                <div className="flex justify-between gap-8 "></div>
                <button>
                  <Link href="/job-ads">
                    <h1
                      className="btn btn-aj"
                      // className="border-2 border-[#f4a10c] rounded-full p-2 px-4 text-white hover:bg-[#f4a10c] text shadow-xl font-bold  md:mt-0 mt-4 bg-orange-200/50 mb-2"
                    >
                      Post a Job
                    </h1>
                  </Link>
                </button>

                <button>
                  <Link href="/job-ads">
                    <h2 className="border-4 border-[#f4a10c] rounded-full p-2 px-4 text-black hover:bg-[#f4a10c]  text shadow-xl font-bold  md:mt-0 ml-12 hidden">
                      Packages
                    </h2>
                  </Link>
                </button>
              </ul>
            </div>
          </div>
          <div className="mt-8">&nbsp;</div>

          <PricingTable />

          <div className=" rounded-3xl mx-4 hidden">
            <div className="max-w-screen-xl mx-auto ">
              <div className="newLine text-center max-w-screen-lg mx-auto mt-8">
                <div className="py-2 px-7 rounded-2xl text-center mt-12">
                  <h2 className="newLine pt-4 text-2xl font-bold text-[#f4a10c] pb-2">
                    Packages
                  </h2>
                  <p>
                    #1 for Affordability and Academic Talent Delivery. All
                    prices are in USD.
                  </p>
                  <div className="newLine mb-2"></div>
                </div>
                <div className="newLine mb-2"></div>
              </div>
              <div className="max-w-1380 mx-auto ">
                <div className="my-4" id="packages">
                  <div className="text-center mb-35"></div>
                  <div className="p-4 grid-cols-1 grid md:flex md:flex-wrap justify-center gap-3 max-w-screen-2xl mx-auto">
                    {/* Single Job Posting */}
                    <div className="md:w-[24%] bg-[white] border border-gray-300 p-4 mb-4 shadow-xl">
                      <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]">
                        {' '}
                      </div>
                      <h3 className="font-bold text-2xl text-center text-[#f4a10c] pt-2">
                        Single Job Posting
                      </h3>
                      <p className="text-center">Explore our classic ads.</p>
                      <div className="flex flex-col mt-5">
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Basic Post</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$315</p>
                            <Link href="/payment/0" className="btn hidden">
                              Buy
                            </Link>
                            <a href="/job-ads" className="btn">
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Priority Listing</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$465</p>
                            <Link href="/payment/1" className="btn hidden">
                              Buy
                            </Link>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=15"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Social+Priority</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$615</p>
                            <Link href="/payment/2" className="btn hidden">
                              Buy
                            </Link>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=16"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">HR Jobs</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$99</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=29"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-7.2">
                        <p className="text-[#f4a10c] font-bold">
                          Package includes:
                        </p>
                        <ul className="pl-8">
                          <li> - 30 day single job listing</li>
                          <li> - Free employer account</li>
                          <li> - Ad performance metrics</li>
                          <li> - Edit your job posting anytime</li>
                        </ul>
                      </div>
                    </div>
                    {/* 5 Job Pack */}
                    {/* <div className="md:w-[24%] bg-gradient-to-t from-white to-amber-500  p-4 mb-10  border border-gray-300 p-4 mb-4  shadow-xl"> */}
                    <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 shadow-xl">
                      <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]"></div>
                      <h3 className="font-bold text-2xl text-center text-[#f4a10c] pt-2">
                        5 Job Pack
                      </h3>
                      <p className="text-center text-black pb-5">
                        Post 5 Jobs at anytime.
                      </p>
                      <p className="btn-aj bg-white rounded-full p-3 font-bold text-1xl text-center text-[#f4a10c]  mb-5 items-center shadow-lg">
                        MOST POPULAR
                      </p>
                      <div className="flex flex-col mt-5">
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold ">Basic Post</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$1,418</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=17"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Priority Listing</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$2,168</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=29"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Social+Priority</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$2,918</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=34"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-7.2">
                        <p className="text-[#f4a10c] font-bold">
                          Package includes:
                        </p>
                        <ul className="pl-8">
                          <li> - 30 day job listings</li>
                          <li> - Edit your job postings anytime</li>
                          <li> - Job credits do not expire</li>
                          <li> - Saving 10%</li>
                        </ul>
                      </div>
                    </div>
                    {/* 10 Job Pack */}
                    <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 shadow-xl">
                      <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]">
                        {' '}
                      </div>
                      <h3 className="font-bold text-2xl text-center text-[#f4a10c] pt-2">
                        10 Job Pack
                      </h3>
                      <p className="text-center pb-[4.3rem]">
                        Post 10 jobs at anytime.
                      </p>
                      <div className="flex flex-col mt-5">
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Basic Post</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$2,520</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=18"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Priority Listing</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$4,020</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=35"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">Social+Priority</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$5,520</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=36"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-7.2">
                        <p className="text-[#f4a10c] font-bold">
                          Package includes:
                        </p>
                        <ul className="pl-8">
                          <li> - 30 day single job listings</li>
                          <li> - Edit your job postings anytime</li>
                          <li> - Job credits do not expire</li>
                          <li> - Saving 20%</li>
                        </ul>
                      </div>
                    </div>
                    {/* Unlimited Packs */}
                    <div className="md:w-[24%] bg-[white]  p-4 mb-10  border border-gray-300 shadow-xl">
                      <div className="bg-[#f4a10c] pt-2 mt-[-1rem] mx-[-1rem]">
                        {' '}
                      </div>
                      <h3 className="font-bold text-2xl text-center pt-2 text-[#f4a10c]">
                        Unlimited Packs
                      </h3>
                      <p className="text-center pb-[2.8rem]">
                        Fairly based on how many employees you have.
                      </p>
                      <div className="flex flex-col mt-5">
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">{'< 2000 Staff'}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$14,000</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=26"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">{'< 4000 Staff'}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$19,000</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=19"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-between mb-5 items-center">
                          <p className="font-bold">{'> 4000 Staff'}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-xl">$26,000</p>
                            <a
                              href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=23"
                              className="btn"
                            >
                              Buy
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-7.2">
                        <p className="text-[#f4a10c] font-bold">
                          Package includes:
                        </p>
                        <ul className="pl-8">
                          <li> - Use anytime within 12 months</li>
                          <li> - Edit your job postings anytime</li>
                          <li> - Job credits do not expire</li>
                          <li> - Saving 70%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-center">
                    <p className="mb-0">
                      <a href="/pricing/" className="text-yellow-400">
                        <strong></strong>
                      </a>
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gray-200 py-4  mx-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="newLine text-center max-w-screen-xl mx-auto ">
              <div className=" px-7 rounded-2xl text-center">
                <h2 className="newLine  text-2xl font-bold text-amber-500 pb-2">
                  Job Listing Options
                </h2>
                <p>
                  AcademicJobs connects the world's academic employers with top
                  academic talent, post your job openings and find qualified
                  candidates today.{' '}
                </p>
              </div>
            </div>

            <div className="cont1 md:flex md:flex-wrap grid-cols-1 grid justify-center  md:gap-0 gap-3 pt-4">
              <div className="w-auto md:w-1/3 p-4">
                <div className="long-box border-4   rounded-3xl text-center text-[#f4a10c] shadow-xl">
                  <Image
                    width={1280}
                    height={380}
                    alt="Job seeking bell notification icon"
                    className="rounded-3xl"
                    src="https://academicjobs.s3.amazonaws.com/img/_misc/SingleJobListingDemo.png"
                  />
                </div>
              </div>
              <div className="w-auto md:w-1/3 p-4">
                <div className="long-box border-4 rounded-3xl   text-[#f4a10c] shadow-xl">
                  <Image
                    width={1280}
                    height={380}
                    alt="Employer attraction icon"
                    className="rounded-3xl"
                    src="https://academicjobs.s3.amazonaws.com/img/_misc/PriorityListingDemo.png"
                  />
                </div>
              </div>
              <div className="w-auto md:w-1/3 p-4">
                <div className="long-box border-4   rounded-3xl  text-[#f4a10c] shadow-xl">
                  <Image
                    width={1280}
                    height={380}
                    alt="Secure profile icon"
                    className="rounded-3xl"
                    src="https://academicjobs.s3.amazonaws.com/img/_misc/SocialPlusPriorityListingDemo.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-right">
            <a href="#pricing-table-cards" className="btn btn-aj mr-4">
              Pricing Details →
            </a>
          </p>
        </div>

        {/* <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex md:flex-wrap grid-cols-1 grid justify-center my-4 md:gap-0 gap-3 pt-12 mt-10 pb-4">
          <div className="w-auto md:w-1/4 p-4 ">
            <div className="long-box p-4 rounded-3xl  text-[#f4a10c]  mt-4">
              <h3 className=" text-2xl pb-4">
                Let us go above and beyond for&nbsp;you.
              </h3>

              <p className="text-gray-400">
                We proudly offer a service that goes beyond the recruitment
                process. Our industry connections and customer care
                differentiate us from any other organisation.
              </p>
            </div>
          </div>
          <div className="w-auto md:w-1/4 pt-2">
            <div className="long-box   rounded-3xl text-center  text-[#f4a10c]">
              <Image  width={1280}
                height={380}
                alt="Employer attraction icon"
                className="seeker-icons pt-8"
                src="https://academicjobs.s3.amazonaws.com/icon/AcademicJobs-world.png"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-4 rounded-3xl mx-4">
          <div className="p-4 flex">
            <div className="w-auto md:w-1/5 sm:mx-auto md:ml-auto">
              <div className="long-box rounded-3xl text-center text-[#f4a10c] ">
                <Image  width={1280}
                height={380}
                  alt="Job seeking bell notification icon"
                  className="seeker-icons pr-4"
                  src="https://academicjobs.s3.amazonaws.com/icon/AcademicJobs-marketing.png"
                />
              </div>
            </div>
            <div className="w-auto md:w-1/4 sm:mx-auto pl-16 md:mr-auto">
              <div className="long-box  rounded-3xl   text-[#f4a10c]">
                <h3 className="text-2xl pt-10 pb-4">
                  Recruitment marketing is the key to talent attraction.
                </h3>
                <p className="text-gray-400">
                  Let our innovative approaches go above and beyond to work for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center my-4 gap-3 pt-12 mt-10 pb-8 pr-4 rounded-3xl mx-4 bg-gradient-to-l from-white via-white to-amber-100 mb-8 shadow-md">
            <div className="p-4 ">
              <div className="long-box p-4 rounded-3xl  text-[#f4a10c]  mt-4">
                <h3 className=" text-2xl pb-4">
                  Let us go above and beyond for&nbsp;you.
                </h3>
                <p className="text-gray-400">
                  We proudly offer a service that goes beyond the recruitment
                  process. Our industry connections and customer care
                  differentiate us from any other organisation.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <div className="long-box   rounded-3xl text-center  text-[#f4a10c]">
                <Image
                  width={1280}
                  height={380}
                  alt="Employer attraction icon"
                  className="seeker-icons pt-8 "
                  src="https://academicjobs.s3.amazonaws.com/icon/AcademicJobs-world.png"
                />
              </div>
            </div>
          </div>

          <div className="max-w-screen-lg mx-auto">
            <div className=" rounded-3xl mx-4 bg-gradient-to-l from-white to-amber-300 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <div>
                  <div className="long-box rounded-3xl text-center text-[#f4a10c] ">
                    <Image
                      width={1280}
                      height={380}
                      alt="Job seeking bell notification icon"
                      className="seeker-icons pr-[5rem] p-4"
                      src="https://academicjobs.s3.amazonaws.com/icon/AcademicJobs-marketing.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="long-box  rounded-3xl   text-[#f4a10c]">
                    <h3 className="text-2xl pt-10 pb-4">
                      Recruitment marketing is the key to talent attraction.
                    </h3>
                    <p className="text-gray-400">
                      Let our innovative approaches go above and beyond to work
                      for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="cont1 md:grid md:grid-cols-2 grid-cols-1 grid justify-center my-4 md:gap-0 gap-3 pt-12 mb-10 pb-4 m-4 mt-8 rounded-3xl bg-gradient-to-l from-white via-white to-orange-100 shadow-md">
              <div className="w-auto  p-4 ">
                <div className="long-box p-4 rounded-3xl  text-[#f4a10c]  mt-4">
                  <h3 className=" text-2xl pb-4">
                    Your Institution Deserves the&nbsp;Best.
                  </h3>

                  <p className="text-gray-400">
                    Join global leading institutions in finding top academic
                    talent. Join the premiere league of top institutions that we
                    have helped level up their recruitment.
                  </p>
                </div>
              </div>
              <div className="w-auto pt-2">
                <div className="long-box   rounded-3xl text-center  text-[#f4a10c]">
                  <Image
                    width={1280}
                    height={380}
                    alt="academicjobs university logos"
                    className="seeker-icons "
                    src="https://academicjobs.s3.amazonaws.com/img/_misc/academicjobs-university-logos-min.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-200">
          <div className="max-w-screen-lg mx-auto">
            <div className="  mx-4 ">
              <div className="flex grid-cols-1 md:grid-cols-2 gap-3 ">
                <div>
                  <div className="long-box rounded-3xl text-center text-[#f4a10c] ">
                    <Image
                      width={1280}
                      height={380}
                      alt="Job seeking bell notification icon"
                      className="seeker-icons  p-4 pb-0 "
                      src="https://academicjobs.s3.amazonaws.com/img/banner/QUT-profile-min.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="long-box  rounded-3xl w-1/4  text-blue-900 font-bold">
                    <h3 className="md:text-3xl md:pt-[10rem] pt-10">
                      We Make Your Profile Matter.
                    </h3>
                    <p className="text-gray-400"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-ful bg-[#f4ac10] border rounded-full md:my-2 md:mb-4 shadow-xl mt-8"></hr>

        {/* <section className="w-full mx-auto text-center">
        <picture className="bg-white min-w-full max-w-2xl mx-auto">
          <Image  width={1280}
                height={380}
            src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
            alt="job elephant logo"
          />
        </picture>

        
        <div className=' max-w-screen-2xl mx-auto'>
        <div className="blurb text-left py-8 px-4">
          <h1 className="text-3xl font-bold py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl">Advertising made easy</h1>
          <div className="newLine mb-4">
            <p className="font-semibold"></p>
            <p className="font-semibold"></p>
          </div>
          
          
          
          
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
           <iframe class=" aspect-video  " src="https://www.youtube.com/embed/4ULtabQbmPs?si=olef1FK2Ao9Zzdpg" title="YouTube video player"></iframe>

           <iframe class=" aspect-video " src="https://www.youtube.com/embed/lMKlaQIC8lk?si=bO4_2gP-3UjU1tad" title="YouTube video player"></iframe>
         
          <iframe class=" aspect-video " src="https://www.youtube.com/embed/QhDUx_05bGc?si=syVHl-FqyM4KLyCx" title="YouTube video player"></iframe>


          </div>
          </div>
          </div>

        <div className=" rounded-3xl">
          <Image  width={1280}
                height={380}
            src="https://academicjobs.s3.amazonaws.com/img/_misc/academicjobs-university-logos-min.png"
            alt="academicjobs university logos"
            className=" rounded-3xl shadow-xl hidden"
          />
        </div>
      </section> */}
        <section className="w-full mx-auto text-center">
          <picture className="bg-white min-w-full max-w-2xl mx-auto">
            <Image
              width={1280}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
              alt="job elephant logo"
              className="mx-auto"
            />
          </picture>

          <div className="rounded-3xl">
            <Image
              width={1280}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/academicjobs-university-logos-min.png"
              alt="academicjobs university logos"
              className="rounded-3xl shadow-xl hidden mx-auto"
            />
          </div>
        </section>
      </main>
    </>
  );
}
