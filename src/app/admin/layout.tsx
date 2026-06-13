import { ArrowLeft, LayoutDashboard, Settings, User, Briefcase, FileText, LineChart, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 border-b lg:border-r lg:border-b-0 border-white/10 glass-card lg:m-4 p-4 flex flex-col gap-6 lg:h-[calc(100vh-32px)] shrink-0 overflow-y-auto z-50 sticky top-0 lg:static">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <span className="font-bold text-xl text-gradient">Admin Panel</span>
          <Link href="/" className="p-2 hover:bg-white/10 rounded-full text-gray-400">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
        
        <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 hide-scrollbar">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <User className="w-5 h-5" />
            <span className="font-medium">Profile Info</span>
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Projects</span>
          </Link>
          <Link href="/admin/experience" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Experience</span>
          </Link>
          <Link href="/admin/skills" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Skills</span>
          </Link>
          <Link href="/admin/achievements" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Achievements</span>
          </Link>
          <Link href="/admin/stats" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <LineChart className="w-5 h-5" />
            <span className="font-medium">Stats</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 shrink-0">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </nav>
        
        <div className="pt-4 border-t border-white/10 mt-auto hidden lg:block">
          <Link href="/" className="w-full block text-center py-2 px-4 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors">
            Exit Admin Panel
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
