import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Basic', label: 'Basic' },
  { value: 'Stage 1', label: 'Stage 1' },
  { value: 'Stage 2', label: 'Stage 2' },
  { value: 'MEGA', label: 'MEGA' },
  { value: 'GX', label: 'GX' },
  { value: 'EX', label: 'EX' }
]

const Stages = () => (
  <Select options={options}
  placeholder="Select Stage"
  />
)

export default Stages