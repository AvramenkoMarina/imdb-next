'use client'

import { ThemeProvider } from 'next-themes'
function Providers({ children }) {
	return (
		<ThemeProvider defaultTheme='system' attribute='class'>
			<div className=''>{children}</div>
		</ThemeProvider>
	)
}

export default Providers
