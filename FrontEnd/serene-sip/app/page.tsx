import Image from 'next/image'
import Link from 'next/link'
import { WorkSans, PlayfairDisplay } from './fonts'
import { ProductCatalog } from '@/components/ProductCatalog/ProductCatalog'
import { ArticleBlock } from '@/components/InformationComponent/ArticleBlock'

export default function Home() {
  return (
    <>
      <section className={`${WorkSans.className} overflow-hidden relative xxs:pt-[90px] md:pt-[120px]`}>
        <div className='MainBG  absolute z-[-1] w-full h-full'>
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

        <div className=' flex xxs:px-7 xxs:py-[108px] mdl:px-15 gap-y-16'>

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

      <section className={`${WorkSans.className} relative bg-lightest grid xxs:px-7 mdl:px-15 mdl:grid-rows-2 mdl:grid-cols-1`}>
        <div className='row-span-2 grid  grid-rows-1 xxs:grid-cols-1 mdl:grid-cols-[386px_minmax(0,1fr)] xl:grid-cols-[676px_minmax(0,1fr)] gap-x-16' >
          <div className='relative xxs:-ml-[60px] xxs:mr-[-60px] mdl:mr-0 h-[400px]'>
            <Image
              className='absolute object-cover'
              src='/home/SectionFeature/tranquilityImage.png'
              fill
              alt='interior example'
            ></Image>
          </div>
          <div className='flex flex-col gap-y-8 py-14'>
            <h2 className={`${PlayfairDisplay.className} font-semibold xxs:text-[40px] xxs:leading-[120%] xxs:tracking-[-1.2px]`}>Tranquility in Every Sip</h2>
            <div className='flex flex-col gap-y-2 xxs:tracking-[-1.2px]'>
              <p>
                At Serene Sip Café, we believe in the power of botanical
                elements to create a serene and enchanting atmosphere.
              </p>
              <p>
                Our café is a sanctuary of relaxation, carefully designed
                with lush greenery, comfortable seating, and soft natural
                lighting that invites you to immerse yourself in a peaceful haven.
              </p>
              <p>
                We curate a harmonious blend of botanical-infused coffee and
                exquisite desserts, meticulously crafted to awaken your
                senses and transport you to a world of tranquility.
              </p>
            </div>
          </div>
        </div>

        <div className='Features grid xxs:py-16 md:pb-10 xxs:gap-y-8 xxs:gap-x-8 xxs:grid-cols-1 xxs:grid-rows-4 xs:grid-rows-2 xs:grid-cols-2 mdl:grid-rows-1 mdl:grid-cols-4'>
          <div className='flex flex-col items-start gap-y-6'>
            <div className='relative w-6 h-6'>
              <Image
                className='absolute '
                src="/home/SectionFeature/coffee.svg"
                width={24}
                height={24}
                alt="icon coffee"
              />
            </div>
            <div className='flex flex-col items-start gap-y-4 w-full'>
              <h5 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-[-0.6px] text-dark`}>Artisanal Coffee Blends</h5>
              <p className='text-base font-normal tracking-[-0.48px] text-grey-3'>
                Indulge in our meticulously handcrafted coffee blends,
                infused with botanical flavors that ignite your taste buds.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-start gap-y-6'>
            <div className='relative w-6 h-6'>
              <Image
                className='absolute '
                src="/home/SectionFeature/dessert.svg"
                width={24}
                height={24}
                alt="icon dessert"
              />
            </div>
            <div className='flex flex-col items-start gap-y-4 w-full'>
              <h5 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-[-0.6px] text-dark`}>Exquisite Desserts</h5>
              <p className='text-base font-normal tracking-[-0.48px] text-grey-3'>
                Delight in our selection of artisanal desserts,
                inspired by nature's beauty and made with the finest ingredients.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-start gap-y-6'>
            <div className='relative w-6 h-6'>
              <Image
                className='absolute '
                src="/home/SectionFeature/psychiatry.svg"
                width={24}
                height={24}
                alt="icon leaves"
              />
            </div>
            <div className='flex flex-col items-start gap-y-4 w-full'>
              <h5 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-[-0.6px] text-dark`}>Immerse Yourself in Nature</h5>
              <p className='text-base font-normal tracking-[-0.48px] text-grey-3'>
                Surround yourself with lush green plants and serene botanical
                elements, creating a calming and rejuvenating environment.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-start gap-y-6'>
            <div className='relative w-6 h-6'>
              <Image
                className='absolute '
                src="/home/SectionFeature/flower.svg"
                width={24}
                height={24}
                alt="icon flower"
              />
            </div>
            <div className='flex flex-col items-start gap-y-4 w-full'>
              <h5 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-[-0.6px] text-dark`}>Cozy and Tranquil Spaces</h5>
              <p className='text-base font-normal tracking-[-0.48px] text-grey-3'>
                Find your serene nook to work, read, or simply unwind,
                enjoying the serene ambiance we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-wrap flex-col justify-start  items-center gap-y-10 bg-white xxs:px-7 xxs:py-16 mdl:px-15 mdl:py-20'>
        <ProductCatalog catalogTitle='New Products'></ProductCatalog>
        <div className=' flex flex-grow basis-auto xxs:w-full xs:w-max  border border-green rounded-lg xxs:justify-between md:gap-x-2 px-4 py-2 '>
          <p className={`${WorkSans.className} text-dark tracking-[-0.48px]`}>
            See all products
          </p>
          <div className='relative w-6 h-6 '>
            <Image
              className='absolute object-cover'
              src='/home/chevron-right.svg'
              width={24}
              height={24}
              alt='icon chevron right'
            ></Image>
          </div>
        </div>
      </section>

      <ArticleBlock orderOfComponents="xxs:order-first mdl:order-last" imgHeightSize="xxs:h-[300px] xs:h-[380px] md:h-[520px] mdl:h-[460px] xl:h-[530px]" />
    </>
  )
}
