import React, { useEffect } from 'react';

interface AdBannerProps {
    dataAdClient: string;
    dataAdSlot: string;
    dataAdFormat?: string;
    dataFullWidthResponsive?: boolean;
    className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
    dataAdClient,
    dataAdSlot,
    dataAdFormat = 'auto',
    dataFullWidthResponsive = true,
    className = ''
}) => {
    useEffect(() => {
        try {
            // Push to adsbygoogle array to initialize the ad
            if (typeof window !== 'undefined' && window.adsbygoogle) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []); // Empty dependency array ensures it runs once on mount

    return (
        <div className={`ad-container my-8 overflow-hidden flex justify-center ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={dataAdClient}
                data-ad-slot={dataAdSlot}
                data-ad-format={dataAdFormat}
                data-full-width-responsive={dataFullWidthResponsive.toString()}
            />
        </div>
    );
};

export default AdBanner;
