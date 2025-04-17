import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-5">
      <Button>Hello World from Rohit!</Button>

      <div className="mt-5">
        <Input placeholder="Hi, I am Input" />
      </div>

      <div className="mt-5">
        <Progress value={35} />
      </div>
      <div className="mt-5">
        <Textarea value={"I am Textarea"}/>
      </div>
      <div className="mt-5">
        <Checkbox />
      </div>
    </div>
  );
}
