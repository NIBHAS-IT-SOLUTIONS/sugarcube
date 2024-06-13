import React from 'react'
import Header from './Header'
import './Home.css'

function Home() {
  return (
    <div className='px-3'>

      <div className='container-fluid'>
        <div className='row g-5 my-2'>

          <div className='col-md-3 p-5'>
            <div className='p-3 bg-info shadow-sm d-flex justify-content-around align-items rounded cursor-pointer'>
              <div>
                <h3 className='fs-2'>230</h3>
                <p className='fs-5 text-light'>All Products</p>
              </div>
              <i className='bi bi-cart-plus p-3 fs-1 text-light'></i>
            </div>
          </div>

          <div className='col-md-3 p-5'>
            <div className='p-3 bg-warning shadow-sm d-flex justify-content-around align-items rounded cursor-pointer'>
              <div>
                <h3 className='fs-2'>230</h3>
                <p className='fs-5 text-light'>View a product</p>
              </div>
              <i className='bi bi-eye p-3 fs-2 text-light'></i>
            </div>
          </div>


          <div className='col-md-3 p-5'>
            <div className='p-3 bg-success shadow-sm d-flex justify-content-around align-items rounded cursor-pointer'>
              <div>
                <h3 className='fs-2'>230</h3>
                <p className='fs-5 text-light'>Add products</p>
              </div>
              <i className='bi bi-plus-square p-3 fs-2 text-light'></i>
            </div>
          </div>

          <div className='col-md-3 p-5'>
            <div className='p-3 bg-danger shadow-sm d-flex justify-content-around align-items rounded cursor-pointer'>
              <div>
                <h3 className='fs-2'>230</h3>
                <p className='fs-5 text-light'>Delete Products</p>
              </div>
              <i className='bi bi-trash3-fill p-3 fs-2 text-light'></i>
            </div>
          </div>



          <table class="table table-dark table-hover caption-top w-75 container">
            <caption className='text-white fs-4'>Recent orders</caption>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone number</th>
                <th scope="col">Item</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>1212121212</td>
                <td>Regular burger</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>6161616161</td>
                <td>Vanilla Shake</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Tom</td>
                <td>9191919191</td>
                <td>Chocolate Shake</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Home



// import React from 'react'
// import './Home.css'
// import { BsPlusSquareFill, BsFillPenFill, BsFillTrashFill } from 'react-icons/bs'
// import {LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// function Home() {
//   const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];




//   return (
//     <main className='main-container'>
//       <div className='main-title'>
//         <h3>DASHBOARD</h3>
//       </div>

//       <div className='main-cards'>
//         {/* 1 */}
//         <div className="card">
//           <div className='card-inner'>
//             <h3>ADD PRODUCT</h3>
//             <BsPlusSquareFill className='card_icon' />
//           </div>
//           <h1>300</h1>
//         </div>
//         {/* 2 */}

//         <div className="card">
//           <div className='card-inner'>
//             <h3>EDIT PRODUCT</h3>
//             <BsFillPenFill className='card_icon' />
//           </div>
//           <h1>300</h1>
//         </div>
//         {/* 3 */}

//         <div className="card">
//           <div className='card-inner'>
//             <h3>DELETE PRODUCT</h3>
//             <BsFillTrashFill className='card_icon' />
//           </div>
//           <h1>300</h1>
//         </div>

//       </div>



//       {/* Chart1 */}
//       <div className='charts'>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
//             <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
//           </BarChart>
//         </ResponsiveContainer>


//         {/* chart 2 */}
//         <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>


//       </div>



//     </main>
//   )
// }

// export default Home