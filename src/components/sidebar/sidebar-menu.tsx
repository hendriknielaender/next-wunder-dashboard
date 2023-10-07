import React from 'react';
import {Flex} from '../styles/flex';

interface Props {
   title: string;
   children?: React.ReactNode;
}

export const SidebarMenu = ({title, children}: Props) => {
   return (
      <Flex css={{gap: '$4'}} direction={'column'}>
         <div
            span
            size={'$xs'}
            weight={'normal'}
            css={{
               letterSpacing: '0.04em',
               lineHeight: '$xs',
            }}
         >
            {title}
         </div>
         {children}
      </Flex>
   );
};
