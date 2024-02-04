// Create elements and set attributes
const htmlDocument = document.createElement('html');
const headElement = document.createElement('head');
const bodyElement = document.createElement('body');

// Set language attribute for the html tag
htmlDocument.setAttribute('lang', 'en');

// Create script element for Google Tag Manager
const gtagScript = document.createElement('script');
gtagScript.setAttribute('async', true);
gtagScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-167481305-1');

// Create script element for gtag function
const gtagFunctionScript = document.createElement('script');
gtagFunctionScript.textContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'UA-167481305-1');
`;

// Create title element
const titleElement = document.createElement('title');
titleElement.textContent = 'Student Portal | NSBM Green University';

// Create link element for favicon
const faviconLink = document.createElement('link');
faviconLink.setAttribute('rel', 'shortcut icon');
faviconLink.setAttribute('href', 'https://www.nsbm.ac.lk/wp-content/uploads/2019/08/cropped-nsbm_logo_favicon-32x32.png');
faviconLink.setAttribute('type', 'image/x-icon');

// ... (similarly, create other elements and set their attributes)

// Append elements to the DOM
headElement.appendChild(gtagScript);
headElement.appendChild(gtagFunctionScript);
headElement.appendChild(titleElement);
headElement.appendChild(faviconLink);
// ... (append other elements to head and body)

htmlDocument.appendChild(headElement);
htmlDocument.appendChild(bodyElement);

// Append the entire HTML document to the document body
document.body.appendChild(htmlDocument);
