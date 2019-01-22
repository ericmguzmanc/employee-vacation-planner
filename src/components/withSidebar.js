import React, { Fragment, PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import { Col } from 'reactstrap';
import { Animated } from 'react-animated-css';

export default function withSidebar (WrappedComponent, mapStateToProps) {
  class ReduxContainer extends PureComponent {
    render() {
      return (
        <Fragment>
          <Suspense fallback={<Loading />}>
            <Animated animationIn="fadeIn" animationOut="fadeOut">
              <Col xl={this.props.sidebarExpanded ? 10 : 11}>
                <div className="container-fluid" style={{marginLeft: this.props.sidebarExpanded ? 240 : 64, padding: '15px 20px 0 20px'}}>
                  <WrappedComponent  />
                </div>
              </Col>
            </Animated>
          </Suspense>
        </Fragment>
      );
    }
  };

  return connect(mapStateToProps)(ReduxContainer);
};

