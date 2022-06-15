import React from 'react';
import { Button } from 'antd';
import { IProps } from './types';

const NoFoundView = ({ handleClick }: IProps) => {
  return (
    <div className="error-content">
      <p>
        <Button onClick={handleClick}>Come back</Button>
      </p>
    </div>
  );
};
export default NoFoundView;
