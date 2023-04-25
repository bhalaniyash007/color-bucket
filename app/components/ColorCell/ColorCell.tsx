import React, { Component, useState } from 'react';
import Typography from '@components/Typography/Typography';
import useCopyToClipboard from '@hooks/copyToClipboard.hook';
import { SIZE } from '@theme/styles';
import { IColor } from '@types';

interface IColorCode {
  color: string;
}

const ColorCode = ({ color }: IColorCode) => {
  const [copyValue, setCopyValue] = useCopyToClipboard();
  const [copyStatus, setCopyStatus] = useState(false);

  const copyValueHandler = () => {
    setCopyValue(colorString).then(() => setCopyStatus(true));
  };

  const colorString = `#${color}`;
  return (
    <>
      <div className="color-code">
        <button
          style={{
            padding: '5px',
            borderRadius: '5px',
            background: '#00000020',
            marginTop: '25px',
            marginLeft: '5px',
            maxWidth: '80px',
            border: '0px',
            cursor: 'pointer',
          }}
          onClick={() => {
            setCopyValue(colorString).then(() => {
              setCopyStatus(true);
              setTimeout(() => setCopyStatus(false), 1000);
            });
          }}>
          <Typography tag="caption" text={copyStatus ? 'Copied !' : colorString} color={'white'} />
        </button>
      </div>
    </>
  );
};

const ColorCell = ({ color }: IColor) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className="color-cell"
        style={{
          background: `#${color}`,
          width: SIZE.COLOR_CELL.WIDTH,
          height: SIZE.COLOR_CELL.HEIGHT,
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}>
        {hover ? <ColorCode color={color} /> : <></>}
      </div>
    </>
  );
};

//
export default ColorCell;
