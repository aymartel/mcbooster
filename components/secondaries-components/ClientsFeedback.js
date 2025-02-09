// import { Component, Fragment } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import testimonial1 from "@/images/feedback/testimonial1.jpg";
// import testimonial2 from "@/images/feedback/testimonial2.jpg";
// import { useTranslations } from "next-intl";
// export default class ClientsFeedback extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }
//   render() {
//     const t = useTranslations('Messages');
//     const settings = {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       infinite: true,
//       speed: 400,
//       autoplay: false,
//       arrows: false,
//       autoplaySpeed: 5000,
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
    
//     return (
//       <Fragment>
//         <section className="testimonial-area-two rel z-1 mt-130 mb-120">
//           <div className="container for-middle-border">
//             <div className="row justify-content-between align-items-center pb-90 rpb-35 wow fadeInUp delay-0-1s">
//               <div className="col-xl-7 col-lg-8">
//                 <div className="section-title">
//                   <span className="sub-title mb-15">{t("testimonialareatwo_title")}</span>
//                   <h2>{t("testimonialareatwo_subtitle")}</h2>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="slider-arrow-btns text-lg-end">
//                   <button
//                     className="work-prev slick-arrow"
//                     onClick={this.previous}
//                   >
//                     <i className="far fa-arrow-left" />
//                   </button>
//                   <button className="work-next slick-arrow" onClick={this.next}>
//                     <i className="far fa-arrow-right" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <Slider
//               className="testimonial-two-active"
//               {...settings}
//               ref={(c) => (this.slider = c)}
//             >
//               <div className="testimonial-item-two wow fadeInUp delay-0-1s">
//                 <div className="testimonial-author">
//                   <Image  
//                     src={testimonial1}
//                     alt="Author"
//                   />
//                 </div>
//                 <div className="testimonial-content">
//                   <p>
//                   {t("testimonialareatwo_text1")}
//                   </p>
//                   <div className="author-description">
//                     <span className="h5">{t("testimonialareatwo_name1")}</span>
//                     <span className="designation">{t("testimonialareatwo_position1")}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="testimonial-item-two wow fadeInUp delay-0-1s">
//                 <div className="testimonial-author">
//                   <Image  
//                     src={testimonial2}
//                     alt="Author"
//                   />
//                 </div>
//                 <div className="testimonial-content">
//                   <p>
//                   {t("testimonialareatwo_text2")}
//                   </p>
//                   <div className="author-description">
//                     <span className="h5">{t("testimonialareatwo_name2")}</span>
//                     <span className="designation">{t("testimonialareatwo_position2")}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="testimonial-item-two wow fadeInUp delay-0-1s">
//                 <div className="testimonial-author">
//                   <Image  
//                     src={testimonial1}
//                     alt="Author"
//                   />
//                 </div>
//                 <div className="testimonial-content">
//                   <p>
//                   {t("testimonialareatwo_text1")}
//                   </p>
//                   <div className="author-description">
//                     <span className="h5">{t("testimonialareatwo_name1")}</span>
//                     <span className="designation">{t("testimonialareatwo_position1")}</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="testimonial-item-two wow fadeInUp delay-0-1s">
//                 <div className="testimonial-author">
//                   <Image  
//                     src={testimonial2}
//                     alt="Author"
//                   />
//                 </div>
//                 <div className="testimonial-content">
//                   <p>
//                   {t("testimonialareatwo_text2")}
//                   </p>
//                   <div className="author-description">
//                     <span className="h5">{t("testimonialareatwo_name2")}</span>
//                     <span className="designation">{t("testimonialareatwo_position2")}</span>
//                   </div>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </section>
//       </Fragment>
//     );
//   }
// }
