import React, { useEffect, useCallback, useState } from 'react';

interface Certificate {
    src: string;
    title: string;
    orientation: 'portrait' | 'landscape';
}

const certificates: Certificate[] = [
    { src: '/certificates/azure-a4.png', title: 'Microsoft Azure Certification', orientation: 'landscape' },
    { src: '/certificates/google-a4.png', title: 'Google Certification', orientation: 'landscape' },
    { src: '/certificates/psu.png', title: 'PSU Certification', orientation: 'portrait' },
];

const Certificates: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const closeModal = useCallback(() => {
        setSelectedCert(null);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        if (selectedCert) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedCert, closeModal]);

    if (certificates.length === 0) return null;

    return (
        <>
            <div className="px-[30px] mt-12 mb-14">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-bold mb-6 text-[#333]">
                        Certifications
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <button
                                key={index}
                                className={`cert-card ${cert.orientation}`}
                                onClick={() => setSelectedCert(cert)}
                                aria-label={`View certificate: ${cert.title}`}
                            >
                                <img
                                    src={cert.src}
                                    alt={cert.title}
                                    className="cert-card-img"
                                    loading="lazy"
                                />
                                <div className="cert-card-overlay">
                                    <span className="cert-card-title">{cert.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <div
                    className="cert-modal-overlay"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedCert.title}
                >
                    <div
                        className="cert-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="cert-modal-close"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <img
                            src={selectedCert.src}
                            alt={selectedCert.title}
                            className="cert-modal-img"
                        />
                        <p className="cert-modal-title">{selectedCert.title}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Certificates;
