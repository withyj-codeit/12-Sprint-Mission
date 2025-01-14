import { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <h1>pages 공통 레이아웃</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default App
