import Link from "next/link"
import RightArrowIcon from "../svg-icons/RightArrowIcon"


const FooterMenu = () => {
    return (

        <div className=" my-7 px-3">
            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/'>
                    <a className='text-white font-normal  hover:text-[#4ac4f3]'>
                        Компьютеры
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/phones'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Телефоны
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/sputnik'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Спутниковое ТВ
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/smoke'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Электронные испарители
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/repair'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Ремонт компьютеров
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/foto'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Печать фотографий
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/insure'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Страхование
                    </a>
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link href='/contacts'>
                    <a className='  text-white font-normal  hover:text-[#4ac4f3]'>
                        Контакты
                    </a>
                </Link>
            </div>


        </div>

    )
}

export default FooterMenu