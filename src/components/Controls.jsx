import { CirclePlay, PauseCircle } from "lucide-react";

const Controls = () => {
  return (
    <div>
      <button>
        <CirclePlay size={45}/>
      </button>
      <button>
        <PauseCircle/>
      </button>
      <button>

      </button>
    </div>
  )
}

export default Controls;