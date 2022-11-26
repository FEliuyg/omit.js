export default function omit<T, K extends keyof T>(
  obj: T,
  props: K | K[]
): Omit<T, K> {
  let shadowClone = { ...obj };
  let arrayProps = Array.isArray(props) ? props : [props];
  for (let i = 0; i < arrayProps.length; i++) {
    delete shadowClone[arrayProps[i]];
  }
  return shadowClone;
}
