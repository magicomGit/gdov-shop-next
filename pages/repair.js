import Head from "next/head"
import CheckIcon from "../components/svg-icons/CheckIcon"


const repair = () => {
  return (
    <>
    <Head>
      <meta keywords="ремонт компьютеров, заправка принтеров, ремонт смартфонов, настройка ПО"></meta>
      <title>Ремонт компьютеров</title>
    </Head>
            <div className="md:flex block border-b border-gray-300 pb-4 my-4">

                <div className="p-6 mx-auto  my-3 md:mt-11 w-full md:w-1/2 overflow-hidden">
                    <div className="font-medium text-3xl ml-7 mb-8 pr-2">Установка и настройка программного обеспечения</div>


                    <div className='border-l  border-dotted border-cyan-500 ml-3 '>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Установка и настройка операционной системы</p>
                            <p className="ml-4 text-sm">Правильно настроенная операционная система - это залог беспроблемной работы вашего компьютера.</p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Установка и настройка прикладных программ для ПК</p>
                            <p className="ml-4 text-sm">Набор прикладных програм для работы и развлечений - это неоходимый минимум без которого ваш комьюетер не раскроет свой потенциал.</p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Установка и настройка приложений на смартфон</p>
                            <p className="ml-4 text-sm">Поможем установить и настроем необходимые вам приложения для вашего гаджета. </p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Удаление вирусов, восстановление данных</p>
                            <p className="ml-4 text-sm">"Здоровьем" и безопасностью вашего компьютера не стои пренебрегать. Мы "вылечим" ваш компьютер от вредоносных программ и поможем восстановить данные.</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 mx-auto  my-3 md:m-1 w-full md:w-1/2 overflow-hidden">
                    <img src="/img/setup.webp" />
                </div>

            </div>

            <div className="md:flex  pb-4 my-4">

                <div className="p-6 mx-auto  my-3 md:m-1 w-full md:w-1/2 overflow-hidden">
                    <div className="font-medium text-3xl ml-7 mb-8 pr-2">Ремонт компьютеров ноутбуков оргтехники смартфонов планшетов</div>


                    <div className='border-l  border-dotted border-cyan-500 ml-3 '>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Диагностика и ремонт компьютеров</p>
                            <p className="ml-4 text-sm">Проведем диагностику, выявим причину неисправности и предложим пути решения.</p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Замена комплектующих</p>
                            <p className="ml-4 text-sm">Проверим конфигурацию вашего коипьютера и предложим оптимальный вариант апгрейда.</p>
                        </div>
                        <div className='relative my-5'>
                            <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
                            <p className="ml-4 text-xl font-semibold">Ремонт, прошивка мобильных устройств</p>
                            <p className="ml-4 text-sm">Вернем к жизни ваш любимый гаджет. </p>
                        </div>
                        
                    </div>
                </div>

                <div className="p-6 mx-auto  my-3 md:m-1 w-full md:w-1/2 overflow-hidden">
                    <img src="/img/repair.webp" />
                </div>

            </div>
        </>
  )
}

export default repair