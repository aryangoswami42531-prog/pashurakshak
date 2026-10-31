import React, { useEffect, useState, useRef } from 'react';
import { Volume2, X, CheckCircle2 } from 'lucide-react';
import { Animated3DDoctorAvatar } from '../Vet/AvatarVoiceModal';

export const BiosecurityAlertModal = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-[999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 text-white">
      <div className="glass-panel max-w-lg w-full rounded-3xl border border-amber-500/70 p-6 space-y-6 animate-fadeIn text-center shadow-2xl relative overflow-hidden">
        
        {/* Background Waveform Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header - Clean Close Only */}
        <div className="flex items-center justify-end relative z-10">
          <button 
            onClick={() => {
              stopVoiceNotice();
              onClose();
            }} 
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DYNAMIC ANIMATED 3D AI DOCTOR AVATAR SPEAKING THE ELEVENLABS AUDIO */}
        <div className="space-y-4 relative z-10">
          <div className="relative">
            <Animated3DDoctorAvatar isSpeaking={isSpeaking} />

            {/* Play/Pause Voice Button */}
            <button
              onClick={isSpeaking ? stopVoiceNotice : playVoiceNotice}
              className="absolute bottom-1 right-1/4 p-3 rounded-full bg-cyan-400 text-slate-950 shadow-xl border-2 border-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title={isSpeaking ? "Pause Audio" : "Play Voice Notice Again"}
            >
              <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-bounce' : ''}`} />
            </button>
          </div>

          {/* Sound Waves Animation */}
          <div className="flex items-center justify-center gap-1.5 h-6">
            {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
              <span
                key={bar}
                className={`w-1.5 rounded-full bg-cyan-400 transition-all duration-200 ${
                  isSpeaking ? 'animate-pulse h-6' : 'h-2 opacity-40'
                }`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-slate-800 relative z-10">
          <button
            onClick={() => {
              stopVoiceNotice();
              onClose();
            }}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs shadow-xl shadow-emerald-600/30 btn-pop flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Acknowledge Biosecurity Notice & Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
