import { useState } from 'react'
import './assets/Tailwind.css'

function App() {

  return (
    <div className="App">

      <button className="btn btn-primary">+   Tambah</button>


      <div className="dropdown">
        <label tabIndex={0} className="btn m-1 btn-primary">Click  </label>
        <ul tabIndex={0} className="dropdown-content menu shadow  rounded-box w-52 ">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>

      </div>

      <label htmlFor="my-modal-4" className="btn modal-button btn-primary ">open modal</label>


      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">

        <label className="modal-box relative" for="">
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action ">
            <label htmlFor="my-modal-4" className="btn  ">Yay!</label>
          </div>
        </label>
      </label>

    </div>

  )
}

export default App
