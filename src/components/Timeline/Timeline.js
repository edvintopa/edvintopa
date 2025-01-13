import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCamera, faCampground, faSun, faPalette, faLaughBeam, faPizzaSlice, faCocktail } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';

import AFRYLogo from '../../AFRY_White_Vertical.svg';

const timelineData = [
  { title: 'System developer', date: 'September 2024', icon: faCode, description: 'Internship at AFRY as a system developer.', badges: ['.NET', 'PostgreSQL', 'Blazor', 'REST'], logo: AFRYLogo },
  { title: '8:00 AM', date: 'May 18', icon: faCamera, description: 'Worked on several freelance projects.', badges: ['Freelance'] },
  { title: '7:25 PM', date: 'May 6', icon: faCampground, description: 'Joined a tech startup as a front-end developer.', badges: ['Startup'] },
  { title: '3:55 PM', date: 'Apr 26', icon: faSun, description: 'Learned React and built several applications.', badges: ['React'] },
  { title: '5:24 PM', date: 'Apr 12', icon: faPalette, description: 'Started my own blog about web development.', badges: ['Blog'] },
  { title: '11:25 AM', date: 'Apr 11', icon: faLaughBeam, description: 'Worked on open-source projects and contributed to the community.', badges: ['Open Source'] },
  { title: '12:30 PM', date: 'Apr 5', icon: faPizzaSlice, description: 'Joined a multinational company as a senior developer.', badges: ['Senior Developer'] },
];

function Timeline() {
  return (
    <div className="container py-5">
      <div className="main-timeline-4 text-white">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>
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