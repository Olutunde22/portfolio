import * as HeroIcons from "@heroicons/react/24/outline";
import { IconName } from "../types";

interface IconProps {
  icon: IconName;
  className?: string;
  onClick?: () => void;
}

const defaultProps = {
  className: "text-blue-400",
  onClick: null,
};

function DynamicHeroIcon({ icon, className, onClick }: IconProps): JSX.Element {
  const SingleIcon = HeroIcons[icon];

  return <SingleIcon className={className} onClick={onClick} />;
}

DynamicHeroIcon.defaultProps = defaultProps;

export default DynamicHeroIcon;
