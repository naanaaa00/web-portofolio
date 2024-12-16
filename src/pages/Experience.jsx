import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiBuildingOfficeFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/Experience.css'

const Experience = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="content">
          <h1 className="experience-title">Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - sekarang"
              iconStyle={{ background: '#222831', color: '#fff' }}
              icon={<IoSchoolSharp />}
            >
              <h3 className="vertical-timeline-element-title">Pendidikan</h3>
              <h4 className="vertical-timeline-element-subtitle">Politeknik Elektronika Negeri Surabaya</h4>
              <p>D3 Teknik Informatika</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Juli - Desember(2024)"
              iconStyle={{ background: '#222831', color: '#fff' }}
              icon={<PiBuildingOfficeFill />}
            >
              <h3 className="vertical-timeline-element-title">Magang</h3>
              <h4 className="vertical-timeline-element-subtitle">CV. Purnama Kreatifa</h4>
              <p>Web Developer</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Experience
