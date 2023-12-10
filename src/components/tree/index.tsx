/*
 * @Author: saber2pr
 * @Date: 2019-07-21 18:41:06
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-11-18 13:32:11
 */
import React from "react"
import { Ul } from "../ul"
import { TreeNode } from "../../type"
import "./style.less"
import { getHash } from "../../utils"

export interface Tree<T extends TreeNode> {
  from: T
  map: (node: T, depth: number) => JSX.Element
  depth?: number
  selectBtn?: Ul<T>["selectBtn"]
  useBrowserHistory?: boolean
}

export function Tree<T extends TreeNode>({
  from: root,
  map: render,
  depth = 0,
  useBrowserHistory,
  selectBtn
}: Tree<T>): JSX.Element {
  const children = root.children
  if (root)
    if (children) {
      const childNodes = children.map((node, key) => (
        <li className="Tree-Li" key={key}>
          <Tree
            from={node}
            map={render}
            depth={depth + 1}
            selectBtn={selectBtn}
            useBrowserHistory={useBrowserHistory}
          />
        </li>
      ))
      if (depth === 0) return <>{childNodes}</>
      if (root.path) {
        if(useBrowserHistory) {
          const pathname = window.location.pathname.replace(/^\//, '')
          const curPath = root.path.replace(/^\//, '')
          root.expand = pathname.startsWith(curPath)
        } else {
          root.expand = getHash().startsWith(root.path)
        }
      }
      return (
        <Ul node={root} render={render} index={depth} selectBtn={selectBtn}>
          {childNodes}
        </Ul>
      )
    } else {
      return render(root, depth)
    }
}
