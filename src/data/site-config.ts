export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Rosa Petit',
    subtitle: 'Medical Physicist | Physicist',
    description: 'Medical Physicist | Physicist',
    image: {
        src: '/rosa-preview.webp',
        alt: 'Rosa Petit - Medical Physicist | Physicist'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [

        {
            text: 'Terms',
            href: '/terms'
        },{
            text: 'Download CV',
            href: 'https://#/'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/rosaangelicapetitsevilla/'
        },
        {
            text: 'Email',
            href: 'mailto:rosaapetits@gmail.com'
        }
    ],
    hero: {
        title: 'Hi and Welcome to my Website!',
        text: "Hey! I’m **Rosa Angelica Petit Sevilla**, born in Venezuela on May 15, 1993. I am dedicated, professional, and committed to delivering high-quality work. My personal qualities allow me to integrate seamlessly into any team. I consider myself positive and adaptable to all work environments.\n" +
            "\n" +
            "I am passionate about science, which is evident in my professional and educational experiences. This passion led me to discover my love for writing, enabling me to express ideas and information clearly, ensuring accessibility to knowledge for everyone. Through these dual vocations, I have honed my organizational, classification, and communication skills. Follow me on <a href='https://www.linkedin.com/in/rosaangelicapetitsevilla/'>Linkedin</a> for more information.",
        image: {
            src: '/hero.webp',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Read more',
                href: '/about'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Rosa Petit Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
