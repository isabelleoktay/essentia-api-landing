import ServiceCard from "./ServiceCard";

const ServicesCards = ({ services, textSize = "medium", className }) => {
  return (
    <div className={`flex flex-col w-full mx-auto gap-24 ${className}`}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          intro={service.intro}
          textSize={textSize}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          buttonText={service.buttonText}
          onButtonClick={service.onButtonClick}
          chartComponent={service.chartComponent}
          reverse={service.reverse}
        />
      ))}
    </div>
  );
};

export default ServicesCards;
