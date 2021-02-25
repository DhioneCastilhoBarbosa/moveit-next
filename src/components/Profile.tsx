import style from '../styles/components/Profile.module.css';


export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/DhioneCastilhoBarbosa.png" alt="Dhione Castilho" />
      <div>
        <strong>Dhione Castilho</strong>

        <p>
        <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}