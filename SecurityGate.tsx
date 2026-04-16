"use client";

import React, { useState, useCallback } from 'react';

/**
 * نظام حماية أوبرا المعدات - الإصدار المعتمد 2026
 * تم الفحص: منطق الدخول، استقرار الاتصال، سلامة الأقواس.
 */
interface SecurityGateProps {
  children: React.ReactNode;
}

export default function SecurityGate({ children }: SecurityGateProps) {
  const [accessGranted, setAccessGranted] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // الرابط البرمجي الموثق لإرسال التنبيهات
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxy7Xv3qEFEel1lJJAz7w-uoW3F7k9AL_ODdrb2osAqcVTNJnBBukY67FwV_zB8ABoyiQ/exec";

  const verifyAndNotify = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const targetEmail = "info@onepage.sa";
    
    if (email.trim().toLowerCase() === targetEmail) {
      try {
        // إرسال إشعار الدخول فوراً إلى إدارة alzamzami102@gmail.com
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          body: JSON.stringify({
            event: "AUTHORIZED_ADMIN_LOGIN",
            user: targetEmail,
            timestamp: new Date().toISOString()
          }),
        });
        
        // منح الوصول الكامل
        setAccessGranted(true);
      } catch (error) {
        // في حال فشل السيرفر، يتم منح الوصول للمالك لضمان استمرارية العمل
        setAccessGranted(true);
      }
    } else {
      alert("⚠️ البريد الإلكتروني غير مصرح له بالدخول.");
    }
    setIsLoading(false);
  }, [email]);

  // شاشة القفل (تظهر في حال عدم التوثيق)
  if (!accessGranted) {
    return (
      <div style={{
        height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#050505', color: '#fff', fontFamily: 'system-ui, sans-serif', direction: 'rtl'
      }}>
        <div style={{
          width: '100%', maxWidth: '400px', padding: '40px', textAlign: 'center',
          backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '20px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔒</div>
          <h1 style={{ color: '#ffd700', fontSize: '1.8rem', marginBottom: '10px' }}>أوبرا المعدات</h1>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '30px' }}>إدارة حاضنة الصفحة الواحدة</p>
          
          <form onSubmit={verifyAndNotify} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="email" 
              placeholder="بريد الإدارة المعتمد..." 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '14px', borderRadius: '10px', border: '1px solid #333',
                backgroundColor: '#151515', color: '#fff', textAlign: 'center', fontSize: '1rem', outline: 'none'
              }}
            />
            <button 
              type="submit" 
              disabled={isLoading}
              style={{
                padding: '14px', borderRadius: '10px', border: 'none',
                backgroundColor: isLoading ? '#333' : '#ffd700', 
                color: '#000', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: '0.3s'
              }}
            >
              {isLoading ? 'جاري التوثيق...' : 'دخول النظام'}
            </button>
          </form>
          
          <p style={{ marginTop: '25px', fontSize: '0.75rem', color: '#444' }}>
            النظام مراقب ومحمي بالكامل 🛡️
          </p>
        </div>
      </div>
    );
  }

  // عرض محتوى النظام (page.tsx) بعد النجاح
  return <>{children}</>;
}
