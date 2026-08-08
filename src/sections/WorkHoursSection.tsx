import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { workHours } from '../data/workHours';

const WorkHoursSection: React.FC = () => {
  const [damascusTimeStr, setDamascusTimeStr] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentScheduleIdx, setCurrentScheduleIdx] = useState<number>(-1);

  useEffect(() => {
    const updateTime = () => {
      // Calculate Damascus time (UTC+3)
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const damascusDate = new Date(utc + 3600000 * 3);

      // Format time
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setDamascusTimeStr(timeFormatter.format(damascusDate));

      const dayIndex = damascusDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = damascusDate.getHours();
      const minutes = damascusDate.getMinutes();
      const timeVal = hours + minutes / 60;

      // Determine schedule index (workHours array starts on Monday: Mon=0, Tue=1, ..., Sat=5, Sun=6)
      const schedIdx = dayIndex === 0 ? 6 : dayIndex - 1;
      setCurrentScheduleIdx(schedIdx);

      // Check if open
      let open = false;
      if (dayIndex >= 1 && dayIndex <= 5) {
        // Monday - Friday (9:00 AM - 5:00 PM)
        open = timeVal >= 9 && timeVal < 17;
      } else if (dayIndex === 6) {
        // Saturday (1:00 PM - 8:00 PM)
        open = timeVal >= 13 && timeVal < 20;
      } else if (dayIndex === 0) {
        // Sunday (10:00 AM - 4:00 PM)
        open = timeVal >= 10 && timeVal < 16;
      }
      setIsOpen(open);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#FAFCFF] to-white section-pad relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#00D5FF]/3 glow-blur pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Direct Connection"
          title="Working Hours & Live Availability"
          subtitle="We ensure responsive, timely logistics. Check our schedule and connect with us in real-time."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Damascus Live Clock & Status (cols: 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-gradient-to-br from-[#091122] to-[#131E35] rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left text-white shadow-xl border border-white/5 relative overflow-hidden"
          >
            {/* Ambient background light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D5FF]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Clock size={16} className="text-[#00D5FF]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#A5F3FC]">Damascus HQ Time</span>
              </div>

              {/* Digital Clock */}
              <div className="text-3xl md:text-4xl font-black mb-4 font-mono text-white tracking-tight select-none">
                {damascusTimeStr || '00:00:00 AM'}
              </div>
              <p className="text-[11px] font-semibold text-blue-200/50 uppercase tracking-widest mb-8">
                GMT+3 Syrian Standard Time
              </p>
            </div>

            {/* Live Open/Closed Pulse Badge */}
            <div className="border-t border-white/10 pt-6 mt-4">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm uppercase tracking-wider">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <CheckCircle size={18} className="inline-block" />
                      <span>Open For Orders</span>
                    </div>
                    <p className="text-xs text-blue-100/70 font-semibold leading-relaxed">
                      Our dispatch teams and customer representatives are active. Call or email us!
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-amber-500 font-extrabold text-sm uppercase tracking-wider">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                      <AlertCircle size={18} className="inline-block" />
                      <span>Closed Now</span>
                    </div>
                    <p className="text-xs text-blue-100/70 font-semibold leading-relaxed">
                      The office is currently closed. Inquiries submitted via email will be processed first thing in the morning!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right panel: Schedule Table (cols: 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100/80 flex flex-col justify-center"
          >
            {/* Header */}
            <div className="gradient-primary px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Clock size={16} className="text-white" />
              </div>
              <span className="text-white text-xs font-black uppercase tracking-wider">Weekly Schedule</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100/70 p-2">
              {workHours.map((day, i) => {
                const isToday = i === currentScheduleIdx;
                return (
                  <div
                    key={day.day}
                    className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-300 ${
                      isToday
                        ? 'bg-[#0A5C8A]/5 border border-[#0A5C8A]/10'
                        : 'bg-transparent border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="text-[10px] font-black text-[#0A5C8A] bg-[#0A5C8A]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Today
                        </span>
                      )}
                      <span className={`text-xs font-extrabold ${isToday ? 'text-[#0A5C8A]' : 'text-slate-800'}`}>
                        {day.day}
                      </span>
                    </div>
                    <span className={`text-xs font-bold ${isToday ? 'text-[#0A5C8A]' : 'text-slate-500'}`}>
                      {day.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkHoursSection;
