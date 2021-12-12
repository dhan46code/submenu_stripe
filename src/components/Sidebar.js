import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobal } from './context';
import sublinks from './data';

function Sidebar() {
  const { isSidebar, closeSidebar } = useGlobal();
  return (
    <aside className={`${isSidebar ? 'side-wrapper show' : 'side-wrapper'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-link'>
          {sublinks.map((item, index) => {
            const { page, link } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sub-link'>
                  {link.map((links, index) => {
                    const { icon, name } = links;
                    return (
                      <a href='' key={index}>
                        {icon}
                        {name}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
