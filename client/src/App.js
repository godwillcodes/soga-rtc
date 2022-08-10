import React from "react";
import { Typography, AppBar } from "@material-ui/core";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">  
                <Typography variant="h6" align="center">Hello World</Typography>
            </AppBar>
            <VideoPlayer/>
            <Options>
                <Notifications/>
            </Options>
        </div>
    );
}

export default App;



