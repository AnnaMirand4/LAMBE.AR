import { useNavigate } from "react-router-dom";
import style from "../style/home.module.css"
import { BsPatchCheck } from "react-icons/bs";

const Home = () => {
    const navigate = useNavigate()

    const handleStart = () => {
        navigate("/camera")

    };

    return (
        <>
        <header className={style.header}> 
            <img
                className={style.logo}
                src="/logoLambe.png" alt="Logo do projeto Lambe.Ar" />
        </header>

        <main className={style.main}>
            <h1 className={style.title}> Uma experiência de arte, animação e reflexão </h1> 

            <section className={style.projectText}>

                <p>
                    Este Lambe-lambe faz parte de uma pesquisa artística que busca provocar
                    perguntas, desconfortos e reflexões sobre as masculinidades que
                    aprendemos a reproduzir ao longo da vida. A proposta aqui é usar a
                    arte — somada à tecnologia — para incentivar uma pausa, um olhar mais
                    atento e uma abertura para pensar como construímos e expressamos
                    nossas identidades, especialmente no que diz respeito às masculinidades
                    tóxicas que afetam tantas pessoas e relações.
                </p>

                <p>
                    As animações que você verá ao apontar a câmera para o mural ampliam
                    esses temas de forma simbólica e sensível, convidando você a explorar
                    outras possibilidades de ser e estar no mundo.
                </p>

                <p>
                    Para saber mais sobre o processo, acompanhar outras obras ou participar
                    da discussão, visite nosso Instagram e deixe seus comentários:
                </p>    

            </section>

            <a
            href="https://instagram.com/instagrannavel/" 
            target="_blank"
            rel="noopener noreferrer"
            className={style.instagramButton}
            >
                Visite o Instagram
            </a>

            <h2 className={style.subTitle}>
                    Explore as animações do projeto Lambe.ar
            </h2>

            <section className={style.steps}>

                <ol>
                <li>Toque em “Abrir câmera”.</li>
                <li>Quando o celular pedir, permita o acesso à câmera.</li>
                <li>Aponte o aparelho para o mural ou desenho indicado.</li>
                <li>Mantenha a imagem centralizada e bem iluminada.</li>
                <li>Aguarde alguns instantes até a animação aparecer na tela.</li>
                </ol>

            </section>

            <button
            onClick={handleStart}
            className={style.buttonCamera}>
                Abrir Camera
            </button>
        </main>

        <footer className={style.footer}>
            Desenvolvido com ❤️ por 
            <a
            href="https://github.com/AnnaMirand4" 
            target="_blank"
            rel="noopener noreferrer"
            className={style.footerText}
            >
                Anna
            </a>
        </footer>
        </>
    );

};

export default Home;