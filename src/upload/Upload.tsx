import React, { useRef } from 'react';
import {
  RcFile,
  UploadProps,
  UploadProgressEvent,
  UploadRequestError,
} from './interface';
import getUid from './uid';
import defaultRequest from './request';

function Upload(props: UploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { children, name, method } = props;

  //   点击上传
  const handleClick = (e: React.MouseEvent) => {
    const el = fileInputRef.current;
    if (!el) {
      return;
    }

    el.click();
  };

  //   文件上传
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    console.log('files: ', files);
    uploadFiles(files);
  };

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.prototype.slice.call(files);
    postFiles
      .map(file => {
        file.uid = getUid();
        return file;
      })
      .forEach(file => {
        post(file, postFiles);
      });
  };

  const uploadFile = (file: RcFile, fileList: Array<RcFile>) => {};

  //   单个文件上传
  const post = async (file: RcFile) => {
    let { transformFile = originFile => originFile } = props;

    const action = await new Promise(resolve => {
      let { action } = props;
      if (typeof action === 'function') {
        action = action(file);
      }
      return resolve(action);
    });

    const transformedFile = await Promise.resolve(transformFile(file));

    const data = await new Promise(resolve => {
      let { data } = props;
      if (typeof data === 'function') {
        data = data(transformedFile);
      }
      return resolve(data);
    });

    const requestOption = {
      action,
      filename: props.name,
      data,
      file: transformedFile,
      headers: props.headers,
      withCredentials: props.withCredentials,
      method: props.method || 'post',
      // onProgress: onProgress
      //   ? (e: UploadProgressEvent) => {
      //       onProgress(e, file);
      //     }
      //   : null,
      onSuccess: (ret: any, xhr: XMLHttpRequest) => {
        //   delete this.reqs[uid];
        // props.onSuccess(ret, file, xhr);
      },
      onError: (err: UploadRequestError, ret: any) => {
        console.log('err: ', err);
        //   delete this.reqs[uid];
        // props.onError(err, ret, file);
      },
    };

    defaultRequest(requestOption);
  };

  return (
    <div onClick={handleClick}>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      {children}
    </div>
  );
}

function noop() {}

Upload.defaultProps = {
  component: 'span',
  prefixCls: 'chengyou-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onStart: noop,
  onError: noop,
  onSuccess: noop,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true,
};

export default Upload;
