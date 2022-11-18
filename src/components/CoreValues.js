const CoreValues = ({title}) => {
    return ( 
        <>
            <div>
                <div className="flex flex-col items-center justify-center pt-8 pb-4 md:text-3xl text-xl text-gray-800 font-semibold">
                    <h1 >{title}</h1>
                    <hr className="border-2 border-green-400 mt-2 md:w-32 w-24"/>
                </div>
            </div>
        </>
     );
}
 
export default CoreValues;