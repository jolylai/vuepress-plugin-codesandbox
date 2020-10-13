const now = +new Date();
let index = 0;

function uid() {
  // eslint-disable-next-line no-plusplus
  return `chengyou-upload-${now}-${++index}`;
}

export default uid;
