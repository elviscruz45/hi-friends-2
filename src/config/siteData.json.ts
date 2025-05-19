export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Hi Friends",
	// Your website's title and description (meta fields)
	title: "Hola Amigos - Conecta con nuevas personas y haz amigos en línea",
	description:
		"Haz nuevos amigos y mantente en contacto con personas que comparten tus intereses. Hola Amigos es una plataforma moderna, rápida y fácil de usar para conectar con el mundo.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Elvis Cruz",
		email: "business@pandorasti.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
