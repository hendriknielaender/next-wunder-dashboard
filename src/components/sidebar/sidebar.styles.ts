import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background-color: var(--background);
  transition: transform 0.2s ease;
  height: 100%;
  position: fixed;
  transform: translateX(-100%);
  width: 16rem;
  flex-shrink: 0;
  z-index: 202;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  border-right: 1px solid var(--border);
  flex-direction: column;
  padding-top: var(--spacing-10);
  padding-bottom: var(--spacing-10);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  @media (min-width: 48em) {
    margin-left: 0;
    display: flex;
    position: static;
    height: 100vh;
    transform: translateX(0);
  }
`;

export const Overlay = styled.div`
  background-color: rgb(15 23 42 / 0.3);
  position: fixed;
  inset: 0;
  z-index: 201;
  transition: opacity 0.3s ease;
  opacity: 0.8;
  @media (min-width: 48em) {
    display: none;
    z-index: auto;
    opacity: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: var(--spacing-8);
  align-items: center;
  padding-left: var(--spacing-10);
  padding-right: var(--spacing-10);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
  margin-top: var(--spacing-13);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-12);
  padding-top: var(--spacing-18);
  padding-bottom: var(--spacing-8);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-8);
  @media (min-width: 48em) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Sidebar = Object.assign(SidebarWrapper, {
   Header,
   Body,
   Overlay,
   Footer,
});
