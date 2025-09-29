import {
  Box,
  SvgIcon,
  SvgIconProps,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { useExperiences } from "../theme/experiencesContext";
import {
  siFlutter,
  siFirebase,
  siReact,
  siNodedotjs,
  siVuedotjs,
  siMongodb,
  siPython,
  siIonic,
  siCypress,
  siLighthouse,
  siMysql,
  siMariadb,
  siPostgresql,
  siSqlite,
  siAndroid,
} from "simple-icons";

type Brand = { title: string; hex: string; path: string };

// Small helper so every brand icon renders crisply via MUI
const BrandSvg: React.FC<{ brand: Brand } & Omit<SvgIconProps, "viewBox">> = ({
  brand,
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 24 24"
    sx={{ fontSize: 50 }}
    htmlColor={`#${brand.hex}`}
    {...props}
  >
    <path d={brand.path} />
  </SvgIcon>
);

// --- Data --------------------------------------------------------------------

const EXPERIENCES: Array<{
  title: string;
  position: string;
  description: string;
  icons: Brand[]; // simple-icons objects
}> = [
  {
    title: "Stackfinity",
    position: "Senior Frontend Software Engineer",
    description: `• Built modular, cloud-based UI components for Oye Cab, Speaking Buddy, and My Walking App—improving scalability, integration readiness, and user engagement by 30–40%.
• Used Flutter to ensure consistent cross-platform behavior; collaborated with .NET/PostgreSQL teams for seamless API integration and secure data handling.
• Designed integration-friendly frontend flows in Oye Cab, including real-time code verification and Stripe-powered payments, enhancing both UX and developer adoption.
• Developed reusable UI modules in Speaking Buddy for live booking, encrypted messaging, and subscriptions with Stripe integration.
• Created accessible, offline-capable components in My Walking App, tailored for elderly users with a focus on privacy and reliability.`,
    icons: [
      siFlutter as Brand,
      siFirebase as Brand,
      siReact as Brand,
      siNodedotjs as Brand,
    ],
  },
  {
    title: "Devsinc",
    position: "Software Engineer",
    description: `• Developed scalable, frontend-first cloud solutions for data-heavy web apps, boosting performance by 40% and user engagement by 30%.
• Built reusable JavaScript/TypeScript components with state management (Redux, Vuex, Pinia), accelerating integration and improving modularity.
• Optimized complex UI patterns (tables, drawers, logs), cutting new feature delivery time by 85%.
• Maintained 30+ GitHub repositories with TDD/BDD, ensuring consistent, well-documented code—recognized for code quality contributions.
• Collaborated in Agile sprints with cross-functional teams to ship integration-ready UI components with a 95% on-time delivery rate.
• Streamlined developer workflows with Jenkins-based CI/CD and Docker, reducing onboarding and deployment time.
• Enhanced frontend-backend interaction via optimized MongoDB queries and real-time streaming support.
• Improved visual quality and accessibility using React and Material UI, with a focus on responsive design.
• Proactively addressed UI/UX pain points, improving usability and developer experience.
• Maintained high-availability AWS environments, enabling frontend scalability and 99.9% uptime.`,
    // React, Vue.js, Node.js, MongoDB, Python, Flutter, Ionic
    icons: [
      siReact as Brand,
      siVuedotjs as Brand,
      siNodedotjs as Brand,
      siMongodb as Brand,
      siPython as Brand,
      siFlutter as Brand,
      siIonic as Brand,
    ],
  },
  {
    title: "ACE INTERNATIONALS",
    position: "FRONTEND DEVELOPER AND QUALITY ASSURANCE",
    description: `• Built robust automated test suites for frontend components using Cypress, improving test coverage and reducing manual QA effort by 50%.
• Conducted in-depth usability testing and performance audits, leading to a 40–60% improvement in user experience and interface responsiveness.
• Accelerated release cycles by 40% through implementation of E2E tests focused on real-world interaction scenarios, ensuring integration integrity across modules.
• Collaborated with developers and designers to identify and resolve frontend bugs early in the lifecycle, increasing product stability by 30%.
• Led quality efforts for several high-traffic web applications, achieving a 20% drop in user-reported issues through proactive testing strategies.
• Introduced automated regression testing pipelines, reducing release overhead and enabling safer, faster deployments by 25%.`,
    // Extracted icons: Cypress (explicit), Lighthouse (perf audits)
    icons: [siReact as Brand, siCypress as Brand, siLighthouse as Brand],
  },

  // 4) NEW: Stackfinity (earlier role) — icons extracted from description list
  {
    title: "STACKFINITY",
    position: "SOFTWARE ENGINEER",
    description: `• Designed and implemented UI interfaces for web and mobile platforms, improving UX by 35% across devices through responsive layout systems and optimized component trees.
• Refactored and modularized frontend components and widgets, reducing package size by 50% and boosting maintainability for future features.
• Developed reusable UI modules and streamlined cross-platform development with consistent design patterns, decreasing new feature delivery time by 30%.
Databases: MySQL, MariaDB, PostgreSQL, MongoDB
• Integrated with backend APIs to ensure smooth frontend-backend communication, reducing API response handling latency by 20%.
experiences.
• Managed client-side local databases (SQLite) efficiently in Android-based apps, enabling fast data access and smooth offline experiences.
• Improved app performance by 15% through code cleanup, load optimization, and real-time data rendering improvements.`,
    // Extracted icons: MySQL, MariaDB, PostgreSQL, MongoDB, SQLite, Android
    icons: [
      siFlutter as Brand,
      siMysql as Brand,
      siPostgresql as Brand,
      siMongodb as Brand,
      siSqlite as Brand,
      siAndroid as Brand,
    ],
  },
];

// ---------------------------------------------------------------------------

export default function Experiences() {
  const theme = useTheme();
  const { activeIndex, setActiveIndex } = useExperiences();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Boxes are derived from your data now
  const boxes = React.useMemo(() => EXPERIENCES.map((_, idx) => idx), []);

  const getVisibleBoxes = () => {
    const visibleCount = isMobile ? 1 : 3;
    if (boxes.length <= visibleCount) return boxes;

    let start = Math.max(0, activeIndex - Math.floor(visibleCount / 2));
    let end = start + visibleCount;

    if (end > boxes.length) {
      end = boxes.length;
      start = end - visibleCount;
    }
    return boxes.slice(start, end);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1, display: "flex", marginTop: "50px" }}>
        {getVisibleBoxes().map((index) => {
          const exp = EXPERIENCES[index];
          const isActive = activeIndex === index;

          return (
            <Box
              key={index}
              {...(!isActive && { onClick: () => setActiveIndex(index) })}
              sx={{
                flex: isActive ? 4 : 1,
                transition: "flex 0.4s ease",
                minWidth: isActive ? "auto" : "150px",
                margin: "10px",
                background: "#2A444C",
                borderRadius: "25px",
                display: "flex",
                cursor: isActive ? "auto" : "pointer",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  margin: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex" }}>
                      <h1
                        style={{
                          fontSize: "24px",
                          color: "#E6E1E3",
                          fontWeight: "bold",
                          alignContent: "center",
                        }}
                      >
                        {exp.title}
                      </h1>
                    </Box>
                    <h1 style={{ color: "#E6E1E3" }}>{exp.position}</h1>

                    {isActive ? (
                      <h1
                        style={{
                          color: "#E6E1E3",
                          marginTop: "30px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {exp.description}
                      </h1>
                    ) : null}
                  </Box>

                  {isActive ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      {exp.icons.map((brand) => (
                        <Tooltip key={brand.title} title={brand.title} arrow>
                          <span>
                            <BrandSvg brand={brand} />
                          </span>
                        </Tooltip>
                      ))}
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
