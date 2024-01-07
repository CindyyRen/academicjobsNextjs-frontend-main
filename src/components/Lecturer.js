import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { setJob, setId, setEmployer } from "../store/postsSlice";
import SearchResults from "./SearchResults";
import lecturerData from "@/data/lecturer.json";
import { Helmet } from "react-helmet";
const Lecturer = () => {
  const dispatch = useDispatch();
  let { lecturer } = useParams();
  lecturer = lecturer?.replace(/-/g, " ");
  console.log(lecturer);

  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const keyWordRef = useRef("");
  const locationRef = useRef("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {};
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim();
    if (locationRef.current.value.trim())
      a.l = locationRef.current.value.trim();
    navigate("/jobs/", {
      state: {
        q: keyWordRef.current.value.trim(),
        l: locationRef.current.value.trim(),
      },
    });
  };

  const {
    Name,
    Title,
    Description,
    Keyword,
    content: content1,
  } = lecturerData.find((item) => item.Name === lecturer);
  let content;
  console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="container mx-auto flex-col gap-2">
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <meta name="keywords" content={Keyword} />
      </Helmet>
      <h1 className="max-h-50 overflow-y  border border-[#f4a10c] text-gray-500 p-4 mb-4 rounded-lg shadow-lg">
        {Title}
      </h1>
      <Link className="text-[#f4a10c] mb-4 " to="/lecturer/">
        View all Lecturer Jobs →
      </Link>
      <div className="max-h-50 overflow-y  border border-[#f4a10c] text-gray-500 p-4 mb-4 rounded-lg shadow-lg">
        {content1}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form
            className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full "
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border  text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
              //defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border  text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#f4a10c] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
              Find Jobs
            </button>
          </form>
        </div>
      </div>

      <SearchResults q={{ q: Name }} />
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
};
export default Lecturer;
