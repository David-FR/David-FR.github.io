(() => {
  document.querySelectorAll('[data-publication-browser]').forEach(browser => {
    const controls = browser.querySelector('.pub-filters');
    const buttons = Array.from(controls.querySelectorAll('.pub-topic-button'));
    const topicGroup = controls.querySelector('.pub-topic-buttons');
    const toggle = controls.querySelector('.pub-topics-toggle');
    const status = controls.querySelector('.pub-filter-status');
    const empty = browser.querySelector('.pub-empty');
    let selectedTags = [];
    const items = Array.from(browser.querySelectorAll('.pub-list-item'), element => ({
      element,
      topics: JSON.parse(element.dataset.topics)
    }));
    const total = items.length;

    function applyFilters() {
      let visible = 0;
      items.forEach(item => {
        const matches = !selectedTags.length || selectedTags.some(tag => item.topics.includes(tag));
        item.element.hidden = !matches;
        if (matches) visible++;
      });
      status.textContent = `Showing ${visible} of ${total} ${total === 1 ? 'paper' : 'papers'}`;
      empty.hidden = visible !== 0;
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        selectedTags = JSON.parse(button.dataset.topicTags);
        buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        applyFilters();
      });
    });
    if (toggle) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') !== 'true';
        toggle.setAttribute('aria-expanded', String(expanded));
        topicGroup.dataset.expanded = String(expanded);
        toggle.textContent = expanded ? 'Fewer topics' : 'More topics';
      });
    }
    applyFilters();
    controls.hidden = false;
  });
})();
