// // Import react
// import React, { Component } from "react";

// // Get styles
// import styles from "./styles.module.css";

// // Externals
// import PropTypes from "prop-types";

// // Get mui components
// import {
//   Box,
//   BottomNavigation,
//   Paper,
//   Divider,
//   Typography,
// } from "@mui/material";

// export default function Footer() {
//   return (
//     <div style={{ width: "100%" }}>
//       <Divider className={styles.divider} />
//       <Box className={styles.box} elevation={3}>
//         <Typography
//           variant="h6"
//           style={{
//             color: "#81808B",
//             fontFamily: "Inter",
//             fontWeight: "600",
//             lineHeight: "14px",
//             fontSize: "16px",
//             letterSpacing: "0.003em",
//             textAlign: "Center",
//           }}
//         >
//           Created by Digital Saving Ops - Divisi Digital Operation
//         </Typography>
//       </Box>
//     </div>
//     // <Paper
//     //   elevation={3}
//     //   sx={{
//     //     position: "relative",
//     //     bottom: 0,
//     //     left: 0,
//     //     right: 0,
//     //     padding: "10px",
//     //   }}
//     //   elevation={3}
//     // >
//     //   {/* <Divider className={styles.divider} /> */}
//     //   <BottomNavigation
//     //     style={{
//     //       display: "flex",
//     //       flexDirection: "column",
//     //       alignItems: "center",
//     //       justifyContent: "center",
//     //       padding: "5px",
//     //     }}
//     //   >
//     //     <Typography
//     //       variant="h6"
//     //       style={{
//     //         color: "#81808B",
//     //         fontFamily: "Inter",
//     //         fontWeight: "600",
//     //         lineHeight: "14px",
//     //         fontSize: "16px",
//     //         letterSpacing: "0.003em",
//     //       }}
//     //     >
//     //       Created by Digital Saving Ops - Divisi Digital Operation
//     //     </Typography>
//     //     {/* <BottomNavigationAction label="Recents" /> */}
//     //   </BottomNavigation>
//     // </Paper>
//   );
// }

// Footer.propTypes = {
//   className: PropTypes.string,
//   classes: PropTypes.object.isRequired,
// };
import { Typography } from "@mui/material";
import { Divider, BottomNavigation, Container } from "@mui/material/";
import React from "react";
// import styles from "./styles.jsx";
import styles from "./styles.module.css";

export function Footer (){


  return (
    <div className={styles.box}>
      <Divider className={styles.divider} />
      <Typography variant="h6" className={styles.footerText}>
        Created by AFRI STORE CENTER 
      </Typography>
    </div>
  );
}
// export default Footer;
