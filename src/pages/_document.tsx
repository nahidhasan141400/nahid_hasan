import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Theme
          accentColor="blue"
          grayColor="olive"
          radius="none"
          scaling="95%"
          appearance="dark"
        >
          <div className="w-full h-screen">
            <Main />
            <NextScript />
          </div>
        </Theme>
      </body>
    </Html>
  );
}
