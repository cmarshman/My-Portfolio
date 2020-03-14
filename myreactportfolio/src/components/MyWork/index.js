import React from 'react';

function MyWork() {
    return (
        <section>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box notification is-light">
                <a href="https://www.linkedin.com/in/cory-marshman-6aba24152/" id="external-links" target="_blank">
                  <p class="subtitle has-text-centered">
                    <i class="fab fa-linkedin fa-7x"></i><br/>LinkedIn
                  </p>
                </a>
              </article>
            </div>
          <div class="tile is-parent">
              <article class="tile is-child box notification is-light">
                <a href="https://github.com/cmarshman" id="external-links" target="_blank">
                  <p class="subtitle has-text-centered">
                    <i class="fab fa-github-square fa-7x"></i><br/>GitHub</p>
                </a>
              </article>
          </div>
            <div class="tile is-parent">
              <article class="tile is-child box notification is-light">
                <a href="assets/images/Cory_Marshman.pdf" id="external-links" target="_blank">
                  <p class="subtitle has-text-centered">
                    <i class="fas fa-file-alt fa-7x"></i><br/>Resume</p>
                </a>
              </article>
            </div>
        </div>
        </section>
    )
}

export default MyWork;