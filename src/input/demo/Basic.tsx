import React from 'react';
import { Input } from 'chengyou';

function Basic() {
  const handleChanage = (e: any) => {
    const value = e.target.value;
    console.log('value: ', value);
  };

  return (
    <div>
      <Input placeholder="Basic" onChange={handleChanage} />
    </div>
  );
}

export default Basic;
