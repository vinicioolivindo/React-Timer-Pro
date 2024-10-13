// eslint-disable-next-line react/prop-types
const ContainerPage = ({children}) => {
    return (
        <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
            {children}
        </div>
    )
}

export default ContainerPage;