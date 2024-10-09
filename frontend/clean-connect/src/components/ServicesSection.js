import React from "react";
import "../styles/servicesSection.css";

const services = [
  {
    title: "Wash and Fold",
    description: "View Details",
    imageUrl:
      "https://img.freepik.com/premium-photo/laundry-basket-white-background_608297-42839.jpg?uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid",
    icon: "🧺",
  },
  {
    title: "Dry Cleaning",
    description: "View Details",
    imageUrl:
      "https://img.freepik.com/premium-photo/bright-colored-clothes-are-drying-clothesline-against-blue-sunny-sky-laundry-day-generative-ai_849006-22021.jpg?uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid",
    icon: "🧼",
  },
  {
    title: "Iron Clothes",
    description: "View Details",
    imageUrl:
      "https://img.freepik.com/premium-photo/electric-iron-pile-clothes_93675-12728.jpg?uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid",
    icon: "🧳",
  },
  {
    title: "Shoe Care",
    description: "View Details",
    imageUrl:
      "https://img.freepik.com/premium-photo/woman-cleaning-stylish-sneakers-with-gloves-brush_906149-67420.jpg?uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid",
    icon: "👞",
  },
  {
    title: "Carpet Cleaning",
    description: "View Details",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-man-cleaning-his-house_23-2148112715.jpg?t=st=1727520479~exp=1727524079~hmac=6560899acd291be1b5fcf075ec339a3e8cd6851509310dfcd129179ce5658f59&w=1380",
    icon: "🧹",
  },
  {
    title: "Curtain Cleaning",
    description: "View Details",
    imageUrl:
      "https://img.freepik.com/free-photo/curtain-with-sunlight_1339-4061.jpg?size=626&ext=jpg&uid=R156950503&ga=GA1.1.305839536.1726218127&semt=ais_hybrid",
    icon: "🧣",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">
        We are here to make our customers smile with{" "}
        <span className="highlight-text">our services</span>
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
