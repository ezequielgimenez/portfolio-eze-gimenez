import HeaderComp from "@/components/header/Header";
import HelloComp from "@/components/hello/Hello";
import MyProjectsComp from "@/components/projects/Projects";
import AboutMeComp from "@/components/about me/AboutMe";
import SocialComp from "@/components/socials/Socials";
import ContactComp from "@/components/contact/Contact";
import Certifications from "@/components/certifications/Certifications";

export default function Home() {
  return (
    <div className="overflow-auto">
      <HeaderComp></HeaderComp>
      <HelloComp></HelloComp>
      <SocialComp></SocialComp>
      <Certifications />
      <MyProjectsComp></MyProjectsComp>
      <AboutMeComp></AboutMeComp>
      <ContactComp></ContactComp>
    </div>
  );
}
