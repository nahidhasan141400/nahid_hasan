import "@/styles/globals.css";
import "@/styles/github.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
