import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"
import Script from "next/script"


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                     
                        ym(89986587, "init", {
                             clickmap:true,
                             trackLinks:true,
                             accurateTrackBounce:true
                        });
              `,
                    }}
                />
                <noscript><div><img src="https://mc.yandex.ru/watch/89986587"  style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
            </Head>

            

            <Header />

            <div className="container max-w-[1300px] mx-auto">
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layout