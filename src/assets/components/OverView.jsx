
function OverView() {
    return (
        <div className="flex flex-col gap-4 p-5">
            <div className="flex justify-between">
                <h5 className="font-medium text-xl">
                    Overview
                </h5>
                <div className="flex px-2 py-1 bg-white border shadow-sm gap-2">
                    <div>
                        This Month
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
                <div className="bg-[#146EB4] hover:bg-[#0E4F82] rounded-[10px] text-white">
                    <div className="flex flex-col p-5 gap-3">
                        <h5 className="flex gap-3 items-center">
                            Next Payout
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </h5>
                        
                        <div className="flex justify-between">
                            <div className="text-3xl font-medium">
                                ₹2,312.23
                            </div>
                            <div className="underline">
                                23 Orders?
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between bg-[#0E4F82] px-6 py-2 rounded-[8px]">
                        <div>
                            Next Payment Date:
                        </div>

                        <div>
                            Today, 4:00PM
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 rounded-[8px] bg-white shadow-sm gap-4 h-fit p-5">
                    <h5 className="flex gap-3 items-center">
                        Amount Pending
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </h5>

                    <div className="flex justify-between">
                        <div className="text-3xl font-medium">
                            ₹92,312.20
                        </div>
                        <div className="flex underline">
                            13 Orders
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-[8px] p-4 bg-white h-fit shadow-sm">
                    <h5 className="flex gap-3 items-center">
                        <p>Amount Processed</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </h5>
                    <div className="text-3xl  font-medium">
                        ₹23,92,312.19
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView;