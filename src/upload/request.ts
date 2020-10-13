import { UploadRequestOption, UploadRequestError } from './interface';

function getError(option: UploadRequestOption, xhr: XMLHttpRequest) {
  const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
  const err = new Error(msg) as UploadRequestError;
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function request(option: UploadRequestOption) {
  const { method, action, data, file, filename, withCredentials } = option;

  const xhr = new XMLHttpRequest();

  //   上传进度
  if (option.onProgress && xhr.upload) {
  }

  const formData = new FormData();

  if (data) {
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach(item => {
          formData.append(`${key}[]`, item);
        });
        return;
      }
      formData.append(key, value);
    });
  }

  //   https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/append
  if (file instanceof Blob) {
    formData.append(filename, file, file.name);
  } else {
    formData.append(filename, file);
  }

  xhr.onerror = function error(e) {
    option.onError && option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open(method, action, true);

  // 携带凭证
  if (withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  //   设置请求头
  const headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  Object.keys(headers).forEach(key => {
    if (headers[key] !== null) {
      xhr.setRequestHeader(key, headers[key]);
    }
  });

  xhr.send(formData);

  return {
    abord() {
      xhr.abort();
    },
  };
}

export default request;
