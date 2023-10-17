import { draftMode } from "next/headers";
const locale = 'en';
export default function Page() {
  const { isEnabled: preview } = draftMode();
  return (
    <div>
      <div className="text-xl">My index page</div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
