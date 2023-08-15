import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-gray-500 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-0 mt-20 md:mt-0 md:pb-8">
                <p className='text-4xl border-b-4 font-bodyfont inline font-bold border-gray-500'>About</p>
            </div>
            <p className='text-xl font-bodyfont mt-20'>
                Most days I find myself doing research on the latest technologies and constantly trying to improve my skills and knowledge by working on different projects by usually finding Figma designs and trying to replicate them or using some elements in the designs I come up with.
            </p>
            <br />
            <p className='text-xl font-bodyfont'>
            I consider that I have a keen eye for minimalist and simple but impactful designs, but I also lean towards futuristic and complex designs. Having photography as a hobby helps me align most elements easier thanks to the grid lines from the camera which make me align objects with the lines such that the image looks more pleasing.
            </p>
        </div>
    </div>
  )
}

export default About