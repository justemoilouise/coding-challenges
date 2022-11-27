import * as React from 'react';
import { Header } from '../components/header/header';
import { Content } from '../components/content/content';
import { Footer } from '../components/footer/footer';
import { DrawerProvider } from '../context/drawer-context';
import { Drawer } from '../components/drawer/drawer';

export const PageLayout = ({ children }) => (
  <DrawerProvider>
    <Header />
    <Drawer />
    <Content>{children}</Content>
    <Footer />
  </DrawerProvider>
);
