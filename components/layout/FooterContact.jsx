
import EmailIcon from "../svg-icons/EmailIcon"
import HomeIcon from "../svg-icons/HomeIcon"
import PhoneIcon from "../svg-icons/PhoneIcon"
import ScheduleIcon from "../svg-icons/ScheduleIcon"
import VkIcon from "../svg-icons/VkIcon"


const FooterContact = () => {
    return (
        <div className="flex flex-col my-7">
            <div className="relative mb-5">
                <div className="w-5 h-5 absolute top-3 left-0" ><HomeIcon fill={'#4ac4f3'}/></div>
                <div className=" font-medium  ml-10">Адрес</div>
                <div className=" text-slate-300  ml-10">г Гдов ул Карла Маркса д 21</div>
            </div>

            <div className="relative mb-5">
                <div className="w-5 h-5 absolute top-3 left-0" ><PhoneIcon fill={'#4ac4f3'}/></div>
                <div className=" font-medium  ml-10">Телефоны</div>
                <div className=" text-slate-300  ml-10">(81131)21-130 &nbsp;  (911)365-51-76   </div>
                <div className=" text-slate-300  ml-10">  (900)990-80-45</div>
            </div>

            <div className="relative mb-5">
                <div className="w-5 h-5 absolute top-3 left-0" ><EmailIcon fill={'#4ac4f3'}/></div>
                <div className=" font-medium  ml-10">Email</div>
                <div className=" text-slate-300  ml-10">seesee06@yandex.ru</div>
            </div>
            
            <div className="relative mb-5">
                <div className="w-5 h-5 absolute top-3 left-0" ><VkIcon fill={'#4ac4f3'}/></div>
                <div className=" font-medium  ml-10">Группа Вконтакте</div>
                <div className=" text-slate-300  ml-10"><a href='http://vk.com/gdovcomp.club' target='_blank'>
                    <div className='vk-link-div'>vk.com/gdovcomp.club</div>
                </a></div>
            </div>

            <div className="relative mb-5">
                <div className="w-5 h-5 absolute top-3 left-0" ><ScheduleIcon fill={'#4ac4f3'}/></div>
                <div className=" font-medium  ml-10">Режим работы</div>
                <div className=" text-slate-300  ml-10">Ежедневно с 9:00 до 20:00</div>
            </div>
        </div>
    )
}

export default FooterContact