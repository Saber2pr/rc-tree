/*
 * @Author: saber2pr
 * @Date: 2019-07-21 18:41:09
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-07-30 19:09:26
 */
import React, { useState } from "react";
import { TreeNode } from "../../type";
import { Icon } from "../../iconfont";
import "./style.less";

export interface Ul<T extends TreeNode>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  node: T;
  index?: number;
  render: (node: T, index: number) => JSX.Element;
}

export function Ul<T extends TreeNode>({
  children,
  node,
  index = 0,
  render,
  ...props
}: Ul<T>) {
  const [state, setState] = useState(!!node.expand);
  node.expand = state;
  const change = () => setState(!state);
  return (
    <>
      <span className="Ul-Btn" onClick={change}>
        {state ? <Icon.Xia /> : <Icon.You />}
      </span>
      <span className="Ul-Name">{render(node, index)}</span>
      <ul className="Ul" {...props}>
        {state ? children : <></>}
      </ul>
    </>
  );
}
