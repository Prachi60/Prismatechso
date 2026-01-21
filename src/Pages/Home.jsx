
import React,{useEffect} from 'react'
import Slide1 from "../assets/slider-2.webp"
import Slide2 from "../assets/slider-3.webp"
import Slide3 from "../assets/slider-5.webp"
import Amazon from "../assets/amazon.png"
import App from "../assets/app developmet.png"
import Good from "../assets/goodfirms.png"
import Selected from "../assets/selectedfirms.png"
import Shopify from "../assets/shopify.png"
import Toprated from "../assets/toprated.webp"
import Step1 from "../assets/step1.webp"
import Step2 from "../assets/step2.webp"
import Step3 from "../assets/step3.webp"
import Step4 from "../assets/step4.webp"
import Circle from "../assets/circle.png"

const Home = () => {
   useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);
  return (
    <div>
    <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

       
        <div className="carousel-item active">
          <img
            src={Slide2}
            className="d-block w-100 carousel-img"
            alt="Slide 1"
          />

          <div className="carousel-caption  d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-2 fw-bold">Digital Transformation</h1>
            <p className="fs-3">Discover something amazing</p>
          </div>
        </div>

  
        <div className="carousel-item">
          <img
            src={Slide1}
            className="d-block w-100 carousel-img"
            alt="Slide 2"
          />

          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-2 fw-bold">Web & Mobile App Development</h1>
            <p className="fs-3">Build an application that grows your buisness</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Slide3}
            className="d-block w-100 carousel-img"
            alt="Slide 3"
          />

          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-2 fw-bold">AI & Machine Learning</h1>
            <p className="fs-3">Grow with an award winning IT agency</p>
          </div>
        </div>

      </div>

     
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
   
    <div className="bg-dark py-4">
  <div className="container">
    <div className="row justify-content-center g-4">

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src={Amazon} alt="Amazon" className="img-fluid" />
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src={App} alt="App" className="img-fluid" />
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src={Shopify} alt="Shopify" className="img-fluid" />
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src={Good} alt="Good" className="img-fluid" />
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src={Toprated} alt="Top Rated" className="img-fluid" />
      </div>

      <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src={Selected} alt="Selected" className="img-fluid" />
      </div>

    </div>
  </div>
</div>
<div  className='bg-light container_fluid'>
  <div className="container py-5 text-center">
 
  <h2 className="fw-bold text-success display-6">
    SNEAK INTO OUR CORPORATE PROFILE
  </h2>

 
  <div className="d-flex justify-content-center align-items-center my-3">
    <hr className="w-25 border-success opacity-100" />
  </div>

 
  <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "900px" }}>
    We are real people who believe in delivering agile results. Our agency is a
    renowned IT solutions provider, and we offer a comprehensive package of
    tech-savvy services clubbed with innovative solutions. As a leading
    technology partner, we hold expertise in Digital marketing, SEO, SMM, Web
    Design, Mobile App development, Ecommerce development, Back Office Support
    services and Emerging technologies like Alexa Skills, Machine Learning and
    Artificial Intelligence. Being the leader, it is our responsibility to
    nurture the business of our prestigious clients. With this mission, our
    leading digital experts dedicatedly work for delivering impactful results.
    So it’s time for you to grow with MMF Infotech – a result driven technology
    agency.
  </p>
</div>



