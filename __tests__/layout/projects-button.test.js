import { getByTestId, render, screen } from '@testing-library/react'

import { ProjectsButton } from '../../components/layout/projects-button';
import { ProjectModal } from '../../components/layout/project-modal';

describe('My projects button', () => {
  test('render', () => {
    render(<ProjectsButton />)
  })
})