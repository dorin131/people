import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fromEvent, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import './PeopleGraph.css';
import Graph from '../../services/Graph/Graph';

function useWindowResize(people) {
  useEffect(() => {
    const handleResize = () => {
      Graph().draw(people);
    };

    const event = fromEvent(window, 'resize').pipe(debounce(() => timer(1000)));

    const subscription = event.subscribe(handleResize);

    return () => subscription.unsubscribe();
  });
}

function usePeopleUpdate(people) {
  useEffect(() => {
    if (people.length) {
      Graph().draw(people);
    }
  }, [people]);
}

export default function PeopleGraph(props) {
  const { people } = props;
  usePeopleUpdate(people);
  useWindowResize(people);

  return (
    <div className="people-graph">
      <h1>Graph</h1>
      <svg />
    </div>
  );
}

PeopleGraph.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};
