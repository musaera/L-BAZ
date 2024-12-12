import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosService } from "../Utilities/Apiservices";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      book: {
        title: "",
        author: "",
        ISBN: "",
        pub: "",
        img: "",
        about: "",
      },
      author: {
        name: "",
        birth: "",
        bio: "",
        img: "",
      },
    },
    validationSchema: Yup.object().shape({
      book: Yup.object().shape({
        title: Yup.string().required("Title is Required"),
        ISBN: Yup.string().matches(
          /^\d{13}$/,
          "Enter a valid 13 - Digit ISBN Number"
        ),
        pub: Yup.date().required("Published date Required"),
        about: Yup.string().required("About Book is required"),
        img: Yup.string().required("Image URL is required"),
      }),
      author: Yup.object().shape({
        name: Yup.string().required("Author name is Required"),
        birth: Yup.date().required("Birth date Required"),
        bio: Yup.string().required("Biography is required"),
        img: Yup.string().required("Image URL is required"),
      }),
    }),
    onSubmit: async (values) => {
      try {
        let res = await axiosService.post("/daftar-buku", values);
        if (res.status === 201) {
          navigate("/dashboard");
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form
      className="container mx-auto mt-6 mb-6 px-4 max-w-2xl"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-2xl font-bold text-center mb-6">Detail Buku</h1>

      <div className="mb-4">
        <label htmlFor="formTitle" className="block text-gray-700 font-medium">
          Title
        </label>
        <input
          type="text"
          id="formTitle"
          placeholder="Masukkan Judul Buku"
          name="book.title"
          className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          value={formik.values.book.title}
          onBlur={formik.handleBlur}
        />
        {formik.touched.book?.title && formik.errors.book?.title && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.book.title}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="formISBN" className="block text-gray-700 font-medium">
            ISBN
          </label>
          <input
            type="text"
            id="formISBN"
            placeholder="Nomer ISBN"
            name="book.ISBN"
            className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={formik.handleChange}
            value={formik.values.book.ISBN}
            onBlur={formik.handleBlur}
          />
          {formik.touched.book?.ISBN && formik.errors.book?.ISBN && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.book.ISBN}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="formPublished"
            className="block text-gray-700 font-medium"
          >
            Published
          </label>
          <input
            type="date"
            id="formPublished"
            name="book.pub"
            className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={formik.handleChange}
            value={formik.values.book.pub}
            onBlur={formik.handleBlur}
          />
          {formik.touched.book?.pub && formik.errors.book?.pub && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.book.pub}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="formImg" className="block text-gray-700 font-medium">
          Book Cover Image
        </label>
        <input
          type="url"
          id="formImg"
          placeholder="Masukkan URL Gambar"
          name="book.img"
          className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          value={formik.values.book.img}
          onBlur={formik.handleBlur}
        />
        {formik.touched.book?.img && formik.errors.book?.img && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.book.img}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="formAbout" className="block text-gray-700 font-medium">
          About
        </label>
        <textarea
          id="formAbout"
          placeholder="Masukkan Tentang Buku"
          rows={3}
          name="book.about"
          className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          value={formik.values.book.about}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.book?.about && formik.errors.book?.about && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.book.about}
          </p>
        )}
      </div>

      <h1 className="text-2xl font-bold text-center mt-12  mb-6">
        Detail Penulis
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="formAuthorName"
            className="block text-gray-700 font-medium"
          >
            Author Name
          </label>
          <input
            type="text"
            id="formAuthorName"
            placeholder="Masukkan Nama Penulis"
            name="author.name"
            className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={formik.handleChange}
            value={formik.values.author.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.author?.name && formik.errors.author?.name && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.author.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="formAuthorBirth"
            className="block text-gray-700 font-medium"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="formAuthorBirth"
            name="author.birth"
            className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={formik.handleChange}
            value={formik.values.author.birth}
            onBlur={formik.handleBlur}
          />
          {formik.touched.author?.birth && formik.errors.author?.birth && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.author.birth}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="formAuthorImg"
          className="block text-gray-700 font-medium"
        >
          Author Image URL
        </label>
        <input
          type="text"
          id="formAuthorImg"
          placeholder="Masukkan URL Gambar Penulis"
          name="author.img"
          className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          value={formik.values.author.img}
          onBlur={formik.handleBlur}
        />
        {formik.touched.author?.img && formik.errors.author?.img && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.author.img}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="formAuthorBio"
          className="block text-gray-700 font-medium"
        >
          Author Biography
        </label>
        <textarea
          id="formAuthorBio"
          placeholder="Masukkan Bigrafi Penulis"
          rows={3}
          name="author.bio"
          className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          value={formik.values.author.bio}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.author?.bio && formik.errors.author?.bio && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.author.bio}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Create;
