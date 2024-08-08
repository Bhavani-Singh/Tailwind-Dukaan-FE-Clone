
function BottomLeftSideBar() {
    return (
        <div className="flex bg-[#353C53] w-[200px] m-4 rounded">
            <div className="p-4 bg-[#4A5065] w-auto flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
            </div>
            <div className="flex flex-col p-2">
                <div className="text-xs">
                    Available Credits
                </div>
                
                <div className="font-bold">
                    224.10
                </div>  
            </div>
        </div>
    )
}

export default BottomLeftSideBar;

BottomLeftSideBar.propTypes = {

}