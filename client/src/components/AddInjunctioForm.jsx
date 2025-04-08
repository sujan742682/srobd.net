import React from 'react'
import { Form, useActionData, useOutletContext } from 'react-router-dom'

const AddInjunctioForm = () => {
    const errors=useActionData();
    const {userName}=useOutletContext(); //data from outlet context
  return (
    <>
        <div>
            <p>{userName }</p>
            {errors && <p className='text-red-500'>{errors.msg}</p>}
            <Form method='post' className='space-y-4'>
                <div>
                    <label htmlFor="mouzaName" className="block text-sm font-medium text-gray-700">
                    Select mouzaName
                    </label>
                    <select
                    id="mouzaName"
                    name="mouzaName"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                    >
                    <option value="">Select Mouza</option>
                    <option value="1212">1212</option>
                    <option value="4522">4522</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="mouzaJlNo" className="block text-sm font-medium text-gray-700">Enter JL No</label>
                    <input
                        type="text"
                        id="mouzaJlNo"
                        name="mouzaJlNo"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter JL No"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="khatiyanNo" className="block text-sm font-medium text-gray-700">Enter Khatiyan No</label>
                    <input
                        type="text"
                        id="khatiyanNo"
                        name="khatiyanNo"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Khatiyan No"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dagNos" className="block text-sm font-medium text-gray-700">Enter dag No</label>
                    <input
                        type="text"
                        id="dagNos"
                        name="dagNos"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Dag No"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="objectionType" className="block text-sm font-medium text-gray-700">
                    Select objectionType
                    </label>
                    <select
                    id="objectionType" // Corrected here
                    name="objectionType" // Corrected here
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                    >
                    <option value="">Select Objection Type</option>
                    <option value="1">Court Injunction</option>
                    <option value="2">Bayna</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-700">Injunction Details</label>
                    <textarea
                        id="note"
                        name="note"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter details"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                    Save
                </button>
            </Form>
        </div>
    </>
    )
}

export default AddInjunctioForm