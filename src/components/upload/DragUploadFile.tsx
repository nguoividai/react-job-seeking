import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

type DragUploadFileProps = {
  children?: React.ReactNode;
};

const DragUploadFile: React.FC<DragUploadFileProps> = ({ children }) => {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
  };

  return (
    <>
      <FileUploader handleChange={handleChange} name="file" style={{ width: '100%' }}>
        {children ? (
          children
        ) : (
          <div
            style={{
              background: '#FBFBFB',
              border: '1px solid #E7EAEF',
              borderRadius: 5,
              padding: '2rem',
              textAlign: 'center',
            }}
          >
            <strong>Click here to select file</strong> or drag and drop your files instead
          </div>
        )}
      </FileUploader>
    </>
  );
};

export default React.memo(DragUploadFile);
