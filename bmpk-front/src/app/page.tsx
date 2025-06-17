import AboutUsView from "@/components/aboutUsView";
import Footer from "@/components/footer";
import LocalisationView from "@/components/localisationView";
import MainView from "@/components/mainView";
import Navbar from "@/components/navbar";
import SpecializationsView from "@/components/specializationsView";
import TeamView from "@/components/teamView";


export default function Home() {
  return (
   <>
    <Navbar></Navbar>
    <MainView></MainView>
    <AboutUsView></AboutUsView>
    <SpecializationsView></SpecializationsView>
    <TeamView></TeamView>
    <LocalisationView address="ul. Jęczmienna 22/4, 87-100 Toruń" phone="+48 566220384" email="bmpk@bmpk.pl" googleMapsSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.476957509873!2d18.60595117718105!3d53.01178847219411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470334e1f71af3a1%3A0xeaf17cfc20315b97!2sBMPK%20Kancelaria!5e0!3m2!1spl!2spl!4v1750176879043!5m2!1spl!2spl"></LocalisationView>
    <Footer></Footer>
   </>
  );
}

