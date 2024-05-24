import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-300 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          © Digital Bleeding Studios. 2024.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
