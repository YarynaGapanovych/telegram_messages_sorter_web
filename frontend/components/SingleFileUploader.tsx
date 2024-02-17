// import { Button } from "antd";
// import React, { useState } from "react";

// const SingleFileUploader = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//     }
//   };

//   return (
//     <>
//       <div>
//         <label htmlFor="file" className="sr-only">
//           Choose a file
//         </label>
//         <input id="file" type="file" onChange={handleFileChange} />
//       </div>
//       {file && (
//         <section>
//           File details:
//           <ul>
//             <li>Name: {file.name}</li>
//             <li>Type: {file.type}</li>
//             <li>Size: {file.size} bytes</li>
//           </ul>
//         </section>
//       )}

//       {/* {file && <Button onClick={handleUpload}>Upload a file</Button>} */}
//     </>
//   );
// };

// export default SingleFileUploader;
