// eslint-disable-next-line react/prop-types
const ButtonIcon = ({text, Icon, onClick }) => {
    return (
        <button onClick={onClick} className="border rounded-md border-slate-300 bg-slate-800 p-3  text-white flex flex-col items-center ">
            {Icon && <Icon size={43} />}
            {text && <span className="text-2xl">{text}</span>}
        </button>
    )
}

export default ButtonIcon;