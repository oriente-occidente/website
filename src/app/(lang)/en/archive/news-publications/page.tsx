import { draftMode } from "next/headers";
const locale = 'en';
export default function Page() {
  const { isEnabled: preview } = draftMode();
  return (
    <div>
      My index page - {locale} ({preview})
    </div>
  );
}
