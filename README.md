# React DatePicker Plugin [![npm version](https://img.shields.io/npm/v/@aalexandree-g/hrnet-plugin-datepicker)](https://www.npmjs.com/package/@aalexandree-g/hrnet-plugin-datepicker)

A **custom React DatePicker** built for the **HRnet project (OpenClassrooms)**.  
This package replaces a legacy jQuery datepicker with a modern, reusable and lightweight React component.

Built with **Pikaday** and **Moment.js**, it offers an easy integration and full compatibility with modern React projects.

## Installation

Using npm :

```bash
npm install @aalexandree-g/hrnet-plugin-datepicker
```

Using yarn :

```bash
yarn add @aalexandree-g/hrnet-plugin-datepicker
```

## Basic usage (with state)

```js
import { useState } from 'react'
import DatePicker from '@aalexandree-g/hrnet-plugin-datepicker'

export default function Example() {
  const [date, setDate] = useState(null)

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      format="DD/MM/YYYY"
      placeholder="Pick a date"
    />
  )
}
```

| Prop        | Type     | Default       | Description                     |
| ----------- | -------- | ------------- | ------------------------------- |
| value       | Date     | null          | Selected date                   |
| onChange    | Function | —             | Triggered when the date changes |
| format      | string   | "DD/MM/YYYY"  | Display format                  |
| placeholder | string   | "Pick a date" | Input placeholder               |
