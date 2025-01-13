import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Timeline from '../../components/Timeline/Timeline.js';
import './LandingPage.css';

function LandingPage() {
  return (
    <Container className="landing-page">
      
      <Timeline />
    </Container>
  );
}

export default LandingPage;