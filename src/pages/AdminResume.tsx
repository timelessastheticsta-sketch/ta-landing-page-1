import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { apiGet } from '@/lib/api';

interface ResumeItem {
  _id: string;
  fullName: string;
  email?: string;
  phone?: string;
  position?: string;
  resumeUrl: string;
  createdAt: string;
}

const AdminResume = () => {
  const [items, setItems] = useState<ResumeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await apiGet<ResumeItem[]>('/api/resumes');
        if (mounted) setItems(data);
      } catch (err) {
        if (mounted) setError('Failed to load resumes');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Resumes</h1>
        {loading && <div>Loading...</div>}
        {error && <div className="text-destructive mb-4">{error}</div>}
        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((r) => (
              <Card key={r._id} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{r.fullName}</span>
                    <span className="text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleString()}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  {r.email && <div><span className="font-medium">Email:</span> {r.email}</div>}
                  {r.phone && <div><span className="font-medium">Phone:</span> {r.phone}</div>}
                  {r.position && <div><span className="font-medium">Position:</span> {r.position}</div>}
                  <div className="pt-3 flex gap-2">
                    <Button asChild variant="secondary">
                      <a href={r.resumeUrl} target="_blank" rel="noreferrer">View</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`${r.resumeUrl}?fl_attachment=`}>Download</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {items.length === 0 && (
              <div className="text-muted-foreground">No resumes yet.</div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminResume ;


