const BlockQuote = ({ node, children }) => {
  return (
    <div className="border-purple-500 border-l-4 max-w-7xl my-16 px-4  sm:my-20 sm:px-6 lg:px-8 ">
      <div className=" mt-1 text-xl font-light text-secondary sm:text-2xl sm:tracking-tight lg:text-3xl">
        <i>{children}</i>
      </div>
      {node.attribution && (
        <div className="max-w-xl mt-5  text-xl text-gray-500">{`- ${node.attribution}`}</div>
      )}
    </div>
  );
};

export default BlockQuote;
