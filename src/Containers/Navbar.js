import React from "react";

export const Navbar = () => {
  return (
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <span className="title is-3 is-white"  style={{color: 'white'}} >Proyecto 2</span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
          
        <div class="navbar-start">
          <span href="#" class="navbar-item">
            Recomendación de juegos
          </span>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Juegos</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
