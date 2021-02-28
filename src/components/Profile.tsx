import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import style from '../styles/components/Profile.module.css';


export function Profile() {

  const{level} = useContext(ChallengesContext);
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/DhioneCastilhoBarbosa.png" alt="Dhione Castilho" />
      <div>
        <strong>Dhione Castilho Barbosa </strong>

        <p>
        <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}