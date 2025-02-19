import React from 'react'

interface HeaderProps {
    label: string;
}

export const Header = ({ label } : HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
        <h1 className="text-accent">Movietime</h1>
        <p className="text-lg">
          { label }
        </p>
    </div>
  )
}