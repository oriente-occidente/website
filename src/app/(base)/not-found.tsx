import Link from "next/link";
import Wrapper from "@/components/layout/Wrapper";

export default async function NotFound() {
  return (
    <Wrapper locale="it" slugData="404">
      <div className="container mx-auto mt-10 text-center">
        <h2 className="text-3xl font-bold py-10">404</h2>
        <p className="text-lg mb-10">Impossibile trovare la pagina richiesta</p>
        <p>
          <Link href="/" className="uppercase hover:underline underline-offset-4">Torna alla home</Link>
        </p>
      </div>
    </Wrapper>
  );
}
