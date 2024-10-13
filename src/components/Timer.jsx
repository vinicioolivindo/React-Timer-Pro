// eslint-disable-next-line react/prop-types
const Timer = ({ time, h1Ref, isEditable }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div>
            <h1
                ref={h1Ref}
                contentEditable={isEditable}
                suppressContentEditableWarning={true} // Suprime o aviso
                className={`text-7xl font-bold text-white ${isEditable ? 'border-b-2' : ''}`}
            >
                {formatTime(time)}
            </h1>
        </div>
    );
};

export default Timer;
