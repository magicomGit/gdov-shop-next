import FooterContact from "./FooterContact"
import FooterMenu from "./FooterMenu"
import YaMetrika from "./YaMetrika"


const Footer = () => {
    return (
        <div className="bg-[#202942] text-white">
            <div className="flex flex-col md:flex-row md:justify-around container max-w-[1300px] mx-auto px-5">
                <div className=" flex flex-col items-center   overflow-hidden ">
                    <img className="w-72 mt-9 mx-auto" src="/img/logowhite.webp" />
                    <div className="hidden lg:flex flex-col justify-center items-center border border-white px-8 
                                    mx-auto mt-5 py-14">
                        <div className="text-2xl">ПРОСТЫЕ РЕШЕНИЯ </div>
                        <div > для сложных проблем</div>
                    </div>
                    <div className="hidden md:block mx-auto items-center my-5">
                    <YaMetrika/>
                    </div>
                </div>


                <div className="   overflow-hidden">
                    <FooterContact />
                </div>


                <div className="   overflow-hidden">
                    <FooterMenu />
                </div>
            </div>
        </div>
    )
}

export default Footer