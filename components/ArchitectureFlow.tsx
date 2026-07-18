"use client";

import {
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import {
  Archive,
  Bot,
  Boxes,
  Brain,
  Building2,
  ChartBar,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Layers,
  Package,
  Plug,
  Search,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { memo, useEffect, useMemo, useState } from "react";

type NodeTone =
  | "system"
  | "brand"
  | "layer"
  | "ai"
  | "agent"
  | "orchestration"
  | "app";

type ArchitectureNodeData = {
  accent?: string;
  caption?: string;
  icon: LucideIcon;
  label: string;
  logo?: boolean;
  tone: NodeTone;
};

type ArchitectureNode = Node<ArchitectureNodeData, "architecture">;

const nodeOrigin: [number, number] = [0.5, 0.5];

const systemNodes: ArchitectureNode[] = [
  {
    id: "erp",
    type: "architecture",
    position: { x: 120, y: 86 },
    data: { icon: Database, label: "ERP systems", tone: "system" },
  },
  {
    id: "crm",
    type: "architecture",
    position: { x: 310, y: 86 },
    data: { icon: Users, label: "CRM systems", tone: "system" },
  },
  {
    id: "hr",
    type: "architecture",
    position: { x: 500, y: 86 },
    data: { icon: Building2, label: "HR systems", tone: "system" },
  },
  {
    id: "supply",
    type: "architecture",
    position: { x: 690, y: 86 },
    data: { icon: Package, label: "Supply chain", tone: "system" },
  },
  {
    id: "docs",
    type: "architecture",
    position: { x: 880, y: 86 },
    data: { icon: FileText, label: "Documents", tone: "system" },
  },
  {
    id: "apps",
    type: "architecture",
    position: { x: 1070, y: 86 },
    data: { icon: Boxes, label: "Custom apps", tone: "system" },
  },
];

const coreNodes: ArchitectureNode[] = [
  {
    id: "unity-core",
    type: "architecture",
    position: { x: 600, y: 236 },
    data: {
      caption: "Business graph + API spine",
      icon: Layers,
      label: "UnityAlgo Core",
      logo: true,
      tone: "brand",
    },
  },
  {
    id: "adapter",
    type: "architecture",
    position: { x: 600, y: 338 },
    data: { icon: Plug, label: "Adapter layer", caption: "Connectors, sync jobs, imports", tone: "layer" },
  },
  {
    id: "transform",
    type: "architecture",
    position: { x: 600, y: 430 },
    data: { icon: Workflow, label: "Transformation service", caption: "Normalize messy operational data", tone: "layer" },
  },
  {
    id: "graph",
    type: "architecture",
    position: { x: 600, y: 522 },
    data: { icon: GitBranch, label: "Knowledge graph", caption: "Customers, stock, ledgers, approvals", tone: "layer" },
  },
  {
    id: "agent-pool",
    type: "architecture",
    position: { x: 312, y: 614 },
    data: { icon: Bot, label: "AI agent pool", caption: "Reusable task agents", tone: "agent" },
  },
  {
    id: "ai-core",
    type: "architecture",
    position: { x: 600, y: 646 },
    data: { icon: Brain, label: "AI rule core", caption: "Reasoning with guardrails", tone: "ai" },
  },
  {
    id: "audit",
    type: "architecture",
    position: { x: 600, y: 772 },
    data: { icon: ShieldCheck, label: "Audit controls", caption: "Permissions, trails, policy checks", tone: "layer" },
  },
  {
    id: "orchestration",
    type: "architecture",
    position: { x: 600, y: 868 },
    data: { icon: Cpu, label: "Orchestration engine", caption: "Routes work to teams and automations", tone: "orchestration" },
  },
];

const appNodes: ArchitectureNode[] = [
  {
    id: "app-store",
    type: "architecture",
    position: { x: 92, y: 1018 },
    data: { accent: "#ef5f36", icon: Archive, label: "AI app store", tone: "app" },
  },
  {
    id: "search",
    type: "architecture",
    position: { x: 346, y: 1018 },
    data: { accent: "#b74ee8", icon: Search, label: "Enterprise search", tone: "app" },
  },
  {
    id: "dashboards",
    type: "architecture",
    position: { x: 600, y: 1018 },
    data: { accent: "#5ca832", icon: ChartBar, label: "Intelligent dashboards", tone: "app" },
  },
  {
    id: "automation",
    type: "architecture",
    position: { x: 854, y: 1018 },
    data: { accent: "#ee5a9e", icon: Zap, label: "Process automation", tone: "app" },
  },
  {
    id: "insights",
    type: "architecture",
    position: { x: 1108, y: 1018 },
    data: { accent: "#2a9df4", icon: ShoppingCart, label: "Predictive insights", tone: "app" },
  },
];

const architectureNodes: ArchitectureNode[] = [...systemNodes, ...coreNodes, ...appNodes];

const compactPositions: Record<string, { x: number; y: number }> = {
  erp: { x: 180, y: 82 },
  crm: { x: 540, y: 82 },
  hr: { x: 180, y: 178 },
  supply: { x: 540, y: 178 },
  docs: { x: 180, y: 274 },
  apps: { x: 540, y: 274 },
  "unity-core": { x: 360, y: 408 },
  adapter: { x: 360, y: 526 },
  transform: { x: 360, y: 628 },
  graph: { x: 360, y: 730 },
  "agent-pool": { x: 178, y: 836 },
  "ai-core": { x: 360, y: 862 },
  audit: { x: 360, y: 1016 },
  orchestration: { x: 360, y: 1124 },
  "app-store": { x: 180, y: 1262 },
  search: { x: 540, y: 1262 },
  dashboards: { x: 360, y: 1366 },
  automation: { x: 180, y: 1470 },
  insights: { x: 540, y: 1470 },
};

const edgeColor = {
  neutral: "rgba(31, 29, 26, 0.22)",
  brand: "rgba(140, 24, 27, 0.42)",
  orange: "#ef5f36",
  purple: "#b74ee8",
  green: "#5ca832",
  pink: "#ee5a9e",
  blue: "#2a9df4",
};

function edge(
  id: string,
  source: string,
  target: string,
  color = edgeColor.neutral,
  animated = false,
  sourceHandle = "bottom",
  targetHandle = "top"
): Edge {
  return {
    id,
    source,
    target,
    sourceHandle,
    targetHandle,
    animated,
    type: "default",
    markerEnd: {
      color,
      height: 16,
      type: MarkerType.ArrowClosed,
      width: 16,
    },
    style: {
      stroke: color,
      strokeWidth: animated ? 1.9 : 1.25,
    },
  };
}

const architectureEdges: Edge[] = [
  ...systemNodes.map((node) => edge(`${node.id}-to-core`, node.id, "unity-core")),
  edge("core-to-adapter", "unity-core", "adapter", edgeColor.brand, true),
  edge("adapter-to-transform", "adapter", "transform", edgeColor.brand, true),
  edge("transform-to-graph", "transform", "graph", edgeColor.brand, true),
  edge("graph-to-ai", "graph", "ai-core", edgeColor.brand, true),
  edge("agent-to-ai", "agent-pool", "ai-core", edgeColor.neutral, true, "right", "left"),
  edge("ai-to-audit", "ai-core", "audit", edgeColor.brand, true),
  edge("audit-to-orchestration", "audit", "orchestration", edgeColor.brand, true),
  edge("orchestration-to-store", "orchestration", "app-store", edgeColor.orange, true),
  edge("orchestration-to-search", "orchestration", "search", edgeColor.purple, true),
  edge("orchestration-to-dashboards", "orchestration", "dashboards", edgeColor.green, true),
  edge("orchestration-to-automation", "orchestration", "automation", edgeColor.pink, true),
  edge("orchestration-to-insights", "orchestration", "insights", edgeColor.blue, true),
];

const ArchitectureFlowNode = memo(function ArchitectureFlowNode({
  data,
}: NodeProps<ArchitectureNode>) {
  const Icon = data.icon;
  const style = {
    "--flow-accent": data.accent ?? "var(--color-accent)",
  } as CSSProperties;

  return (
    <div className={`flow-node flow-node--${data.tone}`} style={style}>
      <Handle id="top" type="target" position={Position.Top} className="architecture-handle" />
      <Handle id="bottom" type="source" position={Position.Bottom} className="architecture-handle" />
      <Handle id="left" type="target" position={Position.Left} className="architecture-handle" />
      <Handle id="right" type="source" position={Position.Right} className="architecture-handle" />

      <span className="flow-node-icon" aria-hidden="true">
        {data.logo ? (
          <Image src="/logo.png" alt="" width={34} height={34} className="object-contain" />
        ) : (
          <Icon size={18} strokeWidth={1.9} />
        )}
      </span>
      <span className="flow-node-copy">
        <strong>{data.label}</strong>
        {data.caption ? <span>{data.caption}</span> : null}
      </span>
    </div>
  );
});

const nodeTypes = {
  architecture: ArchitectureFlowNode,
};

function useCompactFlow() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isCompact;
}

export function ArchitectureFlow() {
  const isCompact = useCompactFlow();
  const nodes = useMemo(
    () =>
      isCompact
        ? architectureNodes.map((node) => ({
            ...node,
            position: compactPositions[node.id] ?? node.position,
          }))
        : architectureNodes,
    [isCompact]
  );
  const edges = useMemo(() => architectureEdges, []);

  return (
    <div className="architecture-flow" aria-label="UnityAlgo enterprise AI architecture map">
      <ReactFlow
        key={isCompact ? "compact-architecture-flow" : "desktop-architecture-flow"}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodeOrigin={nodeOrigin}
        fitView
        fitViewOptions={{ padding: isCompact ? 0.04 : 0.08 }}
        minZoom={0.2}
        maxZoom={1.2}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          color="rgba(31, 29, 26, 0.09)"
          gap={58}
          lineWidth={1}
          variant={BackgroundVariant.Lines}
        />
      </ReactFlow>
    </div>
  );
}
