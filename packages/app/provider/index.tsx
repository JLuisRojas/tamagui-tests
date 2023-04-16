import { CustomToast } from '@my/ui'
import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import {
  isServerSide,
  TamaguiProvider,
  TamaguiProviderProps,
  ToastProvider,
  ToastViewport,
} from '@my/ui'
import { useColorScheme } from 'react-native'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  const defaultTheme = scheme === 'dark' ? 'dark' : 'light'
  // const defaultTheme = 'dark'

  console.log('isServerSide', isServerSide)
  console.log('scheme', scheme)
  console.log('defaultTheme', defaultTheme)

  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme={defaultTheme} {...rest}>
      <ToastProvider swipeDirection="horizontal" native="mobile">
        <NavigationProvider>{children}</NavigationProvider>

        <CustomToast />
        <ToastViewport left={0} right={0} top={2} />
      </ToastProvider>
    </TamaguiProvider>
  )
}
