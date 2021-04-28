import { useState } from 'react'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'

import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ExplorerSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
}

const ExploreSidebar = ({
  items,
  initialValues = {}
}: ExplorerSidebarProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [values, setValues] = useState(initialValues)

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]} // [{windows: true}]
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === values[item.name]}
              />
            ))}
        </div>
      ))}

      <Button fullWidth size="medium">
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
