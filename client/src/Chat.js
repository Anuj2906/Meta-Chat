import User from"./User.js";
export default function Chat() {
    return(
        <>
        
        <div className="flex flex-col h-screen">
            <div className="bg-blue-500 w-full h-12 ">
                <div className="float-left text-white text-4xl"><b>ChatApp</b></div>
                <button className="float-right bg-red-700 text-white text-3xl rounded-md mx-2 my-1"> Logout </button>
            </div>
            <div className="flex flex-row h-full">
                <div className="bg-blue-100 w-1/3"> 
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search for People" className="bg-white flex-grow border-rounded-sm p-2 mx-2 my-1"/>
                    </div>
                    <User/>
                </div>
                <div className="flex flex-col bg-blue-300 w-2/3 p-2">
                    <div className="flex-grow text-center">
                        Message here
                    </div>
                    <div className="flex  gap-2">
                        <input type="text" placeholder="Type your Message" className="bg-white flex-grow border rounded-md p-2"/>
                        <button className="bg-blue-500 rounded-md p-2 text-white">send</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}