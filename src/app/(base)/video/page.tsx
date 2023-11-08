import { draftMode } from "next/headers";
const locale = "it";
export default function Page() {
  //
  return (
    <div>
      <div className="text-xl">My index page</div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
