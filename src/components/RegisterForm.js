"use client";
import { formatDate } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Table from "@/components/Table";
import translate from "@/lib/locales";

export default function RegisterForm({ payload, thankyouMessage, locale }) {
  const [paymentId, setPaymentId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target?.value;
    if (!value) return;
    setPaymentId(value);
  };

  const choiche = paymentId
    ? payload.paymentSettings?.find((p) => p.id === paymentId)
    : null;

  const titles = ["", translate("dates", locale), translate("amount", locale)];
  const rows = payload?.paymentSettings?.map((p) => {
    const { description, startDate, endDate, amount } = p;
    const range = `${startDate ? formatDate(p.startDate, locale) : ""} - ${
      endDate ? formatDate(endDate, locale) : ""
    }`;
    const price = `${amount ? amount + " €" : ""}`;
    return [description, range, price];
  });

  const url = `${locale === "en" ? "/en" : ""}/forms/thankyou?id=${payload.id}${
    paymentId ? "&cp=" + paymentId : ""
  }`;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const registerForm = event.target;
      const formData = new FormData(registerForm);

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        router.push(url);
      } else {
        console.log("err", res);
      }
    } catch (e) {
      console.error("error: ", e);
      setErrorMessage(`Form error`);
    }
  };

  return (
    <div className="container mx-auto my-10 py-10">
      {payload && (
        <>
          <h3 className="h3">{payload?.title}</h3>
          <Table titles={titles} rows={rows} />
        </>
      )}
      <h1 className="h1 mt-10">{translate("registration_form", locale)}</h1>
      <div className={`mb-10 rounded-lg border p-4 `}>
        <form name="register_event" method="post" onSubmit={handleFormSubmit}>
          <input type="hidden" name="form-name" value="register_event" />
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="title" value={payload?.title} />
          <input type="hidden" name="level-name" value={choiche?.description} />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <div>
              <label htmlFor="level">
                {translate("level", locale)} <span aria-hidden="true">*</span>
              </label>
              <select
                id="level"
                className="min-w-full rounded text-gray-700"
                name="level"
                defaultValue=""
                required
                aria-required="true"
                onChange={(e) => handleChange(e)}
              >
                <option value="" disabled>{translate("selectValue", locale)}</option>
                {payload?.paymentSettings?.map((o) => (
                  <option value={o.id} key={o.id}>
                    {o.description}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="firstName">
                {translate("firstName", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="firstName"
                className="min-w-full rounded text-gray-700"
                name="firstName"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="lastName">
                {translate("lastName", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="lastName"
                className="min-w-full rounded text-gray-700"
                name="lastName"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email">
                {translate("email", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                className="min-w-full rounded text-gray-700"
                name="email"
                type="email"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="address">
                {translate("address", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="address"
                className="min-w-full rounded text-gray-700"
                name="address"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="city">
                {translate("city", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="city"
                className="min-w-full rounded text-gray-700"
                name="city"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="stateCode">
                {translate("stateCode", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="stateCode"
                className="min-w-full rounded text-gray-700"
                name="stateCode"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="zipCode">
                {translate("zipCode", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="zipCode"
                className="min-w-full rounded text-gray-700"
                name="zipCode"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone">
                {translate("phone", locale)} <span aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                className="min-w-full rounded text-gray-700"
                name="phone"
                type="text"
                maxLength="250"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="notes">{translate("notes", locale)}</label>
              <textarea
                id="notes"
                className="min-w-full rounded text-gray-700"
                rows={4}
                name="notes"
                maxLength="500"
              />
            </div>

            <div className="flex items-start">
              <input
                id="privacy"
                className="mr-4 mt-1 rounded text-gray-700"
                name="privacy"
                type="checkbox"
                required
                aria-required="true"
              />
              <label
                htmlFor="privacy"
                dangerouslySetInnerHTML={{
                  __html: `${thankyouMessage.textPrivacy} <span aria-hidden="true">*</span>`,
                }}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-10 min-w-full border border-gray-700 bg-white py-2 px-4 font-semibold text-gray-700 hover:border-black hover:text-black"
            >
              {translate("send", locale)}
            </button>
          </div>
        </form>
        {errorMessage && (
          <div role="alert" aria-live="polite" className="mt-4 text-red-600">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
