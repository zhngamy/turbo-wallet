import React, { FC } from 'react';
import { WalletWrapper } from './wallet.styled';

interface WalletProps {}

const Wallet: FC<WalletProps> = () => (
 <WalletWrapper data-testid="Wallet">
    Wallet Component
 </WalletWrapper>
);

export default Wallet;
