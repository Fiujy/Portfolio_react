export default function Presentation() {
    return (
        <>
            <div className='bg-orange-100/90 flex flex-col items-center justify-center h-full w-full'>
                <div className='bg-transparent'>
                    <div className='space-y-2'>
                        <div className='my-20'>
                            <p className='text-5xl'>Mohamed Kerrouche</p>
                            <p className='text-3xl'>Developer, and even more.</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold mr-1'>Phone :</p>
                            <p className=''>000000</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold mr-1'>Mail :</p>
                            <p className=''>mkerrouche.contact@gmail.com</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold mr-1'>Address :</p>
                            <p className=''>Toulouse, France</p>
                        </div>
                    </div>
                    <button className="btn text-white bg-orange-200 my-20 w-full">My Work</button>
                </div>
            </div>
        </>
    )
}
