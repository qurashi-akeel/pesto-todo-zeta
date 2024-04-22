"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TODO_STATUSES, TodoStatusType } from "@/constants";

export const data: TodoType[] = [
  {
    id: "m5gr84i9",
    description: "Description of the test todo 1",
    status: "IN_PROGRESS",
    date: new Date("2024-04-01"),
    title: "todo title 1",
  },
  {
    id: "m5g7yg4i9",
    description: "Description of the test todo 2",
    status: "PLANNED",
    date: new Date("2024-04-03"),
    title: "Todo title 2",
  },
  {
    id: "m5gedg4i9",
    description: "Description of the test todo 3",
    status: "COMPLETED",
    date: new Date("2024-04-12"),
    title: "Todo title 3",
  },
  {
    id: "m5fref4i9",
    description: "Description of the test todo 4",
    status: "PLANNED",
    date: new Date("2024-04-06"),
    title: "Todo title 4",
  },
  {
    id: "m5vfvfvg",
    description: "Description of the test todo 5",
    status: "PLANNED",
    date: new Date("2024-04-10"),
    title: "Todo title 5",
  },
  {
    id: "fsdfjvkf",
    description: "Description of the test todo 6",
    status: "DELETED",
    date: new Date("2024-04-15"),
    title: "Todo title 6",
  },
  {
    id: "m5hfti9",
    description: "Description of the test todo 7",
    status: "IN_PROGRESS",
    date: new Date("2024-04-01"),
    title: "todo title 7",
  },
  {
    id: "m5kugy4i9",
    description: "Description of the test todo 8",
    status: "COMPLETED",
    date: new Date("2024-04-02"),
    title: "todo title 8",
  },
  {
    id: "fvkdvjfhd",
    description: "Description of the test todo 9",
    status: "IN_PROGRESS",
    date: new Date("2024-04-05"),
    title: "todo title 9",
  },
  {
    id: "fvkdvdfshd",
    description: "Description of the test todo 10",
    status: "IN_PROGRESS",
    date: new Date("2024-04-05"),
    title: "todo title 10",
  },
  {
    id: "kdfhxsrdfb",
    description: "Description of the test todo 10",
    status: "COMPLETED",
    date: new Date("2024-04-07"),
    title: "todo title 10",
  },
];

export type TodoType = {
  id: string;
  description: string;
  status: TodoStatusType;
  date: Date;
  title: string;
};

export const columns: ColumnDef<TodoType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <div className="">Description</div>,
    cell: ({ row }) => {
      return <div className="">{row.getValue("description")}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="">Created Date</div>,
    cell: ({ row }) => {
      return (
        <div className="">
          {Intl.DateTimeFormat("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }).format(new Date(row.getValue("date")))}
        </div>
      );
    },
  },
  {
    id: "status",
    header: "Status",
    enableHiding: true,
    cell: ({ row }) => {
      const todo = row.original;
      const changeStatusTo = Object.keys(TODO_STATUSES).filter(
        (status) => status !== todo.status
      );

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <span className="sr-only">Open menu</span>
              {todo.status.replace(/_/g, " ")}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {changeStatusTo.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => {
                  console.log(todo.id);
                }}
              >
                {TODO_STATUSES[status as TodoStatusType].replace("_", " ")}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function TodosDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter titles..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
