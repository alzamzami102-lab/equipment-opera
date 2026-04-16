"use client";

import React from 'react';
import SecurityGate from './SecurityGate';
// استيراد النظام الأصلي كمكون مسمى لضمان عدم حدوث خطأ X
import * as OriginalModule from './original-system';

/**
 * @description كود الربط الاحترافي الذي لا يتطلب تعديل الملف الأصلي
 * يقوم بالبحث عن أول دالة متاحة داخل الملف وتشغيلها
 */
export default function RootPage() {
  // المحرك الذكي: يبحث عن المكون داخل الملف الأصلي أياً كان اسمه
  const SystemComponent = OriginalModule.default || 
                          Object.values(OriginalModule).find(val => typeof val === 'function');

  return (
    <main>
      <SecurityGate>
        {SystemComponent ? <SystemComponent /> : <p>خطأ: لم يتم العثور على النظام</p>}
      </SecurityGate>
    </main>
  );
}

