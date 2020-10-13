/**
 *
 * title: 前置/后置标签
 * desc: 用于配置一些固定组合。
 */
import React from 'react';
import { Input } from 'chengyou';

function Addon() {
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="Addon" addonBefore="$" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="Addon" addonAfter="元" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="Addon" addonBefore="http://" addonAfter=".com" />
      </div>
    </div>
  );
}

export default Addon;
