import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets";
const outputDir = "./src/optimized";

// Make output folder if it doesn't exist
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const files = fs.readdirSync(inputDir).filter(f => /\.(jpg|png)$/i.test(f));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, path.parse(file).name + ".webp");

  sharp(inputPath)
    .resize({ width: 1200 }) // optional max width
    .webp({ quality: 75 })
    .toFile(outputPath)
    .then(() => console.log(`✅ ${file} -> ${outputPath}`))
    .catch(err => console.error(err));
}
