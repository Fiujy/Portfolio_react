import Picture from '@/components/Picture'
import Presentation from '@/components/Presentation'

export default function Home() {
    return (
        <>
            <div className="flex h-screen flex-col">
                <div className="flex flex-grow">
                    <div className="w-1/2 flex items-center justify-center">
                        <Picture />
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <Presentation />
                    </div>
                </div>
            </div>
        </>
    )
}
