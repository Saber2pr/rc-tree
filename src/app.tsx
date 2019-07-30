import React from "react";
import ReactDOM from "react-dom";
import Tree from "./index";

const data = {
  path: "root",
  name: "root",
  children: [
    {
      path: "root/commit",
      name: "commit",
      children: [
        {
          path: "root/commit/commit解析.md",
          name: "commit解析",
          text: "commit\n"
        }
      ]
    },
    {
      path: "root/perform",
      name: "perform",
      children: [
        {
          path: "root/perform/part1",
          name: "part1",
          children: [
            {
              path: "root/perform/part1/part1.md",
              name: "part1",
              text: "part1\n"
            },
            {
              path: "root/perform/part1/part2.md",
              name: "part2",
              text: "part1\n"
            },
            {
              path: "root/perform/part1/part3.md",
              name: "part3",
              text: "part1\n"
            },
            {
              path: "root/perform/part1/part4.md",
              name: "part4",
              text: "part1\n"
            }
          ]
        },
        {
          path: "root/perform/part2",
          name: "part2",
          children: [
            {
              path: "root/perform/part2/part2.md",
              name: "part2",
              text: "part2\n"
            },
            {
              path: "root/perform/part2/part3.md",
              name: "part3",
              text: "part2\n"
            },
            {
              path: "root/perform/part2/part4.md",
              name: "part4",
              text: "part2\n"
            }
          ]
        },
        {
          path: "root/perform/perform解析.1.md",
          name: "perform解析.1",
          text: "perform\n"
        },
        {
          path: "root/perform/perform解析.2.md",
          name: "perform解析.2",
          text: "perform\n"
        },
        {
          path: "root/perform/perform解析.md",
          name: "perform解析",
          text: "perform\n"
        }
      ]
    },
    {
      path: "root/test.md",
      name: "test",
      text: "test\n"
    }
  ]
};
(React.Fragment as any) = "a";
ReactDOM.render(
  <Tree
    from={data}
    map={(node, depth) => (
      <a href={"#" + node.path} style={{ color: depth > 1 ? "red" : "green" }}>
        {node.name}
      </a>
    )}
  />,
  document.getElementById("root")
);
