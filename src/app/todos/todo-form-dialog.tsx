import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { TodoType } from "./todos-table";
import { auth } from "@clerk/nextjs/server";
import { Todo } from "@/model/Todo";
import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

type TodoFormDailogProps = {
  formType: "edit" | "create";
  todo?: TodoType;
};

export default function TodoFormDailog({
  formType,
  todo,
}: TodoFormDailogProps) {
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
            Title and status are required so, make sure that they are filled
            properly.
          </DialogDescription>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            "use server";
            const title = formData.get("title");
            const description = formData.get("description");
            const status = formData.get("state");
            const userId = auth().userId;
            if (!title || !status)
              throw new Error("Title and status are required.");
            if (!userId) throw new Error("Are you logged in?");
            const newTodo = {
              title,
              description,
              status,
              userId,
            };
            await dbConnect();
            try {
              await Todo.create(newTodo);
            } catch (error: any) {
              throw new Error(error.message);
            }
            revalidatePath("/todos", "layout");
          }}
        >
          <div className="grid gap-4 py-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">
                Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Title of your todo"
                defaultValue={todo?.title || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description of your todo"
                defaultValue={todo?.description || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="state">
                State <span className="text-red-500">*</span>
              </Label>
              <Select defaultValue={todo?.status} name="state">
                <SelectTrigger id="state">
                  <SelectValue placeholder="Choose State" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="PLANNED">
                    {TODO_STATUSES.PLANNED}
                  </SelectItem>
                  <SelectItem value="IN_PROGRESS">
                    {TODO_STATUSES.IN_PROGRESS}
                  </SelectItem>
                  <SelectItem value="COMPLETED">
                    {TODO_STATUSES.COMPLETED}
                  </SelectItem>
                  <SelectItem value="DELETED">
                    {TODO_STATUSES.DELETED}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">
                {formType === "edit" && "Save changes"}
                {formType === "create" && "Save todo"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
