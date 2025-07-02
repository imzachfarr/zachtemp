'use client';

import { useState, useEffect } from 'react';
import { Download, Users, TrendingUp, AlertCircle, BarChart3 } from 'lucide-react';

interface FormAnalytics {
  total: number;
  completed: number;
  incomplete: number;
  completionRate: number;
  avgStepsCompleted: number;
  dropoffByStep: Record<number, number>;
  responsesByField: Record<string, Record<string, number>>;
}

interface FormData {
  sessionId: string;
  timestamp: number;
  currentStep: number;
  totalSteps: number;
  responses: Record<string, any>;
  isComplete: boolean;
  completedAt?: number;
  source?: string;
  savedAt?: string;
}

export default function FormAnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<FormAnalytics | null>(null);
  const [forms, setForms] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/forms/analytics?type=${filter}`);
      const data = await response.json();
      setAnalytics(data.analytics);
      setForms(data.forms);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = async () => {
    try {
      const response = await fetch(`/api/forms/analytics?format=csv&type=${filter}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `forms_${filter}_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download CSV:', error);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [filter]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-white text-xl">Loading analytics...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-4">Form Analytics Dashboard</h1>
          <div className="flex items-center gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-[#2A2A3A] border border-[#00D4FF]/30 rounded-lg px-4 py-2 text-white"
            >
              <option value="all">All Forms</option>
              <option value="completed">Completed Only</option>
              <option value="incomplete">Incomplete Only</option>
            </select>
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 bg-[#00D4FF] text-white px-6 py-2 rounded-lg hover:bg-[#00B8E6] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </button>
          </div>
        </div>

        {analytics && (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#1D1D27] rounded-xl p-6 border border-[#00D4FF]/30">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-[#00D4FF]" />
                  <span className="text-gray-400">Total Submissions</span>
                </div>
                <div className="text-3xl font-bold text-white">{analytics.total}</div>
              </div>

              <div className="bg-[#1D1D27] rounded-xl p-6 border border-[#F9B233]/30">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#F9B233]" />
                  <span className="text-gray-400">Completion Rate</span>
                </div>
                <div className="text-3xl font-bold text-white">{analytics.completionRate.toFixed(1)}%</div>
              </div>

              <div className="bg-[#1D1D27] rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">Completed</span>
                </div>
                <div className="text-3xl font-bold text-white">{analytics.completed}</div>
              </div>

              <div className="bg-[#1D1D27] rounded-xl p-6 border border-red-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">Dropped Off</span>
                </div>
                <div className="text-3xl font-bold text-white">{analytics.incomplete}</div>
              </div>
            </div>

            {/* Dropoff by Step */}
            <div className="bg-[#1D1D27] rounded-xl p-6 border border-[#00D4FF]/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Form Progress by Step</h3>
              <div className="space-y-3">
                {analytics.dropoffByStep && Object.keys(analytics.dropoffByStep).length > 0 ? (
                  Object.entries(analytics.dropoffByStep).map(([step, count]) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-16 text-gray-400">Step {step}</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-4 relative">
                        <div
                          className="bg-[#00D4FF] h-4 rounded-full"
                          style={{ width: `${(count / analytics.total) * 100}%` }}
                        />
                      </div>
                      <div className="w-20 text-white text-right">{count} users</div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    No form submissions yet. Start collecting data by having users fill out your qualification form!
                  </div>
                )}
              </div>
            </div>

            {/* Response Breakdown */}
            <div className="bg-[#1D1D27] rounded-xl p-6 border border-[#00D4FF]/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Response Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analytics.responsesByField && Object.keys(analytics.responsesByField).length > 0 ? (
                  Object.entries(analytics.responsesByField).map(([field, responses]) => (
                    <div key={field} className="bg-[#2A2A3A] rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3 capitalize">{field.replace(/([A-Z])/g, ' $1')}</h4>
                      <div className="space-y-2">
                        {Object.entries(responses).map(([value, count]) => (
                          <div key={value} className="flex justify-between text-sm">
                            <span className="text-gray-300 truncate mr-2">{value}</span>
                            <span className="text-[#00D4FF] font-semibold">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    No completed forms yet. Response breakdowns will appear here once users complete the qualification form.
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Recent Forms */}
        <div className="bg-[#1D1D27] rounded-xl p-6 border border-[#00D4FF]/30">
          <h3 className="text-xl font-bold text-white mb-4">Recent Submissions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-gray-400 py-3 pr-4">Session ID</th>
                  <th className="text-gray-400 py-3 pr-4">Status</th>
                  <th className="text-gray-400 py-3 pr-4">Progress</th>
                  <th className="text-gray-400 py-3 pr-4">Name</th>
                  <th className="text-gray-400 py-3 pr-4">Email</th>
                  <th className="text-gray-400 py-3 pr-4">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {forms && forms.length > 0 ? (
                  forms.slice(0, 10).map((form) => (
                    <tr key={form.sessionId} className="border-b border-gray-800">
                      <td className="text-gray-300 py-3 pr-4 font-mono text-xs">
                        {form.sessionId.slice(-8)}
                      </td>
                      <td className="py-3 pr-4">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          form.isComplete 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {form.isComplete ? 'Complete' : 'Incomplete'}
                        </span>
                      </td>
                      <td className="text-gray-300 py-3 pr-4">
                        {form.currentStep}/{form.totalSteps}
                      </td>
                      <td className="text-gray-300 py-3 pr-4">
                        {form.responses.name || 'N/A'}
                      </td>
                      <td className="text-gray-300 py-3 pr-4">
                        {form.responses.email || 'N/A'}
                      </td>
                      <td className="text-gray-400 py-3 pr-4 text-sm">
                        {new Date(form.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400">
                      No form submissions yet. Data will appear here once users start filling out the qualification form.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 