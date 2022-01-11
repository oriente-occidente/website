function HeroEmpty({ data }) {
  const { titleHero, descriptionHero } = data
  return (
    <header className="py-5 border-t md:border-none border-gray overflow-hidden">
      <div className="container">
        <h1 className="title">
          {titleHero}
        </h1>
        <h2 className="text-black-light md:mt-1 md:text-sm">
          {descriptionHero}
        </h2>
      </div>
    </header>
  )
}

export default HeroEmpty;
