import Head from "next/head"

import CheckIcon from "../components/svg-icons/CheckIcon"

const sputnik = () => {
  return (
    <>
    <Head>
      <meta keywords="триколор, мтс тв, антенны, кабели, smart приставки, цифровые тв приставки"></meta>
      <title>gdov-shop.ru/Спутниковое ТВ</title>
    </Head>
      <div className="flex flex-col md:flex-row font-bold text-2xl justify-center items-center border-b border-gray-300">
        <div className=" w-full ">
          <div className="p-3 bg-[#2d499f]  text-center"> <span className="text-white">Триколор</span><span
            className="text-red-600"> ТВ</span></div>
          <div className='border-l  border-dotted border-cyan-500 ml-3 pr-6'>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Обмен старых приемников триколор</p>

            </div>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Прием оплаты по тарифам</p>
            </div>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Возможность подключения второго телевизора</p>
            </div>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Большой выбор пакетов телеканалов</p>
            </div>
          </div>
        </div>


        <div className=" w-full justify-center items-center ">

          <div className="p-9 "> <img src="/img/threecolor.png" /></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row font-bold text-2xl justify-center items-center border-b border-gray-300">
        <div className=" w-full ">
          <div className="p-3 bg-red-600  text-center"> <span className="text-white">МТС</span></div>
          <div className='border-l  border-dotted border-cyan-500 ml-3 pr-6'>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Доступная цена на комплект спутникового ТВ МТС</p>
            </div>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Большой выбор телеканалов</p>
            </div>
            <div className='relative my-11'>
              <div className="w-5 h-5 absolute top-1 -left-[10px] bg-[#edf5ff]"><CheckIcon fill={'#31b9f3'} /></div>
              <p className="ml-4 text-xl font-semibold">Качественный прием цифрового сигнала</p>
            </div>
          </div>
        </div>


        <div className=" w-full justify-center items-center ">

          <div className="p-12 "> <img src="/img/mts.webp" /></div>
        </div>
      </div>

      <div className="font-semibold text-3xl p-4 ">Также в продаже для вас</div>

      <div className="flex items-center md:justify-between flex-wrap flex-col md:flex-row">
        <div className="flex flex-col shadow-md my-3 bg-white max-w-[400px]">
          <img src="/img/tvconsole.webp" />
          <div className=" text-xl font-medium p-4">Цифровые ТВ приставки</div>
        </div>
        <div className="flex flex-col shadow-md my-3 bg-white max-w-[400px]">
          <img src="/img/ntv.webp" />
          <div className=" text-xl font-medium p-4">Комплект НТВ плюс</div>
        </div>
        <div className="flex flex-col shadow-md my-3 bg-white max-w-[400px]">
          <img src="/img/ant.webp" />
          <div className=" text-xl font-medium p-4">Антенны для ТВ приставок</div>
        </div>
        <div className="flex flex-col shadow-md my-3 bg-white max-w-[400px]">
          <img src="/img/tv.webp" />
          <div className=" text-xl font-medium p-4">Телевизоры</div>
        </div>
        <div className="flex flex-col shadow-md my-3 bg-white max-w-[400px]">
          <img src="/img/smarttv.webp" />
          <div className=" text-xl font-medium p-4">Smart приставки для ТВ</div>
        </div>
        <div className="flex flex-col shadow-md my-3 bg-white max-w-[400px]">
          <img src="/img/cabel.webp" />
          <div className=" text-xl font-medium p-4">Кабели коннекторы кронштейны</div>
        </div>
      </div>

    </>
  )
}

export default sputnik