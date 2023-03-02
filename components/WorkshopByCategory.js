import translate from "lib/locales";
import { enhanceEvents, sortDesc, sortAsc } from "lib/utils";
import PreviewCard from "components/cards/PreviewCard";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const MAX = 6;
function WorkshopByCategory({ list, locale, categoriesList, heroData }) {
  const router = useRouter();
  const [workshopCat, setWorkshopCat] = useState("");
  const { titleHero, descriptionHero } = heroData;

  function back() {
    if (history) {
      history.back();
    }
  }

  function getLink(locale) {
    let href;
    if (locale == "en") {
      href = "/en/studio/workshops?cat=all";
    } else {
      href = "/studio/workshop?cat=all";
    }
    return href;
  }

  useEffect(() => {
    if (router.query) {
      const urlParams = new URLSearchParams(window.location.search);
      let catParam = urlParams.get("cat");
      if (catParam) {
        const cat = urlParams.get("cat").toLowerCase();
        if (cat) setWorkshopCat(cat);
      } else {
        setWorkshopCat("");
      }
    }
  }, [router.query]);

  let finished = [];
  let active = [];
  let filterByCategory = null;
  if (workshopCat && workshopCat !== "all") {
    filterByCategory = list.filter(({ workshopCategory }) =>
      workshopCategory.some(({ slug }) => slug == workshopCat)
    );
  }
  const resultList = enhanceEvents(filterByCategory || list);
  finished = sortDesc(
    resultList?.filter((e) => e.finished),
    "startDate"
  );
  active = sortAsc(
    resultList?.filter((e) => !e.finished),
    "nextDate"
  );
  const showHeaders = finished.length > 0 && active.length > 0;

  return (
    <>
      <Head>
        <title>
          {titleHero +
            ` ${
              workshopCat.charAt(0).toUpperCase() + workshopCat.slice(1)
            } - Oriente Occidente`}
        </title>
      </Head>
      <header className="overflow-hidden border-t border-gray py-5 md:border-t-0 md:border-b">
        <div className="container">
          <div className="pt-1 lg:flex lg:justify-between lg:pt-0">
            <div>
              {workshopCat && workshopCat !== "all" ? (
                <h1 className="title">{titleHero + " - " + workshopCat}</h1>
              ) : (
                <h1 className="title">{titleHero}</h1>
              )}
            </div>

            {workshopCat && workshopCat !== "all" && (
              <div className="flex items-center">
                <div
                  onClick={() => back()}
                  className="flex cursor-pointer items-center hover:text-red"
                >
                  <div className="mr-4 h-5 w-5 flex-none bg-arrow-left-black" />
                  <span className="">{translate("back", locale)} |</span>
                </div>

                <div className="pl-1">
                  {/* <Link className="" href="/workshop?cat=all" locale={locale}> */}
                  <a href={getLink(locale)} className="flex items-center hover:text-red">
                    {translate("view_all", locale)}
                  </a>
                  {/* </Link> */}
                </div>
              </div>
            )}
          </div>
          <h2 className="text-black-light md:mt-1 md:text-sm">{descriptionHero}</h2>
        </div>
      </header>

      <div className="container my-4">
        {workshopCat &&
          workshopCat !== "all" &&
          (!filterByCategory || filterByCategory.length == 0 || list.length == 0) && (
            <div>
              <div className="mt-20 pb-5 text-lg font-semibold">
                {translate("no_events", locale)}
              </div>
            </div>
          )}
        {showHeaders && (
          <div className="mt-20 border-b  border-black pb-5 text-lg font-semibold uppercase">
            {translate("next_events", locale)}
          </div>
        )}
        {active.length > 0 && (
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            {active?.map((item) => (
              <PreviewCard locale={locale} data={item} key={item.id} />
            ))}
          </div>
        )}
        {showHeaders && (
          <div className="mt-20 border-b  border-black pb-5 text-lg font-semibold  uppercase">
            {translate("previous_events", locale)}
          </div>
        )}
        {finished.length > 0 && (
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 ">
            {finished?.slice(0, MAX).map((item) => (
              <PreviewCard locale={locale} data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default WorkshopByCategory;
