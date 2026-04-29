import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

const ROOT = path.join(process.cwd(), 'components', 'photos');

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: photoPath } = await params;

  if (!photoPath || photoPath.length < 2) {
    return NextResponse.json({ error: 'Photo path is invalid.' }, { status: 400 });
  }

  const resolved = path.resolve(ROOT, ...photoPath);

  if (!resolved.startsWith(ROOT)) {
    return NextResponse.json({ error: 'Forbidden path.' }, { status: 403 });
  }

  try {
    const fileBuffer = await readFile(resolved);
    const ext = path.extname(resolved).toLowerCase();
    const contentType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Photo not found.' }, { status: 404 });
  }
}
