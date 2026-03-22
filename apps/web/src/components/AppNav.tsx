import { NavLink } from 'react-router-dom'

export function AppNav(){
    return(
        <nav className="flex flex-wrap gap-3">
        <NavLink
          to="/"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/programselection"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900"
        >
          Program Selection
        </NavLink>
        <NavLink
          to="/testpage"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900"
        >
          Test Page
        </NavLink>
      </nav>
    )
}