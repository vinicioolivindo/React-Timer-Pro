import { useState } from "react";
import Controls from "../components/Controls";
import Timer from "../components/Timer";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContainerPage from "../components/ContainerPage";

const Cronometro = () => {
    
    const navigate = useNavigate()
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    const playTimer = () => {
        if(!isRunning){
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id)
            setIsRunning(true)
        }
    }

    const pauseTimer = () => {
        if(isRunning){
            clearInterval(intervalId);
            setIsRunning(false)
        }
    }

    const resetTimer = () => {
        clearInterval(intervalId)
        setTime(0)
        setIsRunning(false)
    }

    return (
        <ContainerPage>
            <div className="bg-gray-600 p-11 rounded-xl flex flex-col items-center gap-3 relative">
                <button onClick={() => navigate(-1)} className="flex font-semibold absolute left-0 top-0 p-3 text-slate-100">
                    <ChevronLeftIcon/>
                    Menu
                </button>
                <Timer time={time}/>
                <Controls onClickPlay={playTimer} onClickPause={pauseTimer} onClickReset={resetTimer}/>
            </div>
        </ContainerPage>
    )
}

export default Cronometro;