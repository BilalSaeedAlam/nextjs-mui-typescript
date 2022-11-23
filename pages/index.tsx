import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useCountdown from "../src/hooks/useCountdown";

//MUI
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Context
import { useAppContext } from "../src/context/appContext";

export default function Home() {
  const { dispatch, state } = useAppContext();
  const [mode, setMode] = useState<"light" | "dark">("light");

  let now = new Date();
  const backdate = new Date(now.setDate(now.getDate() + 30));
  let date = useCountdown(backdate);
  const handlerChaneMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    dispatch({ type: "THEME_MODE", value: mode });
  }, [dispatch, mode]);

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs | MUI | Typescript </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => handlerChaneMode()}
            color="inherit"
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Protect Plus!</a>
        </h1>
        <h2>We will be live soon.</h2>
        <h1>{`Days: ${date.days} Hours: ${date.hours} Minutes: ${date.minutes} Seconds: ${date.seconds}`}</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}