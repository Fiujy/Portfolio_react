import Picture from '@/components/Picture'
import Presentation from '@/components/Presentation'

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-full">
                <div className="flex flex-grow">
                    <div className="w-1/3 flex items-center justify-center">
                        <Picture />
                    </div>
                    <div className="w-2/3 flex items-center justify-center">
                        <Presentation />
                    </div>
                </div>
            </div>
        </>
    )
}
