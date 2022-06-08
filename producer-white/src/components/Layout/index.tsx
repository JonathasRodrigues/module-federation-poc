import React from 'react';

import createUseStyle from '@eduzz/houston-styles/createUseStyles';
import LayoutHouston from '@eduzz/houston-ui/Layout';

import { Menu } from '../Menu';
import IconOrbita from './icon-orbita.svg';
import LogoOrbita from './logo-orbita.svg';

const { Sidebar, Content } = LayoutHouston;
const { Logo } = Sidebar;

const useStyle = createUseStyle(theme => ({
  main: {
    padding: theme.spacing.xs
  }
}));

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const styles = useStyle();
  return (
    <LayoutHouston>
      <Sidebar hasToolbar={false}>
        <Logo image={LogoOrbita} alt='logo' imageCollapsed={IconOrbita} />
        <Menu />
      </Sidebar>
      <Content>
        <main id='main-content' className={styles.main}>
          {children}
        </main>
      </Content>
    </LayoutHouston>
  );
};
