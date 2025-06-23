import Image from "next/image";
import white from "../assets/images/white.png";
import Features from "./Features";
import { Button } from "~/components/ui/button";
import Heart from "~/components/icons/Heart";

const MatchFit = () => {
  return (
    <main className="flex justify-center w-ful bg-background">
      <section className="max-w-sm p-3 m-5 bg-foreground">
        <div>
          <Image src={white} alt="Manchester United White Jersey" />
        </div>
        <div className="text-black text-secondary">
          <p className="font-bold text-2xl uppercase"> Flex in Red.</p>
          <h2 className="text-muted font-bold">Style That Scores Every Time</h2>

          <p className="text-secondary font-bold my-3">
            <span className="text-4xl">$13</span>.45
          </p>
          <h1 className="font-semibold">
            The Modern Swagger – “Fit For Today”
          </h1>
          <h3 className="text-muted font-semibold text-sm">
            A look that works on matchday or the high street. Slim fit.
            Game-ready. Hype approved.
          </h3>
          <div className="flex justify-between my-4 gap-4">
            <Button className="bg-united cursor-pointer hover:bg-united/85 grow">
              Add to Cart.
            </Button>
            <button className="cursor-pointer">
              <Heart className="h-8 w-8" strokeWidth={2} color="#b10303" />
            </button>
          </div>
        </div>
        <Features />
      </section>
    </main>
  );
};

export default MatchFit;
