"use client";

import { motion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════════
// PART 1: LOGO COMPONENTS — 30 SOFTWARE COMPANIES
// ═══════════════════════════════════════════════════════════════════════════

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7">
      <rect x="0" y="0" width="11" height="11" fill="#F25022" />
      <rect x="13" y="0" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="13" width="11" height="11" fill="#00A4EF" />
      <rect x="13" y="13" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

function AWSLogo() {
  return (
    <svg viewBox="0 0 60 26" className="h-5 w-auto md:h-6">
      <text x="30" y="15" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="14" fill="#232F3E" letterSpacing="-0.5">aws</text>
      <path d="M8 19 Q30 26 52 19" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 17 L52 19 L49 21" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GoogleCloudLogo() {
  return (
    <svg viewBox="0 0 60 44" className="h-6 w-auto md:h-7">
      <path d="M22 24 C22 18 26 14 32 14 C36 14 39 16 41 19 L46 19 C46 12 40 6 32 6 C22 6 14 14 14 24 C14 34 22 42 32 42" fill="none" stroke="#4285F4" strokeWidth="4" strokeLinecap="round" />
      <path d="M41 19 L46 19 L46 14 L41 14 Z" fill="#34A853" />
      <path d="M32 42 C26 42 20 38 18 32 L23 32 C24 35 27 37 32 37" fill="none" stroke="#EA4335" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 32 L18 37 L23 37" fill="none" stroke="#FBBC05" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function AzureLogo() {
  return (
    <svg viewBox="0 0 40 36" className="h-6 w-auto md:h-7">
      <path d="M18 4 L8 26 L15 26 L18 16 L15 4 Z" fill="#0078D4" />
      <path d="M20 16 L15 26 L32 26 L20 16 Z" fill="#0078D4" opacity="0.75" />
    </svg>
  );
}

function SalesforceLogo() {
  return (
    <svg viewBox="0 0 70 44" className="h-6 w-auto md:h-7">
      <ellipse cx="35" cy="28" rx="24" ry="11" fill="#00A1E0" />
      <ellipse cx="25" cy="22" rx="11" ry="9" fill="#00A1E0" />
      <ellipse cx="45" cy="22" rx="11" ry="9" fill="#00A1E0" />
      <ellipse cx="35" cy="17" rx="9" ry="8" fill="#00A1E0" />
    </svg>
  );
}

function SAPLogo() {
  return (
    <svg viewBox="0 0 70 30" className="h-5 w-auto md:h-6">
      <path d="M2 2 L68 2 L63 28 L-3 28 Z" fill="#0FAAFF" />
      <text x="32" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="white" letterSpacing="0.5">SAP</text>
    </svg>
  );
}

function OracleLogo() {
  return (
    <svg viewBox="0 0 90 22" className="h-5 w-auto md:h-6">
      <text x="45" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18" fill="#C74634" letterSpacing="1">ORACLE</text>
    </svg>
  );
}

function IBMLogo() {
  return (
    <svg viewBox="0 0 70 26" className="h-5 w-auto md:h-6">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={6 + (i % 2) * 16} y={5 + Math.floor(i / 2) * 2.5} width="14" height="1.8" fill="#1F70C1" />
      ))}
      <text x="48" y="19" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="12" fill="#1F70C1" letterSpacing="0.5">IBM</text>
    </svg>
  );
}

function DeloitteLogo() {
  return (
    <svg viewBox="0 0 110 22" className="h-5 w-auto md:h-6">
      <text x="55" y="17" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="16" fill="#000" letterSpacing="0.5">Deloitte.</text>
    </svg>
  );
}

function AccentureLogo() {
  return (
    <svg viewBox="0 0 110 22" className="h-5 w-auto md:h-6">
      <path d="M8 11 L15 6 L15 16 Z" fill="#A100FF" />
      <text x="63" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="14" fill="#000">accenture</text>
    </svg>
  );
}

function CiscoLogo() {
  return (
    <svg viewBox="0 0 60 30" className="h-6 w-auto md:h-7">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={8 + i * 6} y={10 - Math.abs(3 - i) * 3} width="3.5" height={10 + Math.abs(3 - i) * 3} fill="#049FD9" rx="1" />
      ))}
      <text x="30" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#049FD9" letterSpacing="0.5">cisco</text>
    </svg>
  );
}

