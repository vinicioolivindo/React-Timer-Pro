import { CirclePlay, Clock, PauseCircle, StopCircle } from "lucide-react";
import ButtonIcon from "./ButtonsIcons";

// eslint-disable-next-line react/prop-types
const Controls = ({ onClickPlay, onClickPause, onClickReset, onClickEdit, editTime }) => {


  return (
    <div className="flex gap-3">
      <ButtonIcon onClick={onClickPlay} Icon={CirclePlay} buttonHome={false} />
      <ButtonIcon onClick={onClickPause} Icon={PauseCircle} buttonHome={false} />
      <ButtonIcon onClick={onClickReset} Icon={StopCircle} buttonHome={false} />
      {editTime && (
        <ButtonIcon onClick={onClickEdit} Icon={Clock} buttonHome={false} />
      )}
    </div>
  )
}

export default Controls;