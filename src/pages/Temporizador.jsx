import { useRef, useState, useEffect } from "react";
import ContainerPage from "../components/ContainerPage";
import Controls from "../components/Controls";
import Timer from "../components/Timer";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Temporizador = () => {

  const navigate = useNavigate()


  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("timer");
    return savedTime ? parseInt(savedTime) : 300;
  });
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const h1Ref = useRef(null);
  const [isEditable, setIsEditable] = useState(false);

  const start = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  const stop = (initialTime = 300) => {
    clearInterval(intervalId);
    setTime(initialTime);
    setIsRunning(false);
  };

  const handleToggleEdit = () => {
    if (!isRunning) {
      if (isEditable) {
        const [newMinutes, newSeconds] = h1Ref.current.innerText
          .split(':')
          .map(Number);

        // Verifica se os valores são válidos
        if (
          !isNaN(newMinutes) &&
          !isNaN(newSeconds) &&
          newMinutes >= 0 &&
          newMinutes < 60 &&
          newSeconds >= 0 &&
          newSeconds < 60
        ) {
          const totalSeconds = newMinutes * 60 + newSeconds;
          setTime(totalSeconds);
        } else {
          alert('Digite um tempo válido no formato MM:SS que seja <= 60:00');
          setTime(300)
        }
      }
      setIsEditable((prev) => !prev);
    }
  };


  useEffect(() => {
    const preventInvalidInput = (e) => {
      const inputValue = h1Ref.current.innerText;
      const regex = /^[0-9:]*$/; // Permite apenas números e ':'.

      // Bloqueia a entrada se não for válida ou se exceder 60:00
      if (!regex.test(e.key) || (e.key === ':' && inputValue.split(':').length > 1)) {
        e.preventDefault();
      }

      // Checa se a edição resultará em um valor inválido (maior que 60:00)
      const parts = inputValue.split(':').map(Number);
      if (parts.length === 2) {
        const minutes = parts[0];
        const seconds = parts[1];
        if ((e.key >= '0' && e.key <= '9') && (minutes >= 60 || seconds >= 60)) {
          e.preventDefault();
        }
      }
    };

    const h1Element = h1Ref.current;
    h1Element.addEventListener('keypress', preventInvalidInput);

    return () => {
      h1Element.removeEventListener('keypress', preventInvalidInput);
    };
  }, []);



  useEffect(() => {
    if (time === 0) {
      stop();
      alert("Seu temporizador chegou ao fim e será reiniciado!");
    }
  }, [time]);

  useEffect(() => {
    localStorage.setItem('timer', time)
  }, [time])

  useEffect(() => {
    if (isRunning) setIsEditable(false);
  }, [isRunning]);

  return (
    <ContainerPage>
      <div className="bg-gray-600 p-11 rounded-xl flex flex-col items-center gap-3 relative">
        <button onClick={() => navigate(-1)} className="flex font-semibold absolute left-0 top-0 p-3 text-slate-100">
          <ChevronLeftIcon />
          Menu
        </button>
        <Timer time={time} h1Ref={h1Ref} isEditable={isEditable} />
        <Controls
          onClickPlay={start}
          onClickPause={pause}
          onClickReset={() => stop(300)}
          editTime={true}
          onClickEdit={handleToggleEdit}
        />
      </div>
    </ContainerPage>
  );
};

export default Temporizador;
