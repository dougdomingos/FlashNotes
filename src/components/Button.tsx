import { Icon } from "@phosphor-icons/react";

interface ButtonProps {
  icon?: Icon;
  label: string;
}

function Button({ icon, label }: ButtonProps) {
  const Icon = icon;

  return (
    <button className="flex flex-row items-center gap-1 text-sm">
      {Icon && <Icon size={22} />} {label}
    </button>
  );
}

export default Button;
