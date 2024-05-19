import * as React from "react";
import renderer from "react-test-renderer";
import ListItem from "../ListItem";

describe("ListItem component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ListItem
          el={{
            text: "Test Task",
            completed: false
          }}
          index={0}
          handleDeleteTask={() => {}}
          handleEditTask={() => {}}
          toggleCompleted={() => {}}
          drag={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
