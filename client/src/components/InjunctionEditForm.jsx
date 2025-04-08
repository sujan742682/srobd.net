import React from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import FormSubmitButton from './FormSubmitButton'

const InjunctionEditForm = () => {
    const data=useLoaderData()
    const {singleInjunction}=data
    
  return (
    <>
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
                defaultValue={singleInjunction.mouzaName?.toString()}
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
                    defaultValue={singleInjunction.mouzaJlNo}
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
                    defaultValue={singleInjunction.khatiyanNo}
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
                    defaultValue={singleInjunction.dagNos}
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
                defaultValue={singleInjunction.objectionType} // Set default value from singleInjunction
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
                    defaultValue={singleInjunction.note} // Set default value from singleInjunction
                ></textarea>
            </div>
            <FormSubmitButton btnText='Update'/>
        </Form>
    </>
  )
}

export default InjunctionEditForm