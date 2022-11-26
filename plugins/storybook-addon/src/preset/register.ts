import { addons } from "@storybook/addons";
import { ADDON_ID } from "../constants";

addons.register(ADDON_ID, () => {
  const match = ({ viewMode }: { viewMode?: string }) =>
    Boolean(viewMode && viewMode.match(/^(story|docs)$/));
});
