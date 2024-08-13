
function Table() {
    return (
        <div className="flex flex-col gap-4 p-5">
                <div className="text-xl font-medium">
                    Transactions | This month
                </div>
                <div className="flex gap-3">
                    <button className="bg-[#E6E6E6] px-4 py-[6px] text-[#808080] rounded-[20px]">Payout (22)</button>
                    <button className="bg-[#146EB4] px-4 py-[6px] text-white rounded-[20px]">Refunds (6)</button>
                </div>

                <div className="flex flex-col gap-3 bg-white shadow-sm p-3 rounded">
                    <div className="flex justify-between rounded">
                        <div className="flex gap-2 p-2 border items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-[#808080]">
                            <   path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" placeholder="Order ID or transactions ID" className="bg-transparent outline-none w-full"/>
                        </div>

                        <div className="flex jusity-between gap-3">
                            <div className="flex border h-fit px-4 py-2 rounded cursor-pointer">
                                Sort
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg>
                            </div>

                            <div className="border h-fit p-2 rounded cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <colgroup>
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                                <col className="w-1/5" />
                            </colgroup> 

                            <thead className="text-[#4D4D4D]">
                                <tr className="bg-[#F2F2F2]">
                                    <th className="text-sm px-3 py-[10px] font-medium text-left tracking-wider rounded-l">Order ID</th>
                                    <th className="text-sm px-3 py-[10px] font-medium text-left tracking-wider">Status</th>
                                    <th className="text-sm px-3 py-[10px] font-medium text-left tracking-wider">Transaction ID</th>
                                    <th className="text-sm px-3 py-[10px] font-medium text-left tracking-wider">Refund Date</th>
                                    <th className="text-sm px-3 py-[10px] font-medium text-right tracking-wider">Order Amount</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281209</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                                        <div>Successful</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX123456
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Today, 8:45 PM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹1125.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281210</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-[#999999] rounded-full"></div>
                                        <div>Processing</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX789012
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Tomorrow, 10:00 AM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹950.50
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281211</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                                        <div>Successful</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX345678
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Yesterday, 3:30 PM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹750.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281212</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                                        <div>Successful</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX901234
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Today, 11:20 AM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹2000.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281213</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-[#999999] rounded-full"></div>
                                        <div>Processing</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX567890
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Tomorrow, 9:00 AM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹1800.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281214</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-[#999999] rounded-full"></div>
                                        <div>Processing</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX098765
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Yesterday, 2:00 PM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹500.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281215</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                                        <div>Successful</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX456789
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Today, 10:30 AM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹3000.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281216</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-[#999999] rounded-full"></div>
                                        <div>Processing</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX987654
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Tomorrow, 11:30 AM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹1200.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281217</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-[#999999] rounded-full"></div>
                                        <div>Processing</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX654321
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Yesterday, 4:00 PM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹900.00
                                    </td>
                                </tr>

                                <tr className="text-sm">
                                    <td className="px-3 py-[10px] text-[#146EB4]">#281218</td>
                                    <td className="flex gap-2 items-center px-3 py-[10px]">
                                        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                                        <div>Successful</div>
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        TRX234567
                                    </td>
                                    <td className="px-3 py-[10px]">
                                        Today, 9:45 AM
                                    </td>
                                    <td className="px-3 py-[10px] text-right">
                                        ₹1500.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Table;