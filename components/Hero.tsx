import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="border-2 border-red-500 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row align-middle justify-center">
          {/*LEFT*/}
            <div className="border-2 border-green-500 relative z-20 flex flex-1 flex-col xl:w-1/2">
              <p className="text-gray-20">Introducing the</p>
              <h1 className="bold-52 lg:bold-88">Computer Science Society</h1>
              <p className="text-white">Are you passionate about the world of computers and technology? Join the IBA Computer Science Society, where we're dedicated to fostering growth and innovation in the field. Through exciting competitions, hackathons, workshops, and guest speaker sessions, we provide a platform for students to explore the latest trends, develop their skills, and connect with like-minded individuals.</p>
            </div>

          {/*RIGHT*/}
            <div className="border-2 border-blue-500 flex relative lg:w-[30%] items-start align-middle justify-center xs:self-center xs:w-auto">
              <Image src="/css_transparent.png" alt="Logo" width={500} height={500} className="h-auto"/>
            </div>
        </div>
    </section>
  )
}

export default Hero