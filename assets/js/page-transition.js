(function() {
  'use strict';
  
  // Configuration
  const backgrounds = {
    'home': "url('/assets/images/backgrounds/home.jpg')",
    '': "url('/assets/images/backgrounds/home.jpg')",
    'about': "url('/assets/images/backgrounds/about.jpg')",
    'bcm241': "url('/assets/images/backgrounds/bcm241.jpg')",
    'bcm212': "url('/assets/images/backgrounds/bcm212.jpg')",
    'bcm222': "url('/assets/images/backgrounds/bcm222.jpg')",
    'bcm206': "url('/assets/images/backgrounds/bcm206.jpg')"
  };
  
  // Get page identifier from URL
  function getPageFromUrl(url) {
    const path = new URL(url, window.location.origin).pathname;
    if (path === '/' || path === '/index.html') return 'home';
    const match = path.match(/\/(bcm\d+|about)/);
    return match ? match[1] : 'home';
  }
  
  // Cross-fade background
  function crossfadeBackground(oldPage, newPage) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar || !backgrounds[oldPage] || !backgrounds[newPage]) return;
    
    // Create temporary style for old background
    const styleEl = document.createElement('style');
    styleEl.id = 'transition-style';
    styleEl.textContent = `
      .sidebar::after {
        background-image: ${backgrounds[oldPage]} !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(styleEl);
    
    // Update sidebar data attribute
    sidebar.setAttribute('data-page', newPage);
    
    // Trigger fade
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        styleEl.textContent = `
          .sidebar::after {
            background-image: ${backgrounds[oldPage]} !important;
            opacity: 0 !important;
          }
        `;
      });
    });
    
    // Clean up
    setTimeout(() => {
      const tempStyle = document.getElementById('transition-style');
      if (tempStyle) tempStyle.remove();
    }, 1000);
  }
  
  // Load page via Ajax
  function loadPage(url) {
    const currentPage = getPageFromUrl(window.location.href);
    const newPage = getPageFromUrl(url);
    
    // Fetch new page content
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract new content
        const newMainContent = doc.querySelector('.main-content');
        const newTitle = doc.querySelector('title').textContent;
        
        if (newMainContent) {
          // Update main content
          const mainContent = document.querySelector('.main-content');
          mainContent.innerHTML = newMainContent.innerHTML;
          
          // Update title
          document.title = newTitle;
          
          // Update URL
          history.pushState({page: newPage}, newTitle, url);
          
          // Cross-fade sidebar background
          crossfadeBackground(currentPage, newPage);
          
          // Update active nav link
          updateActiveNav(url);
        }
      })
      .catch(error => {
        console.error('Navigation error:', error);
        window.location.href = url; // Fallback to normal navigation
      });
  }
  
  // Update active navigation link
  function updateActiveNav(url) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.href === url) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Handle browser back/forward
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
      const currentPage = document.querySelector('.sidebar').getAttribute('data-page');
      crossfadeBackground(currentPage, e.state.page);
      
      // Reload content from current URL
      fetch(window.location.href)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newMainContent = doc.querySelector('.main-content');
          if (newMainContent) {
            document.querySelector('.main-content').innerHTML = newMainContent.innerHTML;
          }
          updateActiveNav(window.location.href);
        });
    }
  });
  
  // Intercept all internal link clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    
    // Check if it's an internal link
    if (link && 
        link.href && 
        link.href.startsWith(window.location.origin) &&
        !link.hasAttribute('target') &&
        !link.hasAttribute('download')) {
      
      e.preventDefault();
      loadPage(link.href);
    }
  });
  
  // Initialize on first load
  const currentPage = getPageFromUrl(window.location.href);
  history.replaceState({page: currentPage}, document.title, window.location.href);
  
})();
