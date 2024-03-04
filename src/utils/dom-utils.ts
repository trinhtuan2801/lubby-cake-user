export const setPageScroll = (scrollable: boolean) => {
  const html = document.documentElement;
  const background = document.getElementById('background') as HTMLElement;
  const scrollbarWidth = background.clientWidth - html.clientWidth;

  document.documentElement.style.overflow = scrollable ? 'auto' : 'hidden';
  document.body.style.paddingRight = `${scrollable ? 0 : scrollbarWidth}px`;
};
