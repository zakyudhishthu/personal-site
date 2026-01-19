/**
 * Main JavaScript for Zak Yudhishthu's website
 * Handles: mobile navigation, portfolio filtering, search
 */

(function() {
  'use strict';

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // Portfolio Filtering
  // ==========================================================================

  const portfolioGrid = document.querySelector('.portfolio-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.querySelector('#portfolio-search');
  const noResults = document.querySelector('.no-results');

  if (portfolioGrid) {
    const portfolioItems = portfolioGrid.querySelectorAll('.portfolio-item');

    // Current filter state
    let currentFilters = {
      style: 'all',
      region: 'all',
      search: ''
    };

    // Filter items based on current state
    function filterItems() {
      let visibleCount = 0;

      portfolioItems.forEach(function(item) {
        const itemStyle = item.dataset.style || '';
        const itemRegion = item.dataset.region || '';
        const itemTitle = item.querySelector('.portfolio-item-title').textContent.toLowerCase();
        const itemDesc = item.querySelector('.portfolio-item-description').textContent.toLowerCase();
        const itemTopics = item.dataset.topics || '';

        // Check style filter
        const styleMatch = currentFilters.style === 'all' ||
                          itemStyle === currentFilters.style;

        // Check region filter
        const regionMatch = currentFilters.region === 'all' ||
                           itemRegion === currentFilters.region;

        // Check search filter
        const searchTerm = currentFilters.search.toLowerCase();
        const searchMatch = searchTerm === '' ||
                           itemTitle.includes(searchTerm) ||
                           itemDesc.includes(searchTerm) ||
                           itemTopics.includes(searchTerm);

        // Show/hide item
        if (styleMatch && regionMatch && searchMatch) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      // Show/hide no results message
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    // Handle filter button clicks
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const filterType = this.parentElement.dataset.filterType;
        const filterValue = this.dataset.filter;

        // Update active state for buttons in this group
        this.parentElement.querySelectorAll('.filter-btn').forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');

        // Update filter state
        currentFilters[filterType] = filterValue;

        // Apply filters
        filterItems();
      });
    });

    // Handle search input
    if (searchInput) {
      let searchTimeout;

      searchInput.addEventListener('input', function() {
        // Debounce search
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function() {
          currentFilters.search = searchInput.value;
          filterItems();
        }, 200);
      });

      // Clear search on escape
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          this.value = '';
          currentFilters.search = '';
          filterItems();
        }
      });
    }
  }

  // ==========================================================================
  // Smooth scroll for anchor links
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================================================
  // External link handling
  // ==========================================================================

  // Add rel="noopener" to external links for security
  document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('rel', 'noopener');
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
    }
  });

})();
