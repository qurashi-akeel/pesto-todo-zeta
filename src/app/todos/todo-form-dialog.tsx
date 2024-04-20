import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TODO_STATUSES } from "@/constants";

type TodoFormDailogProps = {
  formType: "edit" | "create";
};

export default function TodoFormDailog({ formType }: TodoFormDailogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {formType === "edit" && "Edit todo"}
          {formType === "create" && "Create todo"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {formType === "edit" && "Edit todo"}
            {formType === "create" && "Create todo"}
          </DialogTitle>
          <DialogDescription>
            {formType === "create" && "Save your todos in one-click."}
            {formType === "edit" &&
              "Make changes to your todo & click save changes."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Title of your todo" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Description</Label>
            <Textarea id="title" placeholder="Title of your todo" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="state">State</Label>
            <Select>
              <SelectTrigger id="state">
                <SelectValue placeholder="Choose State" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="PLANNED">{TODO_STATUSES.PLANNED}</SelectItem>
                <SelectItem value="IN_PROGRESS">{TODO_STATUSES.IN_PROGRESS}</SelectItem>
                <SelectItem value="COMPLETED">{TODO_STATUSES.COMPLETED}</SelectItem>
                <SelectItem value="DELETED">{TODO_STATUSES.DELETED}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            {formType === "edit" && "Save changes"}
            {formType === "create" && "Save todo"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
