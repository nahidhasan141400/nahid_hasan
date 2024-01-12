import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="title"
          content="Nahid hasan sagor || Web Development Services || MERN Stack Solutions"
        />
        <meta
          name="description"
          content="Nahid Hasan offer web development services using MERN stack by Nahid Hasan, a top web developer in Bangladesh. Our web application solutions leverage JavaScript to build fast, interactive websites and web apps."
        />
        <meta
          name="keywords"
          content="software engineer , web developer,BD,bd,Bangladesh, full stack web developer,MERN stack developer, Nahid Hasan, Nahid , Bangladesh, ISTT, 141400, bd, nahid developer, node developer, react developer,best developer, Nahid Hasan bd,Nahid Hasan Sagar, React developer,Node js developer,express developer,NH soft,ceo of Nh soft,NH, Dewan ICT, Signature Intro"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="nahid hasan sagor" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nahid Hasan MERN stack developer</title>
      </Head>
      <body>
        <Theme
          accentColor="iris"
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
