import React from 'react';

function index() {
  return (
    <div>
      <h2>normal</h2>
      <p> 连续的空白符会被合并，换行符会被当作空白符来处理。换行在填充「行框盒子(line boxes)」时是必要。</p>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure,
            eum natus enim maxime
            laudantium quibusdam illo nihil,

        reprehenderit saepe quam aliquid odio accusamus.
      </div>
      <h2>nowrap</h2>
      <p>和 normal 一样，连续的空白符会被合并。但文本内的换行无效。</p>
      <div style={{ whiteSpace: 'nowrap'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure,
            eum natus enim maxime
            laudantium quibusdam illo nihil,

        reprehenderit saepe quam aliquid odio accusamus.
      </div>
      <h2>pre</h2>
      <p>连续的空白符会被保留。在遇到换行符或者&gtbr&lt元素时才会换行。</p>
      <div style={{ whiteSpace: 'pre'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure,
            eum natus enim maxime
            laudantium quibusdam illo nihil,

        reprehenderit saepe quam aliquid odio accusamus.
      </div>
      <h2>nowrap</h2>
      <p>和 normal 一样，连续的空白符会被合并。但文本内的换行无效。</p>
      <div style={{ whiteSpace: 'nowrap'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure,
            eum natus enim maxime
            laudantium quibusdam illo nihil,

        reprehenderit saepe quam aliquid odio accusamus.
      </div>
      <h2>nowrap</h2>
      <p>和 normal 一样，连续的空白符会被合并。但文本内的换行无效。</p>
      <div style={{ whiteSpace: 'nowrap'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure,
            eum natus enim maxime
            laudantium quibusdam illo nihil,

        reprehenderit saepe quam aliquid odio accusamus.
      </div>
      <h2>nowrap</h2>
      <p>和 normal 一样，连续的空白符会被合并。但文本内的换行无效。</p>
      <div style={{ whiteSpace: 'nowrap'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure,
            eum natus enim maxime
            laudantium quibusdam illo nihil,

        reprehenderit saepe quam aliquid odio accusamus.
      </div>
    </div>
  );
}

export default index;
