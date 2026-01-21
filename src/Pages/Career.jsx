import React from "react";
import CareerBg from "../assets/background_imag.png";

const CareerPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer (React)",
      location: "Remote / Indore",
      experience: "0–2 Years",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Backend Developer (Node.js)",
      location: "Indore",
      experience: "1–3 Years",
      type: "Full Time",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      experience: "0–2 Years",
      type: "Internship",
    },
  ];

  return (
    <div>
     
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${CareerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <h1 className="fw-bold">Careers</h1>
          <p className="fs-5 col-lg-8">
            Join our team and build innovative digital solutions while growing
            your career with us.
          </p>
        </div>
      </section>

  
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Join Us?</h2>
            <p className="text-muted">
              We believe in learning, collaboration, and growth
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="p-4 border rounded-4 h-100">
                <h5 className="fw-bold">Growth Opportunities</h5>
                <p className="text-muted">
                  Learn new technologies and grow your career with mentorship
                  and real-world projects.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-4 border rounded-4 h-100">
                <h5 className="fw-bold">Flexible Work</h5>
                <p className="text-muted">
                  Enjoy a flexible and healthy work-life balance with remote
                  options.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-4 border rounded-4 h-100">
                <h5 className="fw-bold">Supportive Culture</h5>
                <p className="text-muted">
                  Work in a friendly environment where your ideas are valued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Open Positions</h2>
            <p className="text-muted">Explore current job opportunities</p>
          </div>

          <div className="row g-4">
            {jobs.map((job) => (
              <div className="col-lg-4 col-md-6" key={job.id}>
                <div className="bg-white p-4 rounded-4 shadow h-100">
                  <h5 className="fw-bold">{job.title}</h5>
                  <p className="text-muted mb-1">📍 {job.location}</p>
                  <p className="text-muted mb-1">Experience: {job.experience}</p>
                  <p className="text-muted mb-3">Type: {job.type}</p>
                  <button className="btn btn-outline-primary w-100">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Didn’t find a suitable role?</h2>
          <p className="text-muted mb-4">
            Send us your resume and we’ll reach out when there’s a match.
          </p>
          <a href="/contact" className="btn btn-primary px-5 py-2">
            Send Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
