import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftCircle, ArrowRightCircle, Iconoir } from "iconoir-react";
import { useRef } from "react";

const cards = [
  {
    icon: "thunderstorm",
    image: "imgs/staff/jcooper.jpg",
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    name: "Jane Cooper",
    energy: "10KWh",
  },
  {
    icon: "three-stars",
    image: "imgs/staff/redwards.jpg",
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    name: "Ralph Edwards",
    energy: "32KWh",
  },
  {
    icon: "tower",
    image: "imgs/staff/rwanda.jpg",
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    name: "Courtney Henry",
    energy: "6KWh",
  },
  {
    icon: "timer",
    image: "imgs/staff/cwilliamson.jpg",
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    name: "Cameron Williamson",
    energy: "12KWh",
  },
  {
    icon: "timer",
    image: "imgs/staff/cwilliamson.jpg",
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    name: "Cameron Williamson",
    energy: "12KWh",
  },
];

export default function JoinSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="join-section">
      <div className="container">
        <div className="section-header">
          <div className="section-text">
            <span className="caption">Join other Sun harvesters</span>
            <h1 className="headline">Make something awesome</h1>
            <p className="paragraph">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <div className="btn">
            <span>Request a Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24">
              <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"></path>
            </svg>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={24}
          freeMode={true}
          loop={true}
          slideToClickedSlide={true}
          grabCursor={true}
          /*
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
            */
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {cards.map((c, i) => (
            <SwiperSlide key={i} className="card">
              <i className="iconoir-${c.icon}"></i>
              <p>{c.text}</p>
              <div className="user-card">
                <img src={c.image} alt="" className="user-thumb" />
                <div className="details">
                  <h6 className="name">{c.name}</h6>
                  <p className="site">{c.energy}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-buttons">
            <button
              type="button"
              title="Previous Card"
              className="swiper-button swiper-button-prev"
              ref={prevRef}
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <ArrowLeftCircle />
            </button>
            <button
              type="button"
              title="Next Card"
              className="swiper-button swiper-button-next"
              ref={nextRef}
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <ArrowRightCircle />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
