const BlockQuote = ({ node, children }) => {
  return (
    <div className="border-black border-l-2 max-w-7xl my-2 lg:my-10 2xl:my-16 px-4 sm:px-6 lg:px-8 ">
      <div className="mt-1 text-xl font-light text-secondary lg:text-3xl">
        <i>{children}</i>
      </div>
      {node.attribution && (
        <div className="max-w-xl mt-5 text-xs">{`- ${node.attribution}`}</div>
      )}
    </div>
  );
};

export default BlockQuote;
