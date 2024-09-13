const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.6, ease: "easeInOut" },
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4, ease: "easeInOut" },
    },
  },
};

const backdropVariants = {
  open: {
    opacity: 0.3,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export { sidebarVariants, backdropVariants };
