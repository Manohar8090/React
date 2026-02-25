import { useFormik } from "formik";

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: '',
    },

    onSubmit: (values, { resetForm }) => {
      addNewComment({
        username: values.username,
        remarks: values.remarks,
        rating: Number(values.rating),
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="username"
        placeholder="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <br/> <br/>
      <textarea
        name="remarks"
        placeholder="remarks"
        value={formik.values.remarks}
        onChange={formik.handleChange}
      />
      <br/> <br/>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        value={formik.values.rating}
        onChange={formik.handleChange}
      />
      <br/> <br/>
      <button type="submit">Add Comment</button>
    </form>
  );
}
