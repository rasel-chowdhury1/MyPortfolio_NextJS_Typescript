import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';
import axios from 'axios';

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

  interface Review {
    _id: string;
    name: string;
    role: string;
    img: string;
    comment: string;
    rating: string;
  }

const TestimonialSlider = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://my-project-backend-sigma.vercel.app/api/reviews'); // Replace with your API endpoint
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch reveiws');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log({reviews})
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
          {reviews?.map(review => <ClientReview key={review._id} data={review}/>)}
            
        </Carousel>
    );
};

export default TestimonialSlider;