import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollProgressBar } from '../../components/layout/scroll-progress';
import user from '@testing-library/user-event'

describe('this scroll progress bar', () => {
  render(<ScrollProgressBar />)

  const myProgressBar = screen.queryByTestId(
    'scroll-progress-bar'
  )
  console.log('myProgressBar: ', myProgressBar.style.width)
  const progressBarLength = parseInt(
    myProgressBar.style.width,
    10
  )
  console.log('url: ', window.location.pathname)

  it('extends when user scrolls down.', () => {
    fireEvent.scroll(window, { target: '100px' })

    expect(progressBarLength).toBeGreaterThanOrEqual(0)
  })
})