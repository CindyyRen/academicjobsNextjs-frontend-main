import Image from 'next/image';
import type { Metadata } from 'next';
import div from 'next/link';
export const metadata: Metadata = {
  title: 'Academic hub and Career Advice', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Are you looking for hub in academia? Read our blog posts to discover the secrets of well-being, work-life balance, and career satisfaction for academics.Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision. ',
  keywords: 'academic hub, AcademicJobs hub',
};
export default function myPage() {
  return (
   <>
    
    {/* Hero banner */}
   <main>
   <div className="hero max-h-fit bg-slate-200 py-8">
   <div className="container mx-auto">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <Image  
       
       width={1280}
         height={380}
         src="/job-ads/recruitment-post-a-job.jpg"
         className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
         alt="AI Powered Recruitment Platform"
       />
       <div>
         <h1 className="text-4xl font-bold text-aj">
         Academic Hub & Top Career Advice Today
         </h1>
         <p className="py-6">
         Are you looking for an academic hub, career advice, tips, and
   insights from academics and researchers? Check out these academic
   jobs blogs and learn from the experts in your field. Whether you are
   a PhD student, a postdoc, or a professor, you will find valuable
   information and inspiration to advance your academic career. Read
   these blogs now and discover the best opportunities and practices
   for academic hub.
         </p>
         <a href="/academic-talent-pool" className="btn btn-aj">
           Join our Talent Pool
         </a>
       </div>
     </div>
   </div>
 </div>
    <div className="max-w-screen-xl mx-auto ">
   
    
      <h2 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl mt-6 py-2">
        {" "}
        Top Academic Hub Posts
      </h2>
      <div className="bg-white flex flex-col">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch  px-1 mb-8 text-left px-4">
          <div className="/academic-hub/happiness-and-academics/">
            <div className="card bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Happiness and Academics: Scott Galloway's Algebra of hub{" "}
                </h2>
                <a className=" text-gray-400"> 10 Aug, 2023</a>
              </div>
              <figure>
                <Image  width={1280}
                height={380}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/how-to-be-a-happy-academic.jpg"
                  alt="Happiness and Academics: Scott Galloway's Algebra of hub"
                />
              </figure>
            </div>
          </div>
          <div className="/academic-hub/top-academic-jobs-australia/">
            <div className="card bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> Top Academic Jobs Australia </h2>
                <a className=" text-gray-400"> 10 Aug, 2023</a>
              </div>
              <figure>
                <Image  width={1280}
                height={380}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/top-academic-jobs-australia.jpg"
                  alt="Top Academic Jobs Australia"
                />
              </figure>
            </div>
          </div>
          <div className="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
            <div className="card bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  How to Land Your Dream College Job: A Step-by-Step Guide{" "}
                </h2>
                <a className=" text-gray-400"> 06 Jul, 2023</a>
              </div>
              <figure>
                <Image  width={1280}
                height={380}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Dream_Job_2.png"
                  alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                />
              </figure>
            </div>
          </div>
          <div className="/academic-hub/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise/">
            <div className="card bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Exploring the Benefits of Academic Jobs Online: Why Virtual
                  Hiring is on the Rise{" "}
                </h2>
                <a className=" text-gray-400"> 20 Jun, 2023</a>
              </div>
              <figure>
                <Image  width={1280}
                height={380}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Virtual_Hiring.png"
                  alt="Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise"
                />
              </figure>
            </div>
          </div>
          <div className="/academic-hub/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/">
            <div className="card bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Exploring the Global Landscape of Academic Jobs:
                  Opportunities and Challenges{" "}
                </h2>
                <a className=" text-gray-400"> 7 Jun, 2023</a>
              </div>
              <figure>
                <Image  width={1280}
                height={380}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Global_Opportunities_2.png"
                  alt="Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges"
                />
              </figure>
            </div>
          </div>
          <div className="/academic-hub/the-evolution-of-university-recruitment/">
            <div className="card bg-slate-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  The Evolution of University Recruitment: Embracing Digital
                  Platforms{" "}
                </h2>
                <a className=" text-gray-400"> 15 May, 2023</a>
              </div>
              <figure>
                <Image  width={1280}
                height={380}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Recruitment_Evolution_2.png"
                  alt="The Evolution of University Recruitment: Embracing Digital Platforms"
                />
              </figure>
            </div>
          </div>
        </ul>
      </div>

    

    {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md ">
          Most Rewarding University Careers
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-5 md:gap-8 py-2 px-7 pb-16">

            <div className="column">
                <ul className="">
                <li className="mb-1 mt-4">
                    <div className="/academic-hub/find-student-jobs-on-your-university-campus/" className="text-[#f4a10c] ">
                    Find Student Jobs on your University Campus
                    </div>
                  </li>
                
                </ul>
              </div>

              <div className="column">
                <ul className="">
                
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-qut-university-careers-here/" className="text-[#f4a10c] ">
                    Seek all QUT University Careers Here
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-qut-university-jobs-here/" className="text-[#f4a10c] ">
                    Seek all QUT University Jobs Here
                    </div>
                  </li>
                  
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <div
                      className="/academic-hub/seek-all-bond-university-careers-here/"
                      className="text-[#f4a10c] "
                    >
                      Seek all Bond University Careers Here
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-bond-university-jobs-here/" className="text-[#f4a10c] ">
                    Seek all Bond University Jobs Here
                    </div>
                  </li>
              
                 
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/start-your-career-at-harvard-university/" className="text-[#f4a10c] ">
                    Start your Career at Harvard University 
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-harvard-university-jobs-here/" className="text-[#f4a10c] ">
                    Seek all Harvard University Jobs Here
                    </div>
                  </li>
             
                  
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-ucla-jobs-here/" className="text-[#f4a10c] ">
                    Seek all UCLA Jobs Here
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/start-you-career-at-ucla/" className="text-[#f4a10c]">
                    Start you Career at UCLA
                    </div>
                  </li>
                </ul>
              </div>

             


            </div>
          </div>
        </div> */}


   
  </div>
  </main>
  </> 
  );
}
