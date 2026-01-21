
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const BlogPage = () => {
  const blogs = Array.from({ length: 27}, (_, index) => ({
    id: index + 1,
    title: `Security Best Practices for a Poker Game Development Project`,
    description:
      "This blog explore key security practices in a poker game development,covering data.....",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "web development",
    date: " January 21, 2026",
  }));

  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div>
      
      <div className="text-center my-5">
        <h1 className="fw-bold">Our Blogs</h1>
      </div>

    
      <div className="container">
        <div className="row g-4">
          {currentBlogs.map((blog) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={blog.id}>
              <div className=" h-100 shadow border-0 rounded-4 px-3 py-3"style={{maxWidth:"360px"}}>
                <img
                  src={blog.image}
                  className="card-img-top rounded-4"
                  alt={blog.title}
                  style={{  width:"320px",height: "200px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge rounded-pill text-primary border border-primary mt-3">
                      {blog.category}
                    </span>
                    <small className="text-muted">{blog.date}</small>
                  </div>

                  <h5 className="fw-bold">{blog.title}</h5>
                  <p className="text-muted small">
                    {blog.description}
                  </p>

                  <div className="mt-auto text-end">
                    <button className="btn btn-outline-primary rounded-circle">
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 && "active"}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${currentPage === totalPages && "disabled"}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogPage;