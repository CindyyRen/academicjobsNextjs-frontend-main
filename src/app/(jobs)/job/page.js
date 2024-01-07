'use client';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillShareFill } from "react-icons/bs";
import { useSearchParams } from 'next/navigation'
import BaseApi from '@/lib/store/Base';
const Job = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const { data: job, isSuccess, isLoading, isError, error } = useQuery({
        queryKey: ["job", id],
        queryFn: async () => {
            const response = await BaseApi.get(
                `/job/${id}`,
            );
            console.log(response.data);
            console.log('response.data.data', response.data.data);
            return response.data.data;
        },
        // enabled: id,
    });
    if (isLoading) {
        // Loading state...
        return (
            <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
                {/* Placeholder or skeleton UI for loading state */}
                <div className="p-4 animate-pulse">
                    <div className="w-1/4 pr-4">
                        <div className="rounded-xl bg-gray-300 h-16 w-full"></div>
                    </div>
                    <div className="w-3/4">
                        <div className="text-2xl font-bold mb-2 bg-gray-300 h-8 w-3/4"></div>
                        <div className="mb-4 bg-gray-300 h-4 w-1/2"></div>
                        {/* ... (other placeholder UI) */}
                    </div>
                </div>
            </div>
        );
    }
    if (isError) {
        return <div>Error fetching job</div>;
    }
    const {
        employer_id,
        id: jobId,
        company_name,
        logo,
        title,
        location,
        activation_date,
        expiration_date,
        description,
        how_to_apply,
        featured,
    } = job;
    return (
        <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
            <div className="flex items-center p-4">
                <div className="w-1/4 pr-4">
                    <Link
                        href={`/employers/${company_name?.replace(/\W+/g, '-').toLowerCase()}/${employer_id}/`}
                    >
                        <Image
                            className="w-full rounded-xl"
                            src={logo || ''}
                            alt={company_name}
                            width={300}
                            height={200}
                        />
                    </Link>
                </div>
                <div className="w-3/4">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <div className="mb-4">
                        <Link href={`/employers/id/${id}`}>
                            {location}
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <button
                            target="_blank"
                            className="px-4 py-2 bg-[#f4a10c] text-white font-bold rounded-full"
                            data-toggle="modal"
                            data-target="#apply-modal"
                            data-title={title}
                            rel=""
                            onClick={() => {
                                let subject = `Application for ${title} position at ${company_name} from AcademicJobs.com`;
                                if (how_to_apply.includes('@')) {
                                    window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(subject)}`;
                                } else {
                                    window.open(how_to_apply, '_blank');
                                    //window.location.href = how_to_apply;
                                }
                            }}
                        >
                            Apply Now
                        </button>
                        <div className="ml-4">
                            <div className="">
                                <div
                                    onClick={() => {
                                        setIsOpen(true);
                                    }}
                                >
                                    <BsFillShareFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-6 bg-white border-2 border-[#f4a10c] p-4 mb-4 rounded-lg shadow-lg" '>
                {/* ... (rest of the component remains unchanged) */}
            </div>
            <article
                className="wrapper media bg-white border-2 border-2-gray-300 p-4 mb-4 rounded-lg shadow-lg"
                data-id={jobId}
            >
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <div className="mt-5 mb-0 text-right">Join Talent Pool</div>
            </article>
            {new Date(expiration_date) < new Date() && expiration_date && (
                <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
                    Job Fulfilled By AcademicJobs.com
                </div>
            )}
        </div>
    );
};
export default Job;