function VMwareLogo() {
  return (
    <svg viewBox="0 0 100 22" className="h-5 w-auto md:h-6">
      <text x="50" y="17" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="14" fill="#607078" letterSpacing="0.3">vmware</text>
    </svg>
  );
}

function NvidiaLogo() {
  return (
    <svg viewBox="0 0 90 28" className="h-6 w-auto md:h-7">
      <path d="M10 8 Q20 2 28 8 Q36 14 28 20 Q20 26 10 20" fill="none" stroke="#76B900" strokeWidth="2.5" />
      <circle cx="18" cy="14" r="3.5" fill="#76B900" />
      <text x="58" y="19" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="#76B900" letterSpacing="0.5">NVIDIA</text>
    </svg>
  );
}

function AdobeLogo() {
  return (
    <svg viewBox="0 0 44 34" className="h-6 w-auto md:h-7">
      <path d="M22 3 L38 31 L22 23 L22 3 Z" fill="#FF0000" />
      <path d="M22 3 L6 31 L22 23 L22 3 Z" fill="#FF0000" opacity="0.75" />
    </svg>
  );
}

function IntelLogo() {
  return (
    <svg viewBox="0 0 70 22" className="h-5 w-auto md:h-6">
      <text x="35" y="17" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#0071C5" letterSpacing="1">intel</text>
    </svg>
  );
}

function ServiceNowLogo() {
  return (
    <svg viewBox="0 0 120 26" className="h-6 w-auto md:h-7">
      <circle cx="14" cy="13" r="9" fill="#62D84E" />
      <path d="M9 15 Q14 9 19 15" fill="none" stroke="white" strokeWidth="2" />
      <text x="68" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="12" fill="#293E40">ServiceNow</text>
    </svg>
  );
}

