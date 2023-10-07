import React, {useState} from 'react';
import {ChevronUpIcon} from '../icons/sidebar/chevron-up-icon';
import {Flex} from '../styles/flex';

interface Props {
   icon: React.ReactNode;
   title: string;
   items: string[];
}

export const CollapseItems = ({icon, items, title}: Props) => {
   const [open, setOpen] = useState(false);

   const handleToggle = () => setOpen(!open);
   return (
      <Flex
         css={{
            gap: '$6',
            height: '100%',
            alignItems: 'center',
            cursor: 'pointer',
         }}
         align={'center'}
      >
               <Flex
                  css={{
                     'gap': '$6',
                     'width': '100%',
                     'py': '$5',
                     'px': '$7',
                     'borderRadius': '8px',
                     'transition': 'all 0.15s ease',
                     '&:active': {
                        transform: 'scale(0.98)',
                     },
                     '&:hover': {
                        bg: '$accents2',
                     },
                  }}
                  justify={'between'}
                  onClick={handleToggle}
               >
                  <Flex css={{gap: '$6'}}>
                     {icon} {title}
                  </Flex>

                  <ChevronUpIcon
                     css={{
                        transition: 'transform 0.3s ease',
                        transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
                     }}
                  />
               </Flex>

            {items.map((item, index) => (
               <Flex
                  key={index}
                  direction={'column'}
                  css={{
                     paddingLeft: '$16',
                  }}
               >
                     {item}
               </Flex>
            ))}
      </Flex>
   );
};
