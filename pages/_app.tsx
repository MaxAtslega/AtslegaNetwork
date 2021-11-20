import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@mui/material/styles"
import Header from "@components/Header"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "@utils/createEmotionCache"
import theme from "@styles/theme"
import { CssBaseline } from "@mui/material"
import Footer from "@components/Footer"

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
