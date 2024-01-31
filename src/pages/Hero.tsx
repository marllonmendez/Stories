import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/Button'

import Photo from '@/assets/photo.png'

function Hero() {
  return (
    <section className="w-full h-[704px] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center md:px-14 lg:px-36 pt-7">
      <div className="flex flex-col items-center md:flex-row text-center md:text-left">
        <div className="md:pr-8 mb-8 md:mb-0">
          <h1 className="text-font-title-hero font-bold text-primary-purple mb-4">
            Um mundo de memórias à sua espera.
          </h1>
          <p className="text-font-description-hero font-extralight mb-8">
            Na vida eu sou a nostalgia que perdura, a essência de um momento, a
            memória de uma recordação entre as estrelas.
          </p>
          <Button
            name="Sing up"
            style="p-2 mb-8 px-6 py-3 w-[50%] text-xl font-bold rounded-full
              border-2 border-primary-purple bg-primary-purple text-white shadow-2xl
              text-black hover:bg-primary-purple hover:border-primary-purple
              transition ease-in delay-150 duration-300"
          />
        </div>
        <div className="flex items-center hover:translate-y-4 hover:-translate-y-4 transition-transform ease-in-out">
          <img
            src={Photo}
            alt="Polaroid"
            className="md:w-[1000px] mx-auto mb-4 md:mb-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-sm">Deslize para navegar</p>
        <ChevronDown className="animate-bounce" />
      </div>
    </section>
  )
}

export default Hero
