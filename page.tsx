import React from 'react';
import { 
  Settings, 
  Activity, 
  ShieldCheck, 
  MapPin, 
  Fuel, 
  AlertTriangle, 
  BarChart3, 
  Cpu 
} from 'lucide-react';

export default function EquipmentOperaDashboard() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 font-sans p-4 md:p-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            AL-ZAMZAMI INNOVATION GROUP
          </h1>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest">
            Equipment Opera Hub v2.0 | نظام أوبرا لإدارة المعدات والبيئة الذكية
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-yellow-600/20">
          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-green-400">SYSTEM ONLINE: ASIA/QATAR_ZONE</span>
        </div>
      </header>

      {/* Stats Quick Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Active Assets", value: "84 Units", icon: Settings, color: "text-blue-400" },
          { label: "Operational Efficiency", value: "94.2%", icon: Activity, color: "text-green-400" },
          { label: "Fuel Optimization", value: "QAR 12.4k Saved", icon: Fuel, color: "text-yellow-500" },
          { label: "Predictive Security", value: "Active", icon: ShieldCheck, color: "text-purple-400" },
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-yellow-600/40 transition-all group">
            <item.icon className={`${item.color} mb-4 group-hover:scale-110 transition-transform`} size={28} />
            <h3 className="text-slate-500 text-sm">{item.label}</h3>
            <p className="text-2xl font-bold mt-1 tracking-tight">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content: Tracking & AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Real-time Tracking Map Placeholder */}
        <div className="lg:col-span-2 bg-slate-900/60 rounded-3xl border border-slate-800 p-1 overflow-hidden h-[450px] relative group">
          <div className="absolute top-6 left-6 z-10 bg-slate-950/80 p-4 rounded-2xl border border-slate-700 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-red-500" size={18} />
              <span className="font-bold text-sm">Live GPS Tracking</span>
            </div>
            <p className="text-xs text-slate-400 uppercase">Doha Port Expansion Site - Zone A</p>
          </div>
          {/* Animated Background simulation */}
          <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i2457!3i1634!2m3!1e0!2sm!3i612151603!3m8!2sen!3sqa!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1f2!23i1301875')] opacity-30 grayscale invert"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative">
                <div className="absolute -inset-4 bg-yellow-500/20 rounded-full animate-ping"></div>
                <div className="h-4 w-4 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
             </div>
          </div>
        </div>

        {/* Predictive AI Insights */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-yellow-500" size={24} />
              <h3 className="font-bold text-lg tracking-tight">Predictive AI Analysis</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-yellow-600 uppercase">Maintenance Alert</span>
                  <AlertTriangle size={14} className="text-yellow-600" />
                </div>
                <p className="text-sm leading-relaxed">Excavator #72: Hydraulic pressure anomaly detected. Service recommended within 48h.</p>
              </div>

              <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-blue-400 uppercase">Black Box Log</span>
                  <BarChart3 size={14} className="text-blue-400" />
                </div>
                <p className="text-sm leading-relaxed">Telemetry data encrypted and synced to Doha Sovereign Cloud.</p>
              </div>
            </div>

            <button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-3 rounded-xl transition-all uppercase text-xs tracking-widest shadow-lg shadow-yellow-500/10">
              Download Full Report
            </button>
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <footer className="mt-16 text-center border-t border-slate-900 pt-8 opacity-40">
        <p className="text-xs tracking-[0.3em] font-light">
          PROPRIETARY TECHNOLOGY OF AL-ZAMZAMI INNOVATION GROUP © 2026
        </p>
      </footer>
    </div>
  );
}
