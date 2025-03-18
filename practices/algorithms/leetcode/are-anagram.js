export const areAnagram = (a, b) => {
  if (a.length !== b.length) return false;

  const aSet = new Set(String(a).toLowerCase());
  const bSet = new Set(String(b).toLowerCase());

  return aSet.size === bSet.size && Array.from(aSet.keys()).every((s) => bSet.has(s));
};
