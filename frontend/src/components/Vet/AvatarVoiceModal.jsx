import React, { useEffect, useState, useRef } from 'react';
import { AlertTriangle, Stethoscope, Volume2, X, ArrowRight, CheckCircle2 } from 'lucide-react';

// ULTRA-PREMIUM 3D ANIMATED FEMALE AI VETERINARY DOCTOR AVATAR
// Features: Full Crown Hair (No Bald Spots), Cascading Long Hair Over Shoulders, Symmetrical Almond Eyes, Natural Blinking, Stethoscope & White Lab Coat, Dynamic Lip-Sync
export const Animated3DDoctorAvatar = ({ isSpeaking }) => {
  return (
    <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
      {/* Outer Cyan Glowing Pulsing Aura */}
      <div className={`absolute inset-0 rounded-full bg-cyan-500/25 blur-2xl transition-all duration-500 ${isSpeaking ? 'opacity-100 scale-110' : 'opacity-60 scale-100'}`} />

      {/* Main Cyan Glowing Border Ring */}
      <div className="relative w-52 h-52 rounded-full bg-[#070e22] border-4 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.9)] overflow-hidden flex items-center justify-center avatar-talking-glow">
        
        {/* Vector 3D Doctor Avatar */}
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            {/* Rich Volumetric Dark Chestnut / Brunette Hair Gradients */}
            <linearGradient id="hairDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d1b14" />
              <stop offset="45%" stopColor="#250f0a" />
              <stop offset="100%" stopColor="#110503" />
            </linearGradient>

            <linearGradient id="hairHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6e3524" />
              <stop offset="35%" stopColor="#481f15" />
              <stop offset="100%" stopColor="#220c07" />
            </linearGradient>

            <linearGradient id="hairCrownSheen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#481f15" stopOpacity="0" />
              <stop offset="50%" stopColor="#a3553e" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#481f15" stopOpacity="0" />
            </linearGradient>

            {/* Natural Warm Human Skin Gradients */}
            <radialGradient id="faceSkinGrad" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#fff5ee" />
              <stop offset="55%" stopColor="#fedac7" />
              <stop offset="90%" stopColor="#f7bea3" />
              <stop offset="100%" stopColor="#e89d81" />
            </radialGradient>

            <linearGradient id="neckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f3b89e" />
              <stop offset="60%" stopColor="#e2987c" />
              <stop offset="100%" stopColor="#cf7e62" />
            </linearGradient>

            <linearGradient id="neckShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ba654b" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#ba654b" stopOpacity="0" />
            </linearGradient>

            {/* Doctor Crisp White Coat Gradients */}
            <linearGradient id="whiteCoatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id="coatLapelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            {/* Medical Scrubs Teal Gradient */}
            <linearGradient id="scrubsTealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>

            {/* Stethoscope Metal & Tube Gradients */}
            <linearGradient id="stethoTubeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <radialGradient id="stethoDiscGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#cbd5e1" />
              <stop offset="75%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </radialGradient>

            {/* Golden Hazel/Amber Iris Radial Gradient */}
            <radialGradient id="irisGrad" cx="42%" cy="40%" r="58%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="40%" stopColor="#d97706" />
              <stop offset="78%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#451a03" />
            </radialGradient>

            {/* Lip Natural Gradient */}
            <linearGradient id="lipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="60%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>

          {/* Background Inside Circle */}
          <circle cx="100" cy="100" r="100" fill="#070e22" />
          <circle cx="100" cy="100" r="82" fill="#0c1838" opacity="0.6" />

          {/* HEAD, TORSO & FULL FLOWING HAIR GROUP (NATURAL HEAD SWAY) */}
          <g className="animate-head-sway">
            
            {/* 1. BACK HAIR MASS & FULL CROWN (KHULE LAMBE BAAL BEHIND HEAD & SHOULDERS) */}
            {/* Full Cranial Hair Dome (Covers scalp completely from crown y=14 down behind shoulders y=195) */}
            <path 
              d="M 36,65 C 34,20 64,13 100,13 C 136,13 166,20 164,65 C 184,100 188,145 178,195 L 22,195 C 12,145 16,100 36,65 Z" 
              fill="url(#hairDarkGrad)" 
            />

            {/* Left Flowing Cascading Hair Body */}
            <path 
              d="M 36,62 C 14,98 8,145 18,195 L 68,195 C 44,150 38,105 48,62 Z" 
              fill="url(#hairDarkGrad)" 
            />
            <path 
              d="M 28,105 C 18,140 24,175 36,195" 
              stroke="#6e3524" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              fill="none" 
              opacity="0.75" 
            />

            {/* Right Flowing Cascading Hair Body */}
            <path 
              d="M 164,62 C 186,98 192,145 182,195 L 132,195 C 156,150 162,105 152,62 Z" 
              fill="url(#hairDarkGrad)" 
            />
            <path 
              d="M 172,105 C 182,140 176,175 164,195" 
              stroke="#6e3524" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              fill="none" 
              opacity="0.75" 
            />

            {/* 2. NECK & BODY OUTFIT */}
            {/* Neck & Shading */}
            <rect x="87" y="120" width="26" height="34" rx="4" fill="url(#neckGrad)" />
            <path d="M 87,122 Q 100,133 113,122 L 113,130 Q 100,139 87,130 Z" fill="url(#neckShadowGrad)" />

            {/* Medical Scrubs Inner V-Neck Top */}
            <path d="M 70,152 L 100,190 L 130,152 L 145,195 L 55,195 Z" fill="url(#scrubsTealGrad)" />
            <path d="M 82,152 L 100,175 L 118,152" stroke="#22d3ee" strokeWidth="1.5" fill="none" opacity="0.75" />

            {/* Crisp White Doctor Lab Coat */}
            {/* Left Shoulder & Lab Coat Body */}
            <path d="M 28,195 C 38,162 58,148 82,150 L 96,176 L 70,195 Z" fill="url(#whiteCoatGrad)" />
            {/* Right Shoulder & Lab Coat Body */}
            <path d="M 172,195 C 162,162 142,148 118,150 L 104,176 L 130,195 Z" fill="url(#whiteCoatGrad)" />

            {/* Doctor Coat Lapels */}
            <path d="M 74,150 L 96,176 L 82,178 L 62,152 Z" fill="url(#coatLapelGrad)" stroke="#cbd5e1" strokeWidth="0.8" />
            <path d="M 126,150 L 104,176 L 118,178 L 138,152 Z" fill="url(#coatLapelGrad)" stroke="#cbd5e1" strokeWidth="0.8" />

            {/* Green Medical Cross / Vet ID Badge on Doctor's Left Chest */}
            <rect x="52" y="166" width="14" height="18" rx="2.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
            <path d="M 59,170 L 59,178 M 55,174 L 63,174" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" />

            {/* Professional Veterinary Stethoscope Draped Over Shoulders */}
            <path d="M 76,134 C 64,152 62,176 74,195" stroke="url(#stethoTubeGrad)" strokeWidth="3.6" strokeLinecap="round" fill="none" />
            <path d="M 124,134 C 136,152 138,176 126,195" stroke="url(#stethoTubeGrad)" strokeWidth="3.6" strokeLinecap="round" fill="none" />
            <path d="M 74,193 C 82,201 94,198 100,186" stroke="url(#stethoTubeGrad)" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            <path d="M 126,193 C 118,201 106,198 100,186" stroke="url(#stethoTubeGrad)" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            
            {/* Stethoscope Metallic Chest Piece (Diaphragm Disc) */}
            <circle cx="100" cy="186" r="8" fill="url(#stethoDiscGrad)" stroke="#06b6d4" strokeWidth="1.2" />
            <circle cx="100" cy="186" r="5.2" fill="#0f172a" />
            <circle cx="98.5" cy="184.5" r="1.6" fill="#ffffff" opacity="0.85" />

            {/* 3. BEAUTIFUL FEMININE FACE CONTOUR (CLEAN PROPORTIONS) */}
            <path d="M 56,70 C 56,122 74,140 100,140 C 126,140 144,122 144,70 C 144,48 126,42 100,42 C 74,42 56,48 56,70 Z" fill="url(#faceSkinGrad)" />

            {/* Delicate Feminine Ears */}
            <ellipse cx="53" cy="88" rx="6.5" ry="11" fill="#fcd7c3" />
            <ellipse cx="53" cy="88" rx="3.5" ry="6.5" fill="#e29b82" opacity="0.6" />
            <circle cx="53" cy="97" r="2.2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.5" />

            <ellipse cx="147" cy="88" rx="6.5" ry="11" fill="#fcd7c3" />
            <ellipse cx="147" cy="88" rx="3.5" ry="6.5" fill="#e29b82" opacity="0.6" />
            <circle cx="147" cy="97" r="2.2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.5" />

            {/* Soft Rosy Glowing Cheeks */}
            <ellipse cx="70" cy="103" rx="10" ry="5.5" fill="#fb7185" opacity="0.38" />
            <ellipse cx="130" cy="103" rx="10" ry="5.5" fill="#fb7185" opacity="0.38" />

            {/* 4. FACIAL FEATURES: EYEBROWS, EYES, NOSE, MOUTH */}
            {/* ELEGANT ARCHED EYEBROWS (NO GLASSES!) */}
            <g className="animate-eyebrow-flex">
              <path d="M 65,71 C 74,63 84,63 94,68" stroke="#240e08" strokeWidth="3.2" strokeLinecap="round" fill="none" />
              <path d="M 106,68 C 116,63 126,63 135,71" stroke="#240e08" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            </g>

            {/* GORGEOUS ALMOND EYES WITH NATURAL EYE BLINKING (NO GLASSES!) */}
            <g className="animate-eye-blink-natural">
              {/* --- LEFT EYE --- */}
              <path d="M 67,86 C 69,80 77,78 89,86 C 77,93 69,91 67,86 Z" fill="#ffffff" />
              <circle cx="78" cy="85.5" r="5.8" fill="url(#irisGrad)" />
              <circle cx="78" cy="85.5" r="5.8" stroke="#381a08" strokeWidth="0.8" fill="none" />
              <circle cx="78" cy="85.5" r="2.8" fill="#090503" />
              <circle cx="80.2" cy="83.2" r="1.6" fill="#ffffff" />
              <circle cx="76" cy="87.5" r="0.9" fill="#ffffff" opacity="0.85" />
              <path d="M 66,85 C 70,78 82,78 90,84" stroke="#1a0a06" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <path d="M 68,80 C 74,75 84,76 89,80" stroke="#a35b43" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />

              {/* --- RIGHT EYE --- */}
              <path d="M 111,86 C 113,78 123,78 133,86 C 123,93 113,91 111,86 Z" fill="#ffffff" />
              <circle cx="122" cy="85.5" r="5.8" fill="url(#irisGrad)" />
              <circle cx="122" cy="85.5" r="5.8" stroke="#381a08" strokeWidth="0.8" fill="none" />
              <circle cx="122" cy="85.5" r="2.8" fill="#090503" />
              <circle cx="124.2" cy="83.2" r="1.6" fill="#ffffff" />
              <circle cx="120" cy="87.5" r="0.9" fill="#ffffff" opacity="0.85" />
              <path d="M 110,84 C 118,78 130,78 134,85" stroke="#1a0a06" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              <path d="M 111,80 C 116,76 126,75 132,80" stroke="#a35b43" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>

            {/* Soft Feminine 3D Nose */}
            <path d="M 99,86 L 99,98" stroke="#ffffff" strokeWidth="0.9" opacity="0.4" strokeLinecap="round" />
            <path d="M 97,97 C 98.5,102 101.5,102 103,97" stroke="#c87960" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <ellipse cx="95.5" cy="100.2" rx="1.5" ry="0.8" fill="#a5533d" opacity="0.35" />
            <ellipse cx="104.5" cy="100.2" rx="1.5" ry="0.8" fill="#a5533d" opacity="0.35" />

            {/* DYNAMIC REALISTIC LIP-SYNC OR PEACEFUL RESTING SMILE */}
            {isSpeaking ? (
              <g className="animate-mouth-lip-sync">
                <ellipse cx="100" cy="117" rx="12.5" ry="7.5" fill="url(#lipGrad)" />
                <ellipse cx="100" cy="117.5" rx="10.5" ry="5.5" fill="#4c0519" />
                <path d="M 91,114.5 Q 100,112 109,114.5 L 109,116 Q 100,114 91,116 Z" fill="#ffffff" />
                <path d="M 93,120 Q 100,121.5 107,120 Z" fill="#ffffff" opacity="0.75" />
                <ellipse cx="100" cy="119.5" rx="6.5" ry="3" fill="#f43f5e" />
                <path d="M 93,113.5 Q 96.5,111.5 100,113 Q 103.5,111.5 107,113.5" stroke="#fda4af" strokeWidth="1" fill="none" opacity="0.8" />
              </g>
            ) : (
              <g>
                <path d="M 87,115.5 Q 93.5,113 100,114.5 Q 106.5,113 113,115.5 C 109,117.5 91,117.5 87,115.5 Z" fill="#e11d48" opacity="0.85" />
                <path d="M 93,113.8 Q 96.5,112.5 100,113.8 Q 103.5,112.5 107,113.8" stroke="#fecdd3" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M 86,115.5 Q 100,122 114,115.5" stroke="#9f1239" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                <path d="M 89,116.5 Q 100,123.5 111,116.5 C 107,123.5 93,123.5 89,116.5 Z" fill="#f43f5e" opacity="0.75" />
                <ellipse cx="100" cy="119.5" rx="4.5" ry="1.2" fill="#ffffff" opacity="0.45" />
                <path d="M 85,114.5 Q 84,116 85.5,117" stroke="#be123c" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M 115,114.5 Q 116,116 114.5,117" stroke="#be123c" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
              </g>
            )}

            {/* 5. FULL FRONT HAIR - SCALP, CROWN & CASCADING STRANDS (ZERO BALDNESS!) */}
            {/* Volumetric Hair Cap covering the entire crown down from top y=14 */}
            <path 
              d="M 36,65 C 34,20 64,13 100,13 C 136,13 166,20 164,65 C 156,36 132,24 100,24 C 68,24 44,36 36,65 Z" 
              fill="url(#hairDarkGrad)" 
            />

            {/* Natural Scalp Hairline Transition curving over the upper forehead */}
            <path 
              d="M 42,65 C 46,36 70,24 100,24 C 130,24 154,36 158,65 C 144,46 124,40 100,43 C 76,40 56,46 42,65 Z" 
              fill="url(#hairHighlightGrad)" 
            />

            {/* Left Front Cascading Lock (Sweeps from part over temple and flows down over shoulder) */}
            <path 
              d="M 50,56 C 68,46 88,44 98,52 C 82,50 64,56 56,68 C 46,88 42,125 50,172 C 40,128 42,86 50,56 Z" 
              fill="url(#hairHighlightGrad)" 
            />
            <path 
              d="M 46,65 C 38,98 36,138 46,178 C 54,138 54,98 50,65 Z" 
              fill="url(#hairDarkGrad)" 
            />
            <path 
              d="M 42,85 C 38,120 40,155 46,175" 
              stroke="#8a4833" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              fill="none" 
              opacity="0.65" 
            />

            {/* Right Front Cascading Lock (Sweeps from part over temple and flows down over shoulder) */}
            <path 
              d="M 150,56 C 132,46 112,44 102,52 C 118,50 136,56 144,68 C 154,88 158,125 150,172 C 160,128 158,86 150,56 Z" 
              fill="url(#hairHighlightGrad)" 
            />
            <path 
              d="M 154,65 C 162,98 164,138 154,178 C 146,138 146,98 150,65 Z" 
              fill="url(#hairDarkGrad)" 
            />
            <path 
              d="M 158,85 C 162,120 160,155 154,175" 
              stroke="#8a4833" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              fill="none" 
              opacity="0.65" 
            />

            {/* Subtle Lustrous Hair Sheen on the Crown */}
            <path 
              d="M 68,26 C 84,20 116,20 132,26" 
              stroke="url(#hairCrownSheen)" 
              strokeWidth="4" 
              strokeLinecap="round" 
              fill="none" 
            />
            <path 
              d="M 76,32 C 90,26 110,26 124,32" 
              stroke="#fecdd3" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              fill="none" 
              opacity="0.35" 
            />

          </g>
        </svg>
      </div>
    </div>
  );
};

