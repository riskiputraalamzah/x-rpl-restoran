import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AmbientBackground } from '../components/ui/AmbientBackground';
import {
  LogOut,
  Layers,
  FolderLock,
  Compass,
  FileCheck2,
  ExternalLink,
  ShieldAlert,
  Clock,
  Sparkles,
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const projects = [
    {
      title: 'Monolith Spatial Pavillion',
      category: 'Architectural Digital Twin',
      status: 'In Review',
      date: 'Updated 2 hrs ago',
      color: '#E5C07B',
    },
    {
      title: 'Aura Kinetic Exhibition',
      category: 'Spatial Design & Lighting System',
      status: 'Approved',
      date: 'Finalized yesterday',
      color: '#22C55E',
    },
    {
      title: 'Vesper Private Residence',
      category: 'Minimalist Interior Commission',
      status: 'Drafting',
      date: 'Active milestone',
      color: '#3B82F6',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#08090D] text-white p-6 sm:p-10 lg:p-14 selection:bg-[#E5C07B]/25 selection:text-[#E5C07B]">
      <AmbientBackground />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        {/* Top Navigation Bar */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#151721] border border-[#E5C07B]/30 flex items-center justify-center shadow-[0_0_20px_rgba(229,192,123,0.15)]">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#E5C07B]">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                <path d="M12 2V22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.2em] font-bold text-white uppercase block">
                MONOLITH
              </span>
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#9295A5] uppercase block -mt-0.5">
                Executive Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium text-white">{user?.name || 'Executive Client'}</div>
              <div className="text-xs text-[#9295A5]">{user?.email || 'partner@monolithmedia.com'}</div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151721] hover:bg-[#1E212E] border border-white/[0.08] hover:border-[#EF4444]/40 text-xs font-medium text-zinc-300 hover:text-[#EF4444] transition-all cursor-pointer shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* Welcome Hero Statement */}
        <section className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C07B]/10 border border-[#E5C07B]/25 text-[11px] font-mono tracking-wider text-[#E5C07B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SESSION ENCRYPTED & SECURED</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Welcome to the Atelier, {user?.name || 'Partner'}.
          </h1>
          <p className="text-base text-[#9295A5] max-w-2xl font-sans leading-relaxed">
            Your studio vault is synchronized. Explore ongoing spatial projects, high-resolution architectural assets, and milestone contracts.
          </p>
        </section>

        {/* Quick Metrics / Project Status Overview */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#11131B] border border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between text-[#9295A5] text-xs">
              <span>Active Commissions</span>
              <Layers className="w-4 h-4 text-[#E5C07B]" />
            </div>
            <div className="text-3xl font-serif font-light text-white">03</div>
            <div className="text-[11px] text-[#22C55E] flex items-center gap-1">
              <span>All deliverables on schedule</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#11131B] border border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between text-[#9295A5] text-xs">
              <span>Vault Storage</span>
              <FolderLock className="w-4 h-4 text-[#E5C07B]" />
            </div>
            <div className="text-3xl font-serif font-light text-white">4.8 GB</div>
            <div className="text-[11px] text-[#9295A5]">
              <span>Pro-res 3D geometry & point clouds</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#11131B] border border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between text-[#9295A5] text-xs">
              <span>Security Clearance</span>
              <ShieldAlert className="w-4 h-4 text-[#E5C07B]" />
            </div>
            <div className="text-3xl font-serif font-light text-white">Tier I</div>
            <div className="text-[11px] text-[#E5C07B]">
              <span>Direct Art Director Channel</span>
            </div>
          </div>
        </section>

        {/* Commissioned Workspaces */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-light text-white">
              Current Commissions
            </h2>
            <span className="text-xs text-[#9295A5]">Showing 3 active workspaces</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#11131B] border border-white/[0.08] hover:border-[#E5C07B]/40 transition-all flex flex-col justify-between space-y-6 shadow-lg group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#9295A5]">
                      {proj.category}
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border"
                      style={{
                        borderColor: `${proj.color}40`,
                        color: proj.color,
                        backgroundColor: `${proj.color}15`,
                      }}
                    >
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#E5C07B] transition-colors">
                    {proj.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs text-[#9295A5]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{proj.date}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:text-[#E5C07B] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