</div>
    <div className="container py-5">
      <div className='d-flex flex-column justify-content-center align-items-center text-center '>
        <button className='btn btn-primary rounded-pill '>
          Process
        </button>
        <div className='mt-2'>
          <h2>Our End-to-End Product <span className='text-primary'>Development Process</span></h2>
        </div>
        <div>
          <p> From Idea to Launch - A seamless journey </p>
          

        </div>
      </div>
      <div className="timeline">

       
        <div className="row align-items-center timeline-item">
          <div className="col-md-5 text-end">
            <img src={Step1} className="img-fluid" alt=""style={{width:"230px",height:"210px",objectFit:"contain"}} />
          </div>
          <div className="col-md-2 text-center">
            <div className="circle">1</div>
          </div>
          <div className="col-md-5">
            <h4 className='text-primary'>Discovery & Goal Setting</h4>
            <div className=' justify-content-end'>
          <p>We begin by understanding your goals to lay the right foundation.</p>
            </div>
          </div>
        </div>

       
        <div className="row align-items-center flex-row-reverse timeline-item">
          <div className="col-md-5 text-start">
            <img src={Step2} className="img-fluid" alt="" style={{width:"230px",height:"210px",objectFit:"contain"}} />
          </div>
          <div className="col-md-2 text-center">
            <div className="circle">2</div>
          </div>
          <div className="col-md-5 text-end">
            <h4 className='text-primary'>Planning & Strategy</h4>
            <div className=''>
          <p>We define technical and business requirements, choosing the optimal stack.</p>
            </div>
          </div>
        </div>

      
        <div className="row align-items-center timeline-item">
          <div className="col-md-5 text-end">
            <img src={Step3} className="img-fluid" alt=""style={{width:"230px",height:"210px",objectFit:"contain"}} />
          </div>
          <div className="col-md-2 text-center">
            <div className="circle">3</div>
          </div>
          <div className="col-md-5">
            <h4 className='text-primary'> Design & Development</h4>
            <div className='d-flex justify-content-end'>

            <p>From wireframes to full UI/UX, we build and iterate your platform for performance and scalability.</p>
            </div>
          </div>
        </div>

       
        <div className="row align-items-center flex-row-reverse timeline-item">
          <div className="col-md-5 text-start">
            <img src={Step4} className="img-fluid" alt=""style={{width:"230px",height:"210px",objectFit:"contain"}} />
          </div>
          <div className="col-md-2 text-center">
            <div className="circle">4</div>
          </div>
          <div className="col-md-5 text-end">
            <h4 className='text-primary'>Testing & Deployment</h4>
            <div className='d-flex justify-content-end' >
            <p>We rigorously test your platform across devices and deploy it with monitoring, support, and optimization.

</p>

            </div>
          </div>
        </div>

      </div>
    </div>
    <div className='bg-light'>
    <div className="container py-5">
  <div className="row align-items-center">

   
    <div className="col-lg-6 mb-4 mb-lg-0">
      <h3 className="fw-bold mb-3 text-success">Drilled in Excellence</h3>

      <p className="text-muted">
        Ever since the technological world is advancing, the traditional way of
        operating is no more into existence. With modern channels, tools,
        processes, and technologies, we excel in contributing successes to our
        global clients. We hold expertise in delivering customized services as
        per the client's demand.
      </p>

      
      <div className="row g-3 mt-4">
        <div className="col-6">
          <div className="border p-3 bg-white text-center shadow-sm">
            <h3 className="text-success fw-bold">100+</h3>
            <p className="mb-0">Certified Veterans</p>
          </div>
        </div>

        <div className="col-6">
          <div className="border p-3  bg-white text-center shadow-sm">
            <h3 className="text-success fw-bold">24x7</h3>
            <p className="mb-0">Availability</p>
          </div>
        </div>

        <div className="col-6">
          <div className="border p-3 bg-white  text-center shadow-sm">
            <h3 className="text-success fw-bold">10+</h3>
            <p className="mb-0">Years Experience</p>
          </div>
        </div>

        <div className="col-6">
          <div className="border p-3 bg-white  text-center shadow-sm">
            <h3 className="text-success fw-bold">700+</h3>
            <p className="mb-0">Projects Delivered</p>
          </div>
        </div>
      </div>
    </div>

   
    <div className="col-lg-6 d-flex justify-content-center">
      {/* <div className="row g-4 justify-content-center">

        {[
          { title: "Digital Marketing" },
          { title: "Web Development" },
          { title: "AI & Machine Learning" },
          { title: "Mobile Development" },
          { title: "Back Office Services" },
          { title: "IoT Solutions" },
          { title: "SEO & Content Services" },
        ].map((item, index) => (
          <div key={index} className="col-6 col-sm-4 text-center">
            <div className="service-circle mx-auto shadow-sm">
              <p className="mb-0 fw-medium">{item.title}</p>
            </div>
          </div>
        ))}

      </div> */}
      <img src={Circle} alt="" className='circle_img' />
    </div>

  </div>
</div>
</div>



    
    </div>
  )
}

export default Home
