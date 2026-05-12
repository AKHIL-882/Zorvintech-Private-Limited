const paths = {
  code: 'M8 9 4 13l4 4M16 9l4 4-4 4M14 5l-4 16',
  cloud: 'M17.5 19H8a5 5 0 1 1 1.1-9.88A7 7 0 0 1 22 13.5 3.5 3.5 0 0 1 17.5 19Z',
  spark: 'M13 2 9 10l-7 2 7 2 4 8 4-8 7-2-7-2-4-8Z',
  support: 'M4 13a8 8 0 0 1 16 0v3a2 2 0 0 1-2 2h-1v-6h3M4 16v-3h3v6H6a2 2 0 0 1-2-2v-1Zm9 5h2a3 3 0 0 0 3-3',
  briefcase: 'M10 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 8h18v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm0 5h18',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  learn: 'M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 3 9 3 12 0v-5',
  arrow: 'M5 12h14M13 5l7 7-7 7',
  check: 'm5 13 4 4L19 7',
  close: 'M6 6l12 12M18 6 6 18',
}

export function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name] || paths.spark} />
    </svg>
  )
}
