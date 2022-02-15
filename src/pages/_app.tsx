import type { AppProps } from "next/app";

import GlobalStyles from "styles/global";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
};

export default App;
