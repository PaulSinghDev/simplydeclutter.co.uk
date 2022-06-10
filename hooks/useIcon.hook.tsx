import { MdIron } from "react-icons/md";
import { GiShirt, GiPapers, GiHastyGrave } from "react-icons/gi";
import { RiArchiveDrawerLine } from "react-icons/ri";
import { ImShrink2 } from "react-icons/im";
import { FaBaby, FaBoxOpen } from "react-icons/fa";
import { Icons } from "types";

const useIcon = (icon: Icons) => {
  switch (icon) {
    case "shirt":
      return <GiShirt />;
    case "iron":
      return <MdIron />;
    case "drawer":
      return <RiArchiveDrawerLine />;
    case "shrink":
      return <ImShrink2 />;
    case "baby":
      return <FaBaby />;
    case "grave":
      return <GiHastyGrave />;
    case "docs":
      return <GiPapers />;
    case "box":
      return <FaBoxOpen />;
    default:
      return <MdIron />;
  }
};

export { useIcon };
