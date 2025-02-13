export const openLinks = (URL: string, target: string = "_blank") => {
  return () => {
    window.open(URL, target);
  };
};
