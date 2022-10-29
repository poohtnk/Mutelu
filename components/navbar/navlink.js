import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

export { NavLink }

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool,
}

NavLink.defaultProps = {
    exact: false,
}

function NavLink({ href, exact, children, ...props }) {
    const pathname = useRouter().pathname
    console.log(pathname, href)
    return (
        <Link href={href}>
            <a className={pathname === href ? 'active' : 'non-active'}>
                {children}
            </a>
        </Link>
    )
}
