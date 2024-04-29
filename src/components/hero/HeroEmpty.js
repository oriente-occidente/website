function HeroEmpty({ data, locale }) {
  const { titleHero, descriptionHero } = data;
  return (
    <header className="overflow-hidden border-t border-gray py-5 md:border-t-0 md:border-b">
      <div className="container">
        <h1 className="title">{titleHero}</h1>
        <p className="text-black-light md:mt-1 md:text-sm">
          {descriptionHero}
        </p>
      </div>
    </header>
  );
}

export default HeroEmpty;
