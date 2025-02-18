import svg from "../assets/Line 3.svg";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <img src={svg} className="hidden sm:inline-block w-auto" alt="Line" />
      <h3>{text}</h3>
      <img src={svg} className="hidden sm:inline-block w-auto" alt="Line" />
    </div>
  );
}
