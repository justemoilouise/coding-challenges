import * as React from 'react';

export const PageLayout = ({ children }) => (
  <>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);