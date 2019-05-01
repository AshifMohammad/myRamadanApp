import React from "react";
import classnames from "classnames";
import { bool } from "prop-types";

/**
 * List items. Can be styled like a button (interactive) with a ripple
 * effect in supported browsers.
 */
const ListItem = ({
  button,
  selected,
  activated,
  className,
  children,
  ...other
}) => {
  const T = button ? "a" : "li";
  return (
    <T
      className={classnames(
        "mdc-list-item",
        {
          "mdc-list-item--selected": selected,
          "mdc-list-item--activated": activated
        },
        className
      )}
      {...other}
    >
      {children}
    </T>
  );
};

ListItem.propTypes = {
  /**
   * True to make the item clickable.
   */
  button: bool,
  /**
   * Styles the item in a selected state.
   *
   * Multiple items in a list can be selected at the same time.
   */
  selected: bool,
  /**
   * Styles the item in an activated state.
   *
   * Only one item in a list should be activated at a time.
   */
  activated: bool
};

export default ListItem;
