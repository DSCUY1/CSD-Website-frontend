import React from 'react';
import Event from './event';
import UsefullLink from './usefullLink';
import Link from 'next/link';

function EventLink({ events }) {
  return (
    <div className="row events-links d-flex">
      <div className="col-md-6 events">
        <div className="card" style={{ height: "100%" }}>
          <div className="card-header events-header">
            <h5>Nos évènements</h5>
          </div>
          <div className="card-body events-body">

            <Event event={events[0]} />
            <Event event={events[0]} />
            <Event event={events[0]} />

           </div>

          <div className="card-footer events-footer">
            <Link href="/evenements"><a className="btn link_btn events-btn" tabIndex={-1} role="button" aria-disabled="true">Tous nos évènements  <span>&rarr;</span></a></Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 links">
        <UsefullLink />
      </div>
    </div>
  );
}

export default EventLink;
