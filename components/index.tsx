import Header from "./Header";
import Footer from "./Footer";
import ReturnToTop from "./ScrollToTop";
import Hero from "./Hero";
import SignIn from "./Auth/SignIn";
import ForgotPassword from "./Auth/forgot-password";
import SignUp from "./Auth/SignUp";
import AboutUsSection from "./WhoWeAre";
import ResetPassword from "./Auth/reset-password";
import ComplaintForm from "./Complaints";
import ContactUs from "./Contact";
import FAQSection from "./FAQ";
import { SearchBar } from '@/components/Government/SearchBar';
import { FilterSection } from '@/components/Government/Filter';
import { ProjectCard } from '@/components/Government/projectsCard';
import { sampleCountyData } from '@/data/mockData';
import { FundingOverview } from "./Government/FundingOverview";
import { PlannedInitiativeCard } from "./Government/PlannedInitiativeCard";
import { EnvironmentalProjectCard } from "./Government/EnvironmentalProjectCard";
import { PublicParticipationSection } from "./Government/PublicParticipationSection";
import CompletedProjects from "./CompletedProjects";
import OngoingProjects from "./OngoingProjects";
import BrowseCounties from "./Government/BrowseCounties";
import ProjectsBrowser from "./Government/BrowseProjects";
import { ExpertQASessions, PublicDiscussions } from "./Forums";
const components = {
  FundingOverview,
  PublicParticipationSection,
  PlannedInitiativeCard,
  EnvironmentalProjectCard,
  Header,
  Footer,
  ReturnToTop,
  Hero,
  SignUp, 
  SignIn,
  ForgotPassword,
  ResetPassword,
  AboutUsSection,
  ComplaintForm,
  ContactUs,
  FAQSection,
  SearchBar,
  FilterSection,
  ProjectCard,
  CompletedProjects,
  sampleCountyData,
  OngoingProjects,
  BrowseCounties,
  ProjectsBrowser,
  ExpertQASessions, 
  PublicDiscussions,
};

export default components;
