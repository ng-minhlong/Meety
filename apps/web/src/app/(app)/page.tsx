import Navbar from '@/components/landing/NavBar';
import Hero from '@/components/landing/Hero';
import SocialProof from '@/components/landing/SocialProof';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import AIAssistant from '@/components/landing/AiAssistant';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => (
	<div className="bg-background min-h-screen">
		<Navbar />
		<Hero />
		<SocialProof />
		<Features />
		<HowItWorks />
		<AIAssistant />
		<Pricing />
		<FAQ />
		<FinalCTA />
		<Footer />
	</div>
);

export default Index;
