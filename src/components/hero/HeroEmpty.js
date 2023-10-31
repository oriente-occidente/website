function HeroEmpty({ data }) {
  const { titleHero, descriptionHero } = data;
  return (
    <header className="overflow-hidden border-t border-gray py-5 md:border-t-0 md:border-b">
      <div className="container">
        <h1 className="title">{titleHero}</h1>
        <h2 className="text-black-light md:mt-1 md:text-sm">{descriptionHero}</h2>
      </div>
    </header>
  );
}

export default HeroEmpty;