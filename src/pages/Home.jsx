import { useNavigate } from "react-router-dom";
import style from "../style/home.module.css"

const Home = () => {
    const navigate = useNavigate()

    const handleStart = () => {
        navigate("/camera")

    };

    return (
        <>
        <main className={style.main}>
            <h1> Projeto LAMBE.AR </h1> 
            <p className={style.texto}>
                Explore as animavóes do projeto Lambe.ar
            </p>

            <button
            onClick={handleStart}
            className={style.button}>
                Abrir Camera
            </button>
        </main>
        </>
    );

};

export default Home;