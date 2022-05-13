import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function NavBar(): JSX.Element {

    return (
        <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>DSMovie</h1>
            <a href="https://github.com/GuilhermeAquinoDB/dsmovie">
              <div className='dsmovie-contact-container'>
                <GithubIcon />
                <p className='dsmovie-contact-link'>/devsuperior</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    )
}

export default NavBar;