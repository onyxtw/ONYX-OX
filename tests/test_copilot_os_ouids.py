import os
from pathlib import Path


REPO_ROOT = Path(os.environ.get("GITHUB_WORKSPACE", Path(__file__).resolve().parents[1]))


def test_copilot_os_ouids_structure_and_core_content():
    required_files = [
        "apps/web/app/layout.tsx",
        "apps/web/app/page.tsx",
        "apps/web/app/copilot-os/page.tsx",
        "apps/web/app/copilot-os/layout.tsx",
        "apps/web/app/copilot-os/components/sections/Hero.tsx",
        "apps/web/app/copilot-os/components/sections/SystemOverview.tsx",
        "apps/web/app/copilot-os/components/sections/DataPlane.tsx",
        "apps/web/app/copilot-os/components/sections/RuntimeMatrix.tsx",
        "apps/web/app/copilot-os/components/sections/SovereignCloud.tsx",
        "apps/web/app/copilot-os/components/sections/GovernanceLayer.tsx",
        "apps/web/app/copilot-os/components/ui/Card.tsx",
        "apps/web/app/copilot-os/components/ui/Grid.tsx",
        "apps/web/app/copilot-os/components/ui/Panel.tsx",
        "apps/web/app/copilot-os/components/ui/StatusBadge.tsx",
        "apps/web/app/copilot-os/components/ui/GlassContainer.tsx",
        "apps/web/app/copilot-os/components/ui/SectionHeader.tsx",
        "apps/web/app/copilot-os/components/ui/MetricTile.tsx",
        "apps/web/app/copilot-os/components/ui/DataList.tsx",
        "apps/web/app/copilot-os/lib/fetchRuntime.ts",
        "apps/web/app/copilot-os/lib/fetchGovernance.ts",
        "apps/web/app/copilot-os/lib/fetchCloud.ts",
        "apps/web/app/copilot-os/lib/fetchDataPlane.ts",
        "apps/web/app/copilot-os/styles/copilot-os.css",
        "apps/web/app/api/ops/runtime/route.ts",
        "apps/web/app/api/ops/governance/route.ts",
        "apps/web/app/api/ops/cloud/route.ts",
        "apps/web/app/api/ops/data-plane/route.ts",
        "docs/ui/onyx-ui-design-system.md",
    ]

    missing_files = [path for path in required_files if not (REPO_ROOT / path).exists()]
    assert not missing_files, f"Missing required files: {missing_files}"

    page_content = (REPO_ROOT / "apps/web/app/copilot-os/page.tsx").read_text()
    assert "Hero" in page_content
    assert "SystemOverview" in page_content
    assert "DataPlane" in page_content
    assert "RuntimeMatrix" in page_content
    assert "SovereignCloud" in page_content
    assert "GovernanceLayer" in page_content

    hero_content = (
        REPO_ROOT / "apps/web/app/copilot-os/components/sections/Hero.tsx"
    ).read_text()
    assert "ONYX COPILOT OS" in hero_content
    assert "Sovereign AI Operating Window" in hero_content

    css_content = (
        REPO_ROOT / "apps/web/app/copilot-os/styles/copilot-os.css"
    ).read_text()
    assert "backdrop-filter: blur(20px);" in css_content
    assert "background: rgba(255, 255, 255, 0.12);" in css_content
    assert "backdrop-filter: blur(12px);" in css_content
    assert ".ouids-status-active" in css_content
    assert ".ouids-status-idle" in css_content
    assert ".ouids-status-error" in css_content

    runtime_route_content = (
        REPO_ROOT / "apps/web/app/api/ops/runtime/route.ts"
    ).read_text()
    assert "NextResponse.json(runtimeFallback)" in runtime_route_content

    docs_content = (REPO_ROOT / "docs/ui/onyx-ui-design-system.md").read_text(encoding="utf-8")
    assert "## 1. 核心理念（Core Principles）" in docs_content
    assert "## 2. 色彩系統（Color System）" in docs_content
    assert "## 9. API Stub 資料結構（/api/ops/*）" in docs_content
