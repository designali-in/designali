import { Button } from "@designali/ui/button";
import { Input } from "@designali/ui/input";
import { DIcons } from "dicons";

export const DInput = ({ value, onChange }) => {
  return (
    <div className="relative flex items-center">
      <div className="flex">
        <Input
          className="w-40"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <div className={"absolute right-2 top-1 flex"}>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onChange(value + 1)}
          >
            <DIcons.ArrowLeft strokeWidth={1} className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onChange(value - 1)}
          >
            <DIcons.ArrowRight strokeWidth={1} className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
