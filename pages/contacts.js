import Head from "next/head"

const contacts = () => {
  return (
    <>
    <Head>      
      <title>Контакты</title>
    </Head>
    <div className="flex flex-col md:flex-row md:justify-around my-6 text-center">
        <div className="flex flex-col items-center gap-3 px-6">
            <img src="/img/communicate.webp" className="w-24" />
            <div className="text-center">
                <p><strong>Наш адрес</strong></p>
                <p>г.Гдов ул. К.Маркса д.21</p>
            </div>
            <div className="text-center">
                <p><strong>Телефоны</strong></p>
                <p>(81131) 21-130   (911)365-51-76</p>
                <p>(900) 990-80-45</p>
            </div>
            <div className="text-center">
                <p><strong>Email</strong></p>
                <p>seesee06@yandex.ru</p>
            </div>
            <div className="text-center">
                <p><strong>Группа Вконтакте</strong></p>
                <a href="http://vk.com/gdovcomp.club" target='blank'
                    className="hover:text-cyan-500 text-cyan-600">vk.com/gdovcomp.club</a>
            </div>
            <div className="text-center">
                <p><strong>Режим работы</strong></p>
                <p>Ежедневно с 9:00 до 20:00</p>
            </div>
        </div>


        <div className="flex flex-col items-center gap-5 px-6">
            <img src="/img/cart.webp" className="w-24" />

            <p><strong>У нас в магазине всегда в продаже:</strong></p>
            <p>Компьютеры, ноутбуки, планшеты, смартфоны, оргтехника.</p>
            <p>СИМ карты операторов сотовой связи МТС, ТЕЛЕ-2, Yota.</p>
            <p>Комплекты спутникового ТВ, Триколор и МТС.</p>

        </div>


        <div className="flex flex-col items-center gap-5 px-6">
            <img src="/img/service.webp" className="w-24" />

            <p><strong>Наши услуги и сервис:</strong></p>
            <p>Ремонт компьютеров, ноутбуков, планшетов, смартфонов, оргтехники.</p>
            <p>Диагностика компьютеров, установка ПО.</p>
            <p>Заправка картриджей для принтеров.</p>
            <p>Оформление полисов ОСАГО КАСКО страховой компании ВСК.</p>

        </div>
    </div>


    {/* ----------------------------------------------------------- */}
    <div className="flex flex-col md:flex-row md:justify-center my-4">
        <img src="/img/map.webp" className="md:max-w-[50%]"/>
        <img src="/img/front.webp" className="md:max-w-[50%]"/>
    </div>
</>
  )
}

export default contacts