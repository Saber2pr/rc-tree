# @saber2pr/rc-tree

> a tree-select renderer for react.

```bash
yarn add @saber2pr/rc-tree
```

# What

[example>>](https://saber2pr.github.io/rc-tree/example/index.html)

```tsx
import Tree from "@saber2pr/rc-tree";

const tree = {
  path: "root",
  name: "root",
  children: [
    {
      path: "root/node",
      name: "node",
      children: [
        {
          path: "root/node/node.md",
          name: "node",
          text: "node\n"
        }
      ]
    }
  ]
};

const App = () => (
  <Tree from={tree} map={node => <a href={node.path}>{node.name}</a>} />
);

ReactDOM.render(<App />, document.getElementById("root"));

// map depth
const TreeSelect = (
  <Tree
    from={tree}
    map={(node, depth) => (
      <a style={{ color: depth > 1 ? "red" : "green" }}>{node.name}</a>
    )}
  />
);
```

# dev

```bash
yarn install

yarn run dev

yarn run build
```

# Author

saber2pr
