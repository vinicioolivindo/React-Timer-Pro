import { ClockArrowDownIcon, ClockArrowUpIcon } from "lucide-react"
import ButtonIcon from "./components/ButtonsIcons"
import { useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate();

  const irParaCronometro = () => {
    navigate("/cronometro")
  }

  const irParaTemporizador = () => {
    navigate("/temporizador")
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <div className="mb-10 space-y-10 text-center ">
        <h1 className="text-3xl font-bold text-white">Escolha sua funcionalidade: </h1>
        <div className="flex justify-center gap-10">
          <ButtonIcon onClick={irParaCronometro}  Icon={ClockArrowUpIcon} text="Cronômetro"/>
          <ButtonIcon onClick={irParaTemporizador} Icon={ClockArrowDownIcon} text="Temporizador"/>
        </div>
      </div>

    </div>
  )
}

export default App
