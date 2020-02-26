import React from 'react';

function Modals () {
    return (
        <div className="modal" id="projectDisplay">
        <div className="modal-background close-modal"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title pride" id="displayName"></p>
            <button className="delete close-modal" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <div className="content has-text-centered">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-dark">
                        <a id="displayURL" target="_blank"></a>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-dark">
                        <a id="displayURL2" target="_blank"></a>
                      </article>
                    </div>
                 </div>
                 <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box notification is-dark">
                            <h5 className="sub">Description</h5>
                            <p id="description"></p>
                            <br/>
                            <h5 className="sub">Development</h5>
                            <p id="development"></p>
                        </article>
                    </div>
                 </div>
                 <h4>Screen Shots</h4>
                 <img className="img1"></img>
                 <img className="img2"></img>
                 <img className="img3"></img>
                 <img className="img4"></img>
                </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button close-modal">Close</button>
          </footer>
        </div>
      </div>
    );
}

export default Modals;