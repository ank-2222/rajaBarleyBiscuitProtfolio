import CallToAction from "@/components/About/CallToAction"
import Contact from "@/components/About/Contact"
import Hero from "@/components/About/Hero"
import Story from "@/components/About/Story"
import Value from "@/components/About/Value"
import CertificateBanner from "@/components/Certificate/CertificateBanner"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"

function About() {
  return (
    <div className="overflow-hidden max-w-screen">
        <Header/>
        <Hero/>
        <Story/>
        <CertificateBanner/>
        <Value/>
        <Contact/>
<CallToAction/>
        <Footer/>
    </div>
  )
}

export default About