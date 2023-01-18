import styles from './Habilidades.module.css'; 

import loading from '../../img/loading.svg';
import cerebro from '../../img/cerebro-tecnologico.jpg';
import react from '../../img/react-logo.png';
import js from '../../img/js-logo.png';
import html from '../../img/logo-html-5.png';
import css from '../../img/logo-css-3.png';

function Habilidades() {
    return (
            <div className={styles.content}>
                <div className={styles.titulos}>
                    <h1 className={styles.unico}>Linguagens</h1>
                    <h1>Outros Conhecimentos / Interesses</h1>
                </div>
                    <div className={styles.bloco}>
                        <div className={styles.bloco_left}>
                            <div className={styles.blocos}>
                                <div className={styles.logo_nome}>
                                    <img className={styles.html} src={html}/>
                                    <h2>HTML5</h2>
                                </div>
                                <div>
                                    <p>Tenho um bom conhecimento, sabendo colocar os conteúdos necessarios em uma aplicação ou site sabendo de muitas tags importantes, colocar imagens, tabelas, formulários, emogis, inputs icones, importacão de fontes, criação de links,tags semanticas entre outras.</p>
                                </div>
                            </div>
                            <div className={styles.blocos}>
                                <div className={styles.logo_nome}>
                                    <img className={styles.css} src={css}/>
                                    <h2>CSS3</h2>
                                </div>
                                    <div>
                                        <p>Tenho um bom conhecimento, sabendo estilizar uma aplicação ou site sabendo usar, mediaquery, display flex, colocar imagem de fundo em uma div com varios efeitos, controle de margin,  padding, sombra, ":hover", algumas animações com o ":after"  entre outras opções de estilos.</p>
                                    </div>
                            </div>
                            <div className={styles.blocos}>
                                <div className={styles.logo_nome}>
                                    <img className={styles.js} src={js}/>
                                    <h2>JavaScript</h2>
                                </div>
                                    <div>
                                        <p>Tenho um conhecimento intermediário, sabendo a logica de programação, eventos, criar funçoes, constantes, variaveis, fazer alguns comandos de login, comandos usando calculos matematicos, if e else, switch / case, puxar componentes do html por id, class, name etc ou ent queryselector que ja engloba todos esses entre outros comandos.</p>
                                    </div>
                                </div>
                                <div className={styles.blocos}>
                                    <div className={styles.logo_nome}>
                                        <img className={styles.react} src={react}/>
                                        <h2>React</h2>
                                    </div>
                                        <div>
                                            <p>Tenho conhecimento intermediário, sabendo usar importações e exportações, instalar dependencias no react, usar as props, e inclusive esse site foi feito usando react. </p>
                                        </div>
                                </div>
                                <div className={styles.blocos}>
                                    <div className={styles.logo_nome}>
                                        <img className={styles.loading} src={loading}/>
                                        <h2>Mais linguagens em breve...</h2>
                                    </div>
                                        <div>
                                            <p></p>
                                        </div>
                                </div>
                        </div>
                        <div className={styles.bloco_right}>
                            <div>
                                <h2 className={styles.titulo}>Tenho uma certa pratica.</h2>
                                <p>Sei usar GitHub onde guardo meus projetos, inglês intermédiário, sql basico, fazer coisas basicas no PowerShell, coisas basicas de edições de imagens principalmente pelo photoshop</p>
                                <img className={styles.cerebro} src={cerebro}/>
                                <h2 className={styles.titulo}>Tenho interesse em aprender.</h2>
                                <p>Pretendo aprender Phyton, ficar melhor em todos os que eu ja havia comentado, ficar muito bom em banco de dados, falar inglês fluente e aprender a mexer melhor no Excel.</p>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Habilidades