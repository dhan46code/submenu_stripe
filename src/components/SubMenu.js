import React, { useRef, useEffect } from 'react';
import { useGlobal } from './context';

function SubMenu() {
  const {
    location,
    isSubmenu,
    page: { page, link },
  } = useGlobal();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenu ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <div className={`submenu-link col-2`}>
        {link.map((links, index) => {
          const { icon, name } = links;
          return (
            <a href='#'>
              {icon}
              {name}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default SubMenu;
