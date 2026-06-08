import "./overview.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from "../theme/themeContext";
import { useProjects } from "../theme/projectsContext";
import { Box, Button, Chip, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import { siX, siGlassdoor, siAppstore } from "simple-icons";
import posts from "../data/posts.json";
import contacts from "../data/contacts.json";
import projectsData from "../data/projects.json";
import { brandsFor } from "../data/iconRegistry";
import { FadeIn, StaggerList, motion, staggerItem } from "../motion";

// Shared horizontal padding so every section lines up on the same left margin as the hero bio.
const SECTION_PX = "px-5 md:px-16 lg:px-24";

// Stacks featured as an icon strip on the overview — the tools used most across projects.
const TECH_KEYS = [
  "react",
  "reactnative",
  "flutter",
  "swift",
  "kotlin",
  "vue",
  "typescript",
  "javascript",
  "node",
  "firebase",
];

function SimpleIcon({ path, size = 16 }: { path: string; size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <path d={path} />
    </svg>
  );
}

const PLATFORM_META: Record<
  string,
  { label: string; color: string; icon: JSX.Element }
> = {
  linkedin: {
    label: "LinkedIn",
    color: "#0A66C2",
    icon: <LinkedInIcon sx={{ fontSize: "16px" }} />,
  },
  x: {
    label: "X",
    color: "#14171A",
    icon: <SimpleIcon path={siX.path} />,
  },
  glassdoor: {
    label: "Glassdoor",
    color: "#0CAA41",
    icon: <SimpleIcon path={siGlassdoor.path} />,
  },
  projects: {
    label: "Project",
    color: "#6D28D9",
    icon: <CodeIcon sx={{ fontSize: "16px" }} />,
  },
  appstore: {
    label: "App Store",
    color: "#0D96F6",
    icon: <SimpleIcon path={siAppstore.path} />,
  },
};

function platformMeta(platform: string) {
  return (
    PLATFORM_META[platform] ?? {
      label: platform,
      color: "#555",
      icon: <OpenInNewIcon sx={{ fontSize: "16px" }} />,
    }
  );
}

function contactIcon(title: string) {
  switch (title) {
    case "Email":
      return <EmailOutlinedIcon sx={{ fontSize: "18px" }} />;
    case "Phone":
      return <PhoneOutlinedIcon sx={{ fontSize: "18px" }} />;
    case "LinkedIn":
      return <LinkedInIcon sx={{ fontSize: "18px" }} />;
    case "GitHub":
      return <GitHubIcon sx={{ fontSize: "18px" }} />;
    default:
      return <OpenInNewIcon sx={{ fontSize: "18px" }} />;
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Overview() {
  const theme = useTheme();
  const { setPage } = useThemeMode();
  const { setActiveIndex } = useProjects();
  const navigate = useNavigate();

  useEffect(() => {
    setPage("overview");
  }, [setPage]);

  const openProject = (index: number) => {
    setActiveIndex(index);
    navigate("/projects");
  };

  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        color: theme.palette.text.primary,
      }}
    >
      {/* Hero */}
      <div className={`flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mt-20 md:mt-24 ${SECTION_PX}`}>
        {/* Photo — animates in from the right */}
        <motion.div
          className="flex-shrink-0 order-first md:order-last"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/profile_picture.png`}
            alt="Daniyal Ahmad Rizwan"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "28px",
              objectFit: "cover",
            }}
            className="md:w-[180px] md:h-[180px]"
          />
        </motion.div>

        {/* Name + tagline + bio — stagger in from the left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: "clamp(26px, 5vw, 40px)",
              fontWeight: "bold",
              lineHeight: 1.2,
              color: theme.palette.text.primary,
              margin: 0,
            }}
          >
            Daniyal Ahmad Rizwan
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              marginTop: "6px",
              fontSize: "15px",
            }}
          >
            Building innovative web and mobile applications to solve real-world
            problems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              color: theme.palette.text.secondary,
              marginTop: "14px",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            Frontend-focused Software Engineer with 5 years of experience
            building scalable web and mobile applications using React, React
            Native, Vue.js, Flutter, TypeScript, and Node.js. I focus on
            intuitive, accessible, and performance-optimized experiences — from
            production apps on the App Store and Google Play to full-stack
            platforms with robust backends.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="md:justify-start"
          >
            {[
              { value: "5+", label: "Years experience" },
              { value: "13+", label: "Apps shipped" },
              { value: "iOS · Android · Web", label: "Platforms" },
            ].map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "16px",
                  padding: "10px 16px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "16px", color: theme.palette.primary.main, lineHeight: 1.2 }}
                >
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: "11px", color: theme.palette.text.secondary }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </motion.div>

          {/* Contact one-liners */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: "flex",
              gap: "8px 20px",
              marginTop: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="md:justify-start"
          >
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.link}
                target={
                  contact.title === "Email" || contact.title === "Phone"
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  color: theme.palette.text.secondary,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
                className="contact-line"
              >
                <span style={{ display: "flex", color: theme.palette.primary.main }}>
                  {contactIcon(contact.title)}
                </span>
                {contact.data}
              </a>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="md:justify-start"
          >
            <Button
              component="a"
              href={`${process.env.PUBLIC_URL}/assets/CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<DescriptionIcon />}
              sx={{
                background: theme.palette.primary.main,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 600,
                px: 2.5,
              }}
            >
              Resume
            </Button>
            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              startIcon={<CodeIcon />}
              sx={{
                borderColor: theme.palette.text.secondary,
                color: theme.palette.text.primary,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 600,
                px: 2.5,
              }}
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Tech I work with */}
      <Box sx={{ mt: 5 }}>
        <FadeIn y={16} className={SECTION_PX} style={{ marginBottom: "12px" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: theme.palette.text.primary,
            }}
          >
            Tech I work with
          </Typography>
        </FadeIn>
        <FadeIn y={16} className={SECTION_PX}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {brandsFor(TECH_KEYS).map((brand) => (
              <Chip
                key={brand.title}
                icon={
                  <span style={{ display: "flex", color: `#${brand.hex}` }}>
                    <SimpleIcon path={brand.path} size={16} />
                  </span>
                }
                label={brand.title}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "13px",
                  borderRadius: "12px",
                  paddingLeft: "4px",
                }}
              />
            ))}
          </Box>
        </FadeIn>
      </Box>

      {/* Projects snapshot — every project at a glance */}
      <Box sx={{ mt: 5 }}>
        <FadeIn y={16} className={SECTION_PX} style={{ marginBottom: "12px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 2 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              Projects
            </Typography>
            <Typography
              component={Link}
              to="/projects"
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: theme.palette.primary.main,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              View all →
            </Typography>
          </Box>
        </FadeIn>

        <StaggerList
          className={SECTION_PX}
          style={{
            display: "grid",
            gap: "12px",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          }}
        >
          {projectsData.map((project, i) => (
            <motion.div
              key={project.name}
              variants={staggerItem}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              onClick={() => openProject(i)}
              style={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: "18px",
                padding: "14px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
              {project.icon ? (
                <img
                  src={`${process.env.PUBLIC_URL}${project.icon}`}
                  alt={project.name}
                  style={{
                    height: "42px",
                    width: "42px",
                    flexShrink: 0,
                    borderRadius: "11px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: "42px",
                    width: "42px",
                    flexShrink: 0,
                    borderRadius: "11px",
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {project.name.charAt(0)}
                </Box>
              )}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    lineHeight: 1.3,
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: theme.palette.text.secondary,
                    lineHeight: 1.45,
                    mt: "3px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.tagline}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </StaggerList>
      </Box>

      {/* Posts / What's new */}
      {posts.length > 0 && (
        <Box sx={{ mt: 5, mb: 6 }}>
          <FadeIn y={16} className={SECTION_PX} style={{ marginBottom: "12px" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              What's new
            </Typography>
          </FadeIn>

          <StaggerList
            className={SECTION_PX}
            style={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden",
              paddingBottom: "4px",
              gap: "16px",
              scrollbarWidth: "none",
            }}
          >
            {posts.map((post, i) => {
              const meta = platformMeta(post.platform);
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -4, scale: 1.015, transition: { duration: 0.2 } }}
                  style={{
                    minWidth: "280px",
                    maxWidth: "320px",
                    flexShrink: 0,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "20px",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    cursor: "default",
                  }}
                >
                  {/* Platform badge + open button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Chip
                      icon={meta.icon}
                      label={meta.label}
                      size="small"
                      sx={{
                        backgroundColor: meta.color,
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "11px",
                        "& .MuiChip-icon": { color: "#fff", marginLeft: "5px" },
                      }}
                    />
                    <IconButton
                      component="a"
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      <OpenInNewIcon sx={{ fontSize: "18px" }} />
                    </IconButton>
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: theme.palette.text.primary,
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </Typography>

                  {/* Excerpt */}
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: theme.palette.text.secondary,
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flexGrow: 1,
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  {/* Footer: date + likes */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                      pt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "11px", color: theme.palette.text.secondary }}
                    >
                      {formatDate(post.date)}
                    </Typography>
                    {post.likes > 0 && (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <FavoriteIcon
                          sx={{ fontSize: "13px", color: theme.palette.primary.main }}
                        />
                        <Typography
                          sx={{ fontSize: "11px", color: theme.palette.text.secondary }}
                        >
                          {post.likes.toLocaleString()}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </motion.div>
              );
            })}
          </StaggerList>
        </Box>
      )}
    </div>
  );
}
