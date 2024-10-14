import { ClockArrowDownIcon, ClockArrowUpIcon } from "lucide-react"
import ButtonIcon from "./components/ButtonsIcons"
import { useNavigate } from "react-router-dom"
import ContainerPage from "./components/ContainerPage";

function App() {

  const navigate = useNavigate();

  const irParaCronometro = () => {
    navigate("/cronometro")
  }

  const irParaTemporizador = () => {
    navigate("/temporizador")
  }

  return (
    <ContainerPage>
      <div className="mb-10 space-y-10 text-center p-6 ">
        <h1 className="text-3xl font-bold text-white">Escolha sua funcionalidade: </h1>
        <div className="flex justify-center  gap-10 flex-col sm:flex-row">
          <ButtonIcon onClick={irParaCronometro}  Icon={ClockArrowUpIcon} text="Cronômetro"/>

          <ButtonIcon onClick={irParaTemporizador} Icon={ClockArrowDownIcon} text="Temporizador"/>
        </div>
      </div>

    </ContainerPage>
  )
}

export default App
