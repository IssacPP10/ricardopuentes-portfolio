export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentials: string;
}

export const certificates: Certificate[] = [
  {
    name: "Technical Support Fundamentals",
    issuer: "Coursera",
    date: "January 2025",
    credentials:
      "https://www.coursera.org/account/accomplishments/verify/MAOMZG8E1B49",
  },
  {
    name: "Google AI Essentials",
    issuer: "Coursera",
    date: "November 2024",
    credentials:
      "https://www.coursera.org/account/accomplishments/verify/80PEURE2MTP5",
  },
  {
    name: "SQL and Relational Database 101",
    issuer: "Cognitive Class",
    date: "October 2024",
    credentials:
      "https://courses.cognitiveclass.ai/certificates/ac34a388d2bd46a0826ee10ef636a129",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "February 2025",
    credentials:
      "https://courses.cognitiveclass.ai/certificates/ac34a388d2bd46a0826ee10ef636a129",
  },
  {
    name: "Getting Started with Git and GitHub",
    issuer: "Cognitive Class",
    date: "February 2025",
    credentials:
      "https://courses.cognitiveclass.ai/certificates/ac34a388d2bd46a0826ee10ef636a129",
  },
];