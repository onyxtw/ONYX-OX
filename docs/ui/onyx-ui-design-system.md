# ONYX UI DESIGN SYSTEM（OUIDS）

Version: 1.0.0  
Purpose: 定義 ONYX COPILOT OS 與 ONYX-OX 的完整 UI 視覺語言、元件系統、透明立體風格、模組化結構。

## 1. 核心理念（Core Principles）

### 1.1 清透（Transparency）
- 介面如玻璃、水、晶體，永遠不阻擋世界，只是承載世界。
- 背景永遠可見，UI 是浮在其上的薄膜，而不是牆。

### 1.2 裸視立體（Naked Depth）
- 所有元素都有深度：陰影、層次、模糊、透視。
- 使用 blur、shadow、gradient 形成空間感，而不是平面卡片。

### 1.3 流線能量（Flow Lines）
- 線條不是裝飾，而是能量流、資料流、神經網路。
- 線條連接節點、模組、狀態，代表系統正在運作。

### 1.4 模組化（Modularity）
- 每個區塊都是一個模組：可獨立、可替換、可重組。
- UI = 模組矩陣，而不是固定版面。

### 1.5 主權語意（Sovereign Semantics）
- 所有 UI 元素都對應到主權層：Identity / Sentinel / Continuity / Runtime / Cloud / Data。
- 顏色、形狀、位置都有語意，而不是隨機美術。

### 1.6 無限延展（Infinite Extension）
- UI 不是一個頁面，而是一個入口，可以延伸到 VR/AR、宇宙、地球、航太。
- 設計語言要能在 2D / 3D / XR 中保持一致。

## 2. 色彩系統（Color System）

### Primary Palette
- ONYX Crystal White: `#F5F7FA`
- ONYX Deep Space: `#050814`
- ONYX Aqua Flux: `#00FFD4`
- ONYX Violet Core: `#7B61FF`

### Secondary Palette
- Sentinel Amber: `#FFC857`
- Continuity Blue: `#3A86FF`
- Identity Cyan: `#4ECDC4`
- Cloud Silver: `#E0E4EC`

### States
- Active: Aqua Flux + Glow
- Idle: White + Low Opacity
- Error: Deep Space + Red Accent `#FF3366`
- Warning: Amber + Soft Glow

### Background
- Gradient: Deep Space → Violet Core（斜向）
- Overlay: 低透明度黑色層，增加深度

## 3. 透明立體層次（Glass & Depth）

### Layer 0: Background Universe
- 深色漸層背景（Deep Space + Violet Core）
- 可加入微弱星點、噪點、柔和光暈

### Layer 1: Glass Planes
- 大面積透明面板（主視窗容器）
- `backdrop-filter: blur(20px)` + `rgba(255,255,255,0.12)`
- 圓角 20px，陰影柔和擴散

### Layer 2: Glass Cards
- 模組卡片（Panel / Card）
- `backdrop-filter: blur(12px)` + `rgba(255,255,255,0.18)`
- 圓角 16px，陰影較小

### Layer 3: Chips & Badges
- 狀態顯示（StatusBadge）
- 半透明背景 + 高飽和文字顏色

### Layer 4: Flow Lines & Nodes
- 使用 SVG 或 Canvas 畫出流線與節點
- 顏色：Aqua Flux / Violet Core
- 線條帶柔和光暈，節點帶微光

## 4. 排版系統（Layout System）

### Grid
- 主視窗：單欄（mobile）→ 雙欄（desktop）
- Section 間距：24–32px
- 卡片間距：16–24px

### Sections（/copilot-os）
- Hero：頂部全寬
- SystemOverview：次頂部全寬或雙欄
- DataPlane：左側或上方
- RuntimeMatrix：右側或下方
- SovereignCloud：中段
- GovernanceLayer：底部或右下

### Spacing
- Page Padding: 40px（desktop）/ 20px（mobile）
- Card Padding: 24px
- Section Margin: 24px

### Typography
- Title: 32–40px，粗體
- Section Title: 20–24px，粗體
- Body: 14–16px，正常
- Caption: 12px，半透明

## 5. 元件系統（Component System）

### 核心元件
- `GlassContainer`: 承載整個主視窗，使用 Layer 1 樣式
- `Card`: 基本資訊卡片，用於顯示單一模組或狀態
- `Panel`: 有標題的卡片，結構為 Title + Content
- `Grid`: 排版容器，支援 1–2 欄切換並可延伸為四格總覽
- `StatusBadge`: 顯示 active / idle / error / warning 狀態
- `SectionHeader`: 顯示區塊標題與簡短描述
- `DataList`: 顯示 key-value 資訊列表
- `MetricTile`: 顯示單一數值與狀態
- `FlowMap`（進階）：顯示節點與流線，未來可用 Three.js / SVG

