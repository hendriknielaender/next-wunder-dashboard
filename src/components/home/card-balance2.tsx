import {Card} from '@nextui-org/card';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance2 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$accents0',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community color={'$accents9'} />
               <Flex direction={'column'}>
<span className="text-black">
    Health Insurance
</span>
<span className="text-xs">
    +2400 People
</span>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
<span className="text-xl font-semibold">
    $12,138
</span>
<span className="text-xs text-red">
    + 4.5%
</span>
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Box>
<span className="text-xs text-green font-semibold">
    {'↓'}
</span>
<span className="text-xs">
    11,930 USD
</span>
               </Box>
               <Box>
<span className="text-xs text-red font-semibold">
    {'↑'}
</span>
<span className="text-xs">
    54,120 USD
</span>
               </Box>
               <Box>
<span className="text-xs text-green font-semibold">
    {'⭐'}
</span>
<span className="text-xs">
    150 VIP
</span>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
