import Link from 'next/link';

function StandardCard({ slides }) {
  return (
    <>
      <Link href={slug}>
        <a title={titleHero}>
          <div className="flex space-x-4 absolute z-20 left-4 md:left-8 md:bottom-8 top-48 md:top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
            <span>{categoryTitle}</span>
            <span className="normal-case font-light">{dateEvent}</span>
          </div>
          <DatoImage className="" data={responsiveImage} alt={alt} title={title} />
            <div class="absolute top-40 md:top-auto h-[65px] md:h-48 md:bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent"></div>
            <div class="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent"></div>
          <h2 className="text-sm z-20 md:text-lg uppercase text-black md:text-white font-semibold mt-2 md:absolute md:top-6 md:left-8 ">
            {titleHero}
          </h2>
          <h3 className="text-xxs md:hidden">{dateEvent}</h3>
        </a>
      </Link>
    </>
  )
}

export default StandardCard;
