export const blurb = {
  remote: `Step into the future of work with our remote job platform, breaking free from the 9-to-5 routine. Whether you're a seasoned professional or a newcomer, explore tailored opportunities across diverse industries. Escape the confines of a physical office and unlock the potential of working from your own space, reshaping your work-life balance. 
    Discover flexibility to align your professional pursuits with your lifestyle choices. Find the ideal remote job transcending geographical boundaries. Join us in embracing a future where your workspace is as flexible as your ambitions. Redefine your career through our comprehensive remote job platform, unleashing boundless possibilities wherever you choose your path to be. `,
  "full-time": `Are you ready to take the next leap in your career journey? We are actively seeking a dedicated and passionate professional to join our dynamic team in a full-time role. As a key player in our organization, you will have the opportunity to contribute your expertise and make a significant impact. 
    If you thrive in a collaborative environment, possess a strong work ethic, and are eager to take on new challenges, we invite you to apply. This is more than just a job – it's a chance to grow and excel in a supportive and innovative workplace. Join us on this exciting journey and let's build a successful future together. Your next career adventure awaits – apply now!`,
  "part-time": `Embark on a rewarding journey to boost your career while maintaining flexibility with our curated part-time job search platform. Discover exciting opportunities that align with your skills and interests, allowing you to strike the perfect balance between work and personal life. 
    Whether you're a student, a parent, or someone seeking supplementary income, our user-friendly interface connects you with diverse part-time positions tailored to your schedule. Unleash your potential, gain valuable experience, and redefine your work-life equilibrium. Your next fulfilling part-time adventure awaits – start your search today!`,
  casual: `Dive into a new job adventure with our casual job search platform! Whether you're a student or a seasoned professional, discover flexible gigs tailored to your skills and schedule. From remote positions to vibrant on-site roles, we've curated diverse opportunities just for you. 
    Join our community and connect with employers who value your unique talents. Simplify your job search, take control of your work-life balance, and find your dream gig in just a few clicks. Your next exciting opportunity awaits – let's make it happen together!`,
};
export const filterType = [
  "Country",
  "State",
  "City",
  "Institution Name",
  "Job Type(i.e. Faculty, Human Resources)",
  "Faculty/Department(i.e. Science, Business)",
  "Academic Position Type(i.e. Lecturer, Fellow)",
  "Executive Jobs(i.e. Directors, Registrars)",
  // 'Faculty Jobs(i.e. Dentistry, Geography)',
  "Employment Type(i.e. Full-time, casual)",
  "Salary Range in USD",
  "Onsite/Remote",
];
export const countryMappings = {
  australia: "Australia",
  asia: "Asia",
  africa: "Africa",
  "new zealand": "New-Zealand",
  canada: "Canada",
  europe: "Europe",
  india: "India",
  global: "Global",
  "united states": "USA",
  "united kingdom": "UK",
};
export const countryMappings2 = {
  global: { url:'Global', menu: "Global", searchLocation: "", hasPic: true },
  australia: {
    url: 'Australia', 
    menu: "Australia",
    searchLocation: "Australia",
    searchLocation1: "Australia",
    hasPic: true,
  },
  asia: { url: 'Asia', menu: "Asia", searchLocation: "Asia", hasPic: false },
  africa: { url: 'Africa', menu: "Africa", searchLocation: "Africa", hasPic: false },
  canada: { url: 'Canada', menu: "Canada", searchLocation: "Canada", hasPic: true },
  europe: { url: 'Europe', menu: "Europe", searchLocation: "Europe", hasPic: false },
  india: { url: 'India', menu: "India", searchLocation: "India", hasPic: true },
  "south-america": {
    url: 'South-America', 
    menu: "South America",
    searchLocation: "South America",
    hasPic: false,
  },
  "middle-east": {
    url: 'Middle-East', 
    menu: "Middle East",
    searchLocation: "Middle East",
    hasPic: false,
  },
  "new-zealand": {
    url: 'New-Zealand', 
    menu: "New Zealand",
    searchLocation: "New Zealand",
    hasPic: true,
  },
  "uk": {
    url: 'UK', 
    menu: "United Kingdom",
    searchLocation: "United Kingdom",
    hasPic: true,
  },
  "usa": {
    url: 'USA', 
    menu: "USA",
    searchLocation: "United States",
    searchLocation1: "USA",
    hasPic: true,
  },
};
export const countryMappings1 = {
  Global: { menu: "Global", searchLocation: "", hasPic: true },
  Australia: {
    menu: "Australia",
    searchLocation: "Australia",
    searchLocation1: "Australia",
    hasPic: true,
  },
  Asia: { menu: "Asia", searchLocation: "Asia", hasPic: false },
  Africa: { menu: "Africa", searchLocation: "Africa", hasPic: false },
  Canada: { menu: "Canada", searchLocation: "Canada", hasPic: true },
  Europe: { menu: "Europe", searchLocation: "Europe", hasPic: false },
  India: { menu: "India", searchLocation: "India", hasPic: true },
  "South-America": {
    menu: "South America",
    searchLocation: "South America",
    hasPic: false,
  },
  "Middle-East": {
    menu: "Middle East",
    searchLocation: "Middle East",
    hasPic: false,
  },
  "New-Zealand": {
    menu: "New Zealand",
    searchLocation: "New Zealand",
    hasPic: true,
  },
  UK: {
    menu: "United Kingdom",
    searchLocation: "United Kingdom",
    hasPic: true,
  },
  USA: {
    menu: "USA",
    searchLocation: "United States",
    searchLocation1: "USA",
    hasPic: true,
  },
};
// export const filter2 = {
//     'UCLA-lecturer': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//         ],
//         keyword: 'lecturer'
//     },
//     'UCLA-research': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//         ],
//         keyword: 'Research'
//     },
//     'UCLA-professor': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//         ],
//         keyword: 'Professor'
//     },
//     'UCLA-Executive': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//             {
//                 category: "Job Type(i.e. Faculty, Human Resources)",
//                 filter: "Executive ",
//             },
//         ],
//         keyword: ''
//     },
//     'UCLA-Administration': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//             {
//                 category: "Job Type(i.e. Faculty, Human Resources)",
//                 filter: "Support /Administration",
//             },
//         ],
//         keyword: ''
//     },
//     'UCLA-Human-Resources': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//         ],
//         keyword: 'Human Resources'
//     },
//     'UCLA-jobs': {
//         filter: [
//             {
//                 category: "Institution Name",
//                 filter: "University of California, Los Angeles",
//             },
//         ],
//         keyword: ''
//     },
// };
export const filter2 = {
  "auckland-lecturer": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
    ],
    keyword: "lecturer",
  },
 
  "auckland-research": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
    ],
    keyword: "Research",
  },
  "auckland-professor": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
    ],
    keyword: "Professor",
  },
  "auckland-executive": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
     
    ],
    keyword: "Executive",
  },
  "auckland-admin": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
      {
        category: "Job Type(i.e. Faculty, Human Resources)",
        filter: "Support /Administration",
      },
    ],
    keyword: "",
  },
  "auckland-hr": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
    ],
    keyword: "hr",
  },
  "auckland": {
    filter: [
      {
        category: "Institution Name",
        filter: "The University of Auckland",
      },
    ],
    keyword: "",
  },
  "UCLA-lecturer": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
    ],
    keyword: "Lecturer",
  },
  "UCLA-research": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
    ],
    keyword: "Research",
  },
  "UCLA-professor": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
    ],
    keyword: "Professor",
  },
  "UCLA-Executive": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
      {
        category: "Job Type(i.e. Faculty, Human Resources)",
        filter: "Executive ",
      },
    ],
    keyword: "",
  },
  "UCLA-Administration": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
      {
        category: "Job Type(i.e. Faculty, Human Resources)",
        filter: "Support /Administration",
      },
    ],
    keyword: "",
  },
  "UCLA-Human-Resources": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
    ],
    keyword: "Human Resources",
  },
  "UCLA-jobs": {
    filter: [
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
    ],
    keyword: "",
  },
  "remote": {
    filter: [
      {
        category: "Onsite/Remote",
        filter: "yes",
      },
    ],
    keyword: "",
  },
  "full-time": {
    filter: [
      {
        category: "Employment Type(i.e. Full-time, casual)",
        filter: "Full time",
      },
    ],
    keyword: "",
  },
  "part-time": {
    filter: [
      {
        category: "Employment Type(i.e. Full-time, casual)",
        filter: "Part time",
      },
    ],
    keyword: "",
  },
  "casual": {
    filter: [],
    keyword: "casual",
  },
};

