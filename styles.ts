import { IsEmptyInterface, Or, IsAny } from "./Types";

// mocked CssProperties type
type CssProperties = { position: "absolute" | "relative" };

type StylesObject<ClassKey extends string> = Record<ClassKey, CssProperties>;
type PropsBasedstyles<ClassKey extends string, Props extends object> = (
  props: Props
) => StylesObject<ClassKey>;
type Styles<ClassKey extends string, Props extends object> =
  | StylesObject<ClassKey>
  | PropsBasedstyles<ClassKey, Props>;

type PropsOfStyles<T> = T extends Styles<any, infer P> ? P : never;

/**
 * @internal
 *
 * If a style callback is given with `theme => stylesOfTheme` then typescript
 * infers `Props` to `any`.
 * If a static object is given with { ...members } then typescript infers `Props`
 * to `{}`.
 *
 * So we require no props in `useStyles` if `Props` in `makeStyles(styles)` is
 * inferred to either `any` or `{}`
 */
export type StylesRequireProps<S> = Or<
  IsAny<PropsOfStyles<S>>,
  IsEmptyInterface<PropsOfStyles<S>>
> extends true
  ? false
  : true;

export function createStyles<
  ClassKey extends string,
  Props extends object = {}
>(styles: Styles<ClassKey, Props>): Styles<ClassKey, Props> {
  return styles;
}
