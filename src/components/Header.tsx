'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import NavItem from '@/components/NavItem';
import {
  countryMappings,
  countryMappings1,
  countryMappings2,
} from '@/lib/data/data';
export default function Header() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const region = 'Global';

  //alert(router.pathname)
  // const region = useSelector((state) => state.posts.region);
  // console.log(region)
  const handleFormSubmit = () => {};
  // const handleFormSubmit = () => {
  //   if (region !== "Global") {
  //     navigate("/jobs/", {
  //       state: { q: "", l: countryMappings1[region].searchLocation },
  //     });
  //   } else {
  //     const fetchLocation1 = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66"
  //         );
  //         const result = await response.json();
  //         return result.country.name;
  //       } catch (error) {
  //         return "";
  //       }
  //     };
  //     fetchLocation1()
  //       .then((country) => {
  //         //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
  //         //alert(countryMappings[country.toLowerCase()])
  //         //alert(countryMappings[country.toLowerCase()])
  //         dispatch(setRegion(countryMappings[country.toLowerCase()]));
  //         //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
  //         //alert(region)
  //         //dispatch(setSearchJobCriteria(a))
  //         //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
  //         navigate("/jobs/", {
  //           state: {
  //             q: "",
  //             l: countryMappings1[countryMappings[country.toLowerCase()]]
  //               .searchLocation,
  //           },
  //         });
  //         //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //   }
  //   setIsNavOpen(false);
  // };
  // const ref = useRef(null);
  // const onMouseEnter = (e) => {
  //   setDropdown(true);
  // };
  // const onMouseLeave = () => {
  //   setDropdown(false);
  // };
  // const closeDropdown = () => {
  //   dropdown && setDropdown(false);
  // };
  //const location = useLocation();
  return (
    <div className="flex w-full items-center  justify-between md:justify-start gap-12 border-gray-400 py-8 px-8">
      <Link href="/" className="">
        {pathname === '/' || <LogoAJ width={200} height={100} />}
      </Link>
      <nav className="md:w-full">
        <div className="DESKTOP-MENU w-full justify-between  space-x-1 lg:flex">
          <div className="w-full columns-1 flex justify-start  md:items-center md:gap-1 ">
            <NavItem
              url="/find-jobs"
              icon="/dotted-arrow.svg"
              navLink="Seek Jobs"
              forceClass="" //this is optional
            />
            <NavItem
              url="/employers"
              icon="/upward-arrow.svg"
              navLink="Top Universities"
            />
            <NavItem
              url="/academic-hub"
              icon="/network-icon.svg"
              navLink="My Academic Hub"
            />
            {/* <Link
              className={`p-2  md:w-52  dropdown-content z-[1] menu px-4 py-2  bg-base-100 rounded-box w-31 } `}
              
              style={{ maxWidth: "62px" }}
             
            >
              <div
                className="  text-gray-900 relative"
                
              >
                {countryMappings1[region].hasPic ? (
                  <Image
                    src={`https://academicjobs.s3.amazonaws.com/icon/countryFlag/${region}.svg`}
                    alt={region}
                    style={{ height: "30px" }}
                  />
                ) : (
                  <span className="" style={{ height: "20px" }}>
                    {" "}
                    {region}{" "}
                  </span>
                )}
                <ul
                
                  className={`${dropdown ? "block" : "hidden"
                    } absolute  left-0 text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg shadow-lg shadow-indigo-500/40`}
                  
                >
                  {Object.keys(countryMappings1).map((key) => (
                    <li className="navbar__item" key={key}>
                      <Link
                        href={`/${key}/`}
                        region={key}
                        setDropdown={setDropdown}
                        setIsNavOpen={setIsNavOpen}
                        className="navbar__link"
                      >
                        {countryMappings1[key].menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Link> */}
          </div>
          <div className=" w-[200px] grid items-center justify-center ">
            {/* <Link
              href="/post-job/"
              className="text-[#f4a10c]  font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
              activeClassName="post-a-job"
            >
              Post A Job
            </Link> */}
            <Link
              className="nav-link nav-link-ltr whitespace-nowrap rounded-2xl  "
              href={`/recruitment`}
            >
              <span className="font-bold  ">⬛ Recruitment </span>
            </Link>
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: end;
        background: rgba(0,0,0,.4);
      }
    `}</style>
    </div>
  );
}
