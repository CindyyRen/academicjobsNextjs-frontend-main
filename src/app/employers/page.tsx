import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Find Employers', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision. ',
  keywords: 'Find Universities. Find employers, Find institutions',
};
export default function myPage() {
  return (
    <main className=" mx-auto">
   

      {/* Hero banner */}
      <section>
        <div className="hero max-h-fit bg-slate-200 py-8 mx-auto">
          <div className=" mx-auto">
            <div className="hero-content flex-col xl:flex-row-reverse mx-[12rem] max-w-full ">
              <Image
                src="/academic-job-postings/top-universities-worldwide.jpg"
                className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                width={1280}
                height={380}
                alt="The Top Academic Employers"
              />
              <div>
                <h1 className="text-3xl font-bold text-aj">
                  Find The  Top Academic Employers &
                  University Rankings
                </h1>

                <p className="py-6">
                  On AcademicJobs explore higher ed career opportunities at
                  universities worldwide. The find employerss page helps you to
                  learn more about the academic jobs that interest you and their
                  current job openings. You can view the employers’s profile,
                  which includes information such as their mission, vision,
                  values, history, achievements, and culture. Find your dream
                  academic job online at the university of your choice with
                  AcademicJobs.
                </p>
                <div className="card-actions flex ">
                  <Link href="/academic-talent-pool" className="btn btn-aj">
                    Join our Talent Pool
                  </Link>
                  <Link href="/job-ads" className="btn btn-aj">
                    Create Institutional Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className=" max-w-screen-2xl mx-auto">
        <h2 className="text-xl font-bold pt-4  px-10 text-[#f4a10c] ">
          ▼ University Region Selection{" "}
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container  flex flex-wrap  md:gap-8 py-2 px-16 pb-16 text-blue-500">
              <ul className=" flex flex-wrap gap-10">
                <li className="mb-1 mt-4 ">
                  <a href="#section" className="scroll-smooth md:scroll-auto ">
                    {" "}
                    United States{" "}
                  </a>
                </li>
                <li className="mb-1 mt-4 ">
                  <a href="#section1" className="scroll-smooth md:scroll-auto">
                    {" "}
                    Australia{" "}
                  </a>
                </li>

                <li className="mb-1 mt-4">
                  <a href="#section2" className="scroll-smooth md:scroll-auto">
                    {" "}
                    United Kingdom{" "}
                  </a>
                </li>
                <li className="mb-1 mt-4">
                  <a href="#section3" className="scroll-smooth md:scroll-auto">
                    {" "}
                    Asia{" "}
                  </a>
                </li>

                <li className="mb-1 mt-4">
                  <a href="#section3" className="scroll-smooth md:scroll-auto">
                    {" "}
                    Canada{" "}
                  </a>
                </li>
                <li className="mb-1 mt-4">
                  <a href="#section4" className="scroll-smooth md:scroll-auto">
                    {" "}
                    Europe{" "}
                  </a>
                </li>

                <li className="mb-1 mt-4">
                  <a href="#section5" className="scroll-smooth md:scroll-auto">
                    {" "}
                    South America{" "}
                  </a>
                </li>
                <li className="mb-1 mt-4">
                  <a href="#section6" className="scroll-smooth md:scroll-auto">
                    {" "}
                    New Zealand{" "}
                  </a>
                </li>

                <li className="mb-1 mt-4">
                  <a href="#section7" className="scroll-smooth md:scroll-auto">
                    {" "}
                    Middle East{" "}
                  </a>
                </li>
                <li className="mb-1 mt-4">
                  <a href="#section8" className="scroll-smooth md:scroll-auto">
                    {" "}
                    India{" "}
                  </a>
                </li>

                <li className="mb-1 mt-4">
                  <a href="#section9" className="scroll-smooth md:scroll-auto">
                    {" "}
                    Africa{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="region-container bg-white">
          <h2
            id="section"
            className="text-2xl font-bold py-3 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  mx-8"
          >
            UNITED STATES
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 ">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">California</li>
                <li>
                  <Link href="/employers/stanford-university/3101/">
                    Stanford University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/california-institute/4133/">
                    California Institute of Technology
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-san-francisco/3683/">
                    University of California - San Francisco
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-southern-california/3672/">
                    University of Southern California
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-berkeley/3105/">
                    University of California - Berkeley
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-los-angeles/3136/">
                    University of California - Los Angeles
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-san-diego/3149/">
                    University of California - San Diego
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-davis/3498/">
                    University of California - Davis
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-irvine/3689/">
                    University of California - Irvine
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-santa-barbara/5407/">
                    University of California - Santa Barbara
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-santa-cruz/3252/">
                    University of California - Santa Cruz
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-Rrverside/3268/">
                    University of California - Riverside
                  </Link>
                </li>
                <li>
                  <Link href="/employers/california-state-university-stanislaus/3414/">
                    California State University Stanislaus
                  </Link>
                </li>
                <li>
                  <Link href="/employers/cal-poly-pomona/3728/">
                    Cal Poly Pomona
                  </Link>
                </li>
                <li>
                  <Link href="/employers/california-state-university-monterey-bay/3313/">
                    California State University, Monterey Bay
                  </Link>
                </li>
                <li>
                  <Link href="/employers/caltech/3128/">Caltech</Link>
                </li>
                <li>
                  <Link href="/employers/grossmont-cuyamaca-community-college-district/3858/">
                    Grossmont–Cuyamaca Community College District
                  </Link>
                </li>
                <li>
                  <Link href="/employers/northeastern-university/3285/">
                    Northeastern University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/loyola-marymount-university/3637/">
                    Loyola Marymount University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/palomar-college/3612/">
                    Palomar College
                  </Link>
                </li>
                <li>
                  <Link href="/employers/san-diego-state-university/3693/">
                    San Diego State University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/saint-mary-s-college-of-california/3729/">
                    Saint Mary's College of California
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-california-office-of-the-president/3731/">
                    University of California Office of the President
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Massachusetts</li>
                <li>
                  <Link href="/employers/massachusetts-institute-of-technology/3103/">
                    Massachusetts Institute of Technology
                  </Link>
                </li>
                <li>
                  <Link href="/employers/harvard-university/3100/">
                    Harvard University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/boston-university/3190/">
                    Boston University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/boston-college/3604/">
                    Boston College
                  </Link>
                </li>
                <li>
                  <Link href="/employers/tufts-university/3460/">
                    Tufts University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/northeastern-university/3285/">
                    Northeastern University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/brandeis-university/3617/">
                    Brandeis University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/anna-jaques-hospital/3235/">
                    Anna Jaques Hospital
                  </Link>
                </li>
                <li>
                  <Link href="/employers/dana-farber-cancer-institute/3108/">
                    Dana-Farber Cancer Institute
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Georgia</li>
                <li>
                  <Link href="/employers/emory-university/3372/">
                    Emory University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/georgia-institute-of-technology/3154/">
                    Georgia Institute of Technology
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Florida</li>
                <li>
                  <Link href="/employers/university-of-miami/5475/">
                    University of Miami
                  </Link>
                </li>
                <li>
                  <Link href="/employers/miami-university/3350/">
                    Miami University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-florida/3394/">
                    University of Florida
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">
                  North Carolina
                </li>
                <li>
                  <Link href="/employers/duke-university/3139/">
                    Duke University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-north-carolina/5503/">
                    University of North Carolina
                  </Link>
                </li>
                <li>
                  <Link href="/employers/the-university-of-north-carolina-at-chapel-hill/3679/">
                    University of North Carolina at Chapel Hill
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-north-carolina-wilmington/3253/">
                    University of North Carolina Wilmington
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">New york</li>
                <li>
                  <Link href="/employers/columbia-university/3127/">
                    Columbia University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/new-york-university-nyu/3144/">
                    New York University NYU
                  </Link>
                </li>
                <li>
                  <Link href="/employers/Cornell-University/3138/">
                    Cornell University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/Brown-University/3308/">
                    Brown University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/University-of-Rochester/5527/
                                                            "
                  >
                    University of Rochester
                  </Link>
                </li>
                <li>
                  <Link href="/employers/fordham-university/3685/">
                    Fordham University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/hofstra-university/3545/">
                    Hofstra University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/princeton-university/3104/">
                    Princeton University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/rutgers-the-state-university-of-new-jersey/3255/">
                    Rutgers, The State University of New Jersey
                  </Link>
                </li>
                <li>
                  <Link href="/employers/st-john-s-university/3375/">
                    St. John's University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/stony-brook-university/3456/">
                    Stony Brook University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-at-buffalo/3609/
                                        "
                  >
                    {" "}
                    University at Buffalo
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Pennsylvania</li>
                <li>
                  <Link
                    href="/employers/university-of-pennsylvania/3131/
                                                            "
                  >
                    University of Pennsylvania
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/carnegie-mellon-university/3146/
                                                            "
                  >
                    Carnegie Mellon University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/bucknell-university/3309/
                                            "
                  >
                    Bucknell University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/duquesne-university/3330/
                            "
                  >
                    Duquesne University
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Illinois</li>
                <li>
                  <Link
                    href="/employers/University-of-Chicago/3126/
                                                            "
                  >
                    University of Chicago
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/Northwestern-University/3143/
                                                            "
                  >
                    Northwestern University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/northern-illinois-university/3415/
                                                                "
                  >
                    Northern Illinois University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-illinois-at-urbana-champaign/3164/
                                                                "
                  >
                    University of Illinois at Urbana-Champaign
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Michigan</li>
                <li>
                  <Link
                    href="/employers/university-of-michigan/3142/
                                                                    "
                  >
                    University of Michigan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/michigan-state-university/3654/
                                                                        "
                  >
                    Michigan State University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/wayne-state-university/3499/
                                                                            "
                  >
                    {" "}
                    Wayne State University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold"> All States</li>
                <li>
                  <Link href="/employers/yale-university/3125/">
                    Yale University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-washington/3145/
                                            "
                  >
                    University of Washington
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/johns-hopkins-university/3130/
                                                            "
                  >
                    Johns Hopkins University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/dartmouth-college/3327/">
                    Dartmouth College
                  </Link>
                </li>
                <li>
                  <Link href="/employers/rice-university/5067/">
                    Rice University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/vanderbilt-university/5603/
                                                            "
                  >
                    Vanderbilt University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/washington-university-in-st-louis/3655/
                                                            "
                  >
                    Washington University in St. Louis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-notre-dame/3879/
                                                            "
                  >
                    University of Notre Dame
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-virginia/3484/
                                                            "
                  >
                    University of Virginia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/georgetown-University/3522/
                                                            "
                  >
                    Georgetown University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-texas-at-austin/3166/
                                                            "
                  >
                    University of Texas at Austin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-wisconsin-madison/3404/
                                                            "
                  >
                    University of Wisconsin - Madison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-mississippi-medical-center/3109/
                                                            "
                  >
                    University of Mississippi Medical Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-minnesota-twin-cities/3684/
                                                                "
                  >
                    University of Minnesota Twin Cities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/the-ohio-state-university/3669/
                                                                    "
                  >
                    {" "}
                    The Ohio State University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-cincinnati/3393/
                                                                        "
                  >
                    {" "}
                    University of Cincinnati
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-tennessee-knoxville/3401/
                                                                        "
                  >
                    {" "}
                    University of Tennessee, Knoxville
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-alabama-at-birmingham/3387/
                                                                                "
                  >
                    {" "}
                    University of Alabama at Birmingham
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/indiana-university-purdue-university-indianapolis/3658/
                                                                                            "
                  >
                    {" "}
                    Indiana University Purdue University Indianapolis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/the-university-of-iowa/3483/
                                                                                                "
                  >
                    {" "}
                    The University of Iowa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-kentucky/3510/
                                                                                                    "
                  >
                    {" "}
                    University of Kentucky
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/oregon-state-university/3813/
                                                                                                        "
                  >
                    {" "}
                    Oregon State University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-nebraska-medical-center/3712/
                                                                                                            "
                  >
                    University of Nebraska Medical Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/washington-state-university/3722/
                                                                                                                "
                  >
                    Washington State University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/university-of-maryland-baltimore-county/3775/
                                                                                                                    "
                  >
                    University of Maryland, Baltimore County
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="region-container">
            <div>
              <h2
                id="section1"
                className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
              >
                AUSTRALIA
              </h2>
              <div className="bg-gradient-to-b to-white from-orange-100 m-8 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
                  <ul>
                    <li className="mb-1 text-[#f4a10c] font-bold">ACT</li>
                    <li>
                      <Link href="/employers/australian-national-university/3739/">
                        Australian National University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-canberra/3821/">
                        University of Canberra
                      </Link>
                    </li>
                    <li className="mb-1 text-[#f4a10c] font-bold">
                      New South Wales
                    </li>

                    <li>
                      <Link href="/employers/the-university-of-sydney/3171/">
                        The University of Sydney
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-new-south-wales/3738/">
                        University of New South Wales
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/charles-sturt-university/3855/">
                        Charles Sturt University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/australian-catholic-university/3853/">
                        Australian Catholic University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/southern-cross-university/3862/">
                        Southern Cross University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-technology-sydney/3864/">
                        University of Technology, Sydney
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/macquarie-university/3881/">
                        Macquarie University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-new-england/3209/">
                        University of New England England
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-newcastle/3863/">
                        University of Newcastle
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-western-sydney/3865/">
                        University of Western Sydney
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-wollongong/3866/">
                        University of Wollongong
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 text-[#f4a10c] font-bold">Victoria</li>
                    <li>
                      <Link
                        href="/employers/university-of-melbourne/3170/
                                        "
                      >
                        The University of Melbourne
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/monash-university/3182/
                                        "
                      >
                        Monash University
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/victoria-university/3871/
                                    "
                      >
                        Victoria University
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/university-of-divinity/3872/
                                    "
                      >
                        University of Divinity
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/swimburne-university-of-technology/10541/
                                    "
                      >
                        Swinburne University of Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/rmit-university/3869/
                                    "
                      >
                        RMIT University
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/la-trobe-university/3868/
                                    "
                      >
                        La Trobe University
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/deakin-university/3856/
                                    "
                      >
                        Deakin University
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/employers/federation-university/3787/
                                    "
                      >
                        Federation University Australia
                      </Link>
                    </li>
                    <li className="mb-1 text-[#f4a10c] font-bold">Tasmania</li>
                    <li>
                      <Link
                        href="/employers/university-of-tasmania/3867/
                                    "
                      >
                        The University of Tasmania
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 text-[#f4a10c] font-bold">
                      Queensland
                    </li>
                    <li>
                      <Link
                        href="/employers/bond-university/3785/
                                    "
                      >
                        Bond University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-queensland/3172/">
                        The University of Queensland
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/cquniversity/3854/">
                        CQUniversity
                      </Link>
                    </li>

                    <li>
                      <Link href="/employers/griffith-university/3860/">
                        Griffith University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/james-cook-university/3857/">
                        James Cook University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-southern-queensland/3861/">
                        University of Southern Queensland
                      </Link>
                    </li>
                    <li className="text-[#003463] font-bold">
                      <Link href="/employers/queensland-university-of-technology-qut-/3786/">
                        Queensland University of Technology
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-sunshine-coast/3859/">
                        University of Sunshine Coast
                      </Link>
                    </li>
                    <li className="mb-1 ">
                      <Link
                        href="/find-jobs/northern-territory/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Northern Territory
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/charles-darwin-university/3880/">
                        Charles Darwin University
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="mb-1 text-[#f4a10c] font-bold">
                      South Australia
                    </li>
                    <li>
                      <Link href="/employers/the-university-of-adelaide/3737/">
                        The University of Adelaide
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/carnegie-mellon-university/3146/">
                        Carnegie Mellon University
                      </Link>{" "}
                    </li>
                    <li>
                      <Link href="/employers/torrens-university-australia/3875/">
                        Torrens University Australia
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-south-australia/3874/">
                        University of South Australia
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/flinders-university/3873/">
                        Flinders University
                      </Link>
                    </li>
                    <li className="mb-1 text-[#f4a10c] font-bold">
                      Western Australia
                    </li>
                    <li>
                      <Link href="/employers/university-of-western-australia/3173/">
                        The University of Western Australia
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/university-of-notre-dame/3879/">
                        University of Notre Dame
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/murdoch-university/3878/">
                        Murdoch University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/edith-cowan-university/3877/">
                        Edith Cowan University
                      </Link>
                    </li>
                    <li>
                      <Link href="/employers/curtin-university/3876/">
                        Curtin University
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section9"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            AFRICA
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7  mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Egypt</li>
                <li>
                  <Link href="/employers/cairo-university/6226/">
                    Cairo University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/american-university-in-cairo/5798/">
                    American University in Cairo
                  </Link>
                </li>
                <li>
                  <Link href="/employers/alexandria-university/5713/">
                    Alexandria University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">South Africa</li>
                <li>
                  <Link href="/employers/university-of-cape-town/12637/">
                    University of Cape Town
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-the-witwatersrand/13133/">
                    University of the Witwatersrand
                  </Link>
                </li>
                <li>
                  <Link href="/employers/stellenbosch-university/13008/">
                    Stellenbosch University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-pretoria/12935/">
                    University of Pretoria
                  </Link>
                </li>
                <li>
                  <Link href="/employers/12787/university-of-kwazulu-natal/">
                    University of KwaZulu-Natal
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Nigeria</li>
                <li>
                  <Link href="/employers/university-of-ibadan/12743/">
                    University of Ibadan
                  </Link>
                </li>
                <li>
                  <Link href="/employers/ahmadu-bello-university/6388/">
                    Ahmadu Bello University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-lagos/12789/">
                    University of Lagos
                  </Link>
                </li>
                <li>
                  <Link href="/employers/obafemi-awolowo-university/9482/">
                    Obafemi Awolowo University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-nigeria-nsukka/12881/">
                    University of Nigeria, Nsukka
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Kenya</li>
                <li>
                  <Link href="/employers/university-of-nairobi/12866/">
                    University of Nairobi
                  </Link>
                </li>
                <li>
                  <Link href="/employers/kenyatta-university/8470/">
                    Kenyatta University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/strathmore-university/10485/">
                    Strathmore University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/moi-university/9051/">
                    Moi University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/egerton-university/7048/">
                    Egerton University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Morocco</li>
                <li>
                  <Link href="/employers/university-mohammed-v-of-rabat/12453/">
                    University Mohammed V of Rabat
                  </Link>
                </li>
                <li>
                  <Link href="/employers/cadi-ayyad-university/12262/">
                    Cadi Ayyad University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/hassan-ii-university-of-casablanca/12426/">
                    Hassan II University of Casablanca
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Ghana</li>
                <li>
                  <Link href="/employers/university-of-ghana/12711/">
                    University of Ghana
                  </Link>
                </li>
                <li>
                  <Link href="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">
                    Kwame Nkrumah University of Science and Technology
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-cape-coast/12636/">
                    University of Cape Coast
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Senegal</li>
                <li>
                  <Link href="/employers/cheikh-anta-diop-university/12272/">
                    Cheikh Anta Diop University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Tunisia</li>
                <li>
                  <Link href="/employers/university-of-tunis-el-manar/12393/">
                    University of Tunis El Manar
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-sfax/12370/">
                    University of Sfax
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-carthage/12303/">
                    University of Carthage
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Uganda</li>
                <li>
                  <Link href="/employers/makerere-university/8875/">
                    Makerere University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/uganda-martyrs-university/10962/">
                    Uganda Martyrs University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/kyambogo-university/8660/">
                    Kyambogo University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section3"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            ASIA
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Singapore</li>
                <li>
                  <Link href="/employers/nanyang-technological-university-singapore/3152/">
                    Nanyang Technological University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/national-university-of-singapore/3137/">
                    National University of Singapore
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Malaysia</li>
                <li>
                  <Link href="/employers/universiti-ualaya/12499/">
                    Universiti Malaya (UM)
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">China</li>
                <li>
                  <Link href="/employers/peking-university/3133/">
                    Peking University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/tsinghua-university/3840/">
                    Tsinghua University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/fudan-university/7289/">
                    Fudan University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/shanghai-jiao-tong-university/6876/">
                    Shanghai Jiao Tong University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Japan</li>
                <li>
                  <Link href="/employers/university-of-tokyo/3155/">
                    University of Tokyo
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Indonesia</li>
                <li>
                  <Link href="/employers/the-university-of-indonesia/12068/">
                    The University of Indonesia
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Thailand</li>
                <li>
                  <Link href="/employers/chulalongkorn-university/6615/">
                    Chulalongkorn University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Hong Kong</li>
                <li>
                  <Link href="/employers/university-of-hong-kong/3148/">
                    University of Hong Kong
                  </Link>
                </li>
                <li>
                  <Link href="/employers/chinese-university-of-hong-kong/3161/">
                    Chinese University of Hong Kong
                  </Link>
                </li>
                <li>
                  <Link href="/employers/the-hong-kong-university-of-science-and-technology/3843/">
                    The Hong Kong University of Science and Technology
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">South Korea</li>
                <li>
                  <Link href="/employers/seoul-national-university/10119/">
                    Seoul National University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section4"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            CANADA
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Alberta</li>
                <li>
                  <Link href="/employers/university-of-alberta/3837/">
                    University of Alberta
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-calgary/12631/">
                    University of Calgary
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Quebec</li>
                <li>
                  <Link href="/employers/mcgill-university/3162/">
                    McGill University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/universite-de-montreal/3836/">
                    Universite De Montreal
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-waterloo/3838/">
                    University of Waterloo
                  </Link>
                </li>
                <li>
                  <Link href="/employers/laval-university/12443">
                    Laval University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Ontario</li>
                <li>
                  <Link href="/employers/university-of-toronto//3134/">
                    University of Toronto
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-british-columbia/3157/">
                    University of British Columbia
                  </Link>
                </li>
                <li>
                  <Link href="/employers/simon-fraser-university/10280/">
                    Simon Fraser University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/mcmaster-university/3835/">
                    McMaster University
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/employers/university-of-ottawa/12910/">
                    University of Ottawa
                  </Link>
                </li>
                <li>
                  <Link href="/employers/york-university/13421/">
                    York University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/queens-university/9836/">
                    Queen's University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section2"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            UNITED KINGDOM
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">England</li>
                <li>
                  <Link href="/employers/university-of-cambridge/12635/">
                    University of Cambridge
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-oxford/3099/">
                    University of Oxford
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-college-london/12527/">
                    University College London
                  </Link>
                </li>
                <li>
                  <Link href="/employers/imperial-college-london/3129/">
                    Imperial College London
                  </Link>
                </li>
                <li>
                  <Link href="/employers/london-school-of-economics-and-political-science/3153/">
                    London School of Economics and Political Science
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-manchester/3833/">
                    University of Manchester
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-birmingham/12614/">
                    University of Birmingham
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-leeds/12797/">
                    University of Leeds
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Scotland</li>
                <li>
                  <Link href="/employers/university-of-edinburgh/12681/">
                    University of Edinburgh
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-glasgow/12713/">
                    University of Glasgow
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-aberdeen/12555/">
                    University of Aberdeen
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-st-andrews/13005/">
                    University of St Andrews
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-dundee/12669/">
                    University of Dundee
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Wales</li>
                <li>
                  <Link href="/employers/cardiff-university/6252/">
                    Cardiff University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/swansea-university/10538/">
                    Swansea University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/aberystwyth-university/13115/">
                    Aberystwyth University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/bangor-university/13116/">
                    Bangor University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">
                  Northern Ireland
                </li>
                <li>
                  <Link href="/employers/queens-university-belfast/10799/">
                    Queen's University Belfast
                  </Link>
                </li>
                <li>
                  <Link href="/employers/ulster-university/13098/">
                    Ulster University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section5"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            SOUTH AMERICA
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Brazil</li>
                <li>
                  <Link href="/employers/university-of-sao-paulo/11463/">
                    University of São Paulo
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-campinas/11490/">
                    University of Campinas
                  </Link>
                </li>

                <li>
                  <Link href="/employers/universidade-federal-do-rio-grande-do-sul/11544/">
                    Universidade Federal do Rio Grande do Sul
                  </Link>
                </li>

                <li>
                  <Link href="/employers/universidade-federal-de-são-paulo/11526/">
                    Universidade Federal de São Paulo (UNIFESP)
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Argentina</li>
                <li>
                  <Link href="/employers/universidad-de-buenos-aires/11196/">
                    Universidad de Buenos Aires
                  </Link>
                </li>

                <li className="mb-1 text-[#f4a10c] font-bold">Colombia</li>
                <li>
                  <Link href="/employers/universidad-de-los-andes/11308/">
                    Universidad de los Andes
                  </Link>
                </li>

                <li>
                  <Link href="/employers/icesi-university/11648/">
                    Icesi University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Chile</li>
                <li>
                  <Link href="/employers/pontificia-universidad-catolica-de-chile/9739/">
                    Pontificia Universidad Catolica de Chile
                  </Link>
                </li>
                <li>
                  <Link href="/employers/universidad-alberto-hurtado/11012/">
                    Universidad Alberto Hurtado
                  </Link>
                </li>
                <li>
                  <Link href="/employers/universidad-de-santiago-de-chile/11384/">
                    Universidad de Santiago de Chile
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-antofagasta/11189/">
                    University of Antofagasta
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Peru</li>
                <li>
                  <Link href="/employers/universidad-alas-peruanas/11010/">
                    Universidad Alas Peruanas
                  </Link>
                </li>
                <li>
                  <Link href="/employers/universidad-peruana-cayetano-heredia/11856/">
                    Universidad Peruana Cayetano Heredia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section6"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            NEW ZEALAND
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">North Island</li>
                <li>
                  <Link href="/employers/the-university-of-auckland/3809/">
                    The University of Auckland
                  </Link>
                </li>
                <li>
                  <Link href="/employers/victoria-university-of-wellington/3807/">
                    Victoria University of Wellington
                  </Link>
                </li>
                <li>
                  <Link href="/employers/waikato-university/3806/">
                    Waikato University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/auckland-university-of-technology/3804/">
                    Auckland University of Technology (AUT)
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">South Island</li>
                <li>
                  <Link href="/employers/university-of-otago/3805/">
                    University of Otago
                  </Link>
                </li>
                <li>
                  <Link href="/employers/lincoln-university/3808/">
                    Lincoln University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/massey-university/3810/">
                    Massey University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/university-of-canterbury/3811/">
                    University of Canterbury
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section7"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            MIDDLE EAST
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Saudi Arabia</li>
                <li>
                  <Link href="/employers/king-saud-university-saudi-arabia/8522/">
                    King Saud University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/king-abdullah-university-of-science-and-technology-saudi-arabia/8513/">
                    King Abdullah University of Science and Technology
                  </Link>
                </li>
                <li>
                  <Link href="/employers/king-abdul-aziz-university-saudi-arabia/8512/">
                    King Abdul Aziz University
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">UAE</li>
                <li>
                  <Link href="/employers/khalifa-university-uae/8481/">
                    Khalifa University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/united-arab-emirates-university-uae/10985/">
                    United Arab Emirates University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/american-university-in-dubai-uae/5799/">
                    American University in Dubai
                  </Link>
                </li>
                <li>
                  <Link href="/employers/american-university-of-sharjah-uae/5815/">
                    American University of Sharjah
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Lebanon</li>
                <li>
                  <Link href="/employers/american-university-of-beirut-lebanon/5804/">
                    American University of Beirut
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Jordan</li>
                <li>
                  <Link href="/employers/university-of-jordan-jordan/12763/">
                    University of Jordan
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Qatar</li>
                <li>
                  <Link href="/employers/qatar-university-qatar/12944/">
                    Qatar University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section8"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            INDIA
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Mumbai</li>
                <li>
                  <Link href="/employers/indian-institute-of-technology-bombay/3844/">
                    Indian Institute of Technology Bombay
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Chennai</li>
                <li>
                  <Link href="/employers/indian-institute-of-technology-madras/3845/">
                    Indian Institute of Technology Madras
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Vellore</li>
                <li>
                  <Link href="/employers/vellore-institute-of-technology/3846/">
                    Vellore Institute of Technology
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Bangalore</li>
                <li>
                  <Link href="/employers/indian-institute-of-science/7818/">
                    Indian Institute of Science (IISc)
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Delhi</li>
                <li>
                  <Link href="/employers/indian-institute-of-technology-delhi/7822/">
                    Indian Institute of Technology Delhi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2
            id="section4"
            className="text-2xl font-bold py-3 px-7 mx-8 border-2 border-[#f4a10c] text-[#f4a10c] rounded-full shadow-md  "
          >
            EUROPE
          </h2>
          <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">France</li>
                <li>
                  <Link href="/employers/paris-sciences-et-lettres/3163/">
                    Paris Sciences et Lettres
                  </Link>
                </li>
                <li>
                  <Link href="/employers/ecole-polytechnique/3158/">
                    Ecole Polytechnique
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Sweden</li>
                <li>
                  <Link href="/employers/karolinska-institute/3165/">
                    Karolinska Institute
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Germany</li>
                <li>
                  <Link href="/employers/heidelberg-university/3160/">
                    Heidelberg University
                  </Link>
                </li>
                <li>
                  <Link href="/employers/lmu-munich-ludwig-maximilians-universitat/3150/">
                    LMU Munich (Ludwig Maximilians Universität München)
                  </Link>
                </li>
                <li>
                  <Link href="/employers/technische-uiniversitat-munchen/10702/">
                    Technische Universität München
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Denmark</li>
                <li>
                  <Link href="/employers/the-university-of-copenhagen/3156/">
                    University of Copenhagen
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Switzerland</li>
                <li>
                  <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Belgium</li>
                <li>
                  <Link href="/employers/ku-leuven/3159/">KU Leuven</Link>
                </li>
              </ul>

              <ul>
                <li className="mb-1 text-[#f4a10c] font-bold">Netherlands</li>
                <li>
                  <Link href="/employers/delft-university-of-technology/3847/">
                    Delft University of Technology
                  </Link>
                </li>
                <li className="mb-1 text-[#f4a10c] font-bold">Italy</li>
                <li>
                  <Link href="/employers/University-of-Bologna/12015/">
                    University of Bologna
                  </Link>
                </li>

                <li className="mb-1 text-[#f4a10c] font-bold">Spain</li>
                <li>
                  <Link href="/employers/universitat-de-barcelona/12195/">
                    Universitat de Barcelona
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
