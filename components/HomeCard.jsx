

const HomeCard = () => {
    return (
        <div className="flex flex-col md:flex-row my-3 gap-2">
            <div className="max-w-[500px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/3 overflow-hidden bg-white">
                <div>
                    <img src="/img/computer.jpg" className="" />
                </div>

                <div className="p-5 flex items-center bg-[#e4e3db] text-xl font-semibold  border-b border-gray-300 min-h-[97px] ">Компьютеры в наличии и на заказ</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Индивидуальный подход к заказчику</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Консультации по подбору комплектующих под разные задачи</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Сборка вашей конфигурации системного блока</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Установка програм для работы на компьютере по желанию заказчика</div>
                <div className="p-5 bg-[#f7f6f4] min-h-[60px]"></div>
            </div>


            <div className="max-w-[500px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/3 overflow-hidden bg-white">
                <div>
                    <img src="/img/network.jpg" className="" />
                </div>

                <div className="p-5 flex items-center bg-[#e4e3db] text-xl font-semibold  border-b border-gray-300 min-h-[97px]">Сетевое оборудование</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">В наличии ADSL, Wi-Fi, 4G роутеры, 4G модемы, маршрутезаторы, Wi-Fi адаптеры, UTP кабель</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Монтаж компьютерной сети у вас дома, (кабельная сеть или Wi-Fi сеть)</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Настройка ADSL модемов, 4G роутеров, точек доспупа Wi-Fi</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Консультации по выбору сетевого оборудования</div>
                <div className="p-5 bg-[#f7f6f4] min-h-[60px]"></div>
            </div>

            <div className="max-w-[500px] mx-auto border border-gray-300 rounded-lg my-3 md:m-1 w-full md:w-1/3 overflow-hidden bg-white">
                <div>
                    <img src="/img/accessories.jpg" className="" />
                </div>

                <div className="p-5 flex items-center bg-[#e4e3db] text-xl font-semibold  border-b border-gray-300 min-h-[97px]">Аксессуары и периферия для компьютера</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Флеш карты, USB флеш карты, карт-ридеры, USB кабели, Type-C кабели</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Наушники, комьютерная акустика, мыши и клавиатуры, коврики для мыши</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Принтеры и Многофункциональные устройства</div>
                <div className="p-5 flex items-center text-base min-h-[88px] border-b border-gray-300">Усилители сотовой связи и интернет сигнала</div>
                <div className="p-5 bg-[#f7f6f4] min-h-[60px]"></div>
            </div>
        </div>
    )
}

export default HomeCard