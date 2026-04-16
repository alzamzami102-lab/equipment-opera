"use client";

import React, { lazy, Suspense } from 'react';
// استيراد بوابة الحماية كمكون مستقل
import SecurityGate from './SecurityGate';

/**
 * استخدام التحميل الديناميكي (Dynamic Import) 
 * هذا يضمن عدم تحميل ملف النظام الأصلي نهائياً إلا بعد تجاوز بوابة الحماية
 * مما يحل مشكلة علامة (X) الحمراء الناتجة عن تعارض المكونات
 */
const OriginalSystem = lazy(() => import('./original-system'));

export default function EntryPoint() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505' }}>
      {/* 1. البوابة: تطلب البريد وترسل التنبيه لبريدك alzamzami102@gmail.com */}
      <SecurityGate>
        
        {/* 2. معالج الانتظار: يمنع انهيار الصفحة أثناء تحميل النظام الأصلي */}
        <Suspense fallback={
          <div style={{ color: '#ffd700', textAlign: 'center', paddingTop: '20vh' }}>
            جاري تشغيل محرك أوبرا...
          </div>
        }>
          {/* 3. النظام الأصلي: يفتح فوراً بمجرد قبول البريد */}
          <OriginalSystem />
        </Suspense>

      </SecurityGate>
    </div>
  );
}

