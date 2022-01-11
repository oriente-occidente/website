import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  id: yup.string(),
  level: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  stateCode: yup.string().required(),
  zipCode: yup.string().required(),
  phone: yup.string().required(),
  notes: yup.string(),
  privacy: yup.boolean().required(),
});

const fields = [
  {
    name: 'language',
    label: 'language',
    type: 'hidden',
  },
  {
    name: 'level',
    label: 'level',
    type: 'select',
    values: [],
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
    type: 'text',
  },
  {
    name: 'privacy',
    label: 'privacyAgreement',
    type: 'checkbox',
  },
];
// const schema2 = yup
//   .object({
//     firstName: yup.string().required(),
//     age: yup.number().positive().integer().required(),
//   })
//   .required();

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const sendToNetlify = async (data) => {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data}),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const onSubmit = (data) => await sendToNetlify(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {fields.map((field) => {
          const { name, label, type, options = [] } = field;
          return (
            <div key={`${name}`}>
              {label && type !== 'checkbox' && (
                <label htmlFor={name}>{label}</label>
              )}

              {type === 'select' && (
                <select
                  className="form-control"
                  name={name}
                  {...register(name)}
                >
                  <option value="">select a value</option>
                  {options?.map((o) => (
                    <option value={o.value} key={o.label}>
                      {o.label}
                    </option>
                  ))}
                </select>
              )}

              {type === 'checkbox' && (
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type={type}
                      {...register(name)}
                    />
                    {label && (
                      <label
                        htmlFor={name}
                        dangerouslySetInnerHTML={{ __html: label }}
                      />
                    )}
                  </div>
                </div>
              )}

              {type === 'textarea' && (
                <textarea
                  rows={4}
                  type={type}
                  maxLength="500"
                  {...register(name)}
                />
              )}

              {type !== 'select' &&
                type !== 'checkbox' &&
                type !== 'textarea' && (
                  <input type={type} maxLength="250" {...register(name)} />
                )}

              {errors[name] && (
                <p className="form__error">{errors[name].message}</p>
              )}
            </div>
          );
        })}
      </div>

      <input type="submit" />
    </form>
  );
}
