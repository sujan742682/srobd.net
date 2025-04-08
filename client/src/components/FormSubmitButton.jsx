import React from 'react'
import { useNavigation } from 'react-router-dom'
const FormSubmitButton = ({btnText}) => {
    const isFormSubmitting = useNavigation().state === 'submitting'
  return (
    <>
        <button
          type="submit"
          disabled={isFormSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          {isFormSubmitting ? (
            <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
                </svg>
                Submitting…
            </span>
            ) : btnText}

        </button>
    </>
  )
}

export default FormSubmitButton