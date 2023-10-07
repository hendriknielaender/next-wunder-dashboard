import styled from 'styled-components';

const UnstyledSvg = styled('svg', {});
const UnstyledPath = styled('path', {});
const UnstyledRect = styled('rect', {});

export const Svg = Object.assign(UnstyledSvg, {
   Path: UnstyledPath,
   Rect: UnstyledRect,
});
