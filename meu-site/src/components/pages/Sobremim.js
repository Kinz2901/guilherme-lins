import styles from './Sobremim.module.css';

function Sobremim() {
    return (
        <div className={styles.content}>
            <div className={styles.fundo_txt}>
                <div className={styles.text}>
                    <h1>Sobre mim...</h1>
                    <p>Olá, eu sou o Guilherme Lins, estou cursando faculdade de analise e desenvolvimento de sistemas, amo jogar Futbol e outros esportes no geral, gosto demais de fazer academia, meu objetivo atualmente é começar a estagiar de desenvolvedor junior.
                    </p>
                    <p>Nasci em Fortaleza no dia 29 de janeiro de 2004 e sempre fui apegado com a tecnologia o que me fez começar pelo caminho da programação, no tempo livre normalmente gosto de sair com amigos ou se fico em casa assisto filmes, series ou animes e jogo no pc mas sair da rotina é sempre algo bom.</p> 
                    <p>Busco ter mais conhecimento e aprender com o próximo, sou muito criativo e gosto de inovar as coisas, tenho uma boa comunicação e um bom aprendizado.</p>
                    <p>Não deixo meus problemas pessoais interferirem nas coisas que são importantes. Sou muito focado nos objetivos que eu almejo.
                    </p>
                    <p>Sou uma pessoa bem humorada que sempre que posso tento ajudar, além de prezar por boas amizades e bons momentos.  </p>
                </div>
            </div>
            <div className={styles.foto}></div>
        </div>
    )
}

export default Sobremim