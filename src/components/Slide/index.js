import React, { useEffect } from 'react';
import $ from 'jquery';

function Slide () {
    
    useEffect(() => {
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        })
    })

    return(
        <a href="#about_me">
            <i className="fas fa-arrow-down fa-3x" onClick={useEffect}></i>
        </a>
    );
}

export default Slide;