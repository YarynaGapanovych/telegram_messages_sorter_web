import React, { useState, useEffect } from "react";

interface FileInputProps {
  onFileSelect: (file: File) => void;
}

const FileInput = ({ onFileSelect }: FileInputProps) => {
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return <input type="file" onChange={handleFileInput} />;
};

export default FileInput;
