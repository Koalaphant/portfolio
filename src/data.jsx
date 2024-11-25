import React from "react";
import travelogImg from "./assets/travelog.jpeg";
import ncNewsImg from "./assets/nc-news-desktop.webp";
import reelGoodImg from "./assets/real-good-desktop.webp"; //

const projects = [
  {
    name: "Reel Good",
    description: (
      <>
        <p className="paragraph-style">
          Reel Good is a dynamic Next.js application designed for movie
          enthusiasts to explore and discover films. Leveraging the TMDB (The
          Movie Database) API, it offers a comprehensive interface to browse the
          latest films, trending movies, and top-rated titles.
        </p>
        <p className="paragraph-style">
          Users can access detailed movie information and utilize the search
          functionality to find movies based on their preferences. The
          application is built with Next.js for server-side rendering and static
          site generation, TypeScript for type safety, and Tailwind CSS for
          modern styling.
        </p>
      </>
    ),
    languages_used: ["TypeScript", "Next.js", "Tailwind CSS", "TMDB API"],
    git_url: "https://github.com/Koalaphant/reel-good-next",
    img_url: reelGoodImg,
  },
  {
    name: "Travelog",
    description: (
      <>
        <p className="paragraph-style">
          Travelog, a travel journal app developed as part of the Northcoders
          software engineering course final project phase, offers users a
          convenient way to document their travel memories.
        </p>
        <p className="paragraph-style">
          The app, built by a team named the Algorithm Avengers, utilises React
          Native for the frontend, Firebase for the backend, and Expo Go for
          additional tools. Key features include user authentication, profile
          management, interactive map display of journal entries, individual
          entry viewing with images, journal upload with location tagging, and a
          friends list function.
        </p>
      </>
    ),
    languages_used: ["JavaScript", "React Native", "Firebase", "Expo Go"],
    git_url: "https://github.com/Koalaphant/TravelJournal",
    img_url: travelogImg,
  },
  {
    name: "NC News (Frontend)",
    description: (
      <>
        <p className="paragraph-style">
          The project, built with React and Vite, provides a user-friendly
          interface reminiscent of Reddit. Users can explore articles, sort them
          by different criteria, leave comments, and like posts. It comprises
          both front-end and back-end systems.
        </p>
        <p className="paragraph-style">
          The backend, powered by Node.js, Express.js, and PostgreSQL,
          facilitates the creation of RESTful APIs for user engagement and data
          storage.
        </p>
      </>
    ),
    languages_used: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    git_url: "https://github.com/Koalaphant/nc-news-proj",
    site_url: "https://nc-news-andrew.netlify.app/",
    img_url: ncNewsImg,
    additional_info: (
      <p
        style={{
          fontSize: "12px",
          marginBottom: "20px",
          fontWeight: "800",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        Please wait a moment while the backend deploys. This may take up to 30
        seconds.
      </p>
    ),
  },
  {
    name: "NC News (Backend)",
    description: (
      <>
        <p className="paragraph-style">
          This backend project powers the "NC News" application, offering a
          robust server-side architecture built with Node.js and Express.js. It
          manages data interactions and business logic, providing RESTful APIs
          for the front end to consume.
        </p>
        <p className="paragraph-style">
          Utilizing PostgreSQL, the backend handles user data, article content,
          comments, and likes efficiently. It is designed to support scalable
          and secure data management, ensuring seamless integration with the
          React-based frontend.
        </p>
      </>
    ),
    languages_used: [
      "JavaScript",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Jest",
    ],
    git_url: "https://github.com/Koalaphant/nc-news",
    img_url: ncNewsImg,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Jest",
  "Node.js",
  "React",
  "Next.js",
  "React Native",
  "Express.js",
  "PSQL",
  "Supabase",
  "Firebase",
  "Tailwind",
  "Vue.js",
  "Prisma",
  "Stripe",
];

export { projects, skills };
