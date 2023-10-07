import {Avatar} from '@nextui-org/avatar';
import {Card} from '@nextui-org/card';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardTransactions = () => {
   return (
      <Card
         css={{
            mw: '375px',
            height: 'auto',
            bg: '$accents0',
            borderRadius: '$xl',
            // alignContent: 'start',
            justifyContent: 'start',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}} justify={'center'}>
<h3 className="text-center">
    Latest Transactions
</h3>

            </Flex>
            <Flex
               css={{gap: '$6', py: '$4'}}
               // align={'center'}

               direction={'column'}
            >
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
<span className="font-semibold">
    Jose Perez
</span>
<span className="text-xs text-green">
    4500 USD
</span>
<span className="text-xs">
    9/20/2021
</span>

               </Flex>

               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
<span className="font-semibold">
    Andrew Steven
</span>
<span className="text-xs text-green">
    4500 USD
</span>
<span className="text-xs">
    9/20/2021
</span>

               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
<span className="font-semibold">
    Ruben Garcia
</span>
<span className="text-xs text-green">
    1500 USD
</span>
<span className="text-xs">
    2/20/2022
</span>

               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
<span className="font-semibold">
    Perla Garcia
</span>
<span className="text-xs text-green">
    200 USD
</span>
<span className="text-xs">
    3/20/2022
</span>

               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
<span className="font-semibold">
    Mathew Funez
</span>
<span className="text-xs text-green">
    2444 USD
</span>
<span className="text-xs">
    5/20/2022
</span>

               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
<span className="font-semibold">
    Carlos Diaz
</span>
<span className="text-xs text-green">
    3000 USD
</span>
<span className="text-xs">
    12/20/2022
</span>

               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};
