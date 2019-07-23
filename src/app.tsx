import React from "react";
import ReactDOM from "react-dom";
import Tree from "./index";

const data = {
  name: "root",
  children: [
    {
      name: "node",
      children: [
        {
          name: "node"
        }
      ]
    },
    {
      name: "node",
      children: [
        {
          name: "node",
          children: [
            {
              name: "node"
            },
            {
              name: "node"
            },
            {
              name: "node"
            },
            {
              name: "node"
            }
          ]
        },
        {
          name: "node",
          children: [
            {
              name: "node"
            },
            {
              name: "node"
            },
            {
              name: "node"
            }
          ]
        },
        {
          name: "node"
        },
        {
          name: "node"
        },
        {
          name: "node"
        }
      ]
    }
  ]
};

ReactDOM.render(
  <Tree
    from={data}
    map={(node, depth) => (
      <a href="#" style={{ color: depth > 1 ? "red" : "green" }}>
        {node.name}
      </a>
    )}
  />,
  document.getElementById("root")
);
