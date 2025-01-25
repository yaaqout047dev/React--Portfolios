import React, { useState } from 'react'
import HeaderContent from '../../components/pageHeaderContent/HeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import img1 from '../../images/image1.jpg'
import img2 from '../../images/image2.jpg'
import img3 from '../../images/image3.jpg'
import img4 from '../../images/image4.jpg'
import img5 from '../../images/image5.jpg'
import './Portfolio.scss'
import { Link } from 'react-router-dom'

const portfolioData =[
  {
    id: 2,
    name: 'Ecommerce',
    image: img1,
    link : ''
  },
  {
    id: 3,
    name: 'Notes App',
    image: img2,
    link : ''
  },
  {
    id: 2,
    name: 'Supplier Design',
    image: img3,
    link : ''
  },
  {
    id: 2,
    name: 'Todo App',
    image: img4,
    link : ''
  },
  {
    id: 3,
    name: 'Shopping Cart Design',
    image: img5,
    link : ''
  },
]

const filterData = [
  {
    filterId : 1,
    label : 'All'
  },
  {
    filterId : 2,
    label : 'Development'
  },
  {
    filterId : 3,
    label : 'Design'
  }
]

export default function Portfolio() {

  const[filteredValue, setFilteredValue] = useState(1)
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentId){
    setFilteredValue(currentId)
  }

  function handleHover(index){
    setHoveredValue(index)
  }

  const filteredItems = filteredValue === 1 ? portfolioData : 
  portfolioData.filter((item)=> item.id === filteredValue)

  return (
    <section id='portfolio' className='portfolio'>
    <HeaderContent  headerText='my portfolio' icon={<BsInfoCircleFill size={40}/>}/>

      <div className="portfolio__content">
        <ul className='portfolio__content__filter'>
        {
          filterData.map((item)=>(
            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
              {item.label}
            </li>
          ))
        }
        </ul>

        <div className="portfolio__content__cards">
          {
            filteredItems.map((item,index)=>(
              <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}  onMouseEnter={()=>handleHover(index)} onMouseLeave={()=>handleHover(null)}>
                <div className="portfolio__content__cards__item__img-wrapper">
                  <Link>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="overlay">
                  {
                    index=== hoveredValue && (
                      <div>
                        <p>{item.name}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
