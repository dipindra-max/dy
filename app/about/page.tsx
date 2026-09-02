import Image from "next/image";

export const metadata = {
  title: "About Me | Dipindra Yadav",
  description:
    "Learn more about Dipindra Yadav, a Grade 10 student interested in technology, AI, programming, web development and cybersecurity.",
};

const skills = [
  "App Development",
  "Web Development",
  "SEO",
  "Programming",
  "Artificial Intelligence",
  "Cybersecurity",
  "Content Creation",
];

const interests = [
  "Technology",
  "Artificial Intelligence",
  "Programming",
  "Web Development",
  "Cybersecurity",
  "SEO",
  "Photography",
  "Content Creation",
  "Learning New Technologies",
];

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">About Me</div>

          <div className="grid" style={{ marginTop: 30 }}>
            <div className="card">
              <Image
                src="/images/profile.jpg"
                alt="Dipindra Yadav"
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 18,
                }}
              />
            </div>

            <div>
              <h1>Hi, I'm Dipindra Yadav.</h1>

              <p className="lead">
                I'm a Grade 10 student from Nepal with a strong interest in
                technology, programming, web development, artificial
                intelligence and cybersecurity.
              </p>

              <p>
                I enjoy learning how modern technologies work and turning
                ideas into useful websites, applications and digital
                projects. I'm also interested in SEO and creating useful
                technology content.
              </p>

              <p>
                My long-term goal is to become a skilled cybersecurity expert
                while continuing to learn about software development,
                artificial intelligence and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Education</div>

          <h2>Currently Studying</h2>

          <div className="card">
            <h3>Grade 10</h3>
            <p>
              Currently studying in Grade 10 and building practical skills
              alongside my academic education.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Skills</div>

          <h2>What I Work With</h2>

          <div className="grid">
            {skills.map((skill) => (
              <div className="card" key={skill}>
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Interests</div>

          <h2>Things I Enjoy</h2>

          <div className="tags">
            {interests.map((interest) => (
              <span className="pill" key={interest}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <div className="eyebrow">My Goal</div>

            <h2>Building Towards Cybersecurity</h2>

            <p>
              I want to continue developing my knowledge of programming,
              networking, web technologies and cybersecurity and eventually
              become a strong cybersecurity professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
