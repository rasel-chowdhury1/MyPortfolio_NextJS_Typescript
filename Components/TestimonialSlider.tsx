import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const TestimonialSlider = () => {
  const Review1 = "Despite my limited knowledge, they crafted a beautiful and functional website that exceeded my expectations.";
  const Review2 = "Patiently guiding me through each step, they crafted a stunning and functional website that perfectly captured my vision."
  const Review3 = " Their attention to detail and commitment to customer satisfaction were truly impressive."
  const Review4 = 'They crafted a beautiful and functional website that exceeded my expectations.'
    return (
        <Carousel
         additionalTransfrom={0}
         arrows={true}
         autoPlay={true}
         autoPlaySpeed={5000}
         centerMode={false}
         infinite
         responsive={responsive}
         itemClass='item'
        >
            <ClientReview image='/images/c1.jpg' name='Nazrul Islam' role='web developer' review={Review1}/>
            <ClientReview image='/images/c2.jpg' name='Sayed Hasan' role='React Native developer' review={Review2}/>
            <ClientReview image='/images/c1.jpg' name='Hridoy' role='SEO' review={Review3}/>
            <ClientReview image='/images/c2.jpg' name='Parvez Islam' role='Web Designer' review={Review4}/>
        </Carousel>
    );
};

export default TestimonialSlider;