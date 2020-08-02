import React from 'react';

export function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
               Mykhailo Moshchovskyi
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API
            <a
              href="https://www.themoviedb.org/?language=uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

