import React, { useState } from 'react';
import classnames from 'classnames';

import './style/index.scss';

type InputSize = 'small' | 'large';

interface InputProps {
  prefixCls?: string;
  placeholder?: string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;

  size?: InputSize;
  onChange?: (e: any) => void;
}

function Input(props: InputProps) {
  const {
    prefixCls,
    size,
    placeholder,
    addonBefore,
    addonAfter,
    onChange,
  } = props;

  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const cls = classnames(`${prefixCls}-wrapper`, {
    [`${prefixCls}-focus`]: focus,
    [`${prefixCls}-${size}`]: size,
  });

  return (
    <span className={cls}>
      {addonBefore && (
        <div className={`${prefixCls}-addon-before`}>{addonBefore}</div>
      )}
      <input
        placeholder={placeholder}
        className="chengyou-input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
      {addonAfter && (
        <div className={`${prefixCls}-addon-after`}>{addonAfter}</div>
      )}
    </span>
  );
}

Input.defaultProps = {
  prefixCls: 'chengyou-input',
  onChange() {},
};

export default Input;
