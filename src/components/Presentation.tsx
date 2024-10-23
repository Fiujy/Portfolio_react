export default function Presentation() {

    return (
        <>
            <div className='bg-white h-full'>
                <div className='w-3/4 m-auto flex flex-col justify-center h-full gap-[5%]'>
                    <div className='space-y-3'>
                        <p className='text-6xl'>Mohamed Kerrouche</p>
                        <p className='text-4xl text-primary'>Developer, and even more.</p>
                    </div>
                    <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 max-h-72">
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                className="rounded-box" />
                        </div>
                    </div>
                    {/* <div className='flex'>
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
                        </div> */}
                    <div className='flex justify-center'> {/* Ajout de flex et justify-center */}
                        <button className="btn text-white bg-primary hover:bg-accent w-1/4">
                            My Work
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
