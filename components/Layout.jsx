
import globalStyles from '../styles/global.js'
// import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div className="page-layout">
      {/* <Sidebar /> */}

      {props.children}

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

export default Layout