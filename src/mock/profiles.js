const profiles = [
  {
    id: 1,
    name: "Arun Kumar",
    age: 28,
    profession: "Software Engineer",
    location: "Coimbatore",
    height: "5.8 ft",
    education: "B.E",
    about: "Simple, family-oriented and loves travel.",
    images: [
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
      "https://randomuser.me/api/portraits/men/13.jpg"
    ]
  },
  {
    id: 2,
    name: "Kavya Priya",
    age: 26,
    profession: "UI/UX Designer",
    location: "Chennai",
    height: "5.4 ft",
    education: "B.Sc Visual Communication",
    about: "Creative designer who loves art and music.",
    images: [
      "https://randomuser.me/api/portraits/women/21.jpg",
      "https://randomuser.me/api/portraits/women/22.jpg",
      "https://randomuser.me/api/portraits/women/23.jpg"
    ]
  },
  {
    id: 3,
    name: "Vignesh R",
    age: 30,
    profession: "Business Analyst",
    location: "Bangalore",
    height: "5.9 ft",
    education: "MBA",
    about: "Passionate about data and business growth.",
    images: [
      "https://randomuser.me/api/portraits/men/31.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg"
    ]
  },
  {
    id: 4,
    name: "Divya S",
    age: 25,
    profession: "Doctor",
    location: "Madurai",
    height: "5.3 ft",
    education: "MBBS",
    about: "Helping people and saving lives is my passion.",
    images: [
      "https://randomuser.me/api/portraits/women/41.jpg",
      "https://randomuser.me/api/portraits/women/42.jpg"
    ]
  },
  {
    id: 5,
    name: "Ramesh B",
    age: 32,
    profession: "Civil Engineer",
    location: "Trichy",
    height: "5.10 ft",
    education: "B.E Civil",
    about: "Building strong structures and stronger relationships.",
    images: [
      "https://randomuser.me/api/portraits/men/51.jpg"
    ]
  },
  {
    id: 6,
    name: "Meera K",
    age: 27,
    profession: "Teacher",
    location: "Salem",
    height: "5.5 ft",
    education: "M.A English",
    about: "Teaching is not a job, it's my passion.",
    images: [
      "https://randomuser.me/api/portraits/women/61.jpg"
    ]
  },
  {
    id: 7,
    name: "Suresh V",
    age: 29,
    profession: "Software Developer",
    location: "Coimbatore",
    height: "5.8 ft",
    education: "B.Tech IT",
    about: "Coding, coffee and continuous learning.",
    images: [
      "https://randomuser.me/api/portraits/men/71.jpg"
    ]
  },
  {
    id: 8,
    name: "Lakshmi Devi",
    age: 24,
    profession: "Fashion Designer",
    location: "Chennai",
    height: "5.4 ft",
    education: "Diploma in Fashion Design",
    about: "Designing dreams into reality.",
    images: [
      "https://randomuser.me/api/portraits/women/11.jpg"
    ]
  },
  {
    id: 9,
    name: "Prakash M",
    age: 31,
    profession: "Architect",
    location: "Bangalore",
    height: "5.11 ft",
    education: "B.Arch",
    about: "Designing modern living spaces.",
    images: [
      "https://randomuser.me/api/portraits/men/21.jpg"
    ]
  },
  {
    id: 10,
    name: "Anitha R",
    age: 26,
    profession: "HR Manager",
    location: "Coimbatore",
    height: "5.3 ft",
    education: "MBA HR",
    about: "People management is my strength.",
    images: [
      "https://randomuser.me/api/portraits/women/31.jpg"
    ]
  },
  {
    id: 11,
    name: "Karthik S",
    age: 28,
    profession: "DevOps Engineer",
    location: "Hyderabad",
    height: "5.9 ft",
    education: "B.E CSE",
    about: "Automation and cloud enthusiast.",
    images: [
      "https://randomuser.me/api/portraits/men/41.jpg"
    ]
  },
  {
    id: 12,
    name: "Nithya K",
    age: 25,
    profession: "Nurse",
    location: "Madurai",
    height: "5.2 ft",
    education: "B.Sc Nursing",
    about: "Care and compassion define me.",
    images: [
      "https://randomuser.me/api/portraits/women/51.jpg"
    ]
  },
  {
    id: 13,
    name: "Manoj P",
    age: 33,
    profession: "Manager",
    location: "Chennai",
    height: "5.10 ft",
    education: "MBA",
    about: "Leading teams and achieving goals.",
    images: [
      "https://randomuser.me/api/portraits/men/61.jpg"
    ]
  },
  {
    id: 14,
    name: "Swetha L",
    age: 27,
    profession: "Data Analyst",
    location: "Bangalore",
    height: "5.5 ft",
    education: "M.Sc Statistics",
    about: "Turning data into insights.",
    images: [
      "https://randomuser.me/api/portraits/women/71.jpg"
    ]
  },
  {
    id: 15,
    name: "Rajesh K",
    age: 29,
    profession: "Mechanical Engineer",
    location: "Salem",
    height: "5.9 ft",
    education: "B.E Mechanical",
    about: "Machines and innovation excite me.",
    images: [
      "https://randomuser.me/api/portraits/men/15.jpg"
    ]
  },
  {
    id: 16,
    name: "Priya M",
    age: 24,
    profession: "Content Writer",
    location: "Coimbatore",
    height: "5.4 ft",
    education: "B.A English",
    about: "Words are my world.",
    images: [
      "https://randomuser.me/api/portraits/women/16.jpg"
    ]
  },
  {
    id: 17,
    name: "Dinesh R",
    age: 30,
    profession: "Network Engineer",
    location: "Chennai",
    height: "5.8 ft",
    education: "B.Sc IT",
    about: "Keeping networks running smoothly.",
    images: [
      "https://randomuser.me/api/portraits/men/17.jpg"
    ]
  },
  {
    id: 18,
    name: "Harini S",
    age: 26,
    profession: "Pharmacist",
    location: "Trichy",
    height: "5.3 ft",
    education: "B.Pharm",
    about: "Healthcare and medicine lover.",
    images: [
      "https://randomuser.me/api/portraits/women/18.jpg"
    ]
  },
  {
    id: 19,
    name: "Senthil V",
    age: 34,
    profession: "Senior Developer",
    location: "Bangalore",
    height: "5.10 ft",
    education: "MCA",
    about: "Experienced full-stack developer.",
    images: [
      "https://randomuser.me/api/portraits/men/19.jpg"
    ]
  },
  {
    id: 20,
    name: "Aishwarya N",
    age: 25,
    profession: "Graphic Designer",
    location: "Chennai",
    height: "5.5 ft",
    education: "B.Des",
    about: "Design is my language.",
    images: [
      "https://randomuser.me/api/portraits/women/20.jpg"
    ]
  }
];

export default profiles;