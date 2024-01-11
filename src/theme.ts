//for dark mode we have write this code in theme.ts
//and also done changes in main.tsx and in local storage of web
import { extendTheme ,ThemeConfig } from "@chakra-ui/react";

//below syntax means a config has datatype ThemeConfig
const config : ThemeConfig = {
    initialColorMode:'dark'
}
//we will pass extendThem a config object and it returns a theme which we gonna export
const theme = extendTheme({config,
//greyish colors decided as per chakra doc we change the palette (smartSwatch refer docs)
    colors : {
        gray : {
            50 : '#f9f9f9',
            100 : '#ededed',
            200 : '#d3d3d3',
            300 : '#b3b3b3',
            400 : '#a0a0a0',
            500: '#898989',
            600: '6c6c6c',
            700:'#202020',
            800:'#121212',
            900:'#111'

        }
    }
});

export default theme;