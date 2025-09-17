import Image from "next/image";
import IconLink from "../links/IconLink";

// ==========================================================
interface TeamCard2Props {
  name: string;
  image: string;
  twitterUrl: string;
  designation: string;
  description: string;
  facebookUrl: string;
  dribbbleUrl: string;
}
// ==========================================================

export default function TeamCard2({
  name,
  image,
  twitterUrl,
  description,
  designation,
  facebookUrl,
  dribbbleUrl
}: TeamCard2Props) {
  return (
    <div className="text-center">
      <div className="w-20 mx-auto mb-4 overflow-hidden rounded-circle">
        <Image src={image} width={500} height={500} alt="Team Member" className="h-auto w-100" />
      </div>

      <h4 className="mb-1">{name}</h4>
    
    </div>
  );
}
