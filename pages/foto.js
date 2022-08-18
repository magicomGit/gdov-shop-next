import PrintIcon from "../components/svg-icons/PrintIcon"
import DocIcon from "../components/svg-icons/DocIcon"
import Head from "next/head"
const foto = () => {
  return (
    <>
    <Head>
      <meta keywords="печать фотографий, копии, ксерокс, копирование документов, ламинирование"></meta>
      <title>gdov-shop.ru/Печать фотографий</title>
    </Head>
    <div className="flex flex-col md:flex-row my-5 shadow">
            <div className=""><img src="/img/foto.webp" /></div>
            <div className=" bg-white  flex flex-col">
                <div className="py-6 pl-24 pr-8 relative">
                    <div className="w-14 h-14 rounded-full bg-stone-400 absolute top-4 left-6 p-3">
                        <PrintIcon fill='#fff'/>
                    </div>
                    <p className="text-2xl">Фото</p>
                    <p className="">Цветная печать фотографий с любых электронных носителей.</p>
                </div>
                <div className="py-6 pl-24 pr-8 relative">
                <div className="w-14 h-14 rounded-full bg-stone-400 absolute top-4 left-6 p-3">
                    <DocIcon fill="#fff"/>
                </div>
                    <p className="text-2xl">Документы</p>
                    <p className="">Редактирование, сканирование, копирование документов.</p>
                </div>
                <div className="py-6 pl-24 pr-8 relative">
                <div className="w-14 h-14 rounded-full bg-stone-400 absolute top-4 left-6 p-3.5">
                <PrintIcon fill='#B3404A'/>
                </div>
                    <p className="text-2xl">Ламинирование</p>
                    <p className="">Ламинируем фото, документы, листы А4</p>
                </div>
                <div className=" mx-auto my-auto "><img className="max-w-xs" src="img/print.webp"/></div>
            </div>
        </div>
        </>
  )
}

export default foto