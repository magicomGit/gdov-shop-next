import Head from "next/head"


const insure = () => {
  return (
    <>
    <Head>
      <meta keywords="страхование, ОСАГО, КАСКО, страхование недвижимости"></meta>
      <title>Страхование</title>
    </Head>
            <div className="flex flex-col gap-4 items-center md:flex-row my-4">
                <img src="img/vsk.webp" className="shadow-md" />
                <div className="bg-white p-8 text-sm min-h-[300px] shadow-md">
                    <div className="text-xl font-medium"> Страховой Дом ВСК (САО «ВСК»)</div>
                    <br />
                    <p>Осуществляет страховую деятельность с 11 февраля 1992 года и в настоящее время занимает ведущие позиции
                        на рынке страховых услуг России. В 2017 году компания отметила 25-летний юбилей. Высокий уровень
                        работы компании трижды отмечен благодарностью Президента России за большой вклад в развитие страхового
                        дела (2002, 2007 и 2017 гг.). ВСК является дважды лауреатом Национального конкурса «Компания года» (2013 и 2015 гг.) в номинации «Страховая компания». В компании "ВСК" тарифы на страхование на 20% ниже чем в компании "Росгосстрах"</p>
                </div>
            </div>


            <div className="flex flex-col items-center md:justify-around md:flex-row">
                <div className="flex flex-col items-center max-w-xs my-6">
                    <img className="max-w-[100px] m-5" src="/img/life-insurance.webp" />
                    <div className="text-center font-medium">У нас в компьютерном центре вы можете получить услуги страхования.</div>
                </div>
                <div className="flex flex-col items-center max-w-xs my-6">
                    <img className="max-w-[100px] m-5" src="/img/car-insurance.webp" />
                    <div className="text-center font-medium">Оформление полисов ОСАГО КАСКО, страхование недвижимости.</div>
                </div>
                <div className="flex flex-col items-center max-w-xs my-6">
                    <img className="max-w-[100px] m-5" src="/img/insurance.webp" />
                    <div className="text-center font-medium">Страхуем любой не сегмент. Грузовики, трактора, молодых водителей.</div>
                </div>
            </div>


            

            <div className="flex flex-col gap-4 items-center md:flex-row my-4">
                <img src="img/astro.webp" className="shadow-md" />
                <div className="bg-white p-8 text-sm min-h-[300px] shadow-md">
                    <div className="text-xl font-medium"> АО «СК «Астро-Волга»</div>
                    <br />
                    <p>Страховая компания Астро-Волга была создана в 1990 году в Тольятти, и имеет сеть офисов на всем протяжении России от Сахалина до Крыма и Калининграда.</p>
                    <br />
                    <p>17 марта 2021 года АО СК «Астро-Волга» вступила в Национальный союз агростраховщиков — с целью предоставления услуг страхования средним и небольшим фермерским хозяйствам.</p>
                    <br />
                    <p> Страховая компания «Астро-Волга» на страже Вашей защиты во всех сферах деятельности юридических и физических лиц.
                        В компании насчитывается более 300 высококвалифицированных сотрудников и оптимизации бизнес-процессов мы стараемся давать конечному клиенту выгодные ценовые предложения на рынке страховых услуг.</p>
                </div>


            </div>



        </>
  )
}

export default insure