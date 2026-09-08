import gsap from 'gsap';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hero = document.querySelector('[data-hero]');

if (hero && !reduceMotion) {
	const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
	gsap.set('[data-hero-title] span', { yPercent: 115 });
	gsap.set('[data-hero-reveal], [data-annotation]', { autoAlpha: 0, y: 14 });
	timeline
		.fromTo('[data-hero-media]', { scale: 1.1 }, { scale: 1.035, duration: 1.8, ease: 'power2.out' })
		.to('[data-hero-title] span', { yPercent: 0, duration: 1.05, stagger: .08 }, .15)
		.to('[data-hero-reveal]', { autoAlpha: 1, y: 0, duration: .75, stagger: .09 }, .55)
		.to('[data-annotation]', { autoAlpha: 1, y: 0, duration: .75, stagger: .13 }, .9);

	if (window.matchMedia('(min-width: 801px) and (pointer: fine)').matches) {
		hero.addEventListener('pointermove', (event) => {
			const x = (event.clientX / window.innerWidth - .5) * 8;
			const y = (event.clientY / window.innerHeight - .5) * 5;
			gsap.to('[data-hero-media]', { x, y, duration: 1.2, ease: 'power2.out', overwrite: true });
		});
	}
}

if (!reduceMotion) {
	const revealObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			gsap.fromTo(entry.target, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: .9, ease: 'power3.out' });
			revealObserver.unobserve(entry.target);
		});
	}, { threshold: .12 });
	document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
}