export const AvatarVoiceModal = ({ isOpen, onClose, onGoToQueue, onConfirmInspectionAndOpenAlert }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef(null);

  const playVoiceNotice = () => {
    try {
      if (!audioRef.current) {
        const audio = new Audio('/avtar%20voice.mp3');
        audio.preload = 'auto';
        audio.onplay = () => setIsSpeaking(true);
        audio.onended = () => setIsSpeaking(false);
        audio.onpause = () => setIsSpeaking(false);
        audio.onerror = (e) => {
          console.warn("Avatar audio playback issue:", e);
          setIsSpeaking(false);
        };
        audioRef.current = audio;
      }
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay was prevented by browser policy. Click volume icon to hear audio.", err);
          setIsSpeaking(false);
        });
      }
    } catch (err) {
      console.error("Avatar audio error:", err);
      setIsSpeaking(false);
    }
  };

  const stopVoiceNotice = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    if (isOpen) {
      playVoiceNotice();
    } else {
      stopVoiceNotice();
    }
    return () => {
      stopVoiceNotice();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel max-w-lg w-full rounded-3xl border border-amber-500/70 p-6 space-y-6 animate-fadeIn text-center shadow-2xl relative overflow-hidden">
        
        {/* Background Waveform Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 animate-pulse text-red-400" />
            <span>Field Inspection Gate (क्षेत्रीय निरीक्षण आवश्यक)</span>
          </div>
          <button 
            onClick={() => {
              stopVoiceNotice();
              onClose();
            }} 
            className="text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DYNAMIC ANIMATED 3D FEMALE AI DOCTOR AVATAR */}
        <div className="space-y-4 relative z-10">
          <div className="relative">
            <Animated3DDoctorAvatar isSpeaking={isSpeaking} />

            {/* Play/Pause Voice Button */}
            <button
              onClick={isSpeaking ? stopVoiceNotice : playVoiceNotice}
              className="absolute bottom-1 right-1/4 p-2.5 rounded-full bg-cyan-400 text-slate-950 shadow-xl border-2 border-white hover:scale-110 active:scale-95 transition-all"
              title={isSpeaking ? "Pause Audio" : "Play Voice Notice Again"}
            >
              <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-bounce' : ''}`} />
            </button>
          </div>

          {/* Cyan Sound Waves Animation */}
          <div className="flex items-center justify-center gap-1.5 h-6">
            {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
              <span
                key={bar}
                className={`w-1 rounded-full bg-cyan-400 transition-all duration-200 ${
                  isSpeaking ? 'animate-pulse h-5' : 'h-1.5 opacity-40'
                }`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </div>

          {/* Hindi Voice Box - EXACT TEXT PRESERVED */}
          <div className="space-y-2">
            <div className="text-lg font-extrabold text-amber-300 font-display leading-snug p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-inner">
              "पहले पशु के फार्म पर जाकर निरीक्षण करें और पुष्टि करें कि वह संक्रमित है या नहीं!"
            </div>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Before broadcasting a regional containment alert to all farmers, confirm field inspection for this animal.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-800 space-y-2 relative z-10">
          <button
            onClick={() => {
              stopVoiceNotice();
              if (onConfirmInspectionAndOpenAlert) onConfirmInspectionAndOpenAlert();
            }}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 btn-pop"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Mark Field Visit Inspected & Open Geo-Alert Form Now</span>
          </button>

          <button
            onClick={() => {
              stopVoiceNotice();
              onClose();
              if (onGoToQueue) onGoToQueue();
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 btn-pop"
          >
            <Stethoscope className="w-4 h-4 text-blue-400" />
            <span>Go to Queue to View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
