import { Header } from '@backstage/core-components';
import { wrapInTestApp } from '@backstage/test-utils';
import React, { ComponentType, PropsWithChildren } from 'react';
import { WelcomeTitle } from './WelcomeTitle';

export default {
  title: './WelcomeTitle',
  decorators: [
    (Story: ComponentType<PropsWithChildren<{}>>) => wrapInTestApp(<Story />),
  ],
};

export const HomePage = () => {
  return <Header title={<WelcomeTitle />} pageTitleOverride="Home" />;


};

