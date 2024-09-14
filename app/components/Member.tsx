import Image from "next/image";

type MemberProps = {
  name: string;
  src: string;
};

export const MemberImage = ({ name, src }: MemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mt-4 text-logo_txt">{name}</h2>
      <Image
        src={src}
        className="w-64 h-64 rounded-full object-cover mt-2"
        width={0}
        height={0}
        alt="Robin"
      />
    </div>
  );
};

type TeamProps = {
  src: string;
};

export const TeamImage = ({ src }: TeamProps) => {
  return (
    <Image
      src={src}
      className="w-full h-64 object-cover mt-5"
      width={0}
      height={0}
      alt="Team Overview"
    />
  );
};
