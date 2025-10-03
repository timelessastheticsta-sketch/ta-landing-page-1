import { useEffect, useMemo, useState } from 'react';
import { apiGet, apiPut, apiDelete, apiPost } from '@/lib/api';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Lead {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  message?: string;
  source?: string;
  createdAt: string;
  assignedTo?: string;
  status?: 'New' | 'In Progress' | 'Contacted' | 'Won' | 'Lost';
  contacted?: boolean;
  notes?: { text: string; date?: string }[];
  followUp?: { date?: string; time?: string; message?: string };
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<string | undefined>();
  const [sort, setSort] = useState('createdAt:desc');

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({ page: String(page), limit: String(limit) });
        if (search) params.set('search', search);
        if (status) params.set('status', status);
        if (sort) params.set('sort', sort);
        const data = await apiGet<{ leads: Lead[]; total: number; page: number; limit: number }>(`/api/leads?${params.toString()}`);
        if (isMounted) {
          setLeads(data.leads);
          setTotal(data.total);
        }
      } catch (err) {
        if (isMounted) setError('Failed to load leads');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [page, limit, search, status, sort]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / limit)), [total, limit]);

  async function handleUpdate(id: string, payload: Partial<Lead>) {
    const updated = await apiPut<Partial<Lead>, Lead>(`/api/leads/${id}`, payload);
    setLeads(prev => prev.map(l => (l._id === id ? updated : l)));
  }

  async function handleDelete(id: string) {
    await apiDelete(`/api/leads/${id}`);
    setLeads(prev => prev.filter(l => l._id !== id));
    setTotal(t => Math.max(0, t - 1));
  }

  async function handleAddNote(id: string, text: string) {
    const updated = await apiPostNote(id, text);
    setLeads(prev => prev.map(l => (l._id === id ? updated : l)));
  }

  async function apiPostNote(id: string, text: string) {
    return apiPost<{ text: string }, Lead>(`/api/leads/${id}/notes`, { text });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Leads</h1>
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <Input placeholder="Search by name/email/phone" value={search} onChange={(e) => { setPage(1); setSearch(e.target.value); }} className="w-64" />
          <Select value={status} onValueChange={(v) => { setPage(1); setStatus(v === 'all' ? undefined : v); }}>
            <SelectTrigger className="w-40"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Contacted">Contacted</SelectItem>
              <SelectItem value="Won">Won</SelectItem>
              <SelectItem value="Lost">Lost</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-52"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt:desc">Newest first</SelectItem>
              <SelectItem value="createdAt:asc">Oldest first</SelectItem>
              <SelectItem value="name:asc">Name A-Z</SelectItem>
              <SelectItem value="name:desc">Name Z-A</SelectItem>
            </SelectContent>
          </Select>
          <Select value={String(limit)} onValueChange={(v) => { setPage(1); setLimit(Number(v)); }}>
            <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div className="text-destructive mb-4">{error}</div>}
        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leads.map((lead) => (
              <Card key={lead._id} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{lead.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleString()}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <div><span className="font-medium">Phone:</span> {lead.phone}</div>
                  {lead.email && (
                    <div><span className="font-medium">Email:</span> {lead.email}</div>
                  )}
                  {lead.source && (
                    <div><span className="font-medium">Source:</span> {lead.source}</div>
                  )}
                  {lead.message && (
                    <div className="pt-2"><span className="font-medium">Message:</span> {lead.message}</div>
                  )}

                  <div className="pt-3 flex flex-wrap gap-2 items-center">
                    <Select value={lead.status || 'New'} onValueChange={(v) => handleUpdate(lead._id, { status: v as Lead['status'] })}>
                      <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Won">Won</SelectItem>
                        <SelectItem value="Lost">Lost</SelectItem>
                      </SelectContent>
                    </Select>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={!!lead.contacted} onChange={(e) => handleUpdate(lead._id, { contacted: e.target.checked })} />
                      Mark as contacted
                    </label>
                    <Button variant="secondary" onClick={async () => {
                      const text = prompt('Add note');
                      if (text) await handleAddNote(lead._id, text);
                    }}>Add Note</Button>
                    <Button variant="outline" onClick={async () => {
                      const date = prompt('Follow-up date (YYYY-MM-DD)') || undefined;
                      const time = prompt('Follow-up time (HH:MM)') || undefined;
                      const message = prompt('Follow-up message') || undefined;
                      await handleUpdate(lead._id, { followUp: { date, time, message } as any });
                    }}>Follow-up</Button>
                    <Button variant="destructive" onClick={() => handleDelete(lead._id)}>Delete</Button>
                  </div>

                  {lead.notes && lead.notes.length > 0 && (
                    <div className="pt-2 space-y-1">
                      <div className="font-medium">Notes</div>
                      {lead.notes.slice().reverse().slice(0, 3).map((n, i) => (
                        <div key={i} className="text-xs text-muted-foreground">{n.text}</div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            {leads.length === 0 && (
              <div className="text-muted-foreground">No leads yet.</div>
            )}
          </div>
        )}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">Page {page} of {totalPages} • {total} total</div>
          <div className="flex gap-2">
            <Button variant="outline" disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Previous</Button>
            <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Next</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;


