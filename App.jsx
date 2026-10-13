import React, { useEffect, useState } from "react";

const navigationItems = [
	{ id: "about", label: "About", number: "01" },
	{ id: "expertise", label: "Expertise", number: "02" },
	{ id: "education", label: "Education", number: "03" },
];

const technologies = ["MongoDB", "Express.js", "React", "Node.js"];

const focusAreas = [
	{
		title: "Frontend",
		description: "React interfaces built around clarity, responsive layouts, and a smooth user experience.",
	},
	{
		title: "Backend",
		description: "Node.js and Express.js foundations for APIs and application logic.",
	},
	{
		title: "Data",
		description: "MongoDB for working with flexible, application-ready data.",
	},
];

function Header({ currentSection }) {
	return (
		<header className="topbar shell">
			<a className="brand" href="#top" aria-label="M. A. Mohamed Riham, home">
				<span className="brand-mark">MR</span>
				<span>M. A. MOHAMED RIHAM</span>
			</a>
			<nav className="nav" aria-label="Main navigation">
				{navigationItems.map(({ id, label, number }) => (
					<a key={id} href={`#${id}`} aria-current={currentSection === id ? "location" : undefined}>
						<span className="nav-index">{number}</span>{label}
					</a>
				))}
			</nav>
		</header>
	);
}

function Hero() {
	return (
		<section className="hero shell" id="about" aria-labelledby="intro-title">
			<div className="hero-content">
				<p className="eyebrow mono">ECE student <span aria-hidden="true">/</span> full-stack engineer</p>
				<h1 id="intro-title"><span>M. A. Mohamed</span><span className="last-name">Riham.</span></h1>
				<p className="hero-copy">I’m an <strong>Electronics and Communication Engineering</strong> student who enjoys turning ideas into useful digital experiences with the MERN stack.</p>
				<a className="hero-link" href="#expertise">Explore my toolkit <span aria-hidden="true">&#8594;</span></a>
			</div>
			<div className="visual" aria-label="Electronics circuit board detail">
				<div className="visual-frame">
					<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85" alt="Close-up of electronic components and circuit board traces" />
					<div className="visual-label mono"><span>Curiosity in every layer</span><span>ECE × CODE</span></div>
				</div>
				<div className="orbit-mark" aria-hidden="true">BUILD<br />THINK<br />REPEAT</div>
				<div className="visual-note">Connecting hardware thinking with full-stack craft.</div>
			</div>
		</section>
	);
}

function TechnologyTicker() {
	return (
		<div className="ticker shell" aria-label="Core technologies">
			<span className="ticker-label mono">MERN stack</span>
			<div className="ticker-items">
				{technologies.map((technology) => <span key={technology}>{technology}</span>)}
			</div>
		</div>
	);
}

function Expertise() {
	return (
		<section className="section shell" id="expertise" aria-labelledby="expertise-title">
			<div className="section-heading">
				<p className="section-kicker mono">01 / What I work with</p>
				<h2 id="expertise-title">From a thoughtful interface to the systems behind it.</h2>
			</div>
			<div className="skills-grid">
				{focusAreas.map(({ title, description }, index) => (
					<article className="skill" key={title}>
						<span className="skill-number mono">{String(index + 1).padStart(2, "0")}</span>
						<h3>{title}</h3>
						<p>{description}</p>
					</article>
				))}
			</div>
		</section>
	);
}

function Education() {
	return (
		<section className="section shell education" id="education" aria-labelledby="education-title">
			<div className="education-panel">
				<div className="education-intro">
					<p className="mono">02 / Education</p>
					<h2 id="education-title">Learning with purpose.</h2>
					<p>Building a strong engineering foundation while growing as a full-stack developer.</p>
				</div>
				<div className="education-list">
					<article className="education-item">
						<span className="education-year mono">2023-2027</span>
						<div>
							<h3>B.E. Electronics and Communication Engineering</h3>
							<p>Mohamed Sathak A.J. College of Engineering</p>
						</div>
					</article>
					<article className="education-item">
						<span className="education-year mono">School</span>
						<div>
							<h3>BEST Matric Higher Secondary School</h3>
							<p>Sirkali</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

function App() {
	const [currentSection, setCurrentSection] = useState("about");

	useEffect(() => {
		const sections = navigationItems
			.map(({ id }) => document.getElementById(id))
			.filter(Boolean);

		const updateCurrentSection = () => {
			const activationLine = window.innerHeight * 0.4;
			const activeSection = sections
				.filter((section) => section.getBoundingClientRect().top <= activationLine)
				.at(-1);

			if (activeSection) setCurrentSection(activeSection.id);
		};

		window.addEventListener("scroll", updateCurrentSection, { passive: true });
		window.addEventListener("resize", updateCurrentSection);
		updateCurrentSection();

		return () => {
			window.removeEventListener("scroll", updateCurrentSection);
			window.removeEventListener("resize", updateCurrentSection);
		};
	}, []);

	return (
		<>
			<Header currentSection={currentSection} />
			<main id="top">
				<Hero />
				<TechnologyTicker />
				<Expertise />
				<Education />
			</main>
			<footer className="shell">
				<p>© {new Date().getFullYear()} M. A. Mohamed Riham</p>
				<span className="mono">ECE · MERN · Always learning</span>
			</footer>
		</>
	);
}

export default App;