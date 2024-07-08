export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
