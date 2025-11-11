import { useRef, useEffect, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import Lottie from "react-lottie";
import style from "../style/camera.module.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// import das animações
import lambe1Animation from "../assets/lambeAnimation-1.json";
import lambe2Animation from "../assets/lambeAnimation-2.json";
import lambe3Animation from "../assets/lambeAnimation-3.json";
import lambe4Animation from "../assets/lambeAnimation-4.json";

// Mapeamento das classes para as animações
const animations = [
  { name: "Lambe1", data: lambe1Animation },
  { name: "Lambe2", data: lambe2Animation },
  { name: "Lambe3", data: lambe3Animation },
  { name: "Lambe4", data: lambe4Animation },
];

const Camera = () => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [label, setLabel] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Carrega o modelo
  useEffect(() => {
    const loadModel = async () => {
      const modelURL = "/model/model.json";
      const metadataURL = "/model/metadata.json";

      try {
        console.log("⏳ Carregando modelo...");
        const loadedModel = await tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);
        console.log("✅ Modelo carregado com sucesso!");
      } catch (err) {
        console.error("❌ Erro ao carregar o modelo:", err);
        setError("Não foi possível carregar o modelo. Verifique o caminho e os arquivos.");
      }
    };

    loadModel();
  }, []);

  // Ativa a câmera
  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("❌ Erro ao acessar a câmera:", err);
        setError("Não foi possível acessar a câmera. Verifique as permissões do navegador.");
      }
    };

    enableCamera();
  }, []);

  // Faz a detecção somente após o vídeo estar pronto
  useEffect(() => {
    if (model && videoRef.current) {
      const video = videoRef.current;

      const waitForVideo = () => {
        if (video.readyState >= 2) {
          startPrediction();
        } else {
          setTimeout(waitForVideo, 300);
        }
      };

      const startPrediction = () => {
        const predictLoop = async () => {
          if (!video || video.readyState < 2) return;

          try {
            const predictions = await model.predict(video);
            const highest = predictions.reduce((prev, current) =>
              prev.probability > current.probability ? prev : current
            );

            if (highest.probability > 0.9) {
              setLabel(highest.className);
            } else {
              setLabel(null);
            }
          } catch (err) {
            console.error("⚠️ Erro ao processar a predição:", err);
          }

          requestAnimationFrame(predictLoop);
        };

        predictLoop();
      };

      waitForVideo();
    }
  }, [model]);

  const currentAnimation = animations.find((a) => a.name === label);

  return (
    <div className={style.cameraContainer}>
      {/* Mensagem de erro */}
      {error && <div className={style.errorMessage}>{error}</div>}

      {/* Vídeo em tela cheia */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={style.cameraVideo}
      />

      {/* Animação Lottie sobre o vídeo */}
      {currentAnimation && (
        <div className={style.lottieOverlay}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: currentAnimation.data,
              rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
            }}
            height={400}
            width={400}
          />
        </div>
      )}

      {/* Botão de voltar */}
      <button onClick={() => navigate("/")} className={style.backButton}>
        <IoArrowBackCircleOutline size={24} />
        <span>Voltar</span>
      </button>
    </div>
  );
};

export default Camera;
