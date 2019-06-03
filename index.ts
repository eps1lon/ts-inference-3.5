import { createStyles, StylesRequireProps } from "./styles";

const styles = createStyles({
  root: {
    position: "absolute"
  }
});

type ExampleNeedsProps = StylesRequireProps<typeof styles>;
const assertion: ExampleNeedsProps = false;
