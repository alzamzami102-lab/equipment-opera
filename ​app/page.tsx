import React from 'react';
import { Shield, Truck, Activity, AlertTriangle, PenTool as Tool, TrendingDown } from 'lucide-react';

export default function EquipmentOpera() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 font-sans" dir="rtl">
      <header className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            أوبرا المعدات | Equipment Opera
          </h1>
          <p className="text-slate-400 mt-1">بواسطة الزمزمي للابتكار</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-600 text-sm">العملة: QAR</span>
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-slate-900">Z</div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { t: "إجمالي المعدات", v: "48", i: Truck, c: "text-blue-500" },
          { t: "حوادث نشطة", v: "0", i: Shield, c: "text-green-500" },
          { t: "توفير الصيانة", v: "32%", i: TrendingDown, c: "text-purple-500" },
          { t: "حالة النظام", v: "مستقر", i: Activity, c: "text-emerald-500" }
        ].map((s, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <s.i className={`${s.c} w-8 h-8`} />
            <h3 className="text-slate-400 mt-4 text-sm">{s.t}</h3>
            <p className="text-2xl font-bold mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" /> مركز السلامة وإدارة الحوادث (Black Box)
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded-xl border-r-4 border-emerald-500">
              <p className="text-sm font-bold">معدة رقم #TR-202</p>
              <p className="text-xs text-slate-300 mt-1 italic">تنبيه: تم رصد فرملة حادة مفاجئة - الموقع: المنطقة الشمالية.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded-xl border-r-4 border-blue-500">
              <p className="text-sm font-bold text-blue-400 italic">تم تفعيل "نظام الإنذار المبكر" لتفادي تصادم وشيك في المربع ب-4.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Tool className="text-purple-500" /> الصيانة التنبؤية (AI)
          </h2>
          <div className="space-y-6 text-sm">
            <div>
              <div className="flex justify-between mb-2 text-slate-300">
                <span>تآكل زيت المحرك - جرافة 01</span>
                <span className="text-red-400">85%</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-[85%]"></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-700">
              <h3 className="font-bold mb-3 text-emerald-400">أصول متاحة للتشارك (Asset Sharing)</h3>
              <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                <p>متاحة حالياً: رافعة شوكية (2)</p>
                <p className="text-slate-500 mt-1 text-[10px]">الموقع: لوسيل - قطر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

