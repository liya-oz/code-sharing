// import React, { useState, useEffect } from "react";

// const CodeDisplayPage = ({ uuid }) => {
//   const [code, setCode] = useState("");

//   useEffect(() => {
//     const fetchCode = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/code/${uuid}`);
//         const data = await response.json();
//         setCode(data.code);
//       } catch (error) {
//         console.error("Error fetching code:", error);
//       }
//     };

//     fetchCode();
//   }, [uuid]);

//   return (
//     <div>
//       <p>Code:</p>
//       <pre>{code}</pre>
//     </div>
//   );
// };

// export default CodeDisplayPage;
