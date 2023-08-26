import {extendTheme} from '@mui/joy'
import {Mode} from '@mui/system/cssVars/useCurrentColorScheme'

export const defaultMode: Mode = 'system'

export const theme = extendTheme({
	/**
	 * @link https://mui.com/joy-ui/customization/themed-components/#theme-style-overrides
	 */
	components: {
		JoyList: {
			styleOverrides: {
				root: {
					paddingBlock: 0
				}
			}
		}
	},
	/**
	 * @link https://mui.com/joy-ui/customization/theme-colors/
	 */
	colorSchemes: {
		light: {
			palette: {
				background: {
					body: 'white'
				}
			}
		}
	}
})