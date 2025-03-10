"use client";

import { useRouter } from "next/navigation";

const ScrollLink = ({ href, children, offset = 100 }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    if (!href.startsWith("#")) {
      console.warn("El href debe contener un ID válido, por ejemplo: #seccion1");
      return;
    }

    const id = href.slice(1);
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -offset;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth", // ✅ Scroll nativo con animación suave
      });
    } else {
      console.warn(`Elemento con ID '${id}' no encontrado.`);
    }

    router.push(href, { scroll: false }); // ✅ Actualiza la URL sin hacer scroll automático de Next.js
  };

  return (
    <a href={href} onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </a>
  );
};

export default ScrollLink;
