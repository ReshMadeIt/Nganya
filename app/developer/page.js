// app/page.js
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm ReshMadeIt</h1>
        <p className="text-xl mb-6">
          A passionate Node.js developer building modern web applications and backend systems. I specialize in creating performant, scalable, and maintainable solutions.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="projects" className="max-w-4xl w-full mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Node.js API Starter</h3>
            <p>A boilerplate REST API built with Node.js, Express, and MongoDB for rapid backend development.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Next.js Portfolio</h3>
            <p>Modern portfolio website using Next.js, TailwindCSS, and deployed on Vercel.</p>
          </div>
          {/* Add more projects here */}
        </div>
      </section>

      <section id="contact" className="max-w-3xl w-full mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">I'm open to new opportunities, freelance projects, or collaborations. Reach out!</p>
        <a
          href="mailto:reshmadeit@example.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Email Me
        </a>
      </section>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} ReshMadeIt. All rights reserved.
      </footer>
    </main>
  );
}

