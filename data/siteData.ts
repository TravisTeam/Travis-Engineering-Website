export interface ServiceCategory {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: string;
    subServices?: { id: string; name: string }[];
}

export interface Project {
    id: string;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
}

export interface ClientLogo {
    id: string;
    name: string;
    logoPath: string;
}

export const siteData = {
    header: {
        logo: {
            src: "/images/logo-white.png",
            alt: "Travis Engineering",
        },
        navItems: [
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/#services" },
            { label: "About", href: "/about" },
            { label: "Contact Us", href: "/contactus" },
        ],
    },
    hero: {
        title: "CANADIAN FORENSIC ENGINEERING & CONSULTING",
        subtitle: "FORENSIC INSPECTIONS & EXPERT ANALYSIS",
        description: "We investigate failures, damage, and performance issues across buildings and infrastructure, delivering clear, defensible findings for insurers, owners, and legal teams. Structural engineering remains a core service within our broader forensic practice.",
        ctaText: "VIEW SERVICES",
        ctaLink: "#services",
        heroImage: "/drawings/s01-general-information.jpg",
    },
    services: {
        title: "Our Services",
        subtitle: "Travis Engineering offers a comprehensive range of services to meet all your engineering needs. Our areas of expertise include:",
        categories: [
            {
                id: "forensic-engineering",
                number: "01",
                title: "FORENSIC ENGINEERING",
                description: "We specialize in forensic engineering services to investigate and analyze structural failures, accidents, and other engineering-related issues.",
                icon: "search",
                subServices: [
                    { id: "electrical", name: "Electrical" },
                    { id: "mechanical", name: "Mechanical" },
                    { id: "structural-civil", name: "Structural/Civil" },
                    { id: "fire-explosion", name: "Fire and Explosion" },
                    { id: "cause", name: "Cause" },
                    { id: "contract-disputes", name: "Contract Disputes" },
                    { id: "damage-assessments", name: "Damage Assessments" },
                    { id: "insurance-claims", name: "Insurance Claims" },
                    { id: "wind-hail-water-fire", name: "Wind, Hail, Water, Fire" },
                    { id: "structural", name: "Structural" },
                    { id: "consulting", name: "Consulting" },
                ],
            },
            {
                id: "damage-assessments",
                number: "02",
                title: "DAMAGE ASSESSMENTS",
                description: "Our team provides thorough damage assessments to evaluate the extent of damage to structures and properties, offering expert insights and recommendations.",
                icon: "clipboard-check",
            },
            {
                id: "engineering-design",
                number: "03",
                title: "ENGINEERING DESIGN SERVICES",
                description: "We offer comprehensive engineering design services to bring your innovative ideas to life, ensuring functionality, safety, and efficiency in every design.",
                icon: "drafting-compass",
            },
            {
                id: "environmental-consulting",
                number: "04",
                title: "ENVIRONMENTAL CONSULTING",
                description: "Travis Engineering provides environmental consulting services to address environmental challenges and ensure sustainable solutions for a better tomorrow.",
                icon: "leaf",
                subServices: [
                    { id: "designated-substance", name: "Designated Substance Survey" },
                    { id: "mold-asbestos", name: "Mold and Asbestos" },
                    { id: "phase-1-2", name: "Phase 1 and Phase 2 Consulting" },
                    { id: "air-testing", name: "Air Testing" },
                ]
            },
            {
                id: "forensic-roofing",
                number: "05",
                title: "FORENSIC ROOFING",
                description: "Our forensic roofing expertise allows us to assess, analyze, and provide expert insights on roofing issues and failures to support insurance claims and legal proceedings.",
                icon: "home",
            },
            {
                id: "drone-inspections",
                number: "06",
                title: "DRONE INSPECTIONS",
                description: "Advanced aerial inspections using drone and thermal imaging technology for comprehensive, safe, and efficient property assessments.",
                icon: "drone",
                subServices: [
                    { id: "roof", name: "Roof" },
                    { id: "solar", name: "Solar" },
                    { id: "grain-towers", name: "Grain Towers" },
                    { id: "electrical", name: "Electrical" },
                    { id: "thermal", name: "Thermal Inspections" },
                ]
            },
        ] as ServiceCategory[],
    },
    about: {
        title: "About Us",
        content: "TRAVIS Engineering is a Canadian-born and operated forensic engineering and consulting firm specializing in insurance claims, structural assessments, risk management, and dispute resolution. Our multidisciplinary team of engineers, inspectors, appraisers, and industry specialists delivers precise, unbiased, and defensible assessments for insurance, legal, construction, and property management industries.\n\nWe are known for our rapid response, cutting-edge technology, and commitment to excellence, ensuring that our clients receive accurate evaluations, cost-effective solutions, and reliable expert opinions. Not only are we a multi disciplinary engineering and inspection solution under one roof, we are also a mobile powerhouse. We have set off our first mobile operations unit, able to serve our clients throughout Canada, in person, and with a full range of tools and equipment to serve at our full potential. This is unprecedented and we are proud to be the ones to lead this initiative.",
    },
    contact: {
        title: "Get In Touch",
        infoTitle: "Contact Information",
        address: {
            label: "ADDRESS",
            lines: [
                "1670 North Service Rd E",
                "Suite 207, Oakville, ON",
                "L6H 7G3"
            ]
        },
        phone: {
            label: "PHONE",
            number: "1-888-733-9940"
        },
        email: {
            label: "EMAIL",
            address: "hello@travisengineering.ca"
        },
        serviceAreas: {
            label: "Service Areas",
            description: "Our offices are located across Canada: Victoria, Vancouver, Calgary, Edmonton, Saskatoon, Regina, Winnipeg, Thunder Bay, Toronto, Ottawa, Halifax, and St. John's"
        },
        form: {
            nameLabel: "Name *",
            emailLabel: "Email *",
            phoneLabel: "Phone (optional)",
            messageLabel: "Message *",
            submitText: "Send Message"
        }
    },
    clients: [
        { name: "Allstate Insurance", logoPath: "/images/logos/allstate-logo.png" },
        { name: "The Co-operators", logoPath: "/images/logos/Co-operators-New-Logo.png" },
        { name: "EagleView", logoPath: "/images/logos/EagleView-Full-Color-Vertical.svg" },
        { name: "City of Toronto", logoPath: "/images/logos/Toronto,_City_of.svg" },
        { name: "Toronto Public Library", logoPath: "/images/logos/Toronto_Public_Library_Logo.png" },
    ],
    footer: {
        address: "1670 North Service Rd E, Suite 207, Oakville, ON L6H 7G3",
        phone: "1-888-733-9940",
        website: "Travisengineering.ca",
        projectInfo: "PROJECT: TORONTO PUBLIC LIBRARY - GOLDHAWK PARK BRANCH",
        drawingNumber: "S0.1",
    }
};
