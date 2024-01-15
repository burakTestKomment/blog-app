import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CategoryModal from "../components/modals/CategoryModal";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

/**
* @description This is a React functional component that renders a data grid of
* categories and allows users to add and edit categories. It uses the `useBlogCall`
* hook to fetch data from an API endpoint for categories. When the user clicks the
* "Add Category" button or double-clicks on a row within the data grid of existing
* categories and it opens up an modal window where they can enter new categories or
* edit existing ones. Upon saving the changes category details get posted back to
* server through an AJAX API POST request which makes use of `deleteBlogData` which
* deletes the specified category by its ID upon clicking delete buttons within the
* category detail popup or confirm deletion dialog on row double click event .
* 
* @returns { Component } The `Categories` function returns a React component that
* displays a button to add a category and a table of existing categories with edit
* and delete buttons. When the add button is clicked. it opens a modal dialog to
* enter the new category name. When an edit or delete button is clicked on the table.
* it displays more information about the selected category such as ID. The function
* returns a JSX element with the category table.
*/
export default function Categories() {
  const { getBlogData } = useBlogCall();
  const { categories } = useSelector((state) => state.blog);
  const [open, setOpen] = useState(false);
/**
* @description This function sets the `open` state to `true`.
* 
* @returns {  } The output of the `handleOpen` function is not defined because the
* function does not return anything (the `=>` arrow syntax indicates a function
* expression that returns `undefined`).
*/
  const handleOpen = () => setOpen(true);
/**
* @description The function `handleClose` sets the value of `open` to `false`.
* 
* @returns { any } The function `handleClose` takes no arguments and returns `void`.
* It has a single statement `setOpen(false)`, which updates the state of the component
* by setting `open` to `false`.
*/
  const handleClose = () => setOpen(false);
  const { deleteBlogData } = useBlogCall();
  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    getBlogData("categories");
    // getNewsData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Category Name", width: 300 },
    {
      field: "edit",
      headerName: "Edit",
      width: 120,
/**
* @description This function defines a React component that renders a button with
* an edit icon that triggers a functionality named "handleEdit" when clicked.
* 
* @param { object } params - The `params` input parameter is an object that contains
* the row data for the cell being rendered.
* 
* @returns { Component } The output returned by this function is a JavaScript object
* representing a React component that renders a button with an edit icon.
*/
      renderCell: (params) => (
        <Button
          startIcon={<EditIcon />}
          size="small"
          onClick={() => handleEdit(params.row)}
        ></Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
/**
* @description The function `renderCell` generates an HTML button element with a
* delete icon and a small size.
* 
* @param { object } params - In the given `renderCell` function component of ReactJS
* the function component is accepting a parameter as an argument `params`.  This
* argument "params" is receiving any props that are handed down from higher-level
* parent functional components at render time by means of passing objects that look
* like this : `{ param1 = value1 , param2 = value2 }` ` all nested within the array
* data structure which React receives and maps through when iterating upon array`s
* contents. In essence they're saying here hey component use however you see fit
* whatever I send with my `params` prop object to generate your specific UI element
* content that best presents what each row of this table really represents; thus
* customising cells within certain columns (specifically one for now - Delete
* operations since it includes start Icon button invoking deleteOperation(id)); when
* clicked on (by user) trigger a method named `handleDelete` which expects only an
* `id`, nothing more just bare identifier number unique within entire system's records
* list scope when used appropriately elsewises wherever/whenever this components
* instance gets rendered again further down throughout project landscape using these
* same kinds of configuration-defined component methods called `renderCell`. Essentially
* speaking by saying `(params) => (` we open brackets with a ternary that awaits
* value/ies(s)..to come from an unknown depth before rendering actual output at last
* when condition above resolves its expectations as per rules given. In other words
* params could mean many different parameters based off different parent/containing
* components; just like cell-based dataTable UI's render rows will accept differently
* defined sets thereof - these values coming from previous columns if nested another
* layer down further into detail elsewhere along row(s) via props like:  cell_1='Some
* Data Cell Value' & Cell 2=('More Dynamic String') but cell value may change upon
* request to a specific value from up above say when clicking a delete Icon or
* row-select feature being built etc.
* 
* @returns { Component } The function `renderCell` returns a JSX element that
* represents a button with a delete icon and a small size.
*/
      renderCell: (params) => (
        <Button
          startIcon={<DeleteIcon />}
          size="small"
          onClick={() => handleDelete(params.id)}
        ></Button>
      ),
    },
  ];
console.log(category)
/**
* @description This function handles an edit event for a category and updates the
* category with the given ID. It sets the "open" state to true and sets the "category"
* state to the given ID.
* 
* @param { string } id - The `id` input parameter passes the id of the category being
* edited to the function.
* 
* @returns {  } The function `handleEdit` takes an `id` as a parameter and returns
* nothing (i.e., `undefined`).
* 
* Here's the concise description of the output:
* 
* 	- `console.log(id)` logs the `id` to the console.
* 	- `setOpen(true)` sets the `open` state to `true`.
* 	- `setCategory(id)` sets the `category` state to the `id`.
* 	- `console.log(category)` logs the current value of `category`.
* 	- `console.log(`Editing category with ID ${id}`)` logs a message to the console
* indicating that the category with the specified `id` is being edited.
*/
  const handleEdit = (id) => {
    console.log(id);
    setOpen(true);
    setCategory(id)
    console.log(category)
    console.log(`Editing category with ID ${id}`);
  };

/**
* @description The `handleDelete` function takes an ID as a parameter and logs it
* to the console.
* 
* @param { string } id - The `id` input parameter passed to the `handleDelete`
* function is used as a key to identify and delete a specific category from the
* "categories" data stored at the backend.
* 
* @returns {  } The output of the function `handleDelete` is:
* 
* 	- `Deleting category with ID ${id}` (first console log)
* 	- `Deleted category with ID ${id}` (second console log)
* 
* The first log statement prints "Deleting category with ID $ {id}" to the console.
*/
  const handleDelete = (id) => {
    console.log(id);
    deleteBlogData("categories", id);
    console.log(`Deleting category with ID ${id}`);
  };

  return (
    <>
      <Button variant="contained" sx={{ margin: "1rem" }} onClick={handleOpen}>
        Add Category
      </Button>
      <CategoryModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        category={category}
        setCategory={setCategory}
      />
      <div style={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={categories}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}

