import React from 'react'
import w1 from '../assets/work/web1.jpg'
import img2 from '../assets/work/mp1.jpg'
import img3 from '../assets/work/image3.jpg'
import img4 from '../assets/work/image7.jpg'
import img5 from '../assets/work/image5.jpg'
import img6 from '../assets/work/image7.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: w1,
            webLink: "https://gvpw1.netlify.app/",
            gitLink: "https://github.com/gavanescu23/basic-website/tree/main"
        },
        {
            id: 2,
            src: img2,
            webLink: "https://gvlp1.netlify.app/",
            gitLink: "https://github.com/gavanescu23/music-player-tailwind"
        },
        {
            id: 3,
            src: img3,
            webLink: img3,
            gitLink: img3
        },
        {
            id: 4,
            src: img4,
            webLink: img4,
            gitLink: img4
        },
        {
            id: 5,
            src: img5,
            webLink: img5,
            gitLink: img5
        },
        {
            id: 6,
            src: img6,
            webLink: img6,
            gitLink: img6
        },

    ]

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
        <div name="portfolio" className='text-white w-full md:h-screen'>
            <div className="max-w-screen-lg flex flex-col mx-auto w-full justify-center p-4 ">
                <div className="pb-8 mt-20">
                    <p className='text-gray-500 inline font-bold font-bodyfont text-4xl border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 text-gray-500 font-bodyfont'>Check out some cool images and some projects.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, webLink, gitLink }) => (
                        <div key={id} className="shadow-md shadow-gray-700 rounded-lg flex justify-center flex-col">
                            <img className='rounded-md duration-200 hover:scale-105 h-[100%] object-cover' src={src} alt="" />
                            <div className='flex justify-center items-center'>
                                <button onClick={() => openInNewTab(`${webLink}`)} className='w-1/2 px-6 py-3 duration-200 hover:scale-105 hover:text-gray-300 font-bodyfont text-gray-500' type='button'>Demo</button>
                                <button onClick={() => openInNewTab(`${gitLink}`)} className='w-1/2 px-6 py-3 duration-200 hover:scale-105 hover:text-gray-300 font-bodyfont text-gray-500'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Portfolio