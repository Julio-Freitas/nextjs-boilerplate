'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body{
    padding: 0 .75rem;
    font-family:  -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p{
    font-size: 1.6rem;
    margin-bottom: .5rem;
  }
  .pageHeader {
    view-transition-name: page-title;
  }

  /* Animate the page content separatly */
  .pageContent {
      view-transition-name: page-content;
  }

  /* Animate the page content separatly */
  .pageContent {
      view-transition-name: page-content;
  }

::view-transition-old(root) {
    animation: fade-and-scale-out 0.5s ease-in-out 1 forwards;
}

::view-transition-new(root) {
    animation: fade-and-scale-in 1s ease-in-out 1 forwards;
}

::view-transition-old(page-title) {
    animation: hide 1s ease-in-out 1 forwards;
}

::view-transition-new(page-title) {
    animation: slide-right 1s ease-in-out 1 forwards;
}

::view-transition-old(page-content) {
    animation: hide 1s ease-in-out 1 forwards;
}

::view-transition-new(page-content) {
    animation: slide-left 2.5s ease-in-out 1 forwards;
}

/* First Animation */

@keyframes fade-and-scale-in {
    from {
        opacity: 0;
        transform: scale(0);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes fade-and-scale-out {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(0);
    }
}

/* Second Animation */

@keyframes hide {
    from {
        opacity: 1;

    }

    to {
        opacity: 0;

    }
}

@keyframes slide-left {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slide-right {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}


`;
