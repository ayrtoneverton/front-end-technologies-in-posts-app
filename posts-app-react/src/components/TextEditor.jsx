import React from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';

const ReactQuillStyled = styled(ReactQuill)`
  .ql-toolbar {
    border-radius: 4px 4px 0 0;
    padding: 0 .5rem !important;
  }
  .ql-container {
    max-height: 32rem;
    overflow: auto;
    border-radius: 0 0 4px 4px;
  }
  .ql-editor {
    min-height: 4.88rem;
  }
`;

const editorModules = {
  toolbar: [
    [
      { font: [] },
      { header: [1, 2, 3, 4, 5, 6, false] },
      { size: ['small', false, 'large', 'huge'] },
      { align: [] },
      { color: [] },
      { background: [] },
      'bold', 'italic', 'underline', 'strike',
      'code', 'blockquote', 'code-block',
      { list: 'ordered' }, { list: 'bullet' },
      { script: 'sub' }, { script: 'super' },
      { indent: '-1' }, { indent: '+1' },
      { direction: 'rtl' },
      'link', 'image', 'video', 'clean',
    ],
  ],
};

const TextEditor = (props) => (
  <ReactQuillStyled
    modules={editorModules}
    {...props}
  />
);

export default TextEditor;

export const ShowText = ({ text, ...props }) => (
  <div className="ql-snow" {...props}>
    <div className="ql-editor" dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);
