import { Image } from 'react-datocms';
function Gallery({ images }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      {images.map((i) => (
        <div
          key={i.id}
          className="col-span-1 flex justify-center py-2 px-2 bg-gray-50"
        >
          <Image data={i.responsiveImage} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
