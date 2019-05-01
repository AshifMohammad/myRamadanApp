/* eslint-disable jsx-a11y/href-no-hash */
import React from "react";
import PermanentDrawerNav from "./PermanentDrawerNav";
import { bool } from "prop-types";

/**
 * Permanent drawer that sits below the toolbar. Use custom CSS or styles to
 * position the component.
 */
const PermanentDrawer = ({ aboveToolbar, className, children, ...other }) => {
  if (aboveToolbar) {
    return (
      <PermanentDrawerNav className={className} {...other}>
        <div className="mdc-drawer__toolbar-spacer" />
        <div className="mdc-drawer__content">{children}</div>
      </PermanentDrawerNav>
    );
  }

  return (
    <PermanentDrawerNav className={className} {...other}>
      {children}
    </PermanentDrawerNav>
  );
};

PermanentDrawer.propTypes = {
  /**
   * Sits above the toolbar and uses a spacer to ensure it presents correctly.
   *
   * @ignore
   */
  aboveToolbar: bool
};

export default PermanentDrawer;
