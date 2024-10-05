/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  // {
  //   title: "10 Things To Know About Azure Static Web Apps 🎉",
  //   description:
  //     "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
  //   url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  // },
  {
    title: "Samvidhan: Gamifying the Learning of the Indian Constitution",
    description:
      "A full-stack web application designed to educate users about the Indian Constitution through interactive modules and quizzes. Built with React, Go, MongoDB, and Tailwind CSS, the platform integrates AI to personalize learning experiences and enhance user engagement. The backend efficiently handles user data, authentication, and content delivery, while the front-end provides a sleek, responsive interface. Deployed using Render and Vercel, Samvidhan offers a fun, educational experience that simplifies complex constitutional concepts.",
    url: "https://github.com/Aditya-Uppuluri/SIH-Samvidha",
  },
  {
    title: "My Space",
    description:
      "Join me as I reflect on my journey in the tech world—starting with my early fascination for technology, overcoming challenges, and building innovative projects that push boundaries. Explore the experiences that have shaped my growth, from learning new languages to creating solutions that solve real-world problems.",
    url: "https://medium.com/@abhi.uppuluri/my-journey-in-technology-from-the-classroom-to-real-world-innovation-a6a258dbdc7a",
  },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
