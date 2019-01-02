import React, { Fragment, PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import { Col } from 'reactstrap';

export default function withSidebar (WrappedComponent, mapStateToProps) {
  class ReduxContainer extends PureComponent {
    render() {
      return (
        <Fragment>
          <Suspense fallback={<Loading />}>
            <Col xl={this.props.sidebarExpanded ? 10 : 11}>
              <div className="container-fluid" style={{marginLeft: this.props.sidebarExpanded ? 240 : 64, padding: '15px 20px 0 20px'}}>
                <WrappedComponent  />
              </div>
            </Col>
          </Suspense>
        </Fragment>
      );
    }
  };

  return connect(mapStateToProps)(ReduxContainer);
};

