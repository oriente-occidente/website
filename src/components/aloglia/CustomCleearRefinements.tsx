"use client";
import {
  useClearRefinements,
  UseClearRefinementsProps,
} from "react-instantsearch";
import translate from "@/lib/locales";

type CustomResetProps = {
  cb: () => void;
  notifyReset: boolean;
  isMainSearch?: boolean | null;
  locale: string;
};
type CustomClearRefinementsProps = UseClearRefinementsProps & CustomResetProps;
export default function CustomClearRefinements({
  cb,
  notifyReset,
  isMainSearch = false,
  locale,
  ...props
}: CustomClearRefinementsProps) {
  const { refine } = useClearRefinements(props);
  function handlePress() {
    cb();
    refine();
  }
  const label =
    isMainSearch != undefined && isMainSearch
      ? translate("search.remove-filters", locale)
      : translate("search.reset", locale);
  return (
    <div className="text-right">
      {notifyReset ? (
        <div> {translate("search.resetting", locale)}</div>
      ) : (
        <button
          className=" font-bold flex items-center underline"
          onClick={(e) => handlePress()}
        >
          {label}
        </button>
      )}
    </div>
  );
}
