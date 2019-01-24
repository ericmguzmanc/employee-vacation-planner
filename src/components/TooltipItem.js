import React, { PureComponent } from 'react';
import { Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';


class TooltipItem extends PureComponent {
  
  _isMounted = false;

  state = { 
    tooltipOpen: false
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle = () => {
    if (this._isMounted) {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }

  render() {
    return (
      <span>
        <span id={`Tooltip-${this.props.id}`}>
          {this.props.children}
        </span>
        <Tooltip placement={this.props.placement} delay={{show: 1000, hide: 100}} isOpen={this.state.tooltipOpen} target={`Tooltip-${this.props.id}`} toggle={this.toggle}>
          {this.props.toggleText}
        </Tooltip>
      </span>
    );
  }

}

TooltipItem.propTypes = {
  id: PropTypes.number.isRequired,
  placement: PropTypes.string.isRequired,
  toggleText: PropTypes.string.isRequired,
};

export default TooltipItem;