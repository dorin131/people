import React, { useEffect } from 'react';
import { fromEvent, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import './PeopleGraph.css';
import { Graph } from '../../services/Graph/Graph';

function useWindowResize(people) {
  useEffect(() => {
    const handleResize = () => {
      Graph().draw(people);
    }

    const event = fromEvent(window, 'resize').pipe(debounce(() => timer(1000)));

    const subscription = event.subscribe(handleResize);

    return () => subscription.unsubscribe();
  })
}

function usePeopleUpdate(people) {
  useEffect(() => {
    if (people.length) {
      Graph().draw(people);
    }
  }, [people]);
}

export function PeopleGraph(props) {
  usePeopleUpdate(props.people);
  useWindowResize(props.people);

  return (
    <div className="people-graph">
      <h1>Graph</h1>
      <svg />
    </div>
  )
}