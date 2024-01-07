import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Job = ({ job }) => {
  const router = useRouter();
  let content;
  //console.log(job)
  //let logo = '', company_name = ''
  const {
    employer_id,
    title,
    location,
    activation_date,
    expiration_date,
    how_to_apply,
    logo,
    company_name,
    featured,
    id,
  } = job;
  content = (
    <>
      <article
        className="media bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg"
        data-id="59973"
        // onClick={() => {
        //   //window.history.pushState({}, "New Page Title", `/jobs/${title?.replace(/\W+/g, '-').toLowerCase()}/${id}/`);
        //   const params = new URLSearchParams({
        //     id: encodeURIComponent(id),
        //   });
        //   router.push(`/job?${params.toString()}`)
        // }}
      >
        {featured ? (
          <div className="badge badge-sm badge-featured bg-[#f4a10c] text-white absolute top-[-0.3rem] right-[-0.3rem] border-transparent items-end pt-1">
            Featured
          </div>
        ) : (
          ''
        )}
        <div className="flex items-center  mb-2">
          <div className="w-20 h-20 mr-4">
            {/* <Link to={`/employers/${company_name}/${employer_id}/`}> */}
            {/* <Image
              src={logo || '/favicon.png'}
              alt={company_name}
              className="w-full h-full object-contain rounded-lg"
            /> */}
            {/* </Link> */}
          </div>
          <div className="flex-1">
            <Link
              // href={`/job?id=${id}`}
              href={`/company//${id}`}
              className="block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer"
            >
              {title}
            </Link>
            {/* <div className="hidden-xs mt-2">
            {featured ? <span className="inline-block bg-[#f4a10c] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">Featured</span> : ''}
          </div> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700 font-light">{location}</div>
          </div>
          <div className="applications-close border-4 rounded p-1">
            <p className="expiry-date-heading">Applications Close</p>
            <div className="expiry-date">
              {expiration_date ? (
                <time>
                  {new Date(expiration_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              ) : (
                <p className="text-center">NA</p>
              )}
            </div>
          </div>
          {new Date(expiration_date) < new Date() && expiration_date && (
            <div className="bg-opacity-50 bg-red-500 text-white  text-sm px-1 py-1 rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-[35deg] skew-y-0">
              Job Fulfilled By AcademicJobs.com
            </div>
          )}
        </div>
      </article>
    </>
  );
  return <div className="overflow-y w-full relative">{content}</div>;
};
export default Job;
