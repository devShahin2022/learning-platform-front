import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './Faqs.css';

const Faqs = () => {
    return (
        <Container className='py-4 bg-white'>
            <h1 className='mb-4'>Your questin our answer</h1>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why our course?</Accordion.Header>
        <Accordion.Body>
          <p className="lead">First of all our course on of the best counse in the world. We will support you any time . Low cost and good quality learning.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to enroll course?</Accordion.Header>
        <Accordion.Body>
          <p className="lead">Go to home page or join our group for update information.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How about your learning quality?</Accordion.Header>
        <Accordion.Body>
          <p className="lead">Check our free videos</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>When closed your enroll system?</Accordion.Header>
        <Accordion.Body>
          <p className="lead">with in 7 days.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Where come from all the teachers?</Accordion.Header>
        <Accordion.Body>
          <p className="lead">They are most of university background student</p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </Container>
    );
};

export default Faqs;