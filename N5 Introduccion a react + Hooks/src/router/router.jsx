import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { MainPage, Contact, AboutUs, ErrorPage, DinamicPage, ShopPage } from '../pages'

export const RouterComponent = () => {
  return (
    <Router
    >
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
          errorElement={<ErrorPage />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
        <Route
          path="shop"
          element={<ShopPage />}>
          <Route
            path=":category"
            element={<DinamicPage />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

/*
export const RouterComponetTwo = () => {
const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/paginaDinamica/:id",
      element: <DinamicPage />,
      loader: async ({ params }) => {
        const { id } = params
        const response = await fetch(`https://fakestoreapi.com/products/category/${id}`)
        const data = await response.json();
        return data
      },
      action: ({ request }) => {
        console.log("Request", request)
        return null
      },
    },
  ])
  return <RouterProvider router={router} />
}
*/