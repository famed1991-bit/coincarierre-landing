import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from "recharts";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { useRef, useEffect } from "react";

function Counter({ from, to, suffix = "", duration = 2.5, delay = 0 }: { from: number, to: number, suffix?: string, duration?: number, delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString('fr-FR').replace(',', ' ') + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, delay, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  const { t, dir } = useLanguage();
  
  const data = [
    { name: t('stats.role_cook'), [t('stats.chart_cc')]: 4, [t('stats.chart_classic')]: 24 },
    { name: t('stats.role_waiter'), [t('stats.chart_cc')]: 3, [t('stats.chart_classic')]: 20 },
    { name: t('stats.role_receptionist'), [t('stats.chart_cc')]: 5, [t('stats.chart_classic')]: 28 },
    { name: t('stats.role_maid'), [t('stats.chart_cc')]: 3, [t('stats.chart_classic')]: 18 },
    { name: t('stats.role_manager'), [t('stats.chart_cc')]: 6, [t('stats.chart_classic')]: 32 },
  ];

  const chartRef = useRef<HTMLDivElement>(null);
  const isChartInView = useInView(chartRef, { once: true, margin: "-50px" });

  return (
    <section className="bg-blue-bg pb-16 pt-4 px-6 relative z-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(28px,4vw,34px)] font-bold text-[#082a41] leading-tight">{t('stats.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Numbers Card */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm flex flex-col justify-center gap-8 text-center">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
               <span className="block text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
                 <Counter from={0} to={457} suffix="+" />
               </span>
               <span className="block text-base lg:text-lg font-medium text-gray-500 mt-2">{t('stats.companies')}</span>
            </motion.div>
            
            <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full"></div>
            
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}>
               <span className="block text-4xl lg:text-5xl font-black tracking-tight text-[#0077b6]">
                 <Counter from={0} to={4942} suffix="+" delay={0.1} />
               </span>
               <span className="block text-base lg:text-lg font-medium text-gray-500 mt-2">{t('stats.offers')}</span>
            </motion.div>
            
            <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full"></div>
            
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
               <span className="block text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
                 <Counter from={0} to={100} suffix="%" delay={0.2} />
               </span>
               <span className="block text-base lg:text-lg font-medium text-gray-500 mt-2">{t('stats.free')}</span>
            </motion.div>
          </div>

          {/* Chart Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 p-6 lg:p-8 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="text-base font-bold text-gray-900">{t('stats.chart_title')}</div>
            </div>
            <div ref={chartRef} className="w-full flex-1 min-h-[280px]" dir="ltr">
              {isChartInView && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                    <XAxis dataKey="name" axisLine={{ stroke: '#e5e7eb' }} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(val) => `${val}j`} />
                    <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '12px', fontSize: '13px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 500 }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '15px' }} />
                    <Bar dataKey={t('stats.chart_cc')} fill="#0077B6" radius={[6, 6, 0, 0]} maxBarSize={50} animationDuration={1500} animationEasing="ease-out" />
                    <Bar dataKey={t('stats.chart_classic')} fill="#879098" radius={[6, 6, 0, 0]} maxBarSize={50} animationDuration={1500} animationEasing="ease-out" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
