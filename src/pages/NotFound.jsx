import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-80vh bg-background flex items-center justify-center p-8">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home size={32} className="text-primary" />
          </div>

          <h2 className="text-2xl font-bold text-text mb-3">Page Not Found</h2>
          <p className="text-textSecondary mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>

        <p className="mt-8 text-sm text-textTertiary">
          Orbit v1.0.0 • Built by orbit.ke
        </p>
      </div>
    </div>
  );
}

