import React from "react";
import '../assets/css/main.css'; 

const FeatureItem = ({imageSrc, title, description}) => {
    return (
        <div className="feature-item">
          <img src={imageSrc} alt={`${title} Icon`} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {description}
          </p>
        </div>
    );
};

export default FeatureItem; 