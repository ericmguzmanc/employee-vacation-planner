import React, { Fragment } from 'react';
import { Spinner } from 'reactstrap';

const Loading = (props) => {

  const marginTop = (props.marginTop ? props.marginTop : "20%")

  return(
    <Fragment>
      <div style={{position: "absolute", margin: "0 auto", zIndex: "1000", left: "45%", top: "%35", marginTop: `${marginTop}` }}>
        <Spinner style={{ width: '3rem', height: '3rem' }} type={props.type} color="dark" />
      </div>
    </Fragment>
  );
}

export default Loading;