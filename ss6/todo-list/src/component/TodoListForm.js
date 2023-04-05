import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as todoListService from '../service/TodoListService'
import { toast } from "react-toastify";

function TodoListForm() {
  return (
    <>
        <Formik
            initialValues={{
                name: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                const create = async () => {
                    await todoListService.save(values)
                    toast("Submitting successful");
                }
                create()
            }}
        >
            <Form>
                <h1>Todo List</h1>
                <Field type = 'text' name = 'name' />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </>
  )
}

export default TodoListForm