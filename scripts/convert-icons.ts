import fs from "fs";
import path from "path";

// Paths
const inputDir = path.resolve(__dirname, "../src/icons");
const outputDir = path.resolve(__dirname, "../src/components/icons");

// Utility to convert filename to PascalCase (e.g., "heart-icon" -> "HeartIcon")
const toPascalCase = (str: string) =>
  str
    .replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase())
    .replace(".svg", "");

// Reads an SVG file and wraps it into a React component
const convertSvgToReact = (svgContent: string, componentName: string) => {
  const cleanedSvg = svgContent
    .replace(
      /(width|height|class|stroke-width|stroke-linecap|stroke-linejoin)="[^"]*"/g,
      ""
    )
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin");

  return `import * as React from "react";
import { SVGProps } from "react";

const ${componentName} = (props: SVGProps<SVGSVGElement>) => {
  return (
    ${cleanedSvg
      .replace(
        /<svg([^>]*)>/,
        `<svg$1
      className={\`lucide lucide-${componentName
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase()} \${props.className || ""}\`}
      {...props}>`
      )
      .replace(/\s+/g, " ")}  
  );
};

export default ${componentName};
`;
};

const run = () => {
  if (!fs.existsSync(inputDir)) {
    console.error(`❌ SVG source folder does not exist: ${inputDir}`);
    return;
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const svgFiles = fs.readdirSync(inputDir).filter((f) => f.endsWith(".svg"));
  let convertedCount = 0;
  let skippedCount = 0;

  svgFiles.forEach((file) => {
    const componentName = toPascalCase(file);
    const outputFilePath = path.join(outputDir, `${componentName}.tsx`);

    if (fs.existsSync(outputFilePath)) {
      console.log(`⏩ Skipped ${file} (already exists)`);
      skippedCount++;
      return;
    }

    const svgPath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(svgPath, "utf-8");
    const componentCode = convertSvgToReact(svgContent, componentName);

    fs.writeFileSync(outputFilePath, componentCode);
    console.log(`✅ Converted ${file} → ${componentName}.tsx`);
    convertedCount++;
  });

  console.log(`\n🎉 Conversion complete:`);
  console.log(`🔁 Converted: ${convertedCount}`);
  console.log(`🛑 Skipped (already existing): ${skippedCount}`);
};

run();
