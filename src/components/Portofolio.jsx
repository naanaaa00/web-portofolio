import '../styles/Portofolio.css'
import { portofolioList } from '../data/DataPortofolio'
import { Link } from "react-router-dom";
import { TiEye } from "react-icons/ti";

const Portofolio = () => {
    return (
      <section id='portofolio'>
          <div className='portofolio'>
            <div className="flex items-center justify-center pb-8">
                <h3 className=" text-[#222831] text-3xl md:text-3xl uppercase mb-2 font-extrabold tracking-tight text-center">
                    Portofolio
                </h3>
            </div>
              <div className='grid'>
                  {
                      portofolioList.map( (item) => {
                          return (
                          <div className='portfolio-item' key={item.image}>
                              <Link to={`/portofolio/${item.id}`}>
                                  <div className='image-container'>
                                      <img src={item.image} />
                                      <div className='hover-overlay'>
                                          <svg 
                                              xmlns="http://www.w3.org/2000/svg" 
                                              width="48" 
                                              height="48" 
                                              viewBox="0 0 24 24" 
                                              fill="none" 
                                              stroke="currentColor" 
                                              strokeWidth="2" 
                                              strokeLinecap="round" 
                                              strokeLinejoin="round" 
                                              className="eye-icon"
                                          >
                                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                              <circle cx="12" cy="12" r="3"></circle>
                                          </svg>
                                      </div>
                                  </div>
                              </Link>
                          </div>
                          )
                      })
                  }
              </div>
          </div>
      </section>
    )
  }
  
export default Portofolio
