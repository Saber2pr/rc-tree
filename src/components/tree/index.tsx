/*
 * @Author: saber2pr
 * @Date: 2019-07-21 18:41:06
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-07-30 19:21:17
 */
import React from "react";
import { Ul } from "../ul";
import { TreeNode } from "../../type";
import "./style.less";

export interface Tree<T extends TreeNode> {
  from: T;
  map: (node: T, depth: number) => JSX.Element;
  depth?: number;
}

export function Tree<T extends TreeNode>({
  from: root,
  map: render,
  depth = 0
}: Tree<T>): JSX.Element {
  const children = root.children;
  if (root)
    if (children) {
      const childNodes = children.map((node, key) => (
        <li className="Tree-Li" key={key}>
          <Tree from={node} map={render} depth={depth + 1} />
        </li>
      ));
      if (depth === 0) return <>{childNodes}</>;
      if (root.path) {
        root.expand = location.hash.slice(1).startsWith(root.path);
      }
      return (
        <Ul node={root} render={render} index={depth}>
          {childNodes}
        </Ul>
      );
    } else {
      return render(root, depth);
    }
}
