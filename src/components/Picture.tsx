import picture from '@/assets/Picture.jpeg'

export default function Picture() {
    return (
        <>
            <div className="bg-cyan-100 flex items-center h-full">
                <div className="flex justify-center items-center">
                    <img src={picture} alt="placeholder" className="w-3/5 h-4/5" />
                </div>
            </div>
        </>
    )
}
