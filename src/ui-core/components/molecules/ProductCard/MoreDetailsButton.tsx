import Link from 'next/link'
import React from 'react'
import { CgMoreO } from "react-icons/cg";

function MoreDetailsButton({...props}) {
  return (
    <Link
    href={`mens-products/${props.id}`}
    className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
  >
    <CgMoreO />
  </Link>
  )
}

export default MoreDetailsButton