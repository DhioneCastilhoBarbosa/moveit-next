import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import style from "../styles/pages/Home.module.css";

import Head from "next/head";
import { CountdownProvider } from "../contexts/CountdownContext";


export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Inicio | move-it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div >
  );
}
