import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>This is app</h1>
      {/* App */}

      <div>
        {/* User Index */}
        <Outlet />

        <div>
          {/* Contact */}
        </div>
        <div>
          {/* About */}
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