## 6. 六大 Section 視覺規格（/copilot-os）

### Hero
- 位置：最上方，全寬
- 元件：Card + 狀態列
- 內容：
  - Title: `ONYX COPILOT OS`
  - Subtitle: `Sovereign AI Operating Window`
  - 狀態：Runtime / Identity / Sentinel

### SystemOverview
- 位置：Hero 下方
- 元件：Panel + Grid
- 內容：
  - 四個 Tile：Data Plane / Runtime Matrix / Sovereign Cloud / Governance Layer
  - 每個 Tile 顯示狀態與簡短描述

### DataPlane
- 元件：Panel + DataList + MetricTile
- 內容：
  - Data Sources
  - Vector Documents
  - Symbol Language Status
  - DB Connection Status

### RuntimeMatrix
- 元件：Panel + DataList + StatusBadge
- 內容：
  - Auto-Heal / Auto-Optimize / Auto-Maintain 狀態
  - 最近執行時間
  - 最近事件摘要

### SovereignCloud
- 元件：Panel + Grid + DataList
- 內容：
  - Azure / Fabric / GitHub 狀態
  - 部署版本
  - 資源健康度

### GovernanceLayer
- 元件：Panel + Grid + DataList
- 內容：
  - Identity：使用者、角色、權限
  - Sentinel：警示、遙測、稽核
  - Continuity：版本、部署歷史

## 7. 狀態與互動（States & Interactions）

### Hover
- 卡片略微提起：`transform: translateY(-2px)`
- 陰影加強
- 透明度略微提升

### Active
- StatusBadge 使用 Aqua Flux 與柔和光暈
- 卡片可額外增加淡邊框亮度

### Error
- StatusBadge 使用紅色提示
- 卡片底色可輕微偏紅，提示異常

### Loading
- 使用骨架或 shimmer 效果
- 保持透明感，不使用實色遮蓋

### Click
- 卡片未來可展開詳細資訊（Drawer / Modal）
- 保持主視窗不被遮蔽，細節於次視窗呈現

## 8. Implementation Notes

### 技術棧
- Next.js App Router
- TypeScript
- 原生 CSS（可延伸 utility class / animation libraries）
- 可選：Framer Motion、Three.js、WebXR

### 檔案建議
- `apps/web/app/copilot-os/styles/copilot-os.css`
- `apps/web/app/copilot-os/components/ui/*`
- `apps/web/app/copilot-os/components/sections/*`
- `apps/web/app/copilot-os/lib/*`
- `apps/web/app/api/ops/*`

### 命名建議
- 建議使用 `onyx-` 或 `ouids-` 前綴
- 範例：`ouids-glass-container`, `ouids-card`, `ouids-status-badge`

## 9. API Stub 資料結構（/api/ops/*）

### `/api/ops/runtime`

```json
{
  "status": "ok",
  "data": {
    "autoHeal": "active",
    "autoOptimize": "idle",
    "autoMaintain": "active",
    "lastRunAt": "2026-08-06T12:00:00Z"
  }
}
```

### `/api/ops/governance`

```json
{
  "status": "ok",
  "data": {
    "identity": {
      "currentUser": "admin@onyx.local",
      "roles": ["admin"],
      "permissions": ["read:pages", "write:pages", "deploy:services"]
    },
    "sentinel": {
      "alerts": 0,
      "lastEventAt": "2026-08-06T11:50:00Z"
    },
    "continuity": {
      "currentVersion": "1.0.0",
      "lastDeploymentAt": "2026-08-05T09:30:00Z"
    }
  }
}
```

### `/api/ops/cloud`

```json
{
  "status": "ok",
  "data": {
    "azure": {
      "status": "running",
      "region": "eastasia",
      "services": 3
    },
    "fabric": {
      "status": "idle",
      "workspaces": 1
    },
    "github": {
      "status": "running",
      "repos": 2
    }
  }
}
```

### `/api/ops/data-plane`

```json
{
  "status": "ok",
  "data": {
    "sources": 3,
    "vectors": 128,
    "symbolLanguage": "synced",
    "dbStatus": "connected"
  }
}
```

## 10. 完成標準（OUIDS v1.0）

1. `/copilot-os` 使用 OUIDS 色彩、層次與元件語言
2. 六大 Section 視覺一致且清透
3. UI 元件可重用、可擴充
4. 程式碼結構清晰（ui / sections / lib / styles）
5. 四個 `/api/ops/*` 端點可回傳指定 JSON 結構
6. 未來可在此基礎上加入 3D / XR，而不破壞現有語言
