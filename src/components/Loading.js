import React, { Fragment } from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => (
  <Fragment>
    <div style={{position: "absolute", margin: "0 auto", zIndex: "1000", left: "50%", top: "%35", marginTop: "20%" }}>
      <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="dark" />
    </div>
  </Fragment>
);

export default Loading;