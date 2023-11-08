import { draftMode } from "next/headers";
const locale = "it";
export default function Page() {
  return (
    <div>
      My index page - {locale} ({preview})
    </div>
  );
}
