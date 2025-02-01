import React from 'react'
import client1 from '../../assets/client1.jpeg'
import client2 from '../../assets/client2.avif'
import client3 from '../../assets/client3.jpg'
import client4 from '../../assets/client4.jpg'


import { Pagination } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testm.css'

const Testm = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__img">
            <img src={client1} alt="client1" />
          </div>
          <h5 className='client__name'>Tamer omer</h5>
          <small className='client__review'>I love this website Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aperiam deleniti totam ipsum molestiae, mollitia, suscipit repellat commodi nihil doloremque dignissimos eveniet sapiente amet dolor.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__img">
            <img src={client2} alt="client1" />
          </div>
          <h5 className='client__name'>Mary Jac</h5>
          <small className='client__review'>I love this website Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aperiam deleniti totam ipsum molestiae, mollitia, suscipit repellat commodi nihil doloremque dignissimos eveniet sapiente amet dolor.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__img">
            <img src={client3} alt="client1" />
          </div>
          <h5 className='client__name'>Ali mo</h5>
          <small className='client__review'>I love this website Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aperiam deleniti totam ipsum molestiae, mollitia, suscipit repellat commodi nihil doloremque dignissimos eveniet sapiente amet dolor.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__img">
            <img src={client4} alt="client1" />
          </div>
          <h5 className='client__name'>Zina kamal</h5>
          <small className='client__review'>I love this website Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aperiam deleniti totam ipsum molestiae, mollitia, suscipit repellat commodi nihil doloremque dignissimos eveniet sapiente amet dolor.</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testm
