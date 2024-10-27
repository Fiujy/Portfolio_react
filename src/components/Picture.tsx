import picture from '@/assets/Picture.jpeg'

export default function Picture() {
    return (
        <>
            <div className="bg-primary flex items-center h-full">
                <div className="flex justify-center items-center">
                    <img src={picture} alt="placeholder" className="w-3/4 h-4/5 rounded-xl shadow-2xl" />
                </div>
            </div>
        </>
    )
}
