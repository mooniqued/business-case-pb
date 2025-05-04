import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import InputField from '../../src/components/InputField'

describe('InputField', () => {
  it('render correctly', () => {
    render(<InputField label="Nome" />)
    expect(screen.getByText('Nome')).toBeInTheDocument()
  })

  it('renders placeholder and allows typing', async () => {
    const user = userEvent.setup()
    render(<InputField label="Nome" placeholder="Digite seu nome" />)

    const input = screen.getByPlaceholderText('Digite seu nome')
    expect(input).toBeInTheDocument()

    await user.type(input, 'Monique Domingues')
    expect(input).toHaveValue('Monique Domingues')
  })
})