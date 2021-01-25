import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Preguntas Frecuentes</Link>          
        </li>
        <li>
          <Link to="#0">Soporte</Link>          
        </li>
        <li>
          <Link to="#0">Términos y Condiciones</Link>        
        </li>
        <li>
          <Link to="#0">Políticas y Privacidad</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;