import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

export function AppNav() {
    const navLinkClasses = ({ isActive }: NavLinkRenderProps) =>
        `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isActive
            ? 'bg-slate-900 text-white'
            : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:border-slate-400'
        }`;
        
    return (
        <nav className="flex flex-wrap gap-3">
            <NavLink
                to="/"
                className={navLinkClasses}>
                Home
            </NavLink>

            <NavLink
                to="/programselection"
                className={navLinkClasses}> 
                Program Selection
            </NavLink>

            <NavLink
                to="/testpage"
                className={navLinkClasses}>            
                Test Page
            </NavLink>
        </nav>
    ) 
}