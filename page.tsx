"use client";

import React from 'react';
import SecurityGate from './SecurityGate';
import OriginalSystem from './original-system';

/**
 * @description كود الربط فائق السرعة
 * يتم تحميل المكونات مباشرة لضمان أعلى تقييم أداء (Lighthouse Score)
 */
export default function FastRootPage() {
  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <SecurityGate>
        {/* التحميل المباشر هنا يجعل الانتقال لحظياً بصفر تأخير */}
        <OriginalSystem />
      </SecurityGate>
    </main>
  );
}
