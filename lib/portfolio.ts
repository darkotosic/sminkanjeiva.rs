import { readdir } from 'node:fs/promises';
import path from 'node:path';

const PHOTOS_ROOT = path.join(process.cwd(), 'components', 'photos');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function toTitle(folderName: string) {
  return folderName
    .split('_')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');
}

export type PortfolioItem = {
  image: string;
  alt: string;
  category: string;
  title: string;
  featured: boolean;
};

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const categoryDirs = await readdir(PHOTOS_ROOT, { withFileTypes: true });

  const folders = categoryDirs
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const byFolder = await Promise.all(
    folders.map(async (folderName) => {
      const files = await readdir(path.join(PHOTOS_ROOT, folderName), { withFileTypes: true });
      const title = toTitle(folderName);

      return files
        .filter((file) => file.isFile() && IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase()))
        .map((file, index) => ({
          image: `/api/photos/${folderName}/${encodeURIComponent(file.name)}`,
          alt: `${title} look ${index + 1}`,
          category: title,
          title,
          featured: index < 4,
        }));
    })
  );

  return byFolder.flat();
}
