import { motion } from "motion/react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from "recharts";
import { useLanguage } from "../../lib/i18n/LanguageContext";

export function Stats() {
  const { t, dir } = useLanguage();
  
  const data = [
    { name: t('stats.role_cook'), [t('stats.chart_cc')]: 4, [t('stats.chart_classic')]: 24 },
    { name: t('stats.role_waiter'), [t('stats.chart_cc')]: 3, [t('stats.chart_classic')]: 20 },
    { name: t('stats.role_receptionist'), [t('stats.chart_cc')]: 5, [t('stats.chart_classic')]: 28 },
    { name: t('stats.role_maid'), [t('stats.chart_cc')]: 3, [t('stats.chart_classic')]: 18 },
    { name: t('stats.role_manager'), [t('stats.chart_cc')]: 6, [t('stats.chart_classic')]: 32 },
  ];

  return (
    <section className="bg-blue-bg border-t border-gray-100 py-16 px-6">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(30px,4vw,36px)] font-semibold text-[#082a41] leading-tight">{t('stats.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
             <span className="block text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-[-1px] text-gray-900">457+</span>
             <span className="block text-[clamp(16px,2vw,18px)] font-normal text-gray-500 mt-1">{t('stats.companies')}</span>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}>
             <span className="block text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-[-1px] text-blue-main">4 942+</span>
             <span className="block text-[clamp(16px,2vw,18px)] font-normal text-gray-500 mt-1">{t('stats.offers')}</span>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
             <span className="block text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-[-1px] text-gray-900">100%</span>
             <span className="block text-[clamp(16px,2vw,18px)] font-normal text-gray-500 mt-1">{t('stats.free')}</span>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
            <div className="text-sm font-bold text-gray-900">{t('stats.chart_title')}</div>
          </div>
          <div className="w-full h-[260px]" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <XAxis dataKey="name" axisLine={{ stroke: '#e5e7eb' }} tickLine={false} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} tickFormatter={(val) => `${val}j`} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '10px', fontSize: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="square" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey={t('stats.chart_cc')} fill="#0077B6" radius={[6, 6, 0, 0]} />
                <Bar dataKey={t('stats.chart_classic')} fill="#d1d5db" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
