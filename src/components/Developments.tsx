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
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col p-5">
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{dev.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-16 overflow-hidden">{dev.description}</p>
      </div>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {dev.tags?.map((t: string) => (
            <span key={t} className="text-xs bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2">
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Desarrollos</h2>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar proyectos..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-64 shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
          />
          <select
            value={tagFilter ?? ''}
            onChange={e => setTagFilter(e.target.value || null)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-auto shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
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
