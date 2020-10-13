import React from 'react';
import classnames from 'classnames';

type ButtonType = 'default' | 'primary' | 'dsahed' | 'text' | 'link';
type ButtonSize = 'small' | 'middle' | 'large';

interface ButtonProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: ButtonType;
  children: React.ReactChild;
  loading?: boolean;
  size?: ButtonSize;
}

function Button(props: ButtonProps) {
  const { className, loading, prefixCls, style, type, size, children } = props;

  const cls = classnames(prefixCls, className, {
    //   按钮类型
    [`${prefixCls}-primary`]: type === 'primary',
    [`${prefixCls}-dsahed`]: type === 'dsahed',
    [`${prefixCls}-text`]: type === 'text',
    // 按钮大小
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-middle`]: size === 'middle',
    [`${prefixCls}-large`]: size === 'large',

    [`${prefixCls}-loading`]: loading,
  });

  return (
    <button className={cls} style={style}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  prefixCls: 'chengyou-btn',
};

export default Button;
