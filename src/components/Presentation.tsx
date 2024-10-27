import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Presentation() {

    const { t } = useTranslation();

    return (
        <>
            <div className='bg-base-300 h-full w-full'>
                <div className='w-3/5 m-auto flex flex-col justify-center h-full gap-[5%] bg-transparent space-y-8'>
                    <div className='space-y-3'>
                        <p className='text-6xl'>Mohamed Kerrouche</p>
                        <p className='text-4xl text-primary'>{t('tagLine')}</p>
                    </div>
                    <div className="space-y-3 w-full">
                        <div className="flex flex-row gap-5">
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">React</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Symfony</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Node.js</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Nest.js</div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">API Integration</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Flutter</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Tailwind</div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Docker</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Postgres SQL</div>
                            <div className="badge badge-accent bg-base-100 badge-outline text-lg p-5">Git CI/CD</div>
                        </div>
                    </div>
                    <div className='flex justify-start flex-row gap-5'>
                        <button className="text-white btn bg-primary hover:bg-accent w-1/4">
                            <Link to="/projects">{t('myWork')}</Link>
                        </button>
                        <button className="text-accent border border-primary btn bg-base-100 hover:bg-accent/20 w-1/4">
                            <Link to="/contact">{t('contactMe')}</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

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