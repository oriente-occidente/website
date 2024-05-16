"use client";
import { formatDate } from "@/lib/utils";
import { useState, useEffect } from "react";
import Table from "@/components/Table";
import translate from "@/lib/locales";

export default function ThankYou({ choiche, thankyouMessage, locale }) {
  return (
    <div className="my-10 p-10">
      <h1 className="text-lg">{thankyouMessage.titleThanks}</h1>
      <p>{thankyouMessage.textThanks}</p>
      {!choiche && <div>Loading...</div>}
      {choiche && (
        <div className="bg-gray-50 p-4">
          <a href={choiche?.paymentLink} target="_blank" rel="noreferrer">
            {`${choiche?.description} ${
              choiche?.amount ? "- " + choiche.amount + "€" : ""
            }`}
          </a>
        </div>
      )}
    </div>
  );
}
