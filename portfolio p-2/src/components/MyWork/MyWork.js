import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import img1 from '../../imgs/img1.jpg'
import img2 from '../../imgs/img2.webp'
import img3 from '../../imgs/img3.webp'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.jpg'
import img6 from '../../imgs/img6.png'
import './MyWork.css'


const myWorkData = [
{
  w_no:1,
  w_name:"Web design",
  w_img: img1
},
{
  w_no:2,
  w_name:"Web design",
  w_img: img2
},
{
  w_no:3,
  w_name:"Web design",
  w_img: img3
},
{
  w_no:4,
  w_name:"Web design",
  w_img: img4
},
{
  w_no:5,
  w_name:"Web design",
  w_img: img5
},
{
  w_no:6,
  w_name:"Web design",
  w_img: img6
},
]
const MyWork = () => {
  return (
    <div id='work' className='myWork'>
      <div className="myWork-title">
        <h2>My latest work</h2>
        <AiOutlineFundProjectionScreen className='title-icon'/>
      </div>
      <div className="myWork-container">
      {myWorkData.map((work,index)=>{
        return <img key={index} src={work.w_img} alt='work imgs'/>
      })}
      </div>
      <div className="myWork-showMore">
        <p>Show More</p>
        <FaArrowRight/>
      </div>
    </div>
  )
}

export default MyWork
