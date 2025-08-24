import React from 'react';
import StreamStatus from '@components/status';

export const metadata = {
    site_name: 'Chef - LeBlack',
    title: 'Chef - LeBlack',
    description: "Chef - LeBlack's personal linktree",
    type: 'website',
    openGraph: {
        site_name: 'Chef - LeBlack',
        title: 'Chef - LeBlack',
        description: "Chef - LeBlack's personal linktree",
        type: 'website',
        url: 'https://chef-linktree.vercel.app/',
        locale: 'en_US',
        image: '/images/favicon/favicon-32x32.png',
        image_Alt: 'Chef - LeBlack',
        image_Width: 1200,
        image_Height: 1200,
    },
};

const links = [
    {
        name: 'Twitch Live',
        url: 'https://twitch.tv/leblackkkk',
        description: 'Watch me stream live on Twitch',
        colors: 'bg-[#6441a5] hover:bg-[#7b59c2] border-2 border-[#7b59c2]',
        icon: 'fa-brands fa-twitch',
    },
    {
        name: 'Discord',
        url: 'https://discord.gg/exrQTkKM9k',
        description: 'Join my Discord server',
        colors: 'bg-[#5865F2] hover:bg-[#4752C4]',
        icon: 'fa-brands fa-discord',
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/phaidon.black',
        description: 'Follow me on Instagram',
        colors: 'bg-gradient-to-r from-[#ff0050] to-[#00f2ea] hover:from-[#e6004a] hover:to-[#00ddd4] text-white',
        icon: 'fa-brands fa-instagram',
    },
    /*{
        name: 'Twitter / X',
        url: 'https://twitter.com/',
        description: 'Follow me on Twitter / X',
        colors: 'bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white',
        icon: 'fa-brands fa-twitter',
    },*/
    {
        name: 'Donations',
        url: 'https://streamlabs.com/leblackkkk/tip',
        description: 'Support me with a coffee',
        colors: 'bg-[#344454] hover:bg-[#485E74] text-black',
        icon: 'fa-solid fa-mug-hot text-white',
    },
    {
        name: 'Zero Tenacity',
        url: 'https://zerotenacity.com',
        description: 'Check out this esports team',
        colors: 'bg-[#fc1c49] hover:bg-[#E20330] text-white',
        icon: 'fa-solid fa-headset',
    }
];

const Home = () => {
    return (
        <div className='min-h-screen bg-[#0a0a0a] text-[#ededed] flex items-start justify-center p-4 pt-20'>
            <div className='w-full max-w-md mx-auto'>
                <div className='text-center mb-8'>
                    <button className='relative w-24 h-24 mx-auto mb-4 group cursor-pointer' onClick={() => window.location.href = 'https://twitch.tv/leblackkkk'}>
                        <div className='absolute -inset-1 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full animate-pulse opacity-50'></div>
                        <div className='absolute -inset-1 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full animate-ping opacity-20'></div>
                        <div className='relative w-24 h-24 mx-auto bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full'>
                            <img src="/images/chef.png" alt="Chef avatar" className='w-full h-full rounded-full object-cover bg-[#1e1e1e]' />
                        </div>
                        <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white text-xs px-2 py-0.5 rounded-sm font-semibold z-30 flex items-center gap-1'>
                            <i className="fa-solid fa-circle-play text-[10px]"></i>
                            <StreamStatus />
                        </div>
                    </button>
                    <h1>Chef - LeBlack</h1>
                </div>

                <div className='space-y-4'>
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target='_blank' rel='noopener noreferrer' className={`w-full h-14 ${link.colors} rounded-lg flex items-center justify-between px-4 transition-colors duration-200`}>
                            <div className='flex items-center gap-3'>
                                <i className={`${link.icon}`}></i>
                                <div className='text-white'>
                                    <div className='font-semibold'>{link.name}</div>
                                    <div className='text-sm opacity-90'>{link.description}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className='text-center mt-8 bottom-0'>
                    <p className='text-sm text-[#a3a3a3]'>&#169; 2025 Chef - Leblack. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Home