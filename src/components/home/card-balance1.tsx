import {Card} from '@nextui-org/card';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance1 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community />
               <Flex direction={'column'}>
<span className="text-white">
    Auto Insurance
</span>
<span className="text-xs text-white">
    1311 Cars
</span>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
<span className="text-xl text-white font-semibold">
    $45,910
</span>
<span className="text-xs text-green">
    + 4.5%
</span>
            </Flex>
            <Flex css={{gap: '$12'}} align={'center'}>
               <Box>
<span className="text-xs text-green font-semibold">
    {'↓'}
</span>
<span className="text-xs text-white">
    100,930 USD
</span>
                </Box>
               <Box>
<span className="text-xs text-red font-semibold">
    {'↑'}
</span>
<span className="text-xs text-white">
    54,120 USD
</span>
               </Box>
               <Box>
<span className="text-xs text-green font-semibold">
    {'⭐'}
</span>
<span className="text-xs text-white">
    125 VIP
</span>
               </Box>
            </Flex>
         </Card.Body>
      </Card>
   );
};
