//for dark mode we have write this code in theme.ts
//and also done changes in main.tsx and in local storage of web
import { extendTheme ,ThemeConfig } from "@chakra-ui/react";

//below syntax means a config has datatype ThemeConfig
const config : ThemeConfig = {
    initialColorMode:'dark'
}
//we will pass extendThem a config object and it returns a theme which we gonna export
const theme = extendTheme({config});

export default theme;