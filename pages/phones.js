import SimIcon from "../components/svg-icons/SimIcon"
import CheckIcon from "../components/svg-icons/CheckIcon"
import Head from "next/head"


const phones = () => {
  return (
    <>
    <Head>
      <meta keywords="продажа, смартфоны, телефоны, планшеты, СИМ карты, мтс, теле2, yota"></meta>
      <title>Телефоны</title>
    </Head>
            <div className="md:flex block border-b border-gray-300 pb-4 my-4">
                <div className="max-w-[400px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/2 bg-white
                    flex flex-col items-center justify-center text-center min-h-[199px] md:min-h-[100px]">
                    <div className="w-14 h-14 rounded-full bg-[#31b9f3] flex items-center justify-center"><SimIcon/></div>
                    <div>Продажа (замена) SIM карт ведущих операторов сотовой связи</div>

                </div>
                <div className="max-w-[400px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/2 overflow-hidden bg-white">
                    <img src="/img/mtslogo.webp" />
                </div>
                <div className="max-w-[400px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/2 overflow-hidden bg-white">
                    <img src="/img/tele2.webp" />
                </div>
                <div className="max-w-[400px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/2 overflow-hidden bg-white">
                    <img src="/img/yota.webp" />
                </div>
            </div>


            <div className="md:flex block border-b border-gray-300 pb-4 my-4">

                <div className=" mx-auto  my-3 md:m-1 w-full md:w-1/2 overflow-hidden">
                    <img src="/img/smart.webp" />
                </div>
                <div className=" mx-auto  my-3 md:mt-11 w-full md:w-1/2 overflow-hidden">
                    <div className="font-medium text-3xl ml-7 mb-8 pr-2">Смартфоны на любой вкус</div>


                    <div className='border-l  border-dotted border-cyan-500 ml-3 '>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Бюджетные смартфоны с небольшим экраном</p>
                            <p className="ml-4 text-sm">Современные недорогие смартфоны оснащены всеми необходимыми функциями. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Защищенные смартфоны с прочным корпусом</p>
                            <p className="ml-4 text-sm">Вы можете не волноваться, что при падении ваш гаджет пострадает. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Смартфоны с модным безрамочным дизайном</p>
                            <p className="ml-4 text-sm">Безрамочный дизайн и качественные материалы корпуса позволят получить удовольствие от общения с вашим смарфоном. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Премиальные гаджеты с топовыми характеристиками</p>
                            <p className="ml-4 text-sm">Для любителей топовых характеристик мы всегда предложим популярные новинки из премиального сегмента смартфонов.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex block border-b border-gray-300 pb-4 my-4">

                <div className=" mx-auto  my-3 md:m-1 w-full md:w-1/2 overflow-hidden">
                    <img src="/img/tele.webp" />
                </div>
                <div className=" mx-auto  my-3 md:mt-11 w-full md:w-1/2 overflow-hidden">
                    <div className="font-medium text-3xl ml-7 mb-8 pr-2">Простота и надежность</div>


                    <div className='border-l  border-dotted border-cyan-500 ml-3 '>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Большой выбор телефонов</p>
                            <p className="ml-4 text-sm">У нас вы всегда найдете телефон который подойдет именно вам. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Недорогие миниатюрные</p>
                            <p className="ml-4 text-sm">Минимальный набор функций и привлекательная цена, если вы не хотите переплачивать за не используемый функционал. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">С противоударным корпусом</p>
                            <p className="ml-4 text-sm">Телефоны для активных людей с прочным корпусом который переживет любые падения. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Цветовая гамма корпусов</p>
                            <p className="ml-4 text-sm">Цвет корпуса на любой вкус. Выбирите свой.</p>
                        </div>






                    </div>

                </div>
            </div>


            <div className="md:flex block  pb-4 my-4">

                <div className=" mx-auto  my-3 md:m-1 w-full md:w-1/2 overflow-hidden">
                    <img src="/img/tablet.webp" />
                </div>
                <div className=" mx-auto  my-3 md:mt-11 w-full md:w-1/2 overflow-hidden">
                    <div className="font-medium text-3xl ml-7 mb-8 pr-2">Планшеты и аксусуары</div>


                    <div className='border-l  border-dotted border-cyan-500 ml-3 '>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Всегда в наличии планшеты с разной диаганалью</p>
                            <p className="ml-4 text-sm">Современные планшеты для людей идущих в ногу со временем. Для работы и развлечений. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Защитные чехлы под разные диагонали дисплея</p>
                            <p className="ml-4 text-sm">Зищити свой гаджет от неприятностей. Защитные чехлы делают использование планшета безопасным и более комфортным. </p>
                        </div>







                    </div>

                </div>
            </div>


        </>
  )
}

export default phones