const BlockQuote = ({ node, children }) => {
  return (
    <div className="my-2 max-w-7xl border-l-2 border-black px-4 sm:px-6 lg:my-10 lg:px-8 2xl:my-16 ">
      <div className="text-secondary mt-1 text-xl font-light lg:text-3xl">
        <i>{children}</i>
      </div>
      {node.attribution && (
        <div className="mt-5 max-w-xl text-xs">{`- ${node.attribution}`}</div>
      )}
    </div>
  );
};

export default BlockQuote;
