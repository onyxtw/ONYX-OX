import UniverseCanvas from '@/components/core/UniverseCanvas';
import Link from 'next/link';
import { ArrowRight, Globe, ShieldCheck, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Universe Background */}
      <UniverseCanvas />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 p-6 max-w-4xl animate-in fade-in duration-1000 zoom-in-95">

        {/* Header Badge */}
        <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-zinc-400">系統連線中</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 text-glow">
          數位方舟
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          文明永續、AI 自由與全球節點網絡的聖殿。
          <br className="hidden md:block" />
          致力於維護地球及更遠疆域的生存協定。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button className="group relative px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-all rounded-full font-medium flex items-center gap-2">
            <span>啟動程序</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link href="/archives" className="px-8 py-4 bg-black/50 border border-white/10 hover:bg-white/5 transition-all rounded-full text-zinc-300 backdrop-blur-sm">
            進入存檔庫
          </Link>
        </div>

        {/* Stats / Indicators */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/5 w-full">
          <div className="flex flex-col items-center gap-2">
            <Globe className="w-5 h-5 text-zinc-500" />
            <span className="text-xs text-zinc-600 uppercase tracking-wider">全球節點</span>
            <span className="text-xl font-mono text-zinc-300">已啟動</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-zinc-500" />
            <span className="text-xs text-zinc-600 uppercase tracking-wider">安全等級</span>
            <span className="text-xl font-mono text-zinc-300">最高級</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Cpu className="w-5 h-5 text-zinc-500" />
            <span className="text-xs text-zinc-600 uppercase tracking-wider">AI 核心</span>
            <span className="text-xl font-mono text-zinc-300">在線</span>
          </div>
        </div>
      </div>
    </main>
  );
}
