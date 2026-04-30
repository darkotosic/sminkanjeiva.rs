'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { PortfolioItem } from '@/lib/portfolio';

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const categories = useMemo(() => ['Sve', ...new Set(items.map((item) => item.category))], [items]);
  const [activeCategory, setActiveCategory] = useState('Sve');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Sve') {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const itemsByCategory = useMemo(() => {
    return filteredItems.reduce<Record<string, PortfolioItem[]>>((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }

      acc[item.category].push(item);
      return acc;
    }, {});
  }, [filteredItems]);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            style={{
              borderRadius: '999px',
              border: activeCategory === category ? '1px solid var(--brand)' : '1px solid var(--line)',
              background: activeCategory === category ? 'var(--brand)' : 'transparent',
              color: activeCategory === category ? '#fff' : 'var(--text)',
              padding: '0.45rem 0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
        <div key={category} style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>{category}</h2>
          <div className="grid grid-4">
            {categoryItems.map((item) => (
              <article key={item.image} className="card" aria-label={item.alt}>
                <Image src={item.image} alt={item.alt} width={600} height={750} style={{ borderRadius: '12px', aspectRatio: '4 / 5', objectFit: 'cover' }} unoptimized />
                <p style={{ marginTop: '0.75rem', marginBottom: '0.4rem' }}>{item.title}</p>
                <Badge text={item.category} />
              </article>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