function SnowflakeLogo() {
  return (
    <svg viewBox="0 0 30 30" className="h-6 w-6 md:h-7 md:w-7">
      {[0, 60, 120].map((r, i) => (
        <line key={i} x1="15" y1="4" x2="15" y2="26" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${r} 15 15)`} />
      ))}
      <circle cx="15" cy="15" r="3.5" fill="#29B5E8" />
    </svg>
  );
}

function AtlassianLogo() {
  return (
    <svg viewBox="0 0 34 34" className="h-6 w-6 md:h-7 md:w-7">
      <path d="M17 4 L30 30 L4 30 Z" fill="#0052CC" opacity="0.5" />
      <path d="M17 12 L23 30 L11 30 Z" fill="#0052CC" />
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 34 34" className="h-6 w-6 md:h-7 md:w-7">
      <rect x="4" y="14" width="7" height="11" rx="3.5" fill="#E01E5A" />
      <rect x="14" y="4" width="11" height="7" rx="3.5" fill="#36C5F0" />
      <rect x="23" y="14" width="7" height="11" rx="3.5" fill="#ECB22E" />
      <rect x="9" y="23" width="11" height="7" rx="3.5" fill="#2EB67D" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 md:h-7 md:w-7" fill="#181717">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5 0.5 0.1 0.7-0.2 0.7-0.5v-1.7c-2.8 0.6-3.4-1.4-3.4-1.4-0.4-1.2-1.1-1.5-1.1-1.5-0.9-0.6 0.1-0.6 0.1-0.6 1 0.1 1.5 1 1.5 1 0.9 1.5 2.3 1.1 2.9 0.8 0.1-0.7 0.4-1.1 0.6-1.4-2.2-0.3-4.6-1.1-4.6-5 0-1.1 0.4-2 1-2.7-0.1-0.3-0.4-1.3 0.1-2.7 0 0 0.8-0.3 2.7 1 0.8-0.2 1.6-0.3 2.5-0.3s1.7 0.1 2.5 0.3c1.9-1.3 2.7-1 2.7-1 0.5 1.4 0.2 2.4 0.1 2.7 0.6 0.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 0.4 0.3 0.7 0.9 0.7 1.9v2.8c0 0.3 0.2 0.6 0.7 0.5C19.1 20.2 22 16.4 22 12 22 6.5 17.5 2 12 2z" />
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg viewBox="0 0 44 34" className="h-6 w-auto md:h-7">
      <rect x="6" y="15" width="6" height="6" fill="#2496ED" rx="1" />
      <rect x="14" y="15" width="6" height="6" fill="#2496ED" rx="1" />
      <rect x="22" y="15" width="6" height="6" fill="#2496ED" rx="1" />
      <rect x="14" y="8" width="6" height="6" fill="#2496ED" rx="1" />
      <rect x="22" y="8" width="6" height="6" fill="#2496ED" rx="1" />
      <rect x="22" y="1" width="6" height="6" fill="#2496ED" rx="1" />
      <path d="M2 24 Q2 28 10 28 L34 28 Q42 28 42 24 Q42 22 38 22 L4 22 Q2 22 2 24 Z" fill="#2496ED" />
    </svg>
  );
}

function KubernetesLogo() {
  return (
    <svg viewBox="0 0 30 30" className="h-6 w-6 md:h-7 md:w-7">
      <path d="M15 2 L26 9 L26 21 L15 28 L4 21 L4 9 Z" fill="#326CE5" />
      <circle cx="15" cy="15" r="4.5" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="1.5" fill="white" />
      <line x1="15" y1="10.5" x2="15" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="19.5" x2="15" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10.5" y1="15" x2="6" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19.5" y1="15" x2="24" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TerraformLogo() {
  return (
    <svg viewBox="0 0 30 30" className="h-6 w-6 md:h-7 md:w-7">
      <path d="M4 7 L13 11 L13 19 L4 15 Z" fill="#7B42BC" />
      <path d="M15 5 L24 9 L24 17 L15 13 Z" fill="#844FBA" />
      <path d="M15 15 L24 19 L24 27 L15 23 Z" fill="#7B42BC" opacity="0.85" />
    </svg>
  );
}

function MongoDBLogo() {
  return (
    <svg viewBox="0 0 24 32" className="h-6 w-auto md:h-7">
      <path d="M12 2 C12 2 12 16 12 22 C12 28 12 30 12 30 C13 30 14 26 14 22 C14 12 12 2 12 2 Z" fill="#47A248" />
      <path d="M12 2 C11 8 10 16 10 22 C10 26 11 30 12 30 C11 28 11 20 12 2 Z" fill="#3F8C3F" />
    </svg>
  );
}

function RedisLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 md:h-7 md:w-7">
      <path d="M4 10 L16 5 L28 10 L16 15 Z" fill="#DC382D" />
      <path d="M4 16 L16 11 L28 16 L16 21 Z" fill="#DC382D" opacity="0.85" />
      <path d="M4 22 L16 17 L28 22 L16 27 Z" fill="#DC382D" opacity="0.7" />
    </svg>
  );
}

function GraphQLLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 md:h-7 md:w-7">
      <path d="M16 4 L27 10 L27 22 L16 28 L5 22 L5 10 Z" stroke="#E10098" strokeWidth="2" fill="none" />
      <circle cx="16" cy="4" r="2.5" fill="#E10098" />
      <circle cx="27" cy="10" r="2.5" fill="#E10098" />
      <circle cx="27" cy="22" r="2.5" fill="#E10098" />
      <circle cx="16" cy="28" r="2.5" fill="#E10098" />
      <circle cx="5" cy="22" r="2.5" fill="#E10098" />
      <circle cx="5" cy="10" r="2.5" fill="#E10098" />
      <circle cx="16" cy="16" r="3" fill="#E10098" />
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 60 24" className="h-5 w-auto md:h-6">
      <text x="30" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" fill="#635BFF" letterSpacing="-0.5">stripe</text>
    </svg>
  );
}

function ShopifyLogo() {
  return (
    <svg viewBox="0 0 34 36" className="h-6 w-auto md:h-7">
      <path d="M12 6 Q12 3 15 3 L25 3 L22 32 L10 30 Z" fill="#95BF47" />
      <path d="M15 3 L10 30 L5 29 L8 8 Z" fill="#5E8E3E" />
    </svg>
  );
}

function VercelLogo() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6 md:h-7 md:w-7">
      <path d="M20 4 L38 34 L2 34 Z" fill="#000000" />
    </svg>
  );
}

function CloudflareLogo() {
  return (
    <svg viewBox="0 0 60 40" className="h-6 w-auto md:h-7">
      <path d="M40 18 Q50 18 50 26 Q50 32 42 32 L10 32 Q4 32 4 26 Q4 20 10 20 L14 20 Q16 12 24 12 Q30 12 34 16 Q36 18 40 18 Z" fill="#F38020" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PART 2: LOGO DATA ARRAY
// ═══════════════════════════════════════════════════════════════════════════
const logos = [
  { name: "Microsoft", Component: MicrosoftLogo },
  { name: "AWS", Component: AWSLogo },
  { name: "Google Cloud", Component: GoogleCloudLogo },
  { name: "Azure", Component: AzureLogo },
  { name: "Salesforce", Component: SalesforceLogo },
  { name: "SAP", Component: SAPLogo },
  { name: "Oracle", Component: OracleLogo },
  { name: "IBM", Component: IBMLogo },
  { name: "Deloitte", Component: DeloitteLogo },
  { name: "Accenture", Component: AccentureLogo },
  { name: "Cisco", Component: CiscoLogo },
  { name: "VMware", Component: VMwareLogo },
  { name: "Nvidia", Component: NvidiaLogo },
  { name: "Adobe", Component: AdobeLogo },
  { name: "Intel", Component: IntelLogo },
  { name: "ServiceNow", Component: ServiceNowLogo },
  { name: "Snowflake", Component: SnowflakeLogo },
  { name: "Atlassian", Component: AtlassianLogo },
  { name: "Slack", Component: SlackLogo },
  { name: "GitHub", Component: GitHubLogo },
  { name: "Docker", Component: DockerLogo },
  { name: "Kubernetes", Component: KubernetesLogo },
  { name: "Terraform", Component: TerraformLogo },
  { name: "MongoDB", Component: MongoDBLogo },
  { name: "Redis", Component: RedisLogo },
  { name: "GraphQL", Component: GraphQLLogo },
  { name: "Stripe", Component: StripeLogo },
  { name: "Shopify", Component: ShopifyLogo },
  { name: "Vercel", Component: VercelLogo },
  { name: "Cloudflare", Component: CloudflareLogo },
];

// ═══════════════════════════════════════════════════════════════════════════
// PART 3: MARQUEE ROW COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
function MarqueeRow({
  reverse = false,
  duration = 55,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-1">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

      <motion.div
        className="flex flex-nowrap items-center"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {items.map((logo, i) => {
          const Logo = logo.Component;
          return (
            <div
              key={`${reverse ? "r" : "l"}-${logo.name}-${i}`}
              className="mx-4 flex h-10 w-24 flex-shrink-0 items-center justify-center md:mx-5 md:h-11 md:w-28"
              title={logo.name}
            >
              <div className="flex h-full w-full items-center justify-center opacity-55 transition-opacity duration-300 hover:opacity-100">
                <Logo />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PART 4: STATS DATA
// ═══════════════════════════════════════════════════════════════════════════
const stats = [
  { value: "30+", label: "Technology Partners" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "14", label: "Countries Served" },
  { value: "99.9%", label: "Uptime SLA" },
];

// ═══════════════════════════════════════════════════════════════════════════
// PART 5: MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-10 md:px-10 md:py-14">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ═══════════════════════════════════════════════════
            SINGLE UNIFIED PREMIUM PANEL
        ═══════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-gradient-to-b from-white via-white to-gray-50/40 shadow-[0_4px_32px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.02)]"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          {/* ───────────────────────────────────────────
              SECTION 1: HEADING
          ─────────────────────────────────────────── */}
          <div className="px-6 pt-10 pb-8 text-center md:px-12 md:pt-12 md:pb-9">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-blue-600 md:text-xs"
            >
              Trusted Worldwide
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto mt-3 max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-gray-900 md:text-2xl"
            >
              Powering the world's most{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                demanding enterprises
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-3 max-w-lg font-body text-xs leading-relaxed text-gray-500 md:text-sm"
            >
              Trusted by leading technology platforms and Fortune 500 companies worldwide.
            </motion.p>
          </div>

          {/* ───────────────────────────────────────────
              SECTION 2: LOGOS
          ─────────────────────────────────────────── */}
          <div className="relative border-y border-gray-100 bg-white/60 py-6 backdrop-blur-sm md:py-7">
            <MarqueeRow duration={55} />
            <div className="mx-12 my-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <MarqueeRow reverse duration={70} />
          </div>

          {/* ───────────────────────────────────────────
              SECTION 3: STATS
          ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 divide-y divide-gray-100 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="group relative flex flex-col items-center justify-center px-6 py-8 text-center transition-colors hover:bg-white/80"
              >
                {/* Top accent on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />

                <p className="font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500 md:text-[11px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}