import {extendTheme} from "@chakra-ui/react";

import bg from "../source/bg.jpg";
export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        w: "100%",
        minH: "100vh",
        fontSize: "16px",
      },
    },
  },
});
