'user client'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJob, setId, setStatusId } from '@/app/store/postsSlice';
import Job from './Job';
const JobList = ({ data, handlePageChange, page, isPlaceholderData }) => {
  let content;
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  content = data.jobs.map((job, index) => {
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-white p-4' : 'bg-white p-4 py-0'}`}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return (
    <div className="w-full">
      {content}
      <div className='flex justify-center gap-4'>
      <button onClick={() => handlePageChange('prev')} disabled={page === 0}>
        Previous Page
      </button>
      <span className="text-xs ">Current Page: {page + 1}</span>
      <button
        onClick={() => {
          if (!isPlaceholderData && data.hasMore) {
            handlePageChange('next')
          }
        }}
        className={`${(isPlaceholderData || !data?.hasMore) ? 'hidden' : 'block'}`}
        disabled={isPlaceholderData || !data?.hasMore}
      >
        Next Page
        </button>
      </div>
    </div>
  );
};
export default JobList;
