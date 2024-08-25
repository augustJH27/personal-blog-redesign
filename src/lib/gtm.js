export function trackVirtualPageview() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'virtualPageview', // Custom event name
    pagePath: window.location.pathname, // Current path
    pageTitle: document.title // Current page title
  });
}