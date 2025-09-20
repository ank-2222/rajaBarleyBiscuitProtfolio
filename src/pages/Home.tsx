import CertificateBanner from '@/components/Certificate/CertificateBanner'
import Hero from '@/components/Home/Hero'
import OurSignature from '@/components/Home/OurSignature'
import PopularProduct from '@/components/Home/PopularProduct'
import PremiumBanner from '@/components/Home/PremiumBanner'
import Review from '@/components/Home/Review'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'

function Home() {
  return (
    <div className='w-full'>
        <Header/>
        <Hero/>
        <div className='w-full h-[2px] bg-primary/40'></div>
        <PopularProduct/>
        <OurSignature/>
        <CertificateBanner/>
        <PremiumBanner/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home