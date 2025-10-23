import React, { useRef, useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, Html, useScroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Share2, Code, FileText, Camera, Mail, Phone, ChevronDown } from 'lucide-react';
import { Toaster, toast } from 'sonner';

// --- UTILITY FUNCTIONS ---

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const Initializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return <>{children}</>;
};

// --- SHADCN COMPONENTS ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline';
    size?: 'default' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', children, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variant === 'default' && "bg-white text-black hover:bg-gray-200",
                variant === 'outline' && "border border-white bg-transparent text-white hover:bg-white/10",
                size === 'default' && "h-10 px-6 py-2",
                size === 'lg' && "h-12 px-8 py-3",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    )
);

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, type, ...props }, ref) => (
        <input
            type={type}
            ref={ref}
            className={cn(
                "flex h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-white text-base placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        />
    )
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    rows?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, rows = 4, ...props }, ref) => (
        <textarea
            rows={rows}
            ref={ref}
            className={cn(
                "flex min-h-[80px] w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-white text-sm placeholder:text-gray-500 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        />
    )
);

// --- GLOBAL STYLES ---

const GlobalStyles = () => (
    <style dangerouslySetInnerHTML={{
        __html: `
        .drop-shadow-white-glow {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
        }
        body {
            background-color: black;
        }
        .nav-dot {
            transition: all 0.3s ease;
        }
        .nav-dot.active {
            box-shadow: 0 0 5px white, 0 0 10px white;
        }
    `}} />
);

// --- CONTENT DATA ---

const SECTIONS = ['Home', 'About', 'Solutions', 'Projects', 'Contact'];

const HERO_DATA = {
    industries: [
        'Healthcare', 'E-Commerce', 'Real Estate', 'Finance', 'Education',
        'Technology', 'Hospitality', 'Retail'
    ],
    clients: [
        'TechCorp', 'HealthPlus', 'RetailHub', 'FinanceFirst', 'EduWorld',
        'PropMasters', 'HospitalityPro', 'TechInnovate'
    ],
    testimonials: [
        { name: 'Dr. Rajesh Kumar', company: 'HealthPlus Clinics', text: 'Gumming4U transformed our digital presence completely. Their strategic approach increased our patient inquiries by 300%.' },
        { name: 'Priya Sharma', company: 'TechCorp Solutions', text: 'Working with Gumming4U has been a game-changer. Their creativity and execution are unmatched in the industry.' },
        { name: 'Arun Patel', company: 'RetailHub', text: 'The team delivered beyond expectations. Our social media engagement skyrocketed within the first month.' }
    ],
};

const ABOUT_DATA = {
    story: "Gumming4U, founded by Aryaan Alam in 2023, is more than just a marketing firm—it embodies a vision of inclusivity and creativity in the marketing landscape. We emerged from a desire to create a workspace where young, innovative minds can thrive, regardless of their academic backgrounds. Under the guidance of Isaac Vivian and Aryaan Alam, we've become one of Chennai's fastest-growing marketing agencies.",
    mission: "To transform ordinary ideas into extraordinary outcomes through strategic digital marketing, cutting-edge technology, and a relentless focus on client success.",
    leaders: [
        { name: 'Aryaan Alam', role: 'Founder & Managing Director', bio: 'Visionary leader who established Gumming4U with a mission to democratize creative marketing and empower young talent.' },
        { name: 'Isaac Vivian', role: 'Marketing Director', bio: 'Strategic mind driving innovative campaigns and building lasting client relationships across diverse industries.' }
    ],
    pillars: [
        { icon: Target, title: 'Innovation', description: 'Pushing boundaries with creative solutions that set new industry standards' },
        { icon: Users, title: 'Collaboration', description: 'Building strong partnerships with clients to achieve shared success' },
        { icon: TrendingUp, title: 'Excellence', description: 'Delivering exceptional results through dedication and expertise' }
    ],
    values: ['Integrity', 'Creativity', 'Accountability', 'Inclusivity', 'Innovation', 'Excellence'],
};

const SOLUTIONS_DATA = [
    { icon: Target, title: 'Lead Generation', description: 'Strategic campaigns using paid and organic channels to capture and qualify high-value leads for sustainable growth.' },
    { icon: Share2, title: 'Social Media Marketing', description: 'Comprehensive strategies across all platforms to build authentic brand presence and foster deep audience engagement.' },
    { icon: Code, title: 'Software Development', description: 'Custom web and mobile applications tailored to your business needs and objectives.' },
    { icon: FileText, title: 'Content Creation', description: 'Compelling content across all formats to tell your brand story and connect with audiences.' },
    { icon: Camera, title: 'Photography & Videography', description: 'Professional visual storytelling through high-quality photography and video production.' },
    { icon: TrendingUp, title: 'Performance Marketing', description: 'Data-driven campaigns optimized for ROI and measurable business results.' }
];

const PROJECTS_DATA = [
    { title: 'Brand Relaunch', category: 'Strategy' },
    { title: 'Digital Strategy', category: 'Consulting' },
    { title: 'Visual Identity', category: 'Branding' },
    { title: 'E-Commerce Platform', category: 'Development' },
    { title: 'Engagement Campaign', category: 'Social Media' },
    { title: 'Creative Direction', category: 'Photography' }
];

// --- SCROLL COORDINATION ---

const NUM_PAGES = 26;
const MAX_Z_DISTANCE = 380;

const SECTION_SCROLL_HEIGHTS = [0, 2.8, 5.6, 8.4, 11.2];

const Z_POSITIONS_MAP = [
    { name: 'Home', z: 0 },
    { name: 'About', z: -47.5 },
    { name: 'Solutions', z: -95 },
    { name: 'Projects', z: -142.5 },
    { name: 'Contact', z: -190 },
];

// --- PAGE COMPONENTS ---

interface PageProps {
    onNavigate: (sectionIndex: number) => void;
}

const HeroSection: React.FC<PageProps> = ({ onNavigate }) => {
    const handleExplore = () => onNavigate(1);

    return (
        <div id="home" className="w-screen h-screen bg-black text-white overflow-y-auto pt-20 pb-12 px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
                <h1 className="text-8xl md:text-[10rem] font-light mb-6 tracking-tight drop-shadow-white-glow">
                    Welcome to <span className="font-bold">gumming4u</span>
                </h1>
                <Button onClick={handleExplore} className="mt-8 bg-white text-black hover:bg-gray-200" size="lg">
                    Explore More <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
            </motion.div>

            <div className="max-w-7xl mx-auto space-y-20 mt-16">
                <section className="mt-16">
                    <h2 className="text-5xl font-light mb-12 tracking-tight">INDUSTRIES WE SERVE</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {HERO_DATA.industries.map((industry, index) => (
                            <motion.div
                                key={industry}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="border border-gray-700 p-6 text-center"
                            >
                                <p className="text-lg font-light">{industry}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-5xl font-light mb-12 tracking-tight">OUR CLIENTS</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {HERO_DATA.clients.map((client, index) => (
                            <motion.div
                                key={client}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="text-2xl font-light opacity-60 hover:opacity-100 transition-opacity"
                            >
                                {client}
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="pb-20">
                    <h2 className="text-5xl font-light mb-12 tracking-tight">CLIENT TESTIMONIALS</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {HERO_DATA.testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="border border-gray-700 p-8 bg-gray-900/50"
                            >
                                <p className="text-gray-400 font-light mb-6 italic text-lg">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-medium">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

const AboutSection: React.FC<PageProps> = ({ onNavigate }) => {
    const handleManifesto = () => {
        onNavigate(2);
        toast.success("Manifesto Opened! Now scrolling to Solutions.", { duration: 3000 });
    };

    return (
        <div id="about" className="w-screen h-screen bg-white text-black overflow-y-auto pt-20 pb-12 px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl font-light mb-16 tracking-tight"
                >
                    ABOUT US
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h3 className="text-4xl font-light mb-6">OUR STORY</h3>
                    <p className="text-xl font-light leading-relaxed mb-4">{ABOUT_DATA.story}</p>
                    <p className="text-lg font-light leading-relaxed opacity-80">
                        We are driven by passion, not pedigree.
                    </p>
                    <Button onClick={handleManifesto} className="mt-8">
                        Read Our Manifesto
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="border border-gray-200 p-8 bg-gray-50"
                    >
                        <h3 className="text-4xl font-light mb-4">OUR MISSION</h3>
                        <p className="text-xl font-light leading-relaxed">{ABOUT_DATA.mission}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-4xl font-light mb-8">LEADERSHIP</h3>
                        <div className="space-y-6">
                            {ABOUT_DATA.leaders.map((leader, index) => (
                                <div key={index} className="border-b border-gray-300 pb-4">
                                    <h4 className="text-2xl font-light">{leader.name}</h4>
                                    <p className="text-sm uppercase tracking-wider opacity-60 mb-2">{leader.role}</p>
                                    <p className="font-light opacity-80">{leader.bio}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h3 className="text-4xl font-light mb-8">THREE PILLARS</h3>
                        <div className="space-y-6">
                            {ABOUT_DATA.pillars.map((pillar, index) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className="flex items-start space-x-4"
                                >
                                    <pillar.icon className="w-8 h-8 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-2xl font-light mb-2">{pillar.title}</h4>
                                        <p className="font-light opacity-80">{pillar.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="text-4xl font-light mb-8">OUR VALUES</h3>
                        <div className="flex flex-wrap gap-4">
                            {ABOUT_DATA.values.map((value, index) => (
                                <motion.div
                                    key={value}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                                    className="border border-gray-300 px-6 py-3 bg-white shadow-sm"
                                >
                                    <p className="text-lg font-light">{value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const SolutionsSection: React.FC<PageProps> = ({ onNavigate }) => {
    const handleDetails = () => {
        onNavigate(3);
        toast.info("Service details are loading... Scrolling to Projects!", { duration: 3000 });
    };

    return (
        <div id="solutions" className="w-screen h-screen bg-black text-white overflow-y-auto pt-20 pb-12 px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl font-light mb-16 tracking-tight"
                >
                    SOLUTIONS
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SOLUTIONS_DATA.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-gray-700 p-8 bg-gray-900/50 hover:bg-gray-800/60 transition-colors duration-300"
                        >
                            <solution.icon className="w-10 h-10 mb-4 text-white" />
                            <h3 className="text-2xl font-light mb-4 tracking-tight">{solution.title}</h3>
                            <p className="text-gray-400 font-light mb-6">{solution.description}</p>
                            <Button onClick={handleDetails} variant="outline" className="text-xs">
                                View Details
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectsSection: React.FC<PageProps> = ({ onNavigate }) => {
    const handleCaseStudy = () => {
        onNavigate(4);
        toast.warning("Case Study Loading... Now scrolling to Contact.", { duration: 3000 });
    };

    return (
        <div id="projects" className="w-screen h-screen bg-white text-black overflow-y-auto pt-20 pb-12 px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl font-light mb-16 tracking-tight"
                >
                    PROJECTS
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer border border-gray-200 p-4 shadow-lg bg-white"
                        >
                            <div className="overflow-hidden mb-4">
                                <motion.img
                                    src={`https://placehold.co/600x400/18181b/ffffff?text=${project.title.replace(/\s/g, '+')}`}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <h3 className="text-2xl font-light tracking-tight mb-1">{project.title}</h3>
                            <p className="text-sm uppercase tracking-wider opacity-60 mb-4">{project.category}</p>
                            <Button onClick={handleCaseStudy} className="text-xs">
                                View Case Study
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ContactSection: React.FC<PageProps> = ({ onNavigate }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message Sent! Returning to Home.", { duration: 3000 });
        onNavigate(0);
    };

    return (
        <div id="contact" className="w-screen h-screen flex items-center justify-center bg-black text-white px-8 overflow-y-auto py-20">
            <div className="max-w-6xl w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl md:text-8xl font-light mb-16 tracking-tight"
                >
                    CONTACT
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div><Input placeholder="Name" /></div>
                            <div><Input type="email" placeholder="Email" /></div>
                            <div><Textarea placeholder="Message" rows={6} /></div>
                            <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-light text-xl mb-1">Email</h3>
                                <p className="text-gray-400">gumming4u@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-light text-xl mb-2">Managing Director (Aryaan Alam)</h3>
                                <p className="text-gray-400">+91 95510 77771</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-light text-xl mb-2">Marketing Director (Isaac Vivian)</h3>
                                <p className="text-gray-400">+91 86670 31931</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- 3D COMPONENTS ---

const CameraController = () => {
    const scroll = useScroll();
    const { camera } = useThree();

    useFrame(() => {
        const offset = scroll.offset;
        const targetZ = 5 - (offset * MAX_Z_DISTANCE);
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, 0.1);
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.1);
        camera.rotation.z = Math.sin(offset * Math.PI * 4) * 0.01;
        camera.rotation.x = Math.sin(offset * Math.PI) * 0.005;
        camera.lookAt(0, 0, camera.position.z - 15);
    });

    return null;
};

const Camera3DModel = () => {
    const cameraBodyRef = useRef<THREE.Group>(null);
    const lensRef = useRef<THREE.Mesh>(null);
    const scroll = useScroll();

    useFrame(() => {
        const offset = scroll.offset;
        const scrollSpeed = offset * 4;

        if (cameraBodyRef.current) {
            cameraBodyRef.current.position.z = 5 - Math.min(scrollSpeed * 5, 20);
            cameraBodyRef.current.position.y = 2;
            cameraBodyRef.current.position.x = -6;

            const opacity = Math.max(0, 1 - scrollSpeed * 2);
            cameraBodyRef.current.traverse((object) => {
                if (object instanceof THREE.Mesh && object.material instanceof THREE.MeshStandardMaterial) {
                    object.material.opacity = opacity;
                    object.material.transparent = true;
                }
            });
        }

        if (lensRef.current) {
            lensRef.current.rotation.z = Math.min(scrollSpeed, 1) * Math.PI * 8;
        }
    });

    return (
        <group ref={cameraBodyRef} name="DSLR_MODEL">
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 1.5, 1]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>

            <mesh ref={lensRef} position={[0, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.6, 1.2, 32]} />
                <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
            </mesh>

            <mesh position={[0, 0, -2.3]}>
                <circleGeometry args={[0.45, 32]} />
                <meshStandardMaterial color="#0a0a0a" metalness={1} roughness={0} emissive="#1a4d7a" emissiveIntensity={0.3} />
            </mesh>

            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                return (
                    <mesh key={`aperture-${i}`} position={[Math.cos(angle) * 0.3, Math.sin(angle) * 0.3, -2.2]} rotation={[0, 0, angle]}>
                        <boxGeometry args={[0.02, 0.3, 0.05]} />
                        <meshStandardMaterial color="#666666" metalness={0.8} />
                    </mesh>
                );
            })}
        </group>
    );
};

const DepthMarkers = () => {
    const ringRefs = useRef<THREE.Mesh[]>([]);
    const depths = [-25, -70, -120, -170, -220, -260, -300];

    useFrame(() => {
        ringRefs.current.forEach((ring, i) => {
            if (ring) {
                ring.rotation.z += 0.002 * (i + 1);
            }
        });
    });

    return (
        <>
            <spotLight position={[5, 10, 5]} intensity={1} angle={0.4} penumbra={0.5} color="#ffffff" />
            <spotLight position={[-5, 10, 5]} intensity={0.8} angle={0.4} penumbra={0.5} color="#aaafff" />

            {depths.map((z, index) => (
                <group key={`lens-${z}`} position={[0, 0, z]}>
                    <mesh
                        ref={(el) => {
                            if (el) ringRefs.current[index] = el;
                        }}
                    >
                        <torusGeometry args={[12, 0.1, 16, 100]} />
                        <meshStandardMaterial
                            color={index % 2 === 0 ? '#ffffff' : '#0a0a0a'}
                            metalness={0.8}
                            roughness={0.2}
                            emissive={index % 2 === 0 ? '#ffffff' : '#000000'}
                            emissiveIntensity={0.1}
                        />
                    </mesh>
                    <mesh position={[10, -5, 0]} rotation={[0, 0, 0]}>
                        <boxGeometry args={[1, 15, 1]} />
                        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
                    </mesh>
                </group>
            ))}
        </>
    );
};

interface Scene3DContentProps {
    onNavigate: (sectionIndex: number) => void;
}

const Scene3DContent: React.FC<Scene3DContentProps> = ({ onNavigate }) => {
    const scaleFactor = 0.8;

    return (
        <>
            <DepthMarkers />

            {Z_POSITIONS_MAP.map((pos, index) => {
                let Component;
                switch (pos.name) {
                    case 'Home': Component = HeroSection; break;
                    case 'About': Component = AboutSection; break;
                    case 'Solutions': Component = SolutionsSection; break;
                    case 'Projects': Component = ProjectsSection; break;
                    case 'Contact': Component = ContactSection; break;
                    default: return null;
                }

                return (
                    <Html
                        key={pos.name}
                        position={[0, 0, pos.z]}
                        transform
                        occlude
                        zIndexRange={[100, 0]}
                        style={{
                            width: '100vw',
                            height: '100vh',
                            pointerEvents: 'auto',
                            transform: `scale(${scaleFactor})`
                        }}
                    >
                        <Component onNavigate={onNavigate} />
                    </Html>
                );
            })}
        </>
    );
};

const Scene3D: React.FC<Scene3DContentProps> = ({ onNavigate }) => {
    return (
        <div className="fixed inset-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    outputColorSpace: THREE.SRGBColorSpace
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={['#000000']} />

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <spotLight position={[0, 20, 0]} intensity={1.5} angle={0.3} penumbra={1} />

                <ScrollControls pages={26} damping={0.08}>
                    <CameraController />
                    <Camera3DModel />
                    <Scene3DContent onNavigate={onNavigate} />
                </ScrollControls>

                <fog attach="fog" args={['#000000', 5, 240]} />
            </Canvas>
        </div>
    );
};

// --- APP ROOT ---

const App = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const handleNavigate = useCallback((sectionIndex: number) => {
        const targetSectionIndex = Math.min(sectionIndex, SECTIONS.length - 1);
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        const targetFraction = SECTION_SCROLL_HEIGHTS[targetSectionIndex] / (NUM_PAGES - 1);
        const targetScroll = targetFraction * scrollHeight;

        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        setCurrentSection(targetSectionIndex);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const scrollProgress = scrollPosition / scrollHeight;

            let closestIndex = 0;
            let minDiff = Infinity;

            SECTION_SCROLL_HEIGHTS.forEach((anchorFraction, index) => {
                const normalizedAnchor = anchorFraction / (NUM_PAGES - 1);
                const diff = Math.abs(scrollProgress - normalizedAnchor);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = index;
                }
            });

            setCurrentSection(closestIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleNavigate]);

    return (
        <>
            <GlobalStyles />
            <Initializer>
                <Scene3D onNavigate={handleNavigate} />
            </Initializer>
            <Toaster />

            {/* Floating Menu */}
            <div className="fixed top-1/2 -translate-y-1/2 left-8 z-50 space-y-4 hidden md:block">
                {SECTIONS.map((section, index) => (
                    <button
                        key={section}
                        onClick={() => handleNavigate(index)}
                        className={`block w-2 h-2 rounded-full transition-all duration-300 nav-dot ${currentSection === index
                                ? 'bg-white scale-150 active'
                                : 'bg-gray-500 hover:bg-white'
                            }`}
                        title={section}
                    />
                ))}
            </div>

            {/* Scroll Hint */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-white/60 text-sm uppercase tracking-wider animate-pulse">
                Scroll to Explore
            </div>

            {/* Creates the initial blank space for scroll to function */}
            <div style={{ height: `${NUM_PAGES * 100}vh`, pointerEvents: 'none' }} />
        </>
    );
};

export default App;