import { MdIron } from "react-icons/md";
import { GiShirt } from "react-icons/gi";

const useIcon = (icon: "shirt" | "iron") => {
  switch (icon) {
    case "shirt":
      return <GiShirt />;
    case "iron":
      return <MdIron />;
    default:
      return <MdIron />;
  }
};

export { useIcon };
