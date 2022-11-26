import * as React from 'react';
import { Header } from '../components/header/header';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';

export const PageLayout = ({ pageTitle, children }) => (
  <>
    <Header pageTitle={pageTitle} />
    <Content>{children}</Content>
    <Footer />
  </>
);
