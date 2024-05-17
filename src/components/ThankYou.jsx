"use client";
import { formatDate } from "@/lib/utils";
import { useState, useEffect } from "react";
import Table from "@/components/Table";
import translate from "@/lib/locales";

export default function ThankYou({ choiche, thankyouMessage, locale }) {
  return (
    <div className="container mx-auto my-10 py-10">
      <h1 className="text-lg">{thankyouMessage.titleThanks}</h1>
      <p>{thankyouMessage.textThanks}</p>
      {!choiche && <div>Loading...</div>}
      {choiche && (
        <div className="bg-gray-50 p-4 mt-10">
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
