import translate from 'lib/locales';

export default function Newsletter({ locale }) {
  return (
    <div className="bg-gray-light py-8 md:py-12">
      <div className="container lg:max-w-screen-lg xl:max-w-screen-xl lg:px-10">
        <h2 className="title--small">
          Newsletter
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="mt-4 mb-6 text-xs">
            [placeholder]
          </div>
          <div className="relative">
            <label className="sr-only" for="email">Enter your email: </label>
            <input className="form__input" placeholder={`${translate('email', locale)}`} type="email" id="email" name="email" />
            <button className="absolute top-4 right-4 w-6 h-6 bg-arrow-small-right block"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
