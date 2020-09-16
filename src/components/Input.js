import React from 'react'

export default function Input() {
  return (
    <form>
      <input required placeholder="Ваше имя"></input>
      <input required placeholder="Ваш комментарий"></input>
      <button>Оставить комментарий</button>
    </form>
  )
}
