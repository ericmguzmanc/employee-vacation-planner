import React, { Fragment } from 'react';
import { Spinner, Container } from 'reactstrap';
import { Animated } from 'react-animated-css';


const PageLoading = ({ isLoading, type }) => {

  const innerHeight = window.innerHeight;

  const ContainerStyles = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    minHeight: innerHeight,
    // position: "fixed"
  };  

  if(typeof isLoading != "undefined") {
    if(!isLoading) {
      return null;
    }
  }

  return(
    <Fragment>
      <Animated animationIn="fadeIn" animationOut="fadeOut">
        <Container styles={{margin: "0 auto"}}>
          <Container style={ContainerStyles}>
            <span style={{margin: "0 auto" }}>
              <Spinner style={{ width: '3rem', height: '3em'}}  color="dark" />
            </span>
          </Container>
        </Container>
      </Animated>
    </Fragment>
  );
}


export default PageLoading;