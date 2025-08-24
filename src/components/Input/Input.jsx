/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CaretDown } from "../CaretDown";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import "./style.css";

export const Input = ({
  helperIcon = true,
  rightIcon = true,
  rightSampleCopy = "Alexander",
  leftTextCopy = "Gadgets",
  leftText = true,
  leftSample = true,
  rightText = true,
  helperText = true,
  leftIcon = true,
  leftSampleCopy = "Gadgets",
  labelCopy = "Category Name",
  rightSample = true,
  required = true,
  label = true,
  rightTextCopy = "Alexander",
  helper = true,
  helperTextCopy = "Your first name",
  state,
  className,
  inputFieldBoxClassName,
  frameClassName,
  override = (
    <CaretDown
      caretDown="/img/caretdown-20.png"
      className="caret-down-instance"
    />
  ),
  divClassName,
  frameClassNameOverride,
}) => {
  return (
    <div className={`input state-1-${state} ${className}`}>
      {label && (
        <div className="frame-11">
          <div className="category-name">{labelCopy}</div>

          {required && (
            <ConcreteComponentNode
              icons="asterics"
              iconsImportClassName="icons-instance"
            />
          )}
        </div>
      )}

      <div className={`input-field-box ${inputFieldBoxClassName}`}>
        <div className={`frame-12 ${frameClassName}`}>
          {leftIcon && <>{override}</>}

          {leftText && <div className="text-wrapper-42">{leftTextCopy}</div>}

          {leftSample && (
            <div className={`text-wrapper-43 ${divClassName}`}>
              {leftSampleCopy}
            </div>
          )}
        </div>

        <div className={`frame-13 ${frameClassNameOverride}`}>
          {rightSample && (
            <div className="text-wrapper-43">{rightSampleCopy}</div>
          )}

          {rightText && <div className="text-wrapper-42">{rightTextCopy}</div>}

          {rightIcon && (
            <CaretDown
              caretDown="/img/caretdown-20.png"
              className="caret-down-instance"
            />
          )}
        </div>
      </div>

      {helper && (
        <div className="frame-14">
          {helperText && (
            <div className="your-first-name">{helperTextCopy}</div>
          )}

          {helperIcon && (
            <ConcreteComponentNode
              icons="asterics"
              iconsImportClassName="instance-node"
            />
          )}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  helperIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  rightSampleCopy: PropTypes.string,
  leftTextCopy: PropTypes.string,
  leftText: PropTypes.bool,
  leftSample: PropTypes.bool,
  rightText: PropTypes.bool,
  helperText: PropTypes.bool,
  leftIcon: PropTypes.bool,
  leftSampleCopy: PropTypes.string,
  labelCopy: PropTypes.string,
  rightSample: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.bool,
  rightTextCopy: PropTypes.string,
  helper: PropTypes.bool,
  helperTextCopy: PropTypes.string,
  state: PropTypes.oneOf(["error", "active", "default"]),
};
