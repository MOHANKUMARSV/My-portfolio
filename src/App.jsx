import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-sans">
      {/* Hero Section */}
      <header className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Mohankumar S V
        </h1>
        <p className="text-xl font-semibold mb-6 drop-shadow-md">
          Frontend Developer (JavaScript) — Building beautiful and responsive
          web experiences.
        </p>
        <p className="max-w-xl mx-auto mb-8 text-pink-100/90">
          Passionate about creating seamless UI/UX using React, JavaScript, and
          modern web technologies. Currently mastering React and UI design.
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-pink-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition"
        >
          See My Projects
        </a>
      </header>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 bg-white text-gray-900 rounded-t-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-pink-600">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="bg-pink-100 p-4">
              <h3 className="text-2xl font-semibold mb-2 text-pink-700">
                Apple Clone Website
              </h3>
              <p className="mb-4 text-gray-700">
                Responsive Apple homepage clone using HTML & CSS. Practiced
                layout, flexbox, and media queries.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MOHANKUMARSV/clone-apple.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Repo
                </a>
                <a
                  href="https://mohankumarsv.github.io/clone-apple/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="bg-pink-100 p-4">
              <h3 className="text-2xl font-semibold mb-2 text-pink-700">
                Recipe Site
              </h3>
              <p className="mb-4 text-gray-700">
                A responsive recipe page built with semantic HTML and CSS,
                practicing layout and accessibility.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MOHANKUMARSV/Recipe-site"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Repo
                </a>
                <a
                  href="https://mohankumarsv.github.io/Recipe-site/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 underline underline-offset-8 decoration-pink-300">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-pink-100/90">
          I'm Mohankumar, a passionate frontend developer focusing on creating
          user-friendly, responsive, and accessible websites. With a solid
          foundation in HTML, CSS, and JavaScript, I am now advancing my skills
          by mastering React. I enjoy turning complex problems into simple,
          beautiful, and intuitive designs. My goal is to build experiences
          that delight users.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-4xl font-bold mb-10 text-white underline underline-offset-8 decoration-pink-300">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "React (Learning)",
            "Figma (Basics)",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-pink-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-pink-700 transition cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center text-white">
        <h2 className="text-4xl font-bold mb-6 underline underline-offset-8 decoration-pink-300">
          Contact
        </h2>
        <p className="mb-2 text-lg">
          Email:{" "}
          <a
            href="mailto:mohankumarsv22@gmail.com"
            className="text-pink-300 hover:underline"
          >
            mohankumarsv22@gmail.com
          </a>
        </p>
        <p className="mb-6 text-lg">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mohanslink"
            target="_blank"
            rel="noreferrer"
            className="text-pink-300 hover:underline"
          >
            www.linkedin.com/in/mohanslink
          </a>
        </p>
        <a
          href="https://github.com/MOHANKUMARSV"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-pink-600 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition"
        >
          Visit My GitHub
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-pink-200 text-center py-6">
        <p>© 2025 Mohankumar S V. All rights reserved.</p>
      </footer>
    </div>
  );
}
