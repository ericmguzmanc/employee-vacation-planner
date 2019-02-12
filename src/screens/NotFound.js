import React, { Fragment, useState } from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

import './styles/common.css';

function NotFound(props) {

  const [height] = useState(window.innerHeight);

  return(
    <Fragment>
      <Container className="mainCointainer" style={{minHeight: `${height}px`}}>
          <Card className="auth-card align-middle">
            <CardBody>
              
              <Row style={{marginBottom: "20px"}}> 
                <Col sm={12} className="text-center">
                  <Col sm={12} className="text-center" style={{color: "#4795D6", fontSize: "2rem"}}>
                    <FontAwesomeIcon icon={faUmbrellaBeach}/>
                  </Col>
                  <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>Employee Vacation Planer</span>
                </Col>
              </Row>

              <Col sm={12} className="text-center">
                <h2>Page Not Found :(</h2>
                <h2 style={{fontWeight:"bold", color:"#4c4c4c"}}>404</h2>
              </Col>

            </CardBody>
            {/* <CardFooter className="text-center" style={{fontSize: "0.9rem"}}>
              
            </CardFooter> */}
          </Card>
        </Container>
    </Fragment>
  );
};

export default NotFound;


