import Image from "next/image";
import white from "../assets/images/red.png";
import Features from "./Features";
import { Button } from "~/components/ui/button";
import Heart from "~/components/icons/Heart";

const MatchFit = () => {
  return (
    <main className="flex justify-center w-ful bg-background ">
      <section className="max-w-sm p-3 m-5 md:p-5 rounded-md bg-foreground md:grid md:grid-cols-2 md:max-w-3xl md:gap-10 shadow-[5px_5px_0_var(--color-united)]">
        <article className="">
          <div>
            <Image src={white} alt="Manchester United White Jersey" />
          </div>
          <div className=" text-secondary ">
            <p className="font-bold text-2xl md:text-3xl uppercase font-sans">
              Flex in Red.
            </p>
            <h2 className="text-muted md:text-xl font-bold">
              Style That Scores Every Time
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-united font-bold my-3">
                <span className="text-4xl">$13</span>.45
              </p>
            </div>
            <h1 className="font-semibold md:text-lg">
              The Modern Swagger – “Fit For Today”
            </h1>
            <h3 className="text-muted font-semibold text-sm md:text-base">
              A look that works on matchday or the high street. Slim fit.
              Game-ready. Hype approved.
            </h3>
            <div className="flex justify-between md:justify-start my-4 gap-4">
              <Button className="bg-united cursor-pointer hover:bg-united/85 uppercase grow md:flex-none">
                Add to Cart
              </Button>
              <button className="cursor-pointer">
                <Heart
                  className="h-8 w-8 hover:scale-110 transition delay-300 duration-300"
                  strokeWidth={2}
                  color="#b10303"
                />
              </button>
            </div>
          </div>
        </article>
        <Features />
      </section>
    </main>
  );
};

export default MatchFit;
