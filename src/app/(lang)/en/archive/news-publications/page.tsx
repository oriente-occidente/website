import { draftMode } from "next/headers";
const locale = 'en';
export default function Page() {
  return <div>My index page - {locale}</div>;
}
