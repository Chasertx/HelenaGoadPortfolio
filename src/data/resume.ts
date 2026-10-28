// All portfolio content lives here.

export interface Contact {
  email: string;
  phone: string;
  address: string;
  location: string;
  linkedin: string;
}

export interface Role {
  title: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  graduation: string;
  gpa?: string;
  coursework: string[];
}

export const profile = {
  name: 'Helena Goad',
  headline: 'Accounting Student · Dalton State College',
  tagline:
    'Detail-driven accounting student pairing a strong academic record with years of hands-on leadership in fast-paced, people-first environments.',
};

export const contact: Contact = {
  email: 'hgoad2005@hotmail.com',
  phone: '(515) 918-6388',
  address: '801 Chattanooga Avenue, A311, Dalton, GA 30720',
  location: 'Dalton, GA',
  linkedin: 'https://www.linkedin.com/in/helenagoad/',
};

export const education: Education = {
  degree: 'Bachelor of Business Administration in Accounting',
  school: 'Dalton State College (DSC) · AACSB Accredited',
  location: 'Dalton, GA',
  graduation: 'December 2027',
  gpa: '3.33 / 4.0',
  coursework: [
    'Principles of Accounting I & II',
    'Intermediate Accounting I, II & III',
    'Tax Accounting I',
    'Cost Accounting',
    'Entrepreneurship',
    'Principles of Management',
    'Principles of Marketing',
    'Business Statistics',
    'Principles of Supply Chain Management',
    'Principles of Finance',
    'Business Communications',
    'Professional Development',
  ],
};

export const experience: Role[] = [
  {
    title: 'Lead Server',
    org: "Cyra's Simple Goodness",
    location: 'Dalton, GA',
    dates: 'Aug 2024 – Present',
    points: [
      'Arrive prepared with all necessary attire 15 minutes before each shift begins; assist in ensuring the restaurant is immaculate and ready to receive guests.',
      'Facilitate seamless, unified coordination with coworkers when catering events of up to 200 people.',
      'Orchestrate teamwork between sections of up to 4 other servers during large functions.',
      'Independently and successfully close tabs of up to $3,000; efficiently split checks up to 20 separate ways, and ensure payment for every item.',
      'Instruct new employees on company culture/conduct, and assist them in becoming equal members of the team.',
      'Arrange closing duties for the team and delegate tasks fairly so that all staff leave at a reasonable time. Oversee that the restaurant is properly prepared for the next day of business.',
    ],
  },
  {
    title: 'Server',
    org: 'Guadalajara Mexican Restaurant',
    location: 'Dalton, GA',
    dates: 'Mar 2024 – Aug 2024',
    points: [
      'Communicated effectively when obtaining food orders from Spanish-speaking customers and when resolving miscommunications in the kitchen.',
      'Performed supportive service in a high-stress environment during major holidays such as Cinco de Mayo.',
      'Arrived an hour early to prepare the restaurant for business and participate in closing tasks to ensure the establishment is clean and prepared for the next shift.',
    ],
  },
  {
    title: 'Floor Associate',
    org: 'Bath & Body Works',
    location: 'Dalton, GA',
    dates: 'Sep 2023 – Nov 2023',
    points: [
      'Helped maintain store presentation and inventory for every item on the floor.',
      'Established open communication and offered product samples to each customer entering the store.',
      'Applied company standards to organize shelves, keep inventory sale-ready, and remove unfit products.',
    ],
  },
  {
    title: 'Personal Caretaker for a Child with Disability',
    org: 'Department of Health and Human Services (DHHS)',
    location: 'Iowa',
    dates: 'Aug 2022 – May 2023',
    points: [
      'Provided professional supervision and care for a child with autism 3–5 times a week (2–10 hours a day).',
      'Prepared meals and planned engaging activities for each day.',
      "Responded to the child's feelings with patience, empathy, and care.",
      'Kept parents informed throughout the day with any pertinent or requested details.',
      'Earned a bonus for exceeding the required hours in the allotted work schedule.',
    ],
  },
];

export const leadership: Role[] = [
  {
    title: 'Mentor',
    org: 'Dalton Academy',
    location: 'Dalton, GA',
    dates: 'Nov 2025',
    points: [
      'Gave constructive feedback to high school students conducting case-study research on challenges within the Dalton community.',
      'Evaluated student presentations and helped identify additional concerns and potential solutions.',
      'Fostered a welcoming, collaborative environment that encouraged idea sharing and discussion.',
      "Worked with Dalton Academy teachers to align mentorship with students' academic learning.",
    ],
  },
  {
    title: 'Student Volunteer',
    org: 'Junior Achievement',
    location: 'Dalton, GA',
    dates: 'Mar 2025 – Apr 2025',
    points: [
      'Mentored middle school students through JA BizTown and JA Finance Park.',
      'Answered questions and coached students on resolving problems in a mock business environment.',
    ],
  },
];

export const accomplishments: string[] = [
  'Work published in the DSC Tributaries Journal (Fall 2025)',
  'IMA CMA Scholarship nominee and recipient (April 2025)',
  'Completed Part 1 of the CMA exam',
  "Dean's List (Fall 2024 – Present)",
];

export const skills = {
  computer: ['Microsoft Excel', 'Word', 'PowerPoint', 'Teams', 'Google Docs', 'Google Slides', 'Zoom'],
  essential: [
    'Interpersonal Communication',
    'Salesmanship',
    'Creative Problem Solving',
    'Accountability',
    'Leadership',
    'Forward Looking',
  ],
};
