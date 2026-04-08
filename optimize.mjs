import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PORTFOLIO_DIR = path.join(process.cwd(), 'public', 'portfolio');
const LOGO_PATH = path.join(process.cwd(), 'public', 'feza-logo.png');

async function optimizePortfolio() {
  const files = fs.readdirSync(PORTFOLIO_DIR);
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg|JPG|PNG|JPEG)$/)) {
      const filePath = path.join(PORTFOLIO_DIR, file);
      const parsedPath = path.parse(filePath);
      const webpPath = path.join(PORTFOLIO_DIR, `${parsedPath.name}.webp`);

      console.log(`Optimizing ${file}...`);
      await sharp(filePath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      fs.unlinkSync(filePath); // delete original
      console.log(`Converted and deleted ${file}`);
    }
  }
}

async function optimizeLogo() {
  if (fs.existsSync(LOGO_PATH)) {
    const parsedPath = path.parse(LOGO_PATH);
    const webpPath = path.join(process.cwd(), 'public', `${parsedPath.name}.webp`);
    
    console.log(`Optimizing logo...`);
    await sharp(LOGO_PATH)
      .resize({ width: 400, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(webpPath);
      
    fs.unlinkSync(LOGO_PATH);
    console.log(`Converted and deleted feza-logo.png`);
  }
}

async function main() {
  await optimizePortfolio();
  await optimizeLogo();
  console.log("Done!");
}

main().catch(console.error);
