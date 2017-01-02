import React from 'react';

const hex = {
  red: '#9A0033',
  green: '#1c2d1b',
  black: '#151821',
  beige: '#e2d3a8',
  gray: '#c0c0ce'
};

module.exports = class Bike extends React.Component {
  render () {
    var pipe = {fill: 'none', strokeMiterlimit: 10};
    var redPipe = Object.assign({stroke: hex.red, strokeWidth: 3}, pipe);
    var thickRedPipe = Object.assign({stroke: hex.red, strokeWidth: 4}, pipe);
    var silverPipe = Object.assign({stroke: hex.gray, strokeWidth: 3}, pipe);
    var redFill = {fill: hex.red};
    var beigeFill = {fill: hex.beige};

    return (
      <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 215'>
        <Shadow x={56} />
        <Shadow x={384} />
        <g className='bike'>
          <g>
            <PedalBack cx={140.5} cy={156.5} />
            <PedalBack cx={262.5} cy={155.5} />
          </g>
          <line {...silverPipe} x1='112.1' y1='80.1' x2='105.2' y2='63' />
          <line {...silverPipe} x1='226' y1='65.7' x2='217.5' y2='45' />
          <line {...silverPipe} x1='204.9' y1='70.1' x2='199.1' y2='56' />
          <path {...redPipe} d='M65.4,139.3c8.1-20.6,18.3-39.3,48-55.9' />
          <path {...silverPipe} d='M332.4,36c1.6,3.7,7.4,18.5,8.6,21.9' />
          <path {...silverPipe} d='M324.5,12.5c7,2,8,3,10,9s2,6,3,8s1,4-1,5s-5,1-5,1s0-1-1-3s-3-5-4-6s-3-3-12-3' />
          <path {...silverPipe} d='M191.5,32.5c7,2,8,3,10,9s2,6,3,8s1,4-1,5s-5,1-5,1s0-1-1-3s-3-5-4-6s-3-3-12-3' />
          <Wheel cx={56} cy={144} r={56} />
          <Wheel cx={384} cy={144} r={56} />
          <path {...redPipe} d='M348.3,75.3c-20.3,11.9-34.6,23.6-47.2,43.8c-12.6,20.2-17.4,35.8-58.9,36.6c-46,0.8-79,1.4-92,1.6c-13,0.2-84.2-10.5-94.3-13.3c8.1-20.6,23.7-44.9,57.4-60.5' />
          <path {...thickRedPipe} d='M343.1,62.4c-37-1.3-71.9,0.6-115.6,22.1c-31.7,15.6-38.3,41.7-65.3,42.2c-10,0.2-31-0.4-31-0.4' />
          <path {...redPipe} d='M329.5,87.6c-16.2-9.7-46.9-18.4-80-12.7' />
          <line {...thickRedPipe} x1='143.8' y1='157.4' x2='110.3' y2='75.5' />
          <line {...thickRedPipe} x1='262.1' y1='153.3' x2='224.5' y2='62' />
          <line {...thickRedPipe} x1='240.1' y1='155.7' x2='203.7' y2='67.1' />
          <line {...redPipe} x1='191.1' y1='156.6' x2='177.2' y2='123.3' />
          <path {...thickRedPipe} d='M339.4,54c4.2,9.9,19.9,49.7,23,58.6c3.2,8.9,9.4,19.8,21.6,31.6' />
          <path {...redFill} d='M304.5,3.5c1,0,19,5,20,6s0,5-1,5s-19.6-3.1-20-4C302.5,8.5,302.5,3.5,304.5,3.5z' />
          <path {...redFill} d='M296.5,18.5c3,0,16,1,17,2s1,5,0,5s-16,0-17-1S294.5,18.5,296.5,18.5z' />
          <path {...redFill} d='M171.5,23.5c1,0,19,5,20,6s0,5-1,5s-19.6-3.1-20-4C169.5,28.5,169.5,23.5,171.5,23.5z' />
          <path {...redFill} d='M163.5,38.5c3,0,16,1,17,2s1,5,0,5s-16,0-17-1S161.5,38.5,163.5,38.5z' />
          <path {...redFill} d='M204.5,29.5c-5,0-4,5-2,7c3.2,3.2,14,2,20,2s15,1,18,0s4-6,4-6c-6,0-17,1-23,1s-10-2-12-3S204.5,29.5,204.5,29.5z' />
          <path {...beigeFill} d='M209.5,30.5c2,1,6,3,12,3s17-1,23-1c0.4-1.2,0.6-2.3,0-3c-1-1-14,2-19,2S215.5,30.5,209.5,30.5z' />
          <path {...redPipe} d='M231.5,37.5c-6,5-6,8-13,8s-8-8-8-9' />
          <path {...redFill} d='M88.5,48.5c-5,0-4,5-2,7c3.2,3.2,14,2,20,2s15,1,18,0s4-6,4-6c-6,0-17,1-23,1s-10-2-12-3S88.5,48.5,88.5,48.5z' />
          <path {...beigeFill} d='M93.5,49.5c2,1,6,3,12,3s17-1,23-1c0.4-1.2,0.6-2.3,0-3c-1-1-14,2-19,2S99.5,49.5,93.5,49.5z' />
          <path {...redPipe} d='M115.5,56.5c-6,5-6,8-13,8s-8-8-8-9' />
          <Cog cx={140.5} cy={156.5} />
          <Cog cx={262.5} cy={155.5} />
          <path {...redFill} d='M276.5,156.5c0,3.2,6.4-3.8,4.2-10.4c-2.2-6.6-8.2-10.6-18.2-10.6s-145,1-145,1c-6,0-57-4-59-4s-7,11-6,12s19-2,66-2c0,0,139,0,144,0S276.5,147.5,276.5,156.5z' />
          <g>
            <PedalFront cx={140.5} cy={156.5} />
            <PedalFront cx={262.5} cy={155.5} />
          </g>
        </g>
      </svg>
    );
  }
};

