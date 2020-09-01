import React, { useState } from 'react';

import FileUpload from './components/FileUpload';
import ImagePreview from './components/ImagePreview';
import compareFaces from './services/ComparisonService';

export default function App() {

  const [sourceFile, setSouceFile] = useState();
  const [targetFile, setTargetFile] = useState();

  const [sourceFilePreview, setSourceFilePreview] = useState();
  const [targetFilePreview, setTargetFilePreview] = useState();


  const handleSourceFileChange = (file) => {
    setSourceFilePreview(URL.createObjectURL(file));
    setSouceFile(file);

  }

  const handleTargetFileChance = (file) => {
    setTargetFilePreview(URL.createObjectURL(file));
    setTargetFile(file);
  }

  const onClick = async () => {
    const data = { sourceFile, targetFile };

    const response = await compareFaces(data);
    console.log(response);
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>Face comparison</h1>

      <div className="row">
        <ImagePreview src={sourceFilePreview} />
        <ImagePreview src={targetFilePreview} />
      </div>

      <div className="row">

        <FileUpload onChange={handleSourceFileChange} />
        <FileUpload onChange={handleTargetFileChance} />

      </div>

      <button className="btn waves-effect waves-light" type="submit" onClick={onClick} name="action">Submit
        <i className="material-icons right">send</i>
      </button>


    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
};