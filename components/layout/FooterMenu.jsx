import Link from "next/link"
import RightArrowIcon from "../svg-icons/RightArrowIcon"


const FooterMenu = () => {
    return (

        <div className=" my-7 px-3">
            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='text-white font-normal  hover:text-[#4ac4f3]' href='/'>                   
                        Компьютеры                   
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link  className='text-white font-normal  hover:text-[#4ac4f3]' href='/phones'>                    
                        Телефоны                    
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='  text-white font-normal  hover:text-[#4ac4f3]' href='/sputnik'>                  
                        Спутниковое ТВ                   
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='  text-white font-normal  hover:text-[#4ac4f3]' href='/smoke'>                    
                        Электронные испарители                   
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='  text-white font-normal  hover:text-[#4ac4f3]' href='/repair'>                   
                        Ремонт компьютеров                    
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='  text-white font-normal  hover:text-[#4ac4f3]' href='/foto'>                   
                        Печать фотографий                   
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='text-white font-normal  hover:text-[#4ac4f3]' href='/insure'>                    
                        Страхование                    
                </Link>
            </div>

            <div className="relative pl-5 pt-1 mb-3">
                <div className="w-3 h-3  absolute top-3 left-0" ><RightArrowIcon fill={'#fff'} /></div>
                <Link className='text-white font-normal  hover:text-[#4ac4f3]' href='/contacts'>                   
                        Контакты                   
                </Link>
            </div>


        </div>

    )
}

export default FooterMenu