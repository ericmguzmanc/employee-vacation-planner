import React, { Fragment, PureComponent, Suspense } from 'react';
import Navbar from './Navbar';
import Loading from './Loading';

export default function withNavbar (WrappedComponent, ...props) {
  return class extends PureComponent {
    render() {
      return (
        <Fragment>
          <Navbar></Navbar>
          <Suspense fallback={<Loading />}>
            <div className="container-fluid" style={{marginTop:"10px"}}>
              <WrappedComponent {...props} />
            </div>
          </Suspense>
        </Fragment>
      );
    }
  };
};
