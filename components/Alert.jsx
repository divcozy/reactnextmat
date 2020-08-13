import theme from '../styles/theme'

const Alert = (props) => {
  return (
    <div className="alert">
      {props.children}
      <style jsx>{`
        .alert {
          display: inline-block;
          padding: 20px;
          border-radius: 8px;
        }
      `}</style>
      <style jsx>{`
        .alert {
          background: ${props.type == 'warning'
          ? theme.colors.warning
          : theme.colors.light};
        }
      `}</style>
    </div>
  )
}
export default Alert
