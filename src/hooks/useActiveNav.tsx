import { useEffect, useState } from "react";

const useActiveNav = (sectionSelector: string, threshold: number = 0.6) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll(sectionSelector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold, // Use the threshold provided
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionSelector, threshold]);

  return activeSection;
};

export default useActiveNav;
