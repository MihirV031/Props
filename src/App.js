import logo from './image/asset 0.svg';
import logof from './image/logo1.svg';
import 'animate.css';
import Header from './Header';
import Courses from './Courses';
import { TbCertificate } from "react-icons/tb";
import { FaStar,FaStarHalf,FaUserFriends,FaChalkboardTeacher,FaCaretDown } from "react-icons/fa";
import { GiTeacher,GiEcology,GiUpgrade,GiLifeSupport } from "react-icons/gi";
import Info from './Info';
import Slider from './Slider';
import Slider2 from './Slider2';
import Choose from './Choose';
import Footer from './Footer';
// import {  } from "react-icons/fa6";
const upermenu = [
  {
    menu: 'Home'
  },
  {
    menu: 'Courses',
    icon:<FaCaretDown></FaCaretDown>
  },
  {
    menu: 'Collage Courses'
  },
  {
    menu: 'Activities',
    icon:<FaCaretDown></FaCaretDown>
  },
  {
    menu: 'Blog'
  },
  {
    menu: 'Know Us',
    icon:<FaCaretDown></FaCaretDown>
  },
  {
    menu: 'Student Zone',
    icon:<FaCaretDown></FaCaretDown>
  },
]
const courses = [
  {
    id: 1,
    img: require('./image/asset 13.webp'),
    COURSES: 'Development Courses',
    star:[<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStarHalf></FaStarHalf>],
    button:'Know More..!'
  },
  {
    id: 2,
    img: require('./image/asset 15.webp'),
    COURSES: 'Design Courses',
    star:[<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStarHalf></FaStarHalf>],
    button:'Know More..!'
  },
  {
    id: 3,
    img: require('./image/asset 16.webp'),
    COURSES: 'Programming IT',
    star:[<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStarHalf></FaStarHalf>],
    button:'Know More..!'
  },
  {
    id: 4,
    img: require('./image/asset 17.webp'),
    COURSES: 'Trendy Courses',
    star:[<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStarHalf></FaStarHalf>],
    button:'Know More..!'
  },
  {
    id: 5,
    img: require('./image/asset 19.webp'),
    COURSES: 'Civil-Mech. Engineering',
    star:[<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStarHalf></FaStarHalf>],
    button:'Know More..!'
  },
  {
    id: 6,
    img: require('./image/asset 20.webp'),
    COURSES: 'Business Development',
    star:[<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStar></FaStar>,<FaStarHalf></FaStarHalf>],
    button:'Know More..!'
  },
]
const info =[
  {
    icon: <FaUserFriends></FaUserFriends>,
    no:'14000+',
    name:'HAPPY STUDENTS'
  },
  {
    icon: <TbCertificate></TbCertificate>,
    no:'10+',
    name:'CERTIFICATION APPROVAL'
  },
  {
    icon: <FaChalkboardTeacher></FaChalkboardTeacher>,
    no:'70+',
    name:'CERTIFIED TEACHERS'
  },
  {
    icon: <FaUserFriends></FaUserFriends>,
    no:'9000+',
    name:'STUDENTS PLACED'
  },
]
const slider =[
  {img: require("./image/asset 1.webp")},
  {img: require("./image/asset 2.webp")},
  {img: require("./image/asset 3.webp")},
  {img: require("./image/asset 8.webp")},
  {img: require("./image/asset 4.webp")},
  {img: require("./image/asset 7.webp")}
]
const slider2 =[
  {img: require("./image/asset 42.png")},
  {img: require("./image/asset 43.png")},
  {img: require("./image/asset 44.png")},
  {img: require("./image/asset 45.png")},
  {img: require("./image/asset 46.png")},
  {img: require("./image/asset 47.png")},
  {img: require("./image/asset 51.png")},
  {img: require("./image/asset 49.png")},
  {img: require("./image/asset 50.png")}
]
const choose =[
  {icon:<GiTeacher></GiTeacher>,
   color:'#F6475F',
   hade:'Industry Experts As Trainers',
   pare:'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.' 
  },
  {icon:<GiTeacher></GiTeacher>,
  color:'#FFBC06',
  hade:'Latest Curriculum',
  pare:'We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.' 
  },
  {icon:<GiEcology></GiEcology>,
  color:'#B3D369',
  hade:'Latest Technology',
  pare:'We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.' 
  },
  {icon:<TbCertificate></TbCertificate>,
  color:'#554DA7',
  hade:'Interview Assistance',
   pare:'At the end of each training,our training instructor will go through the possible technical questions you may be asked.' 
  },
  {icon:<GiUpgrade></GiUpgrade>,
  color:'#4382FF',
  hade:'Free Upgradation',
  pare:'We will be provided free upgradation for any newer version of the course you have.'
  },
  {icon:<GiLifeSupport></GiLifeSupport>,
  color:'#F94FA4',
   hade:'Lifetime Support',
   pare:'We will provide you lifetime support on all the courses you learned from us.' 
  },
]
const footer=[
  {
    footerp:'Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.',
    footerh6:'Follow Us On',
    footerh61:'Feature Links',
    footerli1:'About Us',
    footerli2:'Blogs',
    footerli3:'Join Us',
    footerli4:'Company Login',
    footerli5:'Certificate Verification',
    footerh62:'Contact Us',
    footera:'Head Office - Yogichowk',
    footerh6a:'Other Branches'
  }
]
function App() {
  return (
    <>
    <Header upermenu={upermenu} logo={logo}></Header>
    <Slider owlslider={slider}></Slider>
    <Courses coursescosse={courses}></Courses>
    <Info info={info} ></Info>
    <Choose creative={choose}></Choose>
    <Slider2 owlslider2={slider2}></Slider2>
    <Footer logof={logof} footer={footer}></Footer>
    </>
  );
}

export default App;
