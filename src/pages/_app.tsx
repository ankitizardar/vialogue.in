import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import PageLoader from "@/Components/PageLoader";
import { useRouter } from "next/router";
import NavBar from "@/Components/NavBar";
import Head from "next/head";

const manrope = DM_Sans({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600"],
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <main className={manrope.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {loading && <PageLoader fout={loading} />}
      <Component {...pageProps} />
    </main>
  );
}
