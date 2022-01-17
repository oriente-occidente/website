import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import t from 'lib/locales';
import { formatDate } from 'lib/utils';

export default function RegistrationForm({ locale, paymentSettings, title }) {
  const [booked, setBooked] = useState(null);

  // const schema = yup.object().shape({
  //   'form-name': yup.string(),
  //   language: yup.string(),
  //   level: yup.string().required('plase choose one option'),
  //   firstName: yup.string().required('please provide your first name'),
  //   lastName: yup.string().required('please provide your last name'),
  //   email: yup.string().email().required('email is required'),
  //   address: yup.string().required('please fill with your address'),
  //   city: yup.string().required('please indicate your city'),
  //   stateCode: yup.string().required('èlease provide a state code'),
  //   zipCode: yup.string().required('please provide a zip code'),
  //   phone: yup.string().required('Please add your phone number'),
  //   notes: yup.string(),
  //   privacy: yup.boolean().oneOf([true], 'Should accept privacy policy'),
  // });

  const fields = [
    {
      name: 'title',
      type: 'hidden',
      defaultValue: title,
    },
    {
      name: 'language',
      type: 'hidden',
      defaultValue: locale,
    },
    {
      name: 'level',
      label: 'level',
      type: 'select',
      options: paymentSettings.map((p) => {
        return { label: p.description, value: p.id };
      }),
    },
    {
      name: 'firstName',
      label: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      label: 'lastName',
      type: 'text',
    },
    {
      name: 'email',
      label: 'email',
      type: 'email',
    },
    {
      name: 'address',
      label: 'address',
      type: 'text',
    },
    {
      name: 'city',
      label: 'city',
      type: 'text',
    },
    {
      name: 'stateCode',
      label: 'stateCode',
      type: 'text',
    },
    {
      name: 'zipCode',
      label: 'zipCode',
      type: 'text',
    },
    {
      name: 'phone',
      label: 'phone',
      type: 'text',
    },
    {
      name: 'notes',
      label: 'notes',
      type: 'textarea',
    },
    {
      name: 'privacy',
      label: 'privacyAgreement',
      type: 'checkbox',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  // Handles the post process to Netlify so we can access their serverless functions
  const handlePost = (formData, event) => {
    console.log('formData', formData);

    const choosen = paymentSettings.find((p) => p.id === formData.level);
    const choiche = choosen?.description;
    console.log('choiche', choiche);

    fetch(`/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ ...formData, choiche }),
    })
      .then((response) => {
        console.log('SUCCESS', response);
        console.log('body', response.body);
        setBooked(choosen);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <ul>
        {!booked &&
          paymentSettings.map((p) => {
            return (
              <li key={p.id}>
                <span>{p.description}</span>
                <span>, PRICE: {p.amount} €</span>
                <span>
                  , DATES: {p.startDate ? formatDate(p.startDate, locale) : ''}{' '}
                  - {p.endDate ? formatDate(p.endDate, locale) : ''}
                </span>
              </li>
            );
          })}
      </ul>
      {booked && (
        <div>
          <h3 className="text-lg font-semibold">
            Richiesta inviata corretamente
          </h3>
          <div>Il costo dell'evento è di {booked.amount}€</div>
          <div>
            Qui puoi aquistare il tuo biglietto:
            <a href={booked.paymentLink} target="_blank" rel="noopener">
              {booked.paymentLink}
            </a>
          </div>
        </div>
      )}
      {!booked && (
        <div>
          <div className="mt-10">REGISTER NOW</div>
          <form
            onSubmit={handleSubmit(handlePost)}
            name="registration"
            method="POST"
            data-netlify={true}
            netlify={true}
            action="/thankyou"
          >
            <input type="hidden" name="form-name" value="registration" />
            {fields
              .filter((f) => f.type === 'hidden')
              .map((field) => {
                return (
                  <input
                    key={field.name}
                    type="hidden"
                    name={field.name}
                    value={field.defaultValue || ''}
                    {...register(field.name)}
                  />
                );
              })}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {fields
                .filter((f) => f.type !== 'hidden')
                .map((field) => {
                  const { name, label, type, options } = field;
                  return (
                    <div key={`${name}`} className="border border-gray-100">
                      {label && !['checkbox'].includes(type) && (
                        <div className="pt-2 px-1">
                          <label htmlFor={name}>{t(label, locale)}</label>
                        </div>
                      )}
                      <div className="py-2 px-1">
                        {type === 'select' && (
                          <select
                            className="min-w-full rounded text-gray-700"
                            name={name}
                            {...register(name)}
                          >
                            <option value="">select a value</option>
                            {options.map((o) => (
                              <option value={o.value} key={o.value}>
                                {o.label}
                              </option>
                            ))}
                          </select>
                        )}

                        {type === 'checkbox' && (
                          <div>
                            <input
                              className="rounded text-gray-700 mr-4"
                              type={type}
                              {...register(name)}
                            />
                            {label && (
                              <label
                                className="px-2"
                                htmlFor={name}
                                dangerouslySetInnerHTML={{ __html: label }}
                              />
                            )}
                          </div>
                        )}

                        {type === 'textarea' && (
                          <textarea
                            className="min-w-full rounded text-gray-700"
                            rows={4}
                            type={type}
                            maxLength="500"
                            {...register(name)}
                          />
                        )}

                        {!['select', 'checkbox', 'textarea'].includes(type) && (
                          <input
                            className="min-w-full rounded text-gray-700"
                            type={type}
                            maxLength="250"
                            {...register(name)}
                          />
                        )}
                      </div>

                      {errors[name] && (
                        <div className="py-1 px-2 text-red-500 font-normal text-xxs ">
                          {errors[name].message}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <input
              className="mt-10 min-w-full bg-white text-gray-700 font-semibold hover:text-black py-2 px-4 border border-gray-700 hover:border-black"
              type="submit"
              value="Invia"
            />
          </form>
        </div>
      )}
    </div>
  );
}
