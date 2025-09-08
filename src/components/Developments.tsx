import React, { useMemo, useState } from 'react';
import developmentsData from '@/data/developments.json';
import { Button } from '@/components/ui/button-custom';
import { ExternalLink, Copy } from 'lucide-react';

type DevItem = {
  id: string;
  title: string;
  description?: string;
  url: string;
  tags?: string[];
};

const DevelopmentCard: React.FC<{ dev: DevItem }> = ({ dev }) => {
  const open = () => window.open(dev.url, '_blank', 'noopener');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(dev.url);
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{dev.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{dev.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {dev.tags?.map((t: string) => (
            <span key={t} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button onClick={copy} size="sm" variant="outline" className="flex items-center gap-2">
            <Copy className="w-4 h-4" />
            Copiar
          </Button>
          <Button onClick={open} size="sm" className="flex items-center gap-2 bg-primary-600 text-white">
            <ExternalLink className="w-4 h-4" />
            Abrir
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Developments: React.FC = () => {
  const [query, setQuery] = useState('');
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const items: DevItem[] = developmentsData as DevItem[];

  const allTags = useMemo(() => {
    const s = new Set<string>();
    items.forEach(d => d.tags?.forEach((t: string) => s.add(t)));
    return Array.from(s);
  }, [items]);

  const filtered = items.filter(d => {
    const matchesQuery = d.title.toLowerCase().includes(query.toLowerCase()) || (d.description || '').toLowerCase().includes(query.toLowerCase());
    const matchesTag = tagFilter ? d.tags?.includes(tagFilter) : true;
    return matchesQuery && matchesTag;
  });

  return (
    <section id="desarrollos" className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Desarrollos</h2>
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar proyectos..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64 shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
          />
          <select
            value={tagFilter ?? ''}
            onChange={e => setTagFilter(e.target.value || null)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          >
            <option value="">Todos</option>
            {allTags.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(dev => (
          <DevelopmentCard key={dev.id} dev={dev} />
        ))}
      </div>
    </section>
  );
};

export default Developments;
