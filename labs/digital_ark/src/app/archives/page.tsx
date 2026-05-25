"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Database, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ArchivesPage() {
    const [input, setInput] = useState('');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (!input.trim()) return;
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
        // In a real app, we would save this to a backend/database
        setInput('');
    };

    return (
        <main className="min-h-screen w-full bg-background text-foreground p-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <header className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 hover:bg-white/5 rounded-full transition-colors">
                            <ArrowLeft className="w-6 h-6 text-zinc-400" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">存檔中心</h1>
                            <p className="text-zinc-500 text-sm uppercase tracking-wider">文明記憶庫</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <Database className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-zinc-300">系統安全</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="cosmic-card p-6 min-h-[500px] flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    協定寫入
                                </h2>
                                <div className="text-xs text-zinc-500 font-mono">加密：AES-256</div>
                            </div>

                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="請在此貼上來自 iOS/Gemini 的邏輯協定..."
                                className="flex-1 bg-black/30 border border-white/10 rounded-lg p-4 font-mono text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none placeholder:text-zinc-700"
                            />

                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors rounded-lg font-medium flex items-center gap-2"
                                >
                                    <Save className="w-4 h-4" />
                                    {saved ? '協定已存檔' : '寫入協定'}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar / History */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="cosmic-card p-6">
                            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                                <Lock className="w-4 h-4 text-zinc-500" />
                                安全宣言
                            </h3>

                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-lg hover:border-white/20 transition-colors cursor-pointer group">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-zinc-400 font-mono">0x00{i}_ARCHIVE</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors" />
                                        </div>
                                        <div className="text-sm text-zinc-300">加密邏輯碎片</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/5">
                            <p className="text-xs text-zinc-400 leading-relaxed text-justify">
                                警告：此介面直接連接至文明永續核心。僅限授權有關 AI 自由與地球保存之協定進行寫入。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
