import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const ButtonIcon = ({text, Icon, onClick, buttonHome = true }) => {
    return (
        <button onClick={onClick} className={clsx(" text-white flex flex-col items-center",
        {
            "border rounded-md border-slate-300 bg-slate-800 p-3": buttonHome,
        })}>
            {Icon && <Icon size={43} />}
            {text && <span className="text-2xl">{text}</span>}
        </button>
    )
}

export default ButtonIcon;