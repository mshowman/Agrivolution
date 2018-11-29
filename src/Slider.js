//Slider.js

/* eslint-disable react/prop-types */

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React ,{Component} from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };


class DeviceSlider extends Component {
  constructor(props) {
      super(props);
      this.state = {props};
  }

    render(){
      return(
        <div style={wrapperStyle}>
          <p>Move the slider to calibrate the device.</p>
          <Slider min={0} max={100} defaultValue={this.state.default} handle={handle} />
        </div>
      );
    }
}

export default DeviceSlider;
