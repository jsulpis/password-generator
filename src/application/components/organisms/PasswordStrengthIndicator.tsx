import {PasswordStrength} from "../../../domain/models/PasswordStrength";
import {Progress} from "reactstrap";
import React from "react";
import {PasswordStrengthCalculator} from "../../../domain/PasswordStrengthCalculator";
import "./PasswordStrengthIndicator.scss";

export interface PasswordStrengthIndicatorProps {
  password: string;
}

function PasswordStrengthIndicator(props: PasswordStrengthIndicatorProps) {
  const strengthAnalysis = new PasswordStrengthCalculator().calculateStrength(props.password);
  const [themeColor, hexaColor] = computeColorFromStrength(strengthAnalysis.strength);
  const strengthLabel = getLabelFromEnum(PasswordStrength[strengthAnalysis.strength]);

  return (
    <div className="progress-wrapper strength-indicator">
      <div className="progress-info">
        <div>
          Strength: <span className="strength-label" style={{color: hexaColor}}>{strengthLabel}</span>
        </div>
        <div className="progress-percentage">
          <span>{strengthAnalysis.value}</span>
        </div>
      </div>
      <Progress max="100" value={strengthAnalysis.value} color={themeColor}/>
      <p className="disclaimer">Disclaimer: this is a rough estimation of the strength of the password and should not be
        considered as a guarantee of its resistance to hacking.</p>
    </div>
  )
}

function getLabelFromEnum(passwordStrength: string): string {
  return passwordStrength.split("_").map(word => word[0] + word.slice(1).toLowerCase()).join(" ");
}

function computeColorFromStrength(passwordStrength: PasswordStrength): string[] {
  switch (passwordStrength) {
    case PasswordStrength.VERY_WEAK:
      return ['danger', '#f5365c'];
    case PasswordStrength.WEAK:
      return ['danger', '#f5365c'];
    case PasswordStrength.GOOD:
      return ['warning', '#fb6340'];
    case PasswordStrength.STRONG:
      return ['info', '#11cdef'];
    case PasswordStrength.VERY_STRONG:
      return ['success', '#2dce89'];
  }
}

export default PasswordStrengthIndicator;
