// src/components/Breadcrumb.js
import React from "react"
import { Link } from "gatsby"
import './styles.scss'

export interface Crumb {
    text: string
    link?: string
  }
  
  interface BreadcrumbProps {
    crumbs: Crumb[]
  }

  const Breadcrumbs: React.FC<BreadcrumbProps> = ({ crumbs }) => {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs-list">
          {crumbs.map((crumb, index) => (
            <li key={index} className="breadcrumbs-item">
              {index > 0 && <span className="breadcrumbs-divider"> &gt; </span>}
              {crumb.link ? (
                <Link to={crumb.link} className="breadcrumbs-link">
                  {crumb.text}
                </Link>
              ) : (
                <span className="breadcrumbs-text">
                  {crumb.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Breadcrumbs
