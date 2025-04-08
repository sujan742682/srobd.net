import React from 'react'
import {Form, Link} from 'react-router-dom'
import { useAllInjunctionContext } from '../context/AllInjunctionContext'
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
const TableForShowInjunction = () => {
    const {data}=useAllInjunctionContext()
    const {injunctions}=data
    if(injunctions.length === 0) {
        return <div>No injunctions found</div>
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ক্রমিক নং</th>
                        <th>মৌজা</th>
                        <th>খতিয়ান</th>
                        <th>দাগ</th>
                        <th>ধরণ</th>
                        <th>বিস্তারিত</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    {injunctions.map((injunction, index) => {
                        console.log(day(injunction.createdAt).format('YYYY-MM-DD'))
                        console.log(injunction._id);
                        
                        return (
                            <tr key={injunction._id}>
                                <td>{index + 1}</td>
                                <td>{injunction.mouzaName}</td>
                                <td>{injunction.khatiyanNo}</td>
                                <td>{injunction.dagNos}</td>
                                <td>{injunction.objectionType}</td>
                                <td>{injunction.note}</td>
                                <td className='flex gap-2 flex-row'>
                                    <Link to={`../edit-injunction/${injunction._id}`}>Edit</Link>
                                    <Form method='post' action={`../delete-injunction/${injunction._id}`} >
                                        <button
                                        type='submit'
                                        className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer'
                                        >
                                            Delete
                                        </button>
                                    </Form>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default TableForShowInjunction