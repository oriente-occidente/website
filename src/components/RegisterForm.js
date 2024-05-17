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
    <div className="my-10 p-10">
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
              <label htmlFor={"level"}>{translate("level", locale)}</label>
              <select
                className="min-w-full rounded text-gray-700"
                name="level"
                // value={paymentId}
                defaultValue={""}
                required="required"
                onChange={(e) => handleChange(e)}
              >
                <option value="">select a value</option>
                {payload?.paymentSettings?.map((o) => (
                  <option value={o.id} key={o.id}>
                    {o.description}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={"firstName"}>{translate("firstName", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="firstName"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"lastName"}>{translate("lastName", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="lastName"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"email"}>{translate("email", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="email"
                type="email"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"address"}>{translate("address", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="address"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"city"}>{translate("city", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="city"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"stateCode"}>{translate("stateCode", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="stateCode"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"zipCode"}>{translate("zipCode", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="zipCode"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"phone"}>{translate("phone", locale)}</label>
              <input
                className="min-w-full rounded text-gray-700"
                name="phone"
                type="text"
                maxLength="250"
                required="required"
              />
            </div>
            <div>
              <label htmlFor={"notes"}>{translate("notes", locale)}</label>
              <textarea
                className="min-w-full rounded text-gray-700"
                rows={4}
                name="notes"
                type="textarea"
                maxLength="500"
              />
            </div>

            <div>
              <input
                className="mr-4 rounded text-gray-700"
                name="privacy"
                type="checkbox"
                required="required"
              />
              <label
                className="px-2"
                htmlFor={"privacy"}
                dangerouslySetInnerHTML={{
                  __html: thankyouMessage.textPrivacy,
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
        {errorMessage}
      </div>
    </div>
  );
}
