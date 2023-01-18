import styles from './Portifolio.module.css';
import dbz from '../../img/site-dbz.png';
import fla from '../../img/site-flamengo.png';
import drac from '../../img/drac.png';
import log from '../../img/login.png';
import login from '../../img/fazerlogin.png';
import draccell from '../../img/drac-cell.png';

function Portifolio() {
    return (
        <div>
            <div className={styles.content}>
                <h1>Esses são alguns dos projetos que eu criei ou estou desenvolvendo.</h1>
                <div className={styles.imagens}>
                    {/* <div className={styles.dbz}/>
                    <div className={styles.fla}/>
                    <div className={styles.login}/> */}
                    <div> <a href="https://kinz2901.github.io/DBZ/html/index" target="_blank"><img className={styles.dbz}src={dbz}/></a> </div>
                    <div> <a href="https://kinz2901.github.io/Flamengo/html/index" target="_blank"><img className={styles.fla}src={fla}/></a> </div>
                    <div> <a href="https://kinz2901.github.io/Dracomant/html/index.html" target="_blank"><img className={styles.drac}src={drac}/></a> </div>
                </div>
                <div className={styles.cell}>
                    <div><a href="https://kinz2901.github.io/Dracomant/html/criarLogin.html" target="_blank"><img className={styles.log}src={log}/></a></div>
                    <div><a href="https://kinz2901.github.io/Dracomant/html/login.html" target="_blank"><img className={styles.login}src={login}/></a></div>
                    <div><a href="https://kinz2901.github.io/Dracomant/html/index.html" target="_blank"><img className={styles.draccell}src={draccell}/></a></div>
                </div>
                <h2>Acesse mais no meu github: <a href='https://github.com/Kinz2901" target="_blank'>Kinz2901</a></h2>
            </div>
        </div>
    )
}

export default Portifolio