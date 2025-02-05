import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Landing = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
            }`}>
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className='flex justify-between items-center'>
                        <span className="text-xl font-bold">Matt Parvaneh</span>
                        <div className="flex gap-8">
                            <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
                            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
                            <a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a>
                            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero section with gradient */}
            <section className="h-screen relative overflow-hidden">
                <div className="absolute inset-0"
                  style={{
                    background: `
                        radial-gradient(circle at 50% 50%, rgba(128, 101, 209, 0.3) 0%, transparent 70%),
                        radial-gradient(circle at 2% 35%, rgba(41, 98, 255, 0.4) 0%, transparent 45%),
                        radial-gradient(circle at 98% 65%, rgba(41, 98, 255, 0.3) 0%, transparent 40%),
                        radial-gradient(circle at 30% 40%, rgba(128, 101, 209, 0.8) 0%, transparent 45%),
                        radial-gradient(circle at 70% 60%, rgba(128, 101, 209, 0.7) 0%, transparent 40%),
                        radial-gradient(circle at 20% 20%, rgba(128, 101, 209, 0.8) 0%, transparent 35%),
                        radial-gradient(circle at 80% 80%, rgba(128, 101, 209, 0.7) 0%, transparent 45%),
                        radial-gradient(circle at 45% 65%, rgba(128, 101, 209, 0.6) 0%, transparent 40%),
                        radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.4) 0%, transparent 25%),
                        radial-gradient(circle at 15% 85%, rgba(255, 255, 255, 0.35) 0%, transparent 25%),
                        radial-gradient(circle at 0% 50%, rgba(41, 98, 255, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 100% 50%, rgba(41, 98, 255, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 50% 0%, rgba(128, 101, 209, 0.4) 0%, transparent 50%),
                        radial-gradient(circle at 50% 100%, rgba(41, 98, 255, 0.25) 0%, transparent 50%),
                        radial-gradient(circle at 5% 95%, rgba(41, 98, 255, 0.2) 0%, transparent 35%),
                        radial-gradient(circle at 95% 5%, rgba(41, 98, 255, 0.2) 0%, transparent 40%)
                        `,
                        backgroundColor: '#8065d1',
                        filter: 'contrast(1.2) brightness(1.05) saturate(1.1)',
                        mixBlendMode: 'normal',
                    }}>
                    <div className="absolute inset-0 opacity-70"
                        style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'overlay',
                        }}
                    />
                    <div className="absolute inset-0 opacity-40"
                        style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'soft-light',
                        }}
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-6">Hi, I'm Matt!</h1>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Software Engineer (among many other things...)
                        </p>
                        {/* TODO: Continue onwards with div from here */}
                    </div>

                </div>
            </section>

        </div>
    )
}