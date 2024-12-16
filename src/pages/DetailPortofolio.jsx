import { useParams, Navigate } from "react-router-dom"
import { portofolioList } from '../data/DataPortofolio'
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const DetailPortofolio = () => {
  const { id } = useParams();
  const data = portofolioList.find((item) => item.id === id)
  
  if (!data) {
    return <Navigate to='/page-not-found'/>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className=" text-[#222831] text-4xl md:text-5xl uppercase mb-2 font-extrabold tracking-tight pt-16 pb-8">{data.title}</h1>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-8">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
            <div className="bg-gray-100  rounded-lg inline-block mx-auto">
              <p className="text-xl font-semibold text-gray-700">
                <span className=" font-bold text-[#5c6068] text-xl md:text-2xl font-light tracking-wide">tech: {data.skill}</span> 
              </p>
            
            <p className=" text-lg text-[#a1a3aa]  leading-relaxed">
              {data.keterangan}
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default DetailPortofolio