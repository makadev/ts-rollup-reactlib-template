import * as renderer from "react-test-renderer";
import { Button } from "../src";

it("Button renders correctly", () => {
    const props = {
        onClick: () => {
            return;
        },
        children: "test",
    };
    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});
