import {
  Table as CustomTable,
  TableHeader as CustomTableHeader,
  TableBody as CustomTableBody,
  TableFooter as CustomTableFooter,
  TableHead as CustomTableHead,
  TableRow as CustomTableRow,
  TableCell as CustomTableCell,
  TableCaption as CustomTableCaption,
} from "@/components/Table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible";
import { Button as CustomButton } from "@/components/Button";
import { Checkbox as CustomCheckbox } from "@/components/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/DropdownMenu";
import { Input as CustomInput } from "@/components/Input";
import { ChevronDown, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export const TableExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Table Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Table Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Table Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Table Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Simple Table</h5>
                  <CustomTable variant="primary">
                    <CustomTableCaption>
                      A list of your recent invoices.
                    </CustomTableCaption>
                    <CustomTableHeader>
                      <CustomTableRow>
                        <CustomTableHead>Invoice</CustomTableHead>
                        <CustomTableHead>Status</CustomTableHead>
                        <CustomTableHead>Method</CustomTableHead>
                        <CustomTableHead className="text-right">
                          Amount
                        </CustomTableHead>
                      </CustomTableRow>
                    </CustomTableHeader>
                    <CustomTableBody>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          INV001
                        </CustomTableCell>
                        <CustomTableCell>Paid</CustomTableCell>
                        <CustomTableCell>Credit Card</CustomTableCell>
                        <CustomTableCell className="text-right">
                          $250.00
                        </CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          INV002
                        </CustomTableCell>
                        <CustomTableCell>Pending</CustomTableCell>
                        <CustomTableCell>PayPal</CustomTableCell>
                        <CustomTableCell className="text-right">
                          $150.00
                        </CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          INV003
                        </CustomTableCell>
                        <CustomTableCell>Unpaid</CustomTableCell>
                        <CustomTableCell>Bank Transfer</CustomTableCell>
                        <CustomTableCell className="text-right">
                          $350.00
                        </CustomTableCell>
                      </CustomTableRow>
                    </CustomTableBody>
                  </CustomTable>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Table with Footer</h5>
                  <CustomTable variant="secondary">
                    <CustomTableHeader>
                      <CustomTableRow>
                        <CustomTableHead>Product</CustomTableHead>
                        <CustomTableHead>Category</CustomTableHead>
                        <CustomTableHead>Price</CustomTableHead>
                        <CustomTableHead className="text-right">
                          Stock
                        </CustomTableHead>
                      </CustomTableRow>
                    </CustomTableHeader>
                    <CustomTableBody>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          Laptop
                        </CustomTableCell>
                        <CustomTableCell>Electronics</CustomTableCell>
                        <CustomTableCell>$999.00</CustomTableCell>
                        <CustomTableCell className="text-right">
                          15
                        </CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          Mouse
                        </CustomTableCell>
                        <CustomTableCell>Accessories</CustomTableCell>
                        <CustomTableCell>$29.99</CustomTableCell>
                        <CustomTableCell className="text-right">
                          42
                        </CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          Keyboard
                        </CustomTableCell>
                        <CustomTableCell>Accessories</CustomTableCell>
                        <CustomTableCell>$89.99</CustomTableCell>
                        <CustomTableCell className="text-right">
                          28
                        </CustomTableCell>
                      </CustomTableRow>
                    </CustomTableBody>
                    <CustomTableFooter>
                      <CustomTableRow>
                        <CustomTableCell colSpan={2}>Total</CustomTableCell>
                        <CustomTableCell>$1,118.98</CustomTableCell>
                        <CustomTableCell className="text-right">
                          85
                        </CustomTableCell>
                      </CustomTableRow>
                    </CustomTableFooter>
                  </CustomTable>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Outline Variant Table</h5>
                  <CustomTable variant="outline">
                    <CustomTableHeader>
                      <CustomTableRow>
                        <CustomTableHead>Name</CustomTableHead>
                        <CustomTableHead>Email</CustomTableHead>
                        <CustomTableHead>Role</CustomTableHead>
                        <CustomTableHead className="text-right">
                          Actions
                        </CustomTableHead>
                      </CustomTableRow>
                    </CustomTableHeader>
                    <CustomTableBody>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          John Doe
                        </CustomTableCell>
                        <CustomTableCell>john@example.com</CustomTableCell>
                        <CustomTableCell>Admin</CustomTableCell>
                        <CustomTableCell className="text-right">
                          <CustomButton size="sm" variant="outline">
                            Edit
                          </CustomButton>
                        </CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell className="font-medium">
                          Jane Smith
                        </CustomTableCell>
                        <CustomTableCell>jane@example.com</CustomTableCell>
                        <CustomTableCell>User</CustomTableCell>
                        <CustomTableCell className="text-right">
                          <CustomButton size="sm" variant="outline">
                            Edit
                          </CustomButton>
                        </CustomTableCell>
                      </CustomTableRow>
                    </CustomTableBody>
                  </CustomTable>
                </div>
              </div>
            </div>

            {/* Size Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Small Size:
                  </p>
                  <CustomTable tableSize="sm" variant="primary">
                    <CustomTableHeader>
                      <CustomTableRow>
                        <CustomTableHead>Task</CustomTableHead>
                        <CustomTableHead>Status</CustomTableHead>
                        <CustomTableHead>Priority</CustomTableHead>
                      </CustomTableRow>
                    </CustomTableHeader>
                    <CustomTableBody>
                      <CustomTableRow>
                        <CustomTableCell>Review code</CustomTableCell>
                        <CustomTableCell>Done</CustomTableCell>
                        <CustomTableCell>High</CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell>Write tests</CustomTableCell>
                        <CustomTableCell>In Progress</CustomTableCell>
                        <CustomTableCell>Medium</CustomTableCell>
                      </CustomTableRow>
                    </CustomTableBody>
                  </CustomTable>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Large Size:
                  </p>
                  <CustomTable tableSize="lg" variant="primary">
                    <CustomTableHeader>
                      <CustomTableRow>
                        <CustomTableHead>Project</CustomTableHead>
                        <CustomTableHead>Team</CustomTableHead>
                        <CustomTableHead>Progress</CustomTableHead>
                      </CustomTableRow>
                    </CustomTableHeader>
                    <CustomTableBody>
                      <CustomTableRow>
                        <CustomTableCell>Website Redesign</CustomTableCell>
                        <CustomTableCell>Design Team</CustomTableCell>
                        <CustomTableCell>75%</CustomTableCell>
                      </CustomTableRow>
                      <CustomTableRow>
                        <CustomTableCell>Mobile App</CustomTableCell>
                        <CustomTableCell>Dev Team</CustomTableCell>
                        <CustomTableCell>45%</CustomTableCell>
                      </CustomTableRow>
                    </CustomTableBody>
                  </CustomTable>
                </div>
              </div>
            </div>

            {/* Data Table Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Data Table Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Advanced Data Table with Sorting & Filtering
                  </h5>
                  <DataTableDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">Simple Data Table</h5>
                  <SimpleDataTableDemo />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Data Table Demo Component
const DataTableDemo = () => {
  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@example.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@example.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@example.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@example.com",
    },
  ];

  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <CustomCheckbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <CustomCheckbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <CustomButton
            variant="outline"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-8"
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </CustomButton>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));

        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CustomButton variant="outline" size="sm" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </CustomButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>
                View payment details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
        <CustomInput
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomButton variant="outline" size="sm" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </CustomButton>
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
      <div className="overflow-hidden rounded-md border">
        <CustomTable>
          <CustomTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <CustomTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <CustomTableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </CustomTableHead>
                  );
                })}
              </CustomTableRow>
            ))}
          </CustomTableHeader>
          <CustomTableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <CustomTableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <CustomTableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </CustomTableCell>
                  ))}
                </CustomTableRow>
              ))
            ) : (
              <CustomTableRow>
                <CustomTableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </CustomTableCell>
              </CustomTableRow>
            )}
          </CustomTableBody>
        </CustomTable>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <CustomButton
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </CustomButton>
          <CustomButton
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

// Simple Data Table Demo Component
const SimpleDataTableDemo = () => {
  const data = [
    { id: 1, name: "Alice Johnson", department: "Engineering", salary: 85000 },
    { id: 2, name: "Bob Smith", department: "Marketing", salary: 72000 },
    { id: 3, name: "Carol Davis", department: "Sales", salary: 68000 },
    { id: 4, name: "David Wilson", department: "Engineering", salary: 92000 },
    { id: 5, name: "Eva Brown", department: "HR", salary: 65000 },
  ];

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "department",
      header: "Department",
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: ({ row }) => {
        const salary = row.getValue("salary") as number;
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(salary);
        return <div className="text-right">{formatted}</div>;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <CustomTable variant="outline">
        <CustomTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <CustomTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <CustomTableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </CustomTableHead>
              ))}
            </CustomTableRow>
          ))}
        </CustomTableHeader>
        <CustomTableBody>
          {table.getRowModel().rows.map((row) => (
            <CustomTableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <CustomTableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CustomTableCell>
              ))}
            </CustomTableRow>
          ))}
        </CustomTableBody>
      </CustomTable>
    </div>
  );
};

// Type definitions
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
