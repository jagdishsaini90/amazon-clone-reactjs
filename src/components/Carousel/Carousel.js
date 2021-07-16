import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const CarouselComp = () => {
  return (
    <Carousel autoPlay={1000} showArrows={false} showStatus={false} infiniteLoop>
        <div >
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsamsung.jpg?alt=media&token=85c634e4-4ff7-4ad3-adfb-50dfcc980bda" />
        </div>
        <div>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Famazont.jpg?alt=media&token=f4f3aa1a-15f0-40c8-9155-987946fb286e" />
        </div>
        <div>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fgrocery.jpg?alt=media&token=86c322d4-0556-499d-ab67-c4549b77bd07" />
        </div>
        <div>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fmi.jpg?alt=media&token=a27fb02b-58fe-4160-992f-c7382f6315e9" />
        </div>
        <div>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fsale.jpg?alt=media&token=a3463b98-7537-4f0d-8cb4-5e0e2fc5633d" />
        </div>
        <div>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-b9e60.appspot.com/o/images%2Fnord.jpg?alt=media&token=30ffcdab-fd60-4919-987d-c6bec999a372" />
        </div>
    </Carousel>
  )
}

export default CarouselComp;
