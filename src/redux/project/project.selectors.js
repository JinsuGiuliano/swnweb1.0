import { createSelector } from 'reselect';

const selectProject = state => state.project;

export const selectProjectSections = createSelector(
  [selectProject],
  project => project.projects
);


