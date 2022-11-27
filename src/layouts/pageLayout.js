import * as React from 'react';
import { Header } from '../components/header/header';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';

export const PageLayout = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);
