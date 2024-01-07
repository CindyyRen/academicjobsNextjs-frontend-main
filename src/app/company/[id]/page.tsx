import Job from '@/components/Job';
import React from 'react';

interface Job {
  id: string;
}

interface JobData {
  employer_id: number;
  id: number;
  master_category_job_type: string;
  job_type: string;
  region: string | null;
  country: string;
  state: string;
  city: string;
  activation_date: string;
  description: string;
  title: string;
  location: string;
  how_to_apply: string;
  expiration_date: string;
  featured: number;
  company_description: string;
  company_name: string;
  logo: string;
  website: string;
  employer_location: string;
}

interface ApiResponse {
  status: string;
  code: number;
  data: Job[];
}
interface JobApiResponse {
  status: string;
  code: number;
  data: JobData;
}
type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 86400;

export async function getJobs(): Promise<ApiResponse> {
  const response = await fetch('https://api2.sciencejobs.com.au/api/jobs1');
  const res: ApiResponse = await response.json();
  console.log(res);
  return res;
}
export async function getJob(id: string): Promise<JobApiResponse> {
  // const response = await fetch(`https://dummyjson.com/products/${Number(id)}`);
  const response = await fetch(`https://api2.sciencejobs.com.au/api/job/${id}`);
  const res: JobApiResponse = await response.json();
  console.log('==========================');
  console.log(res);
  return res;
}

export async function generateStaticParams(): Promise<Job[]> {
  try {
    const res = await getJobs();
    const jobs = res.data; // Assuming res is already an array of jobs

    return jobs.map((job) => ({
      id: job.id.toString(),
      // Add other properties here if needed
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return []; // Return an empty array in case of an error
  }
}

export async function generateMetadata({ params: { id } }: Props) {
  const job = await getJob(id); //deduped!
  // const job = res.data;

  if (!job) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: job.data.title,
  };
}

export default async function Page({ params: { id } }: Props) {
  const res = await getJob(id);
  const job = res.data;
  console.log(res);
  return <>{<p>{job.id}</p>}</>;
}
