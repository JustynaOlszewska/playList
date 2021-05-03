import * as yup from "yup";

export const schemaValidationAuthors = yup.object().shape({
  name: yup
    .string()
    .required("Title field is required")
    .max(30, "Title field should contains max 30 characters"),
});

export const schemaValidationSong = yup.object().shape({
  title: yup
    .string()
    .required("Title field is required")
    .max(30, "Title field should contains max 30 characters"),
  author: yup.string().required("Author fields is required"),
  duration: yup
    .number()
    .typeError("Duration field must be a number")
    .required("Duration field is required"),
});

export const schemaValidationPlayList = yup.object().shape({
  name: yup
    .string()
    .required("Playlist name field is required")
    .max(30, "Playlist name field should contains max 30 characters"),
});