class Cog extends React.Component {
  render () {
    return (
      <g className='wheel'>
        <circle cx={this.props.cx} cy={this.props.cy} r={this.props.r} stroke={hex.gray} strokeWidth={2} fill='none' />
        {this.renderTeeth()}
      </g>
    );
  }

  renderTeeth () {
    var r = this.props.r;
    var cx = this.props.cx;
    var cy = this.props.cy;
    var count = 20;
    var cogs = [];
    for (var cog = 0; cog < count; cog++) {
      cogs.push(
        <line key={cog} className={'tooth tooth-' + cog}
          x1={cx}
          y1={cy + r}
          x2={cx}
          y2={cy + r + 2}
          stroke={hex.gray}
          strokeWidth='2'
        />
      );
    }
    return cogs;
  }
}
Cog.defaultProps = {r: 16};

class PedalFront extends React.Component {
  render () {
    return <HalfPedal side='front' {...this.props} />;
  }
}
class PedalBack extends React.Component {
  render () {
    return <HalfPedal side='back' {...this.props} />;
  }
}

class HalfPedal extends React.Component {
  render () {
    var front = this.props.side === 'front';
    return (
      <g className='pedal'>
        {front ? null : this.renderPedal(front)}
        {front ? <circle cx={this.props.cx} cy={this.props.cy} r={this.props.r - 7} fill={hex.gray} stroke='none' /> : null}
        {front ? this.renderPedal(front) : null}
      </g>
    );
  }

  renderPedal (front) {
    var ped = <rect x={this.props.cx - 5} y={this.props.cy + ((front ? 1 : -1) * this.props.r * 1.5) + ((front ? -1 : 0) * 4)} width={10} height={4} rx={2} ry={2} fill={hex.black} />;
    return (
      <g>
        {front ? null : ped}
        <path opacity={front ? 100 : 0} stroke={hex.gray} strokeWidth={4} d={['M', this.props.cx, ',', this.props.cy, 'v', '', this.props.r * 1.5].join('')} />
        <path opacity={front ? 0 : 100} stroke={hex.gray} strokeWidth={4} d={['M', this.props.cx, ',', this.props.cy, 'v', '-', this.props.r * 1.5].join('')} />
        {front ? ped : null}
      </g>
    );
  }
}
HalfPedal.defaultProps = {r: 16};

class Wheel extends React.Component {
  render () {
    var r = this.props.r;
    var cx = this.props.cx;
    var cy = this.props.cy;
    return (
      <g className='wheel'>
        <circle key='tire' cx={cx} cy={cy} r={r * 0.9} strokeWidth='5' stroke={hex.black} fill='none' />
        <circle key='whiteWall' cx={cx} cy={cy} r={r * 0.83} stroke={hex.beige} fill='transparent' strokeWidth='5' />
        <circle key='rim' cx={cx} cy={cy} r={r * 0.8} stroke={hex.gray} fill='none' strokeWidth='2' />
        {this.renderSpokes()}
      </g>
    );
  }

  renderSpokes () {
    var cx = this.props.cx;
    var cy = this.props.cy;
    return this.getSpokeCoordinates(20)
    .map(function (c, i) {
      return (
        <line key={i}
          x1={cx}
          y1={cy}
          x2={c.x}
          y2={c.y}
          stroke='lightgray'
          strokeWidth='2'
        />
      );
    });
  }

  getSpokeCoordinates (spokes) {
    var r = this.props.r;
    var cx = this.props.cx;
    var cy = this.props.cy;
    var points = [];
    for (var i = 0; i < 360; i += 360 / spokes) {
      points.push(pointsOnCircumference(r * 0.8, i, {x: cx, y: cy}));
    }
    return points;
  }
}

class Shadow extends React.Component {
  render () {
    return (
      <g className='shadow' fill='black' >
        <ellipse cx={this.props.x} cy={198} rx={15} ry={2} opacity={0.1} />
        <ellipse cx={this.props.x} cy={198} rx={35} ry={4} opacity={0.1} />
      </g>
    );
  }
}

function pointsOnCircumference (radius, degrees, origin) {
  var radians = degrees * Math.PI / 180;
  return {
    x: origin.x + radius * Math.cos(radians),
    y: origin.y + radius * Math.sin(radians)
  };
}
