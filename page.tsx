"use client";

import React, { useState, useEffect, Suspense, lazy } from 'react';

/**
 * BOLT BUILD ENGINE: EXTREME PRECISION MODE
 * SECURITY + INTEGRATION + ZERO-ERROR LOGIC
 */

// استدعاء النظام الأصلي ديناميكياً لتجنب أي فشل في البناء (Build)
const OriginalSystem = lazy(() => import('./original-system'));

export default function UnifiedSystemEntryPoint() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxy7Xv3qEFEel1lJJAz7w-uoW3F7k9AL_ODdrb2osAqcVTNJnBBukY67FwV_zB8ABoyiQ/exec";

  const handleAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === "info@onepage.sa") {
      setLoading(true);
      try {
        // إرسال الإشعار فوراً إلى alzamzami102@gmail.com
        await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors' });
        setIsAuthorized(true);
      } catch (e) {
        setIsAuthorized(true); // ضمان الدخول للمالك حتى عند فشل الشبكة
      }
    } else {
      alert("⚠️ الوصول غير مصرح به");
    }
    setLoading(false);
  };

  // 1. واجهة الحماية (تظهر أولاً)
  if (!isAuthorized) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#050505', direction: 'rtl', fontFamily: 'sans-serif' }}>
        <div style={{ padding: '40px', backgroundColor: '#0d0d0d', borderRadius: '20px', border: '1px solid #1a1a1a', textAlign: 'center', maxWidth: '400px', width: '90%' }}>
          <h1 style={{ color: '#ffd700', fontSize: '24px', marginBottom: '20px' }}>أوبرا المعدات</h1>
          <form onSubmit={handleAccess}>
            <input 
              type="email" 
              required
              placeholder="بريد الإدارة (info@...)" 
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#151515', color: '#fff', marginBottom: '20px', textAlign: 'center' }}
            />
            <button 
              type="submit" 
              disabled={loading}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#ffd700', color: '#000', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
            >
              {loading ? "جاري التوثيق..." : "دخول النظام"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. واجهة النظام الأصلي (تظهر بعد النجاح) بصفر أخطاء
  return (
    <Suspense fallback={<div style={{color: '#ffd700', textAlign: 'center', marginTop: '40vh'}}>جاري تحميل المحرك...</div>}>
      <OriginalSystem />
    </Suspense>
  );
}

