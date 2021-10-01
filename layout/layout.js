import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/ThemeSwitch";
import Topbar from "../components/Topbar";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Emeric Gnonhoue - Front-end Developer, Humanitarian",
    description: `I've been building amazing experiences for 5 years straight. Get in touch with me to know more.`,
    image: "/imgs/me.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://emeric.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://emeric.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Emeric Gnonhoue" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Rickem_yrn" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-blue-900 w-full">
        <Topbar />
        <Navbar />
        <div className="sm:ml-14">{children}</div>
        <Footer />
      </main>
    </div>
  );
}