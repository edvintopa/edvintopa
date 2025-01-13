import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faShop, faMap, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';
import timelineDataJson from '../../assets/data/timelineData.json';

const iconMap = {
  faPaperPlane,
  faShop,
  faMap,
  faDollarSign
};

function Timeline() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Replace icon strings with actual icon objects
    const updatedData = timelineDataJson.map(item => ({
      ...item,
      icon: iconMap[item.icon]
    }));
    setTimelineData(updatedData);
  }, []);

  return (
    <div className="container py-5">
      <div className="main-timeline-4 text-white">
        {timelineData.map((item, index) => (

          <div key={index} className={`timeline-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} ${index === 0 ? 'flash-dot' : ''}`}>

            <div className={`card ${index % 2 === 0 ? 'gradient-custom' : 'gradient-custom-4'}`}>
              <div className="card-body p-4">
                {item.logo && <img src={item.logo} alt={`${item.title} logo`} className="company-logo" />}
                <FontAwesomeIcon icon={item.icon} className="fa-2x mb-3" />
                <h4>{item.title}</h4>
                <p className="small text-white-50 mb-4">{item.date}</p>
                <p>{item.description}</p>
                {item.badges.map((badge, badgeIndex) => (
                  <h6 key={badgeIndex} className="badge bg-body-tertiary text-black mb-0">{badge}</h6>
                ))}
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Timeline;