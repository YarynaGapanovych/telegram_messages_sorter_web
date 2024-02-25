import React, { useState } from "react";
import { Button } from "./ui";

interface FileInputProps {
  onFileSelect: (file: File) => void;
}

const FileInput = ({ onFileSelect }: FileInputProps) => {
  const [fileName, setFileName] = useState("");

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFileName(e.target.files?.[0].name || "");
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <>
      {fileName ? (
        <div className="flex gap-3 align-middle">
          <div>Chosen file: {fileName}</div>
          <Button>
            <label htmlFor="dropzone-file">Change file</label>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileInput}
            />
          </Button>
        </div>
      ) : (
        <>
          <div>Chose file with telegram data:</div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 ">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileInput}
              />
            </label>
          </div>
        </>
      )}
    </>
  );
};

export default FileInput;
