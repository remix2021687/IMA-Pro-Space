import {
	HeroSection,
	ProstorySection,
	StepsSection,
	B2BSection,
	ContactSection,
} from "./components";

export const HomePage: React.FC = () => {
	return (
		<>
			<HeroSection />
			<ProstorySection />
			<StepsSection />
			<B2BSection />
			<ContactSection />
		</>
	);
};
