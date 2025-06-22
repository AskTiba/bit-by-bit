import Image from "next/image";
import white from "../assets/images/white.png";
import Features from "./Features";

const MatchFit = () => {
  return (
    <main>
      <section>
        <div>
          <Image src={white} alt="Manchester United White Jersey" />
        </div>
        <div>
          <h1>The Modern Swagger – “Fit For Today”</h1>
          <h2>💥 "Style That Scores Every Time"</h2>
          <h3>
            A look that works on matchday or the high street. Slim fit.
            Game-ready. Hype approved.
          </h3>
          <em className="text-[#DA291C]">$13.45</em>
          <p>Add to Cart. Flex in Red.</p>
        </div>
        <Features />
      </section>
    </main>
  );
};

export default MatchFit;
