import Image from 'next/image'
import Link from 'next/link'
import { WorkSans, PlayfairDisplay } from './fonts'

export default function Home() {
  return (
    <section className={`${WorkSans.className} relative xxs:pt-[90px] md:pt-[120px]`}>
      <div className='MainBG absolute z-[-1] w-full h-full'>
        <Image
          src="/home/mainBG.png"
          fill
          alt="chevron-right'"
        />
        <Image
          className='absolute top-[30%] right-[-73px]'
          src="/home/Ellipse1.svg"
          width="147" height="147"
          alt="chevron-right'"
        />
        <Image
          className='absolute top-[-2%] left-[-15px]'
          src="/home/Ellipse2.svg"
          width="84" height="145"
          alt="chevron-right'"
        />
        <Image
          className='absolute top-[5%] right-[40px]'
          src="/home/Ellipse3.svg"
          width="98" height="98"
          alt="chevron-right'"
        />
      </div>

      <div className=' flex xxs:px-7 xxs:py-[108px] md:px-15 gap-y-16'>

        <div className='mainTitle xxs:w-full sm:max-w-[320px] mdl:max-w-[531px] flex flex-col gap-y-8'>

          <div className={`${PlayfairDisplay.className} Text flex flex-col xxs:gap-y-8 `}>
            <h1 className='xxs:text-4xl xls:text-[40px] xls:leading-[120%] xxs:tracking-tight md:text-5xl md:leading-[112.5%] mdl:text-[64px] mdl:leading-[112.5%] mdl:tracking-normal text-darkcoldgreen'>Welcome to Serene Sip Café</h1>
            <p className='xxs:text-3xl xls:text-[32px] xls:leading-[125%] tracking-[-0.84px] text-grey-3'>Indulge in a Botanical Oasis of Coffee and Desserts</p>
          </div>

          <div className='buttons flex flex-col gap-y-6 xxs:max-w-[306px]'>
            <Link href="/" >
              <div className='flex flex-row justify-between items-center w-full rounded-lg px-6 py-2 bg-green hover:bg-darkgreen hover:text-white'>
                <p className='text-base tracking-tight '>Explore Our Shop</p>
                <Image
                  src="/home/chevron-right.svg"
                  width={14}
                  height={14}
                  alt="chevron-right'"
                />
              </div>
            </Link>
            <Link href="/" className=''>
              <div className='flex flex-row justify-between items-center w-full rounded-lg px-6 py-2 border border-green hover:bg-light'>
                <p className='text-base tracking-tight '>Discover Our Locations</p>
                <Image
                  src="/home/chevron-right.svg"
                  width={14}
                  height={14}
                  alt="chevron-right'"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className='imagesComposition absolute bottom-[-20px] right-0 xxs:hidden md:block '>
          <div className="relative md:right-[-20%] z-[-1] md:w-[674px] lg:w-[804px] md:h-[404px] lg:h-[504px]">
            <Image
              className='absolute '
              src="/home/tortas1.png"
              fill
              alt="cake"
            />
            <div className="absolute -rotate-[1deg] md:top-[-50%] md:right-[80%] z-[-1] md:w-[600px] md:h-[979px] xxs:hidden xl:block">

              <Image
                className='absolute '
                src="/home/leavesLEFT.png"
                fill
                alt="leaves-left"
              />
            </div>
            <div className="absolute rotate-[6deg] md:top-[-45%] md:right-[20%] z-[0] md:w-[556px] md:h-[908px] xxs:hidden md:block">

              <Image
                className='absolute '
                src="/home/leavesRIGHT.png"
                fill
                alt="leaves-right"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
