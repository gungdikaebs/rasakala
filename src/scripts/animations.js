import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = window.matchMedia('(min-width: 801px)').matches;

// -------------------------------------------------------------
// 1. Lenis Smooth Scrolling Setup (Silky & Responsive)
// -------------------------------------------------------------
let lenis = null;

if (!reduceMotion) {
	lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
		wheelMultiplier: 1.1,
		touchMultiplier: 1.6,
	});

	// Synchronize Lenis scroll with GSAP ScrollTrigger
	lenis.on('scroll', (e) => {
		ScrollTrigger.update();
		const header = document.querySelector('[data-header]');
		if (header) {
			header.dataset.scrolled = String(e.scroll > 24);
		}
	});

	// Run Lenis via GSAP ticker for 60-120fps synchronization
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});

	gsap.ticker.lagSmoothing(0);
}

// -------------------------------------------------------------
// 2. Smooth Anchor Navigation with Lenis
// -------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', (event) => {
		const targetId = anchor.getAttribute('href');
		if (!targetId || targetId === '#') return;
		const targetElement = document.querySelector(targetId);
		if (!targetElement) return;

		event.preventDefault();
		if (lenis) {
			lenis.scrollTo(targetElement, {
				offset: 0,
				duration: 1.3,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			});
		} else {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// -------------------------------------------------------------
// 3. Hero Entrance & Ambient Animations (Distinct & Expressive)
// -------------------------------------------------------------
const hero = document.querySelector('[data-hero]');

if (hero && !reduceMotion) {
	const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

	// Masked typography setup
	gsap.set('[data-hero-word]', { yPercent: 130, rotateZ: 3 });
	gsap.set('[data-hero-reveal]', { autoAlpha: 0, y: 26 });
	gsap.set('[data-hero-badge]', { autoAlpha: 0, scale: 0.82, rotation: -12, y: 20 });
	gsap.set('[data-hero-quote], [data-hero-cue]', { autoAlpha: 0, scale: 0.92, y: 18 });

	tl.fromTo('[data-hero-media]', { scale: 1.2 }, { scale: 1.1, duration: 2, ease: 'power2.out' })
		.to('[data-hero-word]', { yPercent: 0, rotateZ: 0, duration: 1.25, stagger: 0.12, ease: 'power4.out' }, 0.15)
		.to('[data-hero-reveal]', { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.55)
		.to('[data-hero-badge]', { autoAlpha: 1, scale: 1, rotation: 3, y: 0, duration: 0.95, ease: 'back.out(1.6)' }, 0.8)
		.to('[data-hero-quote], [data-hero-cue]', { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.95);

	// Continuous ambient float on the top badge
	gsap.to('[data-hero-badge]', {
		y: '+=8',
		rotation: '+=3',
		duration: 3,
		repeat: -1,
		yoyo: true,
		ease: 'sine.inOut',
	});

	// Responsive mouse parallax on desktop
	if (window.matchMedia('(min-width: 801px) and (pointer: fine)').matches) {
		hero.addEventListener('pointermove', (event) => {
			const x = (event.clientX / window.innerWidth - 0.5) * 16;
			const y = (event.clientY / window.innerHeight - 0.5) * 12;
			gsap.to('[data-hero-media]', { x, y, duration: 1.5, ease: 'power2.out', overwrite: 'auto' });
			gsap.to('[data-hero-badge]', { x: -x * 2, y: -y * 2, duration: 1.5, ease: 'power2.out', overwrite: 'auto' });
		});
	}
}

// -------------------------------------------------------------
// 4. Hero to Story Parallax Transition (Bold & Multi-Layered)
// -------------------------------------------------------------
if (!reduceMotion && hero) {
	// A. Hero Background & Content Exit Parallax
	gsap.to('[data-hero-media]', {
		yPercent: 36,
		scale: 1.18,
		ease: 'none',
		scrollTrigger: {
			trigger: hero,
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});

	gsap.to('[data-hero-content]', {
		y: isDesktop ? -130 : -70,
		opacity: 0,
		filter: 'blur(8px)',
		ease: 'none',
		scrollTrigger: {
			trigger: hero,
			start: 'top top',
			end: 'bottom top',
			scrub: 0.4,
		},
	});

	gsap.to('[data-hero-badge], [data-hero-quote], [data-hero-cue]', {
		y: -60,
		opacity: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: hero,
			start: 'top top',
			end: '70% top',
			scrub: true,
		},
	});
}

// B. Story Section Multi-Layer Collage Parallax
const storySection = document.querySelector('#story');
if (!reduceMotion && storySection) {
	const mainPhoto = storySection.querySelector('[data-story-photo-main]');
	const floatPhoto = storySection.querySelector('[data-story-photo-float]');
	const tape = storySection.querySelector('[data-story-tape]');
	const aside = storySection.querySelector('[data-story-aside]');
	const storyContent = storySection.querySelector('[data-story-content]');

	if (mainPhoto && floatPhoto) {
		// 1. Main building photo glides with steady depth
		gsap.fromTo(
			mainPhoto,
			{ y: isDesktop ? 110 : 50, scale: 0.94 },
			{
				y: isDesktop ? -80 : -35,
				scale: 1.04,
				ease: 'none',
				scrollTrigger: {
					trigger: storySection,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
			}
		);

		// 2. Foreground coffee polaroid has dramatic fast drift & rotational swing (350px travel!)
		gsap.fromTo(
			floatPhoto,
			{ y: isDesktop ? 220 : 90, rotate: 16 },
			{
				y: isDesktop ? -130 : -50,
				rotate: -1,
				ease: 'none',
				scrollTrigger: {
					trigger: storySection,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.65,
				},
			}
		);

		// 3. Washi tape reactive tilt and shift
		if (tape) {
			gsap.fromTo(
				tape,
				{ y: isDesktop ? 50 : 25, rotate: -14 },
				{
					y: isDesktop ? -60 : -30,
					rotate: -2,
					ease: 'none',
					scrollTrigger: {
						trigger: storySection,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 0.9,
					},
				}
			);
		}

		// 4. Botanical illustration on the right side
		if (aside) {
			gsap.fromTo(
				aside,
				{ y: isDesktop ? 110 : 50, opacity: 0.3 },
				{
					y: isDesktop ? -70 : -30,
					opacity: 1,
					ease: 'none',
					scrollTrigger: {
						trigger: storySection,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1.2,
					},
				}
			);
		}

		// 5. Story text content gentle parallax counter-glide
		if (storyContent && isDesktop) {
			gsap.fromTo(
				storyContent,
				{ y: 50 },
				{
					y: -40,
					ease: 'none',
					scrollTrigger: {
						trigger: storySection,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1.3,
					},
				}
			);
		}
	}
}

// -------------------------------------------------------------
// 5. Menu Polaroid & Philosophy Dynamic Parallax
// -------------------------------------------------------------
if (!reduceMotion) {
	// Menu polaroid photo tilt and scrub
	const menuPhoto = document.querySelector('[data-menu-photo]');
	if (menuPhoto) {
		gsap.fromTo(
			menuPhoto,
			{ y: isDesktop ? 100 : 45, rotate: -6 },
			{
				y: isDesktop ? -90 : -40,
				rotate: 3,
				ease: 'none',
				scrollTrigger: {
					trigger: '#menu',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 0.9,
				},
			}
		);
	}

	// Philosophy giant words sliding in opposing directions
	const philWords = document.querySelectorAll('[data-philosophy-words] span');
	if (philWords.length) {
		philWords.forEach((word, index) => {
			const direction = index % 2 === 0 ? -1 : 1;
			gsap.fromTo(
				word,
				{ x: direction * (isDesktop ? 65 : 30) },
				{
					x: direction * (isDesktop ? -65 : -30),
					ease: 'none',
					scrollTrigger: {
						trigger: '#philosophy',
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1.2,
					},
				}
			);
		});
	}

	// Location image parallax within frame
	const locationImg = document.querySelector('[data-location-img]');
	if (locationImg) {
		gsap.fromTo(
			locationImg,
			{ yPercent: isDesktop ? -16 : -10 },
			{
				yPercent: isDesktop ? 16 : 10,
				ease: 'none',
				scrollTrigger: {
					trigger: '#location',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			}
		);
	}
}

// -------------------------------------------------------------
// 6. Section Scroll Reveals (Enhanced GSAP ScrollTrigger)
// -------------------------------------------------------------
if (!reduceMotion) {
	const reveals = document.querySelectorAll('[data-reveal]');
	reveals.forEach((element) => {
		gsap.fromTo(
			element,
			{ autoAlpha: 0, y: 44 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1.05,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: element,
					start: 'top 88%',
					toggleActions: 'play none none none',
				},
			}
		);
	});
} else {
	// Respect reduced motion preference
	document.querySelectorAll('[data-reveal], [data-hero-word]').forEach((element) => {
		gsap.set(element, { autoAlpha: 1, y: 0, x: 0, rotate: 0 });
	});
}
